/**
 * @fileoverview added by tsickle
 * Generated from: lib/directive/gallery.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import { GalleryService } from '../service/gallery.service';
import { isEqual } from '../utils/index';
import { from } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
export class GalleryDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} gallery
     */
    constructor(el, renderer, gallery) {
        this.el = el;
        this.renderer = renderer;
        this.gallery = gallery;
        this.srcList = [];
        this.subtree = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        let target = this.el.nativeElement;
        /** @type {?} */
        var updateGallery = (/**
         * @return {?}
         */
        () => {
            // skip if content is the same 
            if (!target || (this.content && this.content === target.innerText)) {
                return;
            }
            else {
                this.content = target.innerText;
            }
            /** @type {?} */
            const images = [];
            // get all img elements from content
            /** @type {?} */
            const imageElements = target.querySelectorAll(this.subtree + ` img${this.gallerize}`);
            if (!imageElements || !imageElements.length) {
                this.srcList = [];
                return;
            }
            /** @type {?} */
            let srcs = Array.from(imageElements).map((/**
             * @param {?} elem
             * @return {?}
             */
            (elem) => {
                return elem.dataset && elem.dataset.originalImageUrl ? elem.dataset.originalImageUrl : elem.src;
            }))
            //let srcs = pluck(imageElements, 'src');
            ;
            //let srcs = pluck(imageElements, 'src');
            /** @type {?} */
            let isSame = isEqual(this.srcList, srcs);
            this.srcList = srcs;
            from(imageElements).pipe(map((/**
             * @param {?} img
             * @param {?} i
             * @return {?}
             */
            (img, i) => {
                // add click event to the images
                /** @type {?} */
                let src = img.dataset && img.dataset.originalImageUrl ? img.dataset.originalImageUrl : img.src;
                this.renderer.setStyle(img, 'cursor', 'pointer');
                if (!this.filter || this.filter(img)) {
                    this.renderer.setProperty(img, 'onclick', (/**
                     * @return {?}
                     */
                    () => {
                        if (this.srcList.indexOf(src) !== -1) {
                            this.gallery.set(i);
                        }
                    }));
                }
                // create an image item
                images.push({
                    src: src,
                    text: img.alt
                });
            })), finalize((/**
             * @return {?}
             */
            () => {
                if (!isSame) {
                    this.gallery.load(images);
                }
            })))
                .subscribe();
        })
        // create an observer instance
        ;
        // create an observer instance
        /** @type {?} */
        var observer = new MutationObserver(updateGallery);
        /** @type {?} */
        var config = { subtree: true, childList: true };
        observer.observe(target, config);
        updateGallery();
    }
}
GalleryDirective.decorators = [
    { type: Directive, args: [{
                selector: '[gallerize]'
            },] }
];
/** @nocollapse */
GalleryDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: GalleryService }
];
GalleryDirective.propDecorators = {
    gallerize: [{ type: Input }],
    exclude: [{ type: Input }],
    subtree: [{ type: Input }],
    filter: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    GalleryDirective.prototype.content;
    /** @type {?} */
    GalleryDirective.prototype.srcList;
    /** @type {?} */
    GalleryDirective.prototype.gallerize;
    /** @type {?} */
    GalleryDirective.prototype.exclude;
    /** @type {?} */
    GalleryDirective.prototype.subtree;
    /** @type {?} */
    GalleryDirective.prototype.filter;
    /** @type {?} */
    GalleryDirective.prototype.el;
    /** @type {?} */
    GalleryDirective.prototype.renderer;
    /** @type {?} */
    GalleryDirective.prototype.gallery;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nYWxsZXJ5LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmUvZ2FsbGVyeS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsT0FBTyxFQUFTLE1BQU0sZ0JBQWdCLENBQUM7QUFFaEQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1QixPQUFPLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSy9DLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7OztJQVczQixZQUFtQixFQUFjLEVBQVMsUUFBbUIsRUFBUyxPQUF1QjtRQUExRSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVMsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFTLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBUDdGLFlBQU8sR0FBYSxFQUFFLENBQUM7UUFJZCxZQUFPLEdBQVcsRUFBRSxDQUFDO0lBSTlCLENBQUM7Ozs7SUFFRCxRQUFROztZQUNGLE1BQU0sR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWE7O1lBRzlCLGFBQWE7OztRQUFHLEdBQUcsRUFBRTtZQUV2QiwrQkFBK0I7WUFDL0IsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxNQUFNLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ2xFLE9BQU87YUFDUjtpQkFDSTtnQkFDSCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7YUFDakM7O2tCQUVLLE1BQU0sR0FBbUIsRUFBRTs7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Qjs7SUFDM0IsbUNBQXlCOztJQUN6QixtQ0FBOEI7O0lBQzlCLGtDQUEwQjs7SUFFZCw4QkFBcUI7O0lBQUUsb0NBQTBCOztJQUFFLG1DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEdhbGxlcnlTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9nYWxsZXJ5LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5SW1hZ2UgfSBmcm9tICcuLi9zZXJ2aWNlL2dhbGxlcnkuc3RhdGUnO1xyXG5pbXBvcnQgeyBpc0VxdWFsLCBwbHVjayB9IGZyb20gJy4uL3V0aWxzL2luZGV4JztcclxuXHJcbmltcG9ydCB7IGZyb20gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgbWFwLCBmaW5hbGl6ZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW2dhbGxlcml6ZV0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5RGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgLy8gQSBmbGFnIHRvIGNoZWNrIGlmIGNvbnRlbnQgaGFzIGNoYW5nZWRcclxuICBjb250ZW50OiBzdHJpbmc7XHJcbiAgc3JjTGlzdDogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgQElucHV0KCkgZ2FsbGVyaXplOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgZXhjbHVkZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIHN1YnRyZWU6IHN0cmluZyA9ICcnO1xyXG4gIEBJbnB1dCgpIGZpbHRlcjogRnVuY3Rpb247XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBlbDogRWxlbWVudFJlZiwgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHB1YmxpYyBnYWxsZXJ5OiBHYWxsZXJ5U2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBsZXQgdGFyZ2V0ID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xyXG5cclxuXHJcbiAgICB2YXIgdXBkYXRlR2FsbGVyeSA9ICgpID0+IHtcclxuXHJcbiAgICAgIC8vIHNraXAgaWYgY29udGVudCBpcyB0aGUgc2FtZSBcclxuICAgICAgaWYgKCF0YXJnZXQgfHwgKHRoaXMuY29udGVudCAmJiB0aGlzLmNvbnRlbnQgPT09IHRhcmdldC5pbm5lclRleHQpKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY29udGVudCA9IHRhcmdldC5pbm5lclRleHQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGltYWdlczogR2FsbGVyeUltYWdlW10gPSBbXTtcclxuXHJcbiAgICAgIC8vIGdldCBhbGwgaW1nIGVsZW1lbnRzIGZyb20gY29udGVudFxyXG4gICAgICBjb25zdCBpbWFnZUVsZW1lbnRzID0gdGFyZ2V0LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zdWJ0cmVlICsgYCBpbWcke3RoaXMuZ2FsbGVyaXplfWApXHJcblxyXG4gICAgICBpZiAoIWltYWdlRWxlbWVudHMgfHwgIWltYWdlRWxlbWVudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgdGhpcy5zcmNMaXN0ID0gW107XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgc3JjcyA9IEFycmF5LmZyb20oaW1hZ2VFbGVtZW50cykubWFwKChlbGVtOiBIVE1MSW1hZ2VFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGVsZW0uZGF0YXNldCAmJiBlbGVtLmRhdGFzZXQub3JpZ2luYWxJbWFnZVVybCA/IGVsZW0uZGF0YXNldC5vcmlnaW5hbEltYWdlVXJsIDogZWxlbS5zcmNcclxuICAgICAgfSlcclxuICAgICAgLy9sZXQgc3JjcyA9IHBsdWNrKGltYWdlRWxlbWVudHMsICdzcmMnKTtcclxuICAgICAgbGV0IGlzU2FtZSA9IGlzRXF1YWwodGhpcy5zcmNMaXN0LCBzcmNzKTtcclxuICAgICAgdGhpcy5zcmNMaXN0ID0gc3JjcztcclxuICAgICAgZnJvbShpbWFnZUVsZW1lbnRzKS5waXBlKG1hcCgoaW1nOiBIVE1MSW1hZ2VFbGVtZW50LCBpKSA9PiB7XHJcbiAgICAgICAgLy8gYWRkIGNsaWNrIGV2ZW50IHRvIHRoZSBpbWFnZXNcclxuICAgICAgICBsZXQgc3JjID0gaW1nLmRhdGFzZXQgJiYgaW1nLmRhdGFzZXQub3JpZ2luYWxJbWFnZVVybCA/IGltZy5kYXRhc2V0Lm9yaWdpbmFsSW1hZ2VVcmwgOiBpbWcuc3JjO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoaW1nLCAnY3Vyc29yJywgJ3BvaW50ZXInKTtcclxuICAgICAgICBpZiAoIXRoaXMuZmlsdGVyIHx8IHRoaXMuZmlsdGVyKGltZykpIHtcclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkoaW1nLCAnb25jbGljaycsICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3JjTGlzdC5pbmRleE9mKHNyYykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5nYWxsZXJ5LnNldChpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIGFuIGltYWdlIGl0ZW1cclxuICAgICAgICBpbWFnZXMucHVzaCh7XHJcbiAgICAgICAgICBzcmM6IHNyYyxcclxuICAgICAgICAgIHRleHQ6IGltZy5hbHRcclxuICAgICAgICB9KTtcclxuICAgICAgfSksXHJcbiAgICAgICAgZmluYWxpemUoKCkgPT4ge1xyXG4gICAgICAgICAgaWYgKCFpc1NhbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5nYWxsZXJ5LmxvYWQoaW1hZ2VzKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pKVxyXG4gICAgICAgIC5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuICAgIC8vIGNyZWF0ZSBhbiBvYnNlcnZlciBpbnN0YW5jZVxyXG4gICAgdmFyIG9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIodXBkYXRlR2FsbGVyeSk7XHJcblxyXG4gICAgdmFyIGNvbmZpZyA9IHsgc3VidHJlZTogdHJ1ZSwgY2hpbGRMaXN0OiB0cnVlIH1cclxuICAgIG9ic2VydmVyLm9ic2VydmUodGFyZ2V0LCBjb25maWcpO1xyXG4gICAgdXBkYXRlR2FsbGVyeSgpO1xyXG4gIH1cclxufVxyXG4iXX0=