/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/gallery-thumb/gallery-thumb.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, ElementRef, Renderer2 } from '@angular/core';
import { get } from '../../utils/get';
import { GalleryService } from '../../service/gallery.service';
var GalleryThumbComponent = /** @class */ (function () {
    function GalleryThumbComponent(gallery, el, renderer) {
        this.gallery = gallery;
        this.el = el;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    GalleryThumbComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.contStyle = this.getContainerStyle();
        /** Enable gestures */
        if (this.gallery.config.gestures) {
            if (typeof Hammer === 'undefined') {
                throw Error('[NgGallery]: HammerJS is undefined, make sure it is loaded');
            }
            else {
                /** @type {?} */
                var el_1 = this.el.nativeElement;
                /** @type {?} */
                var mc = new Hammer(el_1);
                mc.on('panstart', (/**
                 * @return {?}
                 */
                function () {
                    _this.renderer.removeClass(el_1, 'g-pan-reset');
                }));
                mc.on('panend', (/**
                 * @return {?}
                 */
                function () {
                    _this.renderer.addClass(el_1, 'g-pan-reset');
                }));
                /** Pan left and right */
                mc.on('pan', (/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) {
                    _this.renderer.setStyle(el_1, 'transform', "translate3d(" + e.deltaX + "px, 0px, 0px)");
                }));
                /** Swipe next and prev */
                mc.on('swipeleft', (/**
                 * @return {?}
                 */
                function () {
                    _this.gallery.next();
                }));
                mc.on('swiperight', (/**
                 * @return {?}
                 */
                function () {
                    _this.gallery.prev();
                }));
            }
        }
    };
    /**
     * @return {?}
     */
    GalleryThumbComponent.prototype.translateThumbs = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var x = get(this.state, 'currIndex', 0) * get(this.config, 'width', 0) + get(this.config, 'width', 0) / 2;
        return "translate3d(" + -x + "px, 0, 0)";
    };
    /**
     * @return {?}
     */
    GalleryThumbComponent.prototype.getContainerStyle = /**
     * @return {?}
     */
    function () {
        /**
         * Set thumbnails position (top, bottom)
         * @type {?}
         */
        var order = this.config.position === 'top' ? 0 : 2;
        this.renderer.setStyle(this.el.nativeElement, 'order', order);
        return {
            height: this.config.height + 'px',
            margin: this.config.space + 'px'
        };
    };
    /**
     * @param {?} i
     * @return {?}
     */
    GalleryThumbComponent.prototype.getThumbImage = /**
     * @param {?} i
     * @return {?}
     */
    function (i) {
        /**
         * Use thumbnail if presented
         * @type {?}
         */
        var image = get(this.state, 'images', [])[i] || {};
        return "url(" + (image.thumbnail || image.src) + ")";
    };
    GalleryThumbComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gallery-thumb',
                    template: "<div #container class=\"g-thumb-container\" [ngStyle]=\"contStyle\">\r\n\r\n  <div class=\"g-thumbs\" [style.transform]=\"translateThumbs()\">\r\n\r\n    <div class=\"g-thumb\" *ngFor=\"let image of state.images; let i = index\"\r\n         [class.g-thumb-current]=\"i === state.currIndex\"\r\n         [style.width.px]=\"gallery.config.thumbnails.width\"\r\n         [style.height.px]=\"gallery.config.thumbnails.height\">\r\n\r\n      <div class=\"g-thumb-image\" [style.backgroundImage]=\"getThumbImage(i)\"\r\n           [tap] (tapClick)=\"gallery.set(i)\">\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{display:block;z-index:1}.g-thumb-container{position:relative;z-index:206;width:100%;height:100%;left:0;top:0;display:flex}.g-thumbs{position:absolute;top:0;left:50%;display:flex;align-items:center;transition:transform .3s ease-in;transform:translate3d(0,0,0)}.g-thumb{padding:8px;opacity:.5;transition:.2s linear}.g-thumb-image{cursor:pointer;width:100%;height:100%;background-position:center center;background-size:cover;box-shadow:0 0 4px rgba(0,0,0,.3)}.g-thumb-current{opacity:1;padding:2px}"]
                }] }
    ];
    /** @nocollapse */
    GalleryThumbComponent.ctorParameters = function () { return [
        { type: GalleryService },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    GalleryThumbComponent.propDecorators = {
        state: [{ type: Input }],
        config: [{ type: Input }]
    };
    return GalleryThumbComponent;
}());
export { GalleryThumbComponent };
if (false) {
    /** @type {?} */
    GalleryThumbComponent.prototype.state;
    /** @type {?} */
    GalleryThumbComponent.prototype.config;
    /** @type {?} */
    GalleryThumbComponent.prototype.contStyle;
    /** @type {?} */
    GalleryThumbComponent.prototype.gallery;
    /**
     * @type {?}
     * @private
     */
    GalleryThumbComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    GalleryThumbComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS10aHVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nYWxsZXJ5LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvZ2FsbGVyeS10aHVtYi9nYWxsZXJ5LXRodW1iLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQ2pFLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFNL0Q7SUFhRSwrQkFBbUIsT0FBdUIsRUFBVSxFQUFjLEVBQVUsUUFBbUI7UUFBNUUsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztJQUUvRixDQUFDOzs7O0lBRUQsd0NBQVE7OztJQUFSO1FBQUEsaUJBaUNDO1FBL0JDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFFMUMsc0JBQXNCO1FBQ3RCLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ2hDLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO2dCQUVqQyxNQUFNLEtBQUssQ0FBQyw0REFBNEQsQ0FBQyxDQUFDO2FBQzNFO2lCQUFNOztvQkFDQyxJQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhOztvQkFDMUIsRUFBRSxHQUFHLElBQUksTUFBTSxDQUFDLElBQUUsQ0FBQztnQkFFekIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVOzs7Z0JBQUU7b0JBQ2hCLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUUsRUFBRSxhQUFhLENBQUMsQ0FBQztnQkFDL0MsQ0FBQyxFQUFDLENBQUM7Z0JBQ0gsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFROzs7Z0JBQUU7b0JBQ2QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBRSxFQUFFLGFBQWEsQ0FBQyxDQUFDO2dCQUM1QyxDQUFDLEVBQUMsQ0FBQztnQkFFSCx5QkFBeUI7Z0JBQ3pCLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSzs7OztnQkFBRSxVQUFDLENBQU07b0JBQ2xCLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUUsRUFBRSxXQUFXLEVBQUUsaUJBQWUsQ0FBQyxDQUFDLE1BQU0sa0JBQWUsQ0FBQyxDQUFDO2dCQUNsRixDQUFDLEVBQUMsQ0FBQztnQkFDSCwwQkFBMEI7Z0JBQzFCLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVzs7O2dCQUFFO29CQUNqQixLQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN0QixDQUFDLEVBQUMsQ0FBQztnQkFDSCxFQUFFLENBQUMsRUFBRSxDQUFDLFlBQVk7OztnQkFBRTtvQkFDbEIsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQyxFQUFDLENBQUM7YUFDSjtTQUNGO0lBQ0gsQ0FBQzs7OztJQUVELCtDQUFlOzs7SUFBZjs7WUFDUSxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUMzRyxPQUFPLGlCQUFlLENBQUMsQ0FBQyxjQUFXLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELGlEQUFpQjs7O0lBQWpCOzs7OztZQUVRLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFOUQsT0FBTztZQUNMLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJO1lBQ2pDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJO1NBQ2pDLENBQUM7SUFDSixDQUFDOzs7OztJQUVELDZDQUFhOzs7O0lBQWIsVUFBYyxDQUFTOzs7OztZQUVqQixLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUU7UUFDbEQsT0FBTyxVQUFPLEtBQUssQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDLEdBQUcsT0FBRyxDQUFDO0lBQ2hELENBQUM7O2dCQXhFRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGVBQWU7b0JBQ3pCLDZuQkFBNkM7b0JBRTdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOztpQkFDaEQ7Ozs7Z0JBWFEsY0FBYztnQkFKc0IsVUFBVTtnQkFBRSxTQUFTOzs7d0JBa0IvRCxLQUFLO3lCQUNMLEtBQUs7O0lBaUVSLDRCQUFDO0NBQUEsQUExRUQsSUEwRUM7U0FwRVkscUJBQXFCOzs7SUFFaEMsc0NBQTZCOztJQUM3Qix1Q0FBb0M7O0lBRXBDLDBDQUFlOztJQUVILHdDQUE4Qjs7Ozs7SUFBRSxtQ0FBc0I7Ozs7O0lBQUUseUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICBDb21wb25lbnQsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgRWxlbWVudFJlZiwgUmVuZGVyZXIyLCBPbkluaXRcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IGdldCB9IGZyb20gJy4uLy4uL3V0aWxzL2dldCc7XHJcbmltcG9ydCB7IEdhbGxlcnlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9nYWxsZXJ5LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5U3RhdGUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL2dhbGxlcnkuc3RhdGUnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5VGh1bWJDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5cclxuZGVjbGFyZSBjb25zdCBIYW1tZXI6IGFueTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2FsbGVyeS10aHVtYicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dhbGxlcnktdGh1bWIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2dhbGxlcnktdGh1bWIuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2FsbGVyeVRodW1iQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgc3RhdGU6IEdhbGxlcnlTdGF0ZTtcclxuICBASW5wdXQoKSBjb25maWc6IEdhbGxlcnlUaHVtYkNvbmZpZztcclxuXHJcbiAgY29udFN0eWxlOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBnYWxsZXJ5OiBHYWxsZXJ5U2VydmljZSwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcblxyXG4gICAgdGhpcy5jb250U3R5bGUgPSB0aGlzLmdldENvbnRhaW5lclN0eWxlKCk7XHJcblxyXG4gICAgLyoqIEVuYWJsZSBnZXN0dXJlcyAqL1xyXG4gICAgaWYgKHRoaXMuZ2FsbGVyeS5jb25maWcuZ2VzdHVyZXMpIHtcclxuICAgICAgaWYgKHR5cGVvZiBIYW1tZXIgPT09ICd1bmRlZmluZWQnKSB7XHJcblxyXG4gICAgICAgIHRocm93IEVycm9yKCdbTmdHYWxsZXJ5XTogSGFtbWVySlMgaXMgdW5kZWZpbmVkLCBtYWtlIHN1cmUgaXQgaXMgbG9hZGVkJyk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAgICAgY29uc3QgbWMgPSBuZXcgSGFtbWVyKGVsKTtcclxuXHJcbiAgICAgICAgbWMub24oJ3BhbnN0YXJ0JywgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5yZW1vdmVDbGFzcyhlbCwgJ2ctcGFuLXJlc2V0Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbWMub24oJ3BhbmVuZCcsICgpID0+IHtcclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIuYWRkQ2xhc3MoZWwsICdnLXBhbi1yZXNldCcpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvKiogUGFuIGxlZnQgYW5kIHJpZ2h0ICovXHJcbiAgICAgICAgbWMub24oJ3BhbicsIChlOiBhbnkpID0+IHtcclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZWwsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoJHtlLmRlbHRhWH1weCwgMHB4LCAwcHgpYCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLyoqIFN3aXBlIG5leHQgYW5kIHByZXYgKi9cclxuICAgICAgICBtYy5vbignc3dpcGVsZWZ0JywgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5nYWxsZXJ5Lm5leHQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBtYy5vbignc3dpcGVyaWdodCcsICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZ2FsbGVyeS5wcmV2KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRyYW5zbGF0ZVRodW1icygpIHtcclxuICAgIGNvbnN0IHggPSBnZXQodGhpcy5zdGF0ZSwgJ2N1cnJJbmRleCcsIDApICogZ2V0KHRoaXMuY29uZmlnLCAnd2lkdGgnLCAwKSArIGdldCh0aGlzLmNvbmZpZywgJ3dpZHRoJywgMCkgLyAyO1xyXG4gICAgcmV0dXJuIGB0cmFuc2xhdGUzZCgkey14fXB4LCAwLCAwKWA7XHJcbiAgfVxyXG5cclxuICBnZXRDb250YWluZXJTdHlsZSgpIHtcclxuICAgIC8qKiBTZXQgdGh1bWJuYWlscyBwb3NpdGlvbiAodG9wLCBib3R0b20pICovXHJcbiAgICBjb25zdCBvcmRlciA9IHRoaXMuY29uZmlnLnBvc2l0aW9uID09PSAndG9wJyA/IDAgOiAyO1xyXG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdvcmRlcicsIG9yZGVyKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBoZWlnaHQ6IHRoaXMuY29uZmlnLmhlaWdodCArICdweCcsXHJcbiAgICAgIG1hcmdpbjogdGhpcy5jb25maWcuc3BhY2UgKyAncHgnXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0VGh1bWJJbWFnZShpOiBudW1iZXIpIHtcclxuICAgIC8qKiBVc2UgdGh1bWJuYWlsIGlmIHByZXNlbnRlZCAqL1xyXG4gICAgbGV0IGltYWdlID0gZ2V0KHRoaXMuc3RhdGUsICdpbWFnZXMnLCBbXSlbaV0gfHwge307XHJcbiAgICByZXR1cm4gYHVybCgke2ltYWdlLnRodW1ibmFpbCB8fCBpbWFnZS5zcmN9KWA7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=