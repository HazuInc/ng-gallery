import { ElementRef, Renderer2, OnInit } from '@angular/core';
import { GalleryService } from '../service/gallery.service';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/finally';
export declare class GalleryDirective implements OnInit {
    el: ElementRef;
    renderer: Renderer2;
    gallery: GalleryService;
    content: string;
    srcList: string[];
    gallerize: string;
    subtree: string;
    filter: Function;
    constructor(el: ElementRef, renderer: Renderer2, gallery: GalleryService);
    ngOnInit(): void;
}
