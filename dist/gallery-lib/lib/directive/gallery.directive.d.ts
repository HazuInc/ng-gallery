import { ElementRef, Renderer2, OnInit } from '@angular/core';
import { GalleryService } from '../service/gallery.service';
export declare class GalleryDirective implements OnInit {
    el: ElementRef;
    renderer: Renderer2;
    gallery: GalleryService;
    content: string;
    srcList: string[];
    gallerize: string;
    exclude: string;
    subtree: string;
    filter: Function;
    constructor(el: ElementRef, renderer: Renderer2, gallery: GalleryService);
    ngOnInit(): void;
}
