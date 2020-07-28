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
var GalleryDirective = /** @class */ (function () {
    function GalleryDirective(el, renderer, gallery) {
        this.el = el;
        this.renderer = renderer;
        this.gallery = gallery;
        this.srcList = [];
        this.subtree = '';
    }
    /**
     * @return {?}
     */
    GalleryDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var target = this.el.nativeElement;
        /** @type {?} */
        var updateGallery = (/**
         * @return {?}
         */
        function () {
            // skip if content is the same 
            if (!target || (_this.content && _this.content === target.innerText)) {
                return;
            }
            else {
                _this.content = target.innerText;
            }
            /** @type {?} */
            var images = [];
            // get all img elements from content
            /** @type {?} */
            var imageElements = target.querySelectorAll(_this.subtree + (" img" + _this.gallerize));
            if (!imageElements || !imageElements.length) {
                _this.srcList = [];
                return;
            }
            /** @type {?} */
            var srcs = Array.from(imageElements).map((/**
             * @param {?} elem
             * @return {?}
             */
            function (elem) {
                return elem.dataset && elem.dataset.originalImageUrl ? elem.dataset.originalImageUrl : elem.src;
            }))
            //let srcs = pluck(imageElements, 'src');
            ;
            //let srcs = pluck(imageElements, 'src');
            /** @type {?} */
            var isSame = isEqual(_this.srcList, srcs);
            _this.srcList = srcs;
            from(imageElements).pipe(map((/**
             * @param {?} img
             * @param {?} i
             * @return {?}
             */
            function (img, i) {
                // add click event to the images
                /** @type {?} */
                var src = img.dataset && img.dataset.originalImageUrl ? img.dataset.originalImageUrl : img.src;
                _this.renderer.setStyle(img, 'cursor', 'pointer');
                if (!_this.filter || _this.filter(img)) {
                    _this.renderer.setProperty(img, 'onclick', (/**
                     * @return {?}
                     */
                    function () {
                        if (_this.srcList.indexOf(src) !== -1) {
                            _this.gallery.set(i);
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
            function () {
                if (!isSame) {
                    _this.gallery.load(images);
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
    };
    GalleryDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[gallerize]'
                },] }
    ];
    /** @nocollapse */
    GalleryDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: GalleryService }
    ]; };
    GalleryDirective.propDecorators = {
        gallerize: [{ type: Input }],
        exclude: [{ type: Input }],
        subtree: [{ type: Input }],
        filter: [{ type: Input }]
    };
    return GalleryDirective;
}());
export { GalleryDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nYWxsZXJ5LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmUvZ2FsbGVyeS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2hGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUU1RCxPQUFPLEVBQUUsT0FBTyxFQUFTLE1BQU0sZ0JBQWdCLENBQUM7QUFFaEQsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1QixPQUFPLEVBQUUsR0FBRyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRS9DO0lBY0UsMEJBQW1CLEVBQWMsRUFBUyxRQUFtQixFQUFTLE9BQXVCO1FBQTFFLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBUyxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBQVMsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFQN0YsWUFBTyxHQUFhLEVBQUUsQ0FBQztRQUlkLFlBQU8sR0FBVyxFQUFFLENBQUM7SUFJOUIsQ0FBQzs7OztJQUVELG1DQUFROzs7SUFBUjtRQUFBLGlCQThEQzs7WUE3REssTUFBTSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYTs7WUFHOUIsYUFBYTs7O1FBQUc7WUFFbEIsK0JBQStCO1lBQy9CLElBQUksQ0FBQyxNQUFNLElBQUksQ0FBQyxLQUFJLENBQUMsT0FBTyxJQUFJLEtBQUksQ0FBQyxPQUFPLEtBQUssTUFBTSxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUNsRSxPQUFPO2FBQ1I7aUJBQ0k7Z0JBQ0gsS0FBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDO2FBQ2pDOztnQkFFSyxNQUFNLEdBQW1CLEVBQUU7OztnQkFHM0IsYUFB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QUMzQixtQ0FBeUI7O0lBQ3pCLG1DQUE4Qjs7SUFDOUIsa0NBQTBCOztJQUVkLDhCQUFxQjs7SUFBRSxvQ0FBMEI7O0lBQUUsbUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgR2FsbGVyeVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2dhbGxlcnkuc2VydmljZSc7XHJcbmltcG9ydCB7IEdhbGxlcnlJbWFnZSB9IGZyb20gJy4uL3NlcnZpY2UvZ2FsbGVyeS5zdGF0ZSc7XHJcbmltcG9ydCB7IGlzRXF1YWwsIHBsdWNrIH0gZnJvbSAnLi4vdXRpbHMvaW5kZXgnO1xyXG5cclxuaW1wb3J0IHsgZnJvbSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBtYXAsIGZpbmFsaXplIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbZ2FsbGVyaXplXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIEdhbGxlcnlEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAvLyBBIGZsYWcgdG8gY2hlY2sgaWYgY29udGVudCBoYXMgY2hhbmdlZFxyXG4gIGNvbnRlbnQ6IHN0cmluZztcclxuICBzcmNMaXN0OiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICBASW5wdXQoKSBnYWxsZXJpemU6IHN0cmluZztcclxuICBASW5wdXQoKSBleGNsdWRlOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgc3VidHJlZTogc3RyaW5nID0gJyc7XHJcbiAgQElucHV0KCkgZmlsdGVyOiBGdW5jdGlvbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGVsOiBFbGVtZW50UmVmLCBwdWJsaWMgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHVibGljIGdhbGxlcnk6IEdhbGxlcnlTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGxldCB0YXJnZXQgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XHJcblxyXG5cclxuICAgIHZhciB1cGRhdGVHYWxsZXJ5ID0gKCkgPT4ge1xyXG5cclxuICAgICAgLy8gc2tpcCBpZiBjb250ZW50IGlzIHRoZSBzYW1lIFxyXG4gICAgICBpZiAoIXRhcmdldCB8fCAodGhpcy5jb250ZW50ICYmIHRoaXMuY29udGVudCA9PT0gdGFyZ2V0LmlubmVyVGV4dCkpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gdGFyZ2V0LmlubmVyVGV4dDtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgaW1hZ2VzOiBHYWxsZXJ5SW1hZ2VbXSA9IFtdO1xyXG5cclxuICAgICAgLy8gZ2V0IGFsbCBpbWcgZWxlbWVudHMgZnJvbSBjb250ZW50XHJcbiAgICAgIGNvbnN0IGltYWdlRWxlbWVudHMgPSB0YXJnZXQucXVlcnlTZWxlY3RvckFsbCh0aGlzLnN1YnRyZWUgKyBgIGltZyR7dGhpcy5nYWxsZXJpemV9YClcclxuXHJcbiAgICAgIGlmICghaW1hZ2VFbGVtZW50cyB8fCAhaW1hZ2VFbGVtZW50cy5sZW5ndGgpIHtcclxuICAgICAgICB0aGlzLnNyY0xpc3QgPSBbXTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBzcmNzID0gQXJyYXkuZnJvbShpbWFnZUVsZW1lbnRzKS5tYXAoKGVsZW06IEhUTUxJbWFnZUVsZW1lbnQpID0+IHtcclxuICAgICAgICByZXR1cm4gZWxlbS5kYXRhc2V0ICYmIGVsZW0uZGF0YXNldC5vcmlnaW5hbEltYWdlVXJsID8gZWxlbS5kYXRhc2V0Lm9yaWdpbmFsSW1hZ2VVcmwgOiBlbGVtLnNyY1xyXG4gICAgICB9KVxyXG4gICAgICAvL2xldCBzcmNzID0gcGx1Y2soaW1hZ2VFbGVtZW50cywgJ3NyYycpO1xyXG4gICAgICBsZXQgaXNTYW1lID0gaXNFcXVhbCh0aGlzLnNyY0xpc3QsIHNyY3MpO1xyXG4gICAgICB0aGlzLnNyY0xpc3QgPSBzcmNzO1xyXG4gICAgICBmcm9tKGltYWdlRWxlbWVudHMpLnBpcGUobWFwKChpbWc6IEhUTUxJbWFnZUVsZW1lbnQsIGkpID0+IHtcclxuICAgICAgICAvLyBhZGQgY2xpY2sgZXZlbnQgdG8gdGhlIGltYWdlc1xyXG4gICAgICAgIGxldCBzcmMgPSBpbWcuZGF0YXNldCAmJiBpbWcuZGF0YXNldC5vcmlnaW5hbEltYWdlVXJsID8gaW1nLmRhdGFzZXQub3JpZ2luYWxJbWFnZVVybCA6IGltZy5zcmM7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShpbWcsICdjdXJzb3InLCAncG9pbnRlcicpO1xyXG4gICAgICAgIGlmICghdGhpcy5maWx0ZXIgfHwgdGhpcy5maWx0ZXIoaW1nKSkge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eShpbWcsICdvbmNsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zcmNMaXN0LmluZGV4T2Yoc3JjKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICB0aGlzLmdhbGxlcnkuc2V0KGkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjcmVhdGUgYW4gaW1hZ2UgaXRlbVxyXG4gICAgICAgIGltYWdlcy5wdXNoKHtcclxuICAgICAgICAgIHNyYzogc3JjLFxyXG4gICAgICAgICAgdGV4dDogaW1nLmFsdFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KSxcclxuICAgICAgICBmaW5hbGl6ZSgoKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIWlzU2FtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmdhbGxlcnkubG9hZChpbWFnZXMpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkpXHJcbiAgICAgICAgLnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gICAgLy8gY3JlYXRlIGFuIG9ic2VydmVyIGluc3RhbmNlXHJcbiAgICB2YXIgb2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih1cGRhdGVHYWxsZXJ5KTtcclxuXHJcbiAgICB2YXIgY29uZmlnID0geyBzdWJ0cmVlOiB0cnVlLCBjaGlsZExpc3Q6IHRydWUgfVxyXG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZSh0YXJnZXQsIGNvbmZpZyk7XHJcbiAgICB1cGRhdGVHYWxsZXJ5KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==