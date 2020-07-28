/**
 * @fileoverview added by tsickle
 * Generated from: lib/directive/tap.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** This directive enable tap if HammerJS is loaded, otherwise it uses the normal click event (useful for thumbnail click) */
import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { GalleryService } from '../service/gallery.service';
export class TapDirective {
    /**
     * @param {?} gallery
     * @param {?} el
     * @param {?} renderer
     */
    constructor(gallery, el, renderer) {
        this.gallery = gallery;
        this.el = el;
        this.renderer = renderer;
        this.tapClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setTapEvent();
    }
    /**
     * Enable gestures if hammer is loaded
     * @return {?}
     */
    setTapEvent() {
        if (this.gallery.config.gestures) {
            if (typeof Hammer === 'undefined') {
                throw Error('[NgGallery]: HammerJS is undefined, make sure it is loaded');
            }
            else {
                /** Use tap for click event */
                if (typeof Hammer !== 'undefined') {
                    /** @type {?} */
                    const mc = new Hammer(this.el.nativeElement);
                    mc.on('tap', (/**
                     * @return {?}
                     */
                    () => {
                        this.tapClick.emit();
                    }));
                }
            }
        }
        else {
            /** Use normal click event */
            this.renderer.setProperty(this.el.nativeElement, 'onclick', (/**
             * @return {?}
             */
            () => {
                this.tapClick.emit();
            }));
        }
    }
}
TapDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tap]'
            },] }
];
/** @nocollapse */
TapDirective.ctorParameters = () => [
    { type: GalleryService },
    { type: ElementRef },
    { type: Renderer2 }
];
TapDirective.propDecorators = {
    tap: [{ type: Input }],
    tapClick: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    TapDirective.prototype.tap;
    /** @type {?} */
    TapDirective.prototype.tapClick;
    /**
     * @type {?}
     * @private
     */
    TapDirective.prototype.gallery;
    /**
     * @type {?}
     * @private
     */
    TapDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    TapDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFwLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dhbGxlcnktbGliLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZS90YXAuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFPNUQsTUFBTSxPQUFPLFlBQVk7Ozs7OztJQUt2QixZQUFvQixPQUF1QixFQUFVLEVBQWMsRUFBVSxRQUFtQjtRQUE1RSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUFVLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO1FBRnRGLGFBQVEsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO0lBR3hDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBR0QsV0FBVztRQUVULElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQ2hDLElBQUksT0FBTyxNQUFNLEtBQUssV0FBVyxFQUFFO2dCQUVqQyxNQUFNLEtBQUssQ0FBQyw0REFBNEQsQ0FBQyxDQUFDO2FBQzNFO2lCQUFNO2dCQUNMLDhCQUE4QjtnQkFDOUIsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7OzBCQUMzQixFQUFFLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUM7b0JBQzVDLEVBQUUsQ0FBQyxFQUFFLENBQUMsS0FBSzs7O29CQUFFLEdBQUcsRUFBRTt3QkFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdkIsQ0FBQyxFQUFDLENBQUM7aUJBQ0o7YUFDRjtTQUNGO2FBQU07WUFDTCw2QkFBNkI7WUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsU0FBUzs7O1lBQUUsR0FBRyxFQUFFO2dCQUMvRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3ZCLENBQUMsRUFBQyxDQUFDO1NBQ0o7SUFFSCxDQUFDOzs7WUF0Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxPQUFPO2FBQ2xCOzs7O1lBTlEsY0FBYztZQURILFVBQVU7WUFBdUMsU0FBUzs7O2tCQVUzRSxLQUFLO3VCQUNMLE1BQU07Ozs7SUFEUCwyQkFBa0I7O0lBQ2xCLGdDQUF3Qzs7Ozs7SUFFNUIsK0JBQStCOzs7OztJQUFFLDBCQUFzQjs7Ozs7SUFBRSxnQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogVGhpcyBkaXJlY3RpdmUgZW5hYmxlIHRhcCBpZiBIYW1tZXJKUyBpcyBsb2FkZWQsIG90aGVyd2lzZSBpdCB1c2VzIHRoZSBub3JtYWwgY2xpY2sgZXZlbnQgKHVzZWZ1bCBmb3IgdGh1bWJuYWlsIGNsaWNrKSAqL1xyXG5cclxuaW1wb3J0IHsgRGlyZWN0aXZlLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgUmVuZGVyZXIyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEdhbGxlcnlTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZS9nYWxsZXJ5LnNlcnZpY2UnO1xyXG5cclxuZGVjbGFyZSBjb25zdCBIYW1tZXI6IGFueTtcclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW3RhcF0nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBUYXBEaXJlY3RpdmUgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSB0YXA6IGFueTtcclxuICBAT3V0cHV0KCkgdGFwQ2xpY2sgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZ2FsbGVyeTogR2FsbGVyeVNlcnZpY2UsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLnNldFRhcEV2ZW50KCk7XHJcbiAgfVxyXG5cclxuICAvKiogRW5hYmxlIGdlc3R1cmVzIGlmIGhhbW1lciBpcyBsb2FkZWQgKi9cclxuICBzZXRUYXBFdmVudCgpIHtcclxuXHJcbiAgICBpZiAodGhpcy5nYWxsZXJ5LmNvbmZpZy5nZXN0dXJlcykge1xyXG4gICAgICBpZiAodHlwZW9mIEhhbW1lciA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuXHJcbiAgICAgICAgdGhyb3cgRXJyb3IoJ1tOZ0dhbGxlcnldOiBIYW1tZXJKUyBpcyB1bmRlZmluZWQsIG1ha2Ugc3VyZSBpdCBpcyBsb2FkZWQnKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvKiogVXNlIHRhcCBmb3IgY2xpY2sgZXZlbnQgKi9cclxuICAgICAgICBpZiAodHlwZW9mIEhhbW1lciAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgIGNvbnN0IG1jID0gbmV3IEhhbW1lcih0aGlzLmVsLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgICAgICAgbWMub24oJ3RhcCcsICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50YXBDbGljay5lbWl0KCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8qKiBVc2Ugbm9ybWFsIGNsaWNrIGV2ZW50ICovXHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnb25jbGljaycsICgpID0+IHtcclxuICAgICAgICB0aGlzLnRhcENsaWNrLmVtaXQoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxufVxyXG4iXX0=