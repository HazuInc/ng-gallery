import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';
import { GalleryService } from '../service/gallery.service';
import { GalleryImage } from '../service/gallery.state';
import { isEqual, pluck } from '../utils/index';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';

@Directive({
  selector: '[gallerize]'
})
export class GalleryDirective implements OnInit {

  // A flag to check if content has changed
  content: string;
  srcList: string[] = [];

  @Input() gallerize: string;
  @Input() subtree: string = '';
  @Input() filter: Function;

  constructor(public el: ElementRef, public renderer: Renderer2, public gallery: GalleryService) {
  }

  ngOnInit() {
    let target = this.el.nativeElement;


    var updateGallery = () => {

      // skip if content is the same 
      if (!target || (this.content && this.content === target.innerText)) {
        return;
      }
      else {
        this.content = target.innerText;
      }

      const images: GalleryImage[] = [];
      const classes = (this.gallerize) ? this.gallerize.split(' ').map((className) => '.' + className) : '';

      // get all img elements from content
      const imageElements = target.querySelectorAll(this.subtree + ` img${classes}`)

      if (!imageElements || !imageElements.length) {
        this.srcList = [];
        return;
      }

      let srcs = pluck(imageElements, 'src');

      // skip if urls same 
      if (isEqual(this.srcList, srcs)) {
        Observable.from(imageElements).map((img: HTMLImageElement, i) => {
          // add click event to the images
          this.renderer.setStyle(img, 'cursor', 'pointer');
          if (!this.filter || this.filter(img)) {
            this.renderer.setProperty(img, 'onclick', () => {
              if (this.srcList.indexOf(img.src) !== -1) {
                this.gallery.set(i);
              }
  
            });
          }
        });
        
        return;
      }

      this.srcList = srcs;

      Observable.from(imageElements).map((img: HTMLImageElement, i) => {
        // add click event to the images
        this.renderer.setStyle(img, 'cursor', 'pointer');
        if (!this.filter || this.filter(img)) {
          this.renderer.setProperty(img, 'onclick', () => {
            if (this.srcList.indexOf(img.src) !== -1) {
              this.gallery.set(i);
            }

          });
        }

        // create an image item
        images.push({
          src: img.src,
          text: img.alt
        });
      })
        .finally(() => this.gallery.load(images))
        .subscribe();


    }
    // create an observer instance
    var observer = new MutationObserver(updateGallery);

    var config = { subtree: true, childList: true }
    observer.observe(target, config);
    updateGallery();
  }
}
