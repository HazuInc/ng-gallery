/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/gallery-thumb/gallery-thumb.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ChangeDetectionStrategy, ElementRef, Renderer2 } from '@angular/core';
import { get } from '../../utils/get';
import { GalleryService } from '../../service/gallery.service';
export class GalleryThumbComponent {
    /**
     * @param {?} gallery
     * @param {?} el
     * @param {?} renderer
     */
    constructor(gallery, el, renderer) {
        this.gallery = gallery;
        this.el = el;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.contStyle = this.getContainerStyle();
        /** Enable gestures */
        if (this.gallery.config.gestures) {
            if (typeof Hammer === 'undefined') {
                throw Error('[NgGallery]: HammerJS is undefined, make sure it is loaded');
            }
            else {
                /** @type {?} */
                const el = this.el.nativeElement;
                /** @type {?} */
                const mc = new Hammer(el);
                mc.on('panstart', (/**
                 * @return {?}
                 */
                () => {
                    this.renderer.removeClass(el, 'g-pan-reset');
                }));
                mc.on('panend', (/**
                 * @return {?}
                 */
                () => {
                    this.renderer.addClass(el, 'g-pan-reset');
                }));
                /** Pan left and right */
                mc.on('pan', (/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => {
                    this.renderer.setStyle(el, 'transform', `translate3d(${e.deltaX}px, 0px, 0px)`);
                }));
                /** Swipe next and prev */
                mc.on('swipeleft', (/**
                 * @return {?}
                 */
                () => {
                    this.gallery.next();
                }));
                mc.on('swiperight', (/**
                 * @return {?}
                 */
                () => {
                    this.gallery.prev();
                }));
            }
        }
    }
    /**
     * @return {?}
     */
    translateThumbs() {
        /** @type {?} */
        const x = get(this.state, 'currIndex', 0) * get(this.config, 'width', 0) + get(this.config, 'width', 0) / 2;
        return `translate3d(${-x}px, 0, 0)`;
    }
    /**
     * @return {?}
     */
    getContainerStyle() {
        /**
         * Set thumbnails position (top, bottom)
         * @type {?}
         */
        const order = this.config.position === 'top' ? 0 : 2;
        this.renderer.setStyle(this.el.nativeElement, 'order', order);
        return {
            height: this.config.height + 'px',
            margin: this.config.space + 'px'
        };
    }
    /**
     * @param {?} i
     * @return {?}
     */
    getThumbImage(i) {
        /**
         * Use thumbnail if presented
         * @type {?}
         */
        let image = get(this.state, 'images', [])[i] || {};
        return `url(${image.thumbnail || image.src})`;
    }
}
GalleryThumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery-thumb',
                template: "<div #container class=\"g-thumb-container\" [ngStyle]=\"contStyle\">\r\n\r\n  <div class=\"g-thumbs\" [style.transform]=\"translateThumbs()\">\r\n\r\n    <div class=\"g-thumb\" *ngFor=\"let image of state.images; let i = index\"\r\n         [class.g-thumb-current]=\"i === state.currIndex\"\r\n         [style.width.px]=\"gallery.config.thumbnails.width\"\r\n         [style.height.px]=\"gallery.config.thumbnails.height\">\r\n\r\n      <div class=\"g-thumb-image\" [style.backgroundImage]=\"getThumbImage(i)\"\r\n           [tap] (tapClick)=\"gallery.set(i)\">\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:block;z-index:1}.g-thumb-container{position:relative;z-index:206;width:100%;height:100%;left:0;top:0;display:flex}.g-thumbs{position:absolute;top:0;left:50%;display:flex;align-items:center;transition:transform .3s ease-in;transform:translate3d(0,0,0)}.g-thumb{padding:8px;opacity:.5;transition:.2s linear}.g-thumb-image{cursor:pointer;width:100%;height:100%;background-position:center center;background-size:cover;box-shadow:0 0 4px rgba(0,0,0,.3)}.g-thumb-current{opacity:1;padding:2px}"]
            }] }
];
/** @nocollapse */
GalleryThumbComponent.ctorParameters = () => [
    { type: GalleryService },
    { type: ElementRef },
    { type: Renderer2 }
];
GalleryThumbComponent.propDecorators = {
    state: [{ type: Input }],
    config: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS10aHVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nYWxsZXJ5LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvZ2FsbGVyeS10aHVtYi9nYWxsZXJ5LXRodW1iLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCxTQUFTLEVBQUUsS0FBSyxFQUFFLHVCQUF1QixFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQ2pFLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN0QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFZL0QsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7O0lBT2hDLFlBQW1CLE9BQXVCLEVBQVUsRUFBYyxFQUFVLFFBQW1CO1FBQTVFLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7SUFFL0YsQ0FBQzs7OztJQUVELFFBQVE7UUFFTixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1FBRTFDLHNCQUFzQjtRQUN0QixJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUNoQyxJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtnQkFFakMsTUFBTSxLQUFLLENBQUMsNERBQTRELENBQUMsQ0FBQzthQUMzRTtpQkFBTTs7c0JBQ0MsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYTs7c0JBQzFCLEVBQUUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUM7Z0JBRXpCLEVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVTs7O2dCQUFFLEdBQUcsRUFBRTtvQkFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLGFBQWEsQ0FBQyxDQUFDO2dCQUMvQyxDQUFDLEVBQUMsQ0FBQztnQkFDSCxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVE7OztnQkFBRSxHQUFHLEVBQUU7b0JBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxhQUFhLENBQUMsQ0FBQztnQkFDNUMsQ0FBQyxFQUFDLENBQUM7Z0JBRUgseUJBQXlCO2dCQUN6QixFQUFFLENBQUMsRUFBRSxDQUFDLEtBQUs7Ozs7Z0JBQUUsQ0FBQyxDQUFNLEVBQUUsRUFBRTtvQkFDdEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFdBQVcsRUFBRSxlQUFlLENBQUMsQ0FBQyxNQUFNLGVBQWUsQ0FBQyxDQUFDO2dCQUNsRixDQUFDLEVBQUMsQ0FBQztnQkFDSCwwQkFBMEI7Z0JBQzFCLEVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVzs7O2dCQUFFLEdBQUcsRUFBRTtvQkFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQyxFQUFDLENBQUM7Z0JBQ0gsRUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZOzs7Z0JBQUUsR0FBRyxFQUFFO29CQUN2QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUN0QixDQUFDLEVBQUMsQ0FBQzthQUNKO1NBQ0Y7SUFDSCxDQUFDOzs7O0lBRUQsZUFBZTs7Y0FDUCxDQUFDLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsV0FBVyxFQUFFLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQztRQUMzRyxPQUFPLGVBQWUsQ0FBQyxDQUFDLFdBQVcsQ0FBQztJQUN0QyxDQUFDOzs7O0lBRUQsaUJBQWlCOzs7OztjQUVULEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNwRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFFOUQsT0FBTztZQUNMLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJO1lBQ2pDLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJO1NBQ2pDLENBQUM7SUFDSixDQUFDOzs7OztJQUVELGFBQWEsQ0FBQyxDQUFTOzs7OztZQUVqQixLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUU7UUFDbEQsT0FBTyxPQUFPLEtBQUssQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQ2hELENBQUM7OztZQXhFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLDZuQkFBNkM7Z0JBRTdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNOzthQUNoRDs7OztZQVhRLGNBQWM7WUFKc0IsVUFBVTtZQUFFLFNBQVM7OztvQkFrQi9ELEtBQUs7cUJBQ0wsS0FBSzs7OztJQUROLHNDQUE2Qjs7SUFDN0IsdUNBQW9DOztJQUVwQywwQ0FBZTs7SUFFSCx3Q0FBOEI7Ozs7O0lBQUUsbUNBQXNCOzs7OztJQUFFLHlDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgQ29tcG9uZW50LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIEVsZW1lbnRSZWYsIFJlbmRlcmVyMiwgT25Jbml0XHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBnZXQgfSBmcm9tICcuLi8uLi91dGlscy9nZXQnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvZ2FsbGVyeS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgR2FsbGVyeVN0YXRlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9nYWxsZXJ5LnN0YXRlJztcclxuaW1wb3J0IHsgR2FsbGVyeVRodW1iQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuXHJcbmRlY2xhcmUgY29uc3QgSGFtbWVyOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dhbGxlcnktdGh1bWInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nYWxsZXJ5LXRodW1iLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nYWxsZXJ5LXRodW1iLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEdhbGxlcnlUaHVtYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHN0YXRlOiBHYWxsZXJ5U3RhdGU7XHJcbiAgQElucHV0KCkgY29uZmlnOiBHYWxsZXJ5VGh1bWJDb25maWc7XHJcblxyXG4gIGNvbnRTdHlsZTogYW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZ2FsbGVyeTogR2FsbGVyeVNlcnZpY2UsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG5cclxuICAgIHRoaXMuY29udFN0eWxlID0gdGhpcy5nZXRDb250YWluZXJTdHlsZSgpO1xyXG5cclxuICAgIC8qKiBFbmFibGUgZ2VzdHVyZXMgKi9cclxuICAgIGlmICh0aGlzLmdhbGxlcnkuY29uZmlnLmdlc3R1cmVzKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgSGFtbWVyID09PSAndW5kZWZpbmVkJykge1xyXG5cclxuICAgICAgICB0aHJvdyBFcnJvcignW05nR2FsbGVyeV06IEhhbW1lckpTIGlzIHVuZGVmaW5lZCwgbWFrZSBzdXJlIGl0IGlzIGxvYWRlZCcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGVsID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50O1xyXG4gICAgICAgIGNvbnN0IG1jID0gbmV3IEhhbW1lcihlbCk7XHJcblxyXG4gICAgICAgIG1jLm9uKCdwYW5zdGFydCcsICgpID0+IHtcclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3MoZWwsICdnLXBhbi1yZXNldCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG1jLm9uKCdwYW5lbmQnLCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKGVsLCAnZy1wYW4tcmVzZXQnKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLyoqIFBhbiBsZWZ0IGFuZCByaWdodCAqL1xyXG4gICAgICAgIG1jLm9uKCdwYW4nLCAoZTogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKGVsLCAndHJhbnNmb3JtJywgYHRyYW5zbGF0ZTNkKCR7ZS5kZWx0YVh9cHgsIDBweCwgMHB4KWApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8qKiBTd2lwZSBuZXh0IGFuZCBwcmV2ICovXHJcbiAgICAgICAgbWMub24oJ3N3aXBlbGVmdCcsICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZ2FsbGVyeS5uZXh0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbWMub24oJ3N3aXBlcmlnaHQnLCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmdhbGxlcnkucHJldigpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB0cmFuc2xhdGVUaHVtYnMoKSB7XHJcbiAgICBjb25zdCB4ID0gZ2V0KHRoaXMuc3RhdGUsICdjdXJySW5kZXgnLCAwKSAqIGdldCh0aGlzLmNvbmZpZywgJ3dpZHRoJywgMCkgKyBnZXQodGhpcy5jb25maWcsICd3aWR0aCcsIDApIC8gMjtcclxuICAgIHJldHVybiBgdHJhbnNsYXRlM2QoJHsteH1weCwgMCwgMClgO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q29udGFpbmVyU3R5bGUoKSB7XHJcbiAgICAvKiogU2V0IHRodW1ibmFpbHMgcG9zaXRpb24gKHRvcCwgYm90dG9tKSAqL1xyXG4gICAgY29uc3Qgb3JkZXIgPSB0aGlzLmNvbmZpZy5wb3NpdGlvbiA9PT0gJ3RvcCcgPyAwIDogMjtcclxuICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnb3JkZXInLCBvcmRlcik7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaGVpZ2h0OiB0aGlzLmNvbmZpZy5oZWlnaHQgKyAncHgnLFxyXG4gICAgICBtYXJnaW46IHRoaXMuY29uZmlnLnNwYWNlICsgJ3B4J1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldFRodW1iSW1hZ2UoaTogbnVtYmVyKSB7XHJcbiAgICAvKiogVXNlIHRodW1ibmFpbCBpZiBwcmVzZW50ZWQgKi9cclxuICAgIGxldCBpbWFnZSA9IGdldCh0aGlzLnN0YXRlLCAnaW1hZ2VzJywgW10pW2ldIHx8IHt9O1xyXG4gICAgcmV0dXJuIGB1cmwoJHtpbWFnZS50aHVtYm5haWwgfHwgaW1hZ2Uuc3JjfSlgO1xyXG4gIH1cclxuXHJcbn1cclxuIl19