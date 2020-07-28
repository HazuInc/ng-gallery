/**
 * @fileoverview added by tsickle
 * Generated from: lib/directive/tap.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** This directive enable tap if HammerJS is loaded, otherwise it uses the normal click event (useful for thumbnail click) */
import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { GalleryService } from '../service/gallery.service';
var TapDirective = /** @class */ (function () {
    function TapDirective(gallery, el, renderer) {
        this.gallery = gallery;
        this.el = el;
        this.renderer = renderer;
        this.tapClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    TapDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.setTapEvent();
    };
    /** Enable gestures if hammer is loaded */
    /**
     * Enable gestures if hammer is loaded
     * @return {?}
     */
    TapDirective.prototype.setTapEvent = /**
     * Enable gestures if hammer is loaded
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.gallery.config.gestures) {
            if (typeof Hammer === 'undefined') {
                throw Error('[NgGallery]: HammerJS is undefined, make sure it is loaded');
            }
            else {
                /** Use tap for click event */
                if (typeof Hammer !== 'undefined') {
                    /** @type {?} */
                    var mc = new Hammer(this.el.nativeElement);
                    mc.on('tap', (/**
                     * @return {?}
                     */
                    function () {
                        _this.tapClick.emit();
                    }));
                }
            }
        }
        else {
            /** Use normal click event */
            this.renderer.setProperty(this.el.nativeElement, 'onclick', (/**
             * @return {?}
             */
            function () {
                _this.tapClick.emit();
            }));
        }
    };
    TapDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[tap]'
                },] }
    ];
    /** @nocollapse */
    TapDirective.ctorParameters = function () { return [
        { type: GalleryService },
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    TapDirective.propDecorators = {
        tap: [{ type: Input }],
        tapClick: [{ type: Output }]
    };
    return TapDirective;
}());
export { TapDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFwLmRpcmVjdGl2ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dhbGxlcnktbGliLyIsInNvdXJjZXMiOlsibGliL2RpcmVjdGl2ZS90YXAuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUVBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQVUsTUFBTSxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0RyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFJNUQ7SUFRRSxzQkFBb0IsT0FBdUIsRUFBVSxFQUFjLEVBQVUsUUFBbUI7UUFBNUUsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUZ0RixhQUFRLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQztJQUd4QyxDQUFDOzs7O0lBRUQsK0JBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCwwQ0FBMEM7Ozs7O0lBQzFDLGtDQUFXOzs7O0lBQVg7UUFBQSxpQkFzQkM7UUFwQkMsSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDaEMsSUFBSSxPQUFPLE1BQU0sS0FBSyxXQUFXLEVBQUU7Z0JBRWpDLE1BQU0sS0FBSyxDQUFDLDREQUE0RCxDQUFDLENBQUM7YUFDM0U7aUJBQU07Z0JBQ0wsOEJBQThCO2dCQUM5QixJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTs7d0JBQzNCLEVBQUUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQztvQkFDNUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLOzs7b0JBQUU7d0JBQ1gsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztvQkFDdkIsQ0FBQyxFQUFDLENBQUM7aUJBQ0o7YUFDRjtTQUNGO2FBQU07WUFDTCw2QkFBNkI7WUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsU0FBUzs7O1lBQUU7Z0JBQzFELEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDdkIsQ0FBQyxFQUFDLENBQUM7U0FDSjtJQUVILENBQUM7O2dCQXRDRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLE9BQU87aUJBQ2xCOzs7O2dCQU5RLGNBQWM7Z0JBREgsVUFBVTtnQkFBdUMsU0FBUzs7O3NCQVUzRSxLQUFLOzJCQUNMLE1BQU07O0lBaUNULG1CQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7U0FwQ1ksWUFBWTs7O0lBRXZCLDJCQUFrQjs7SUFDbEIsZ0NBQXdDOzs7OztJQUU1QiwrQkFBK0I7Ozs7O0lBQUUsMEJBQXNCOzs7OztJQUFFLGdDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBUaGlzIGRpcmVjdGl2ZSBlbmFibGUgdGFwIGlmIEhhbW1lckpTIGlzIGxvYWRlZCwgb3RoZXJ3aXNlIGl0IHVzZXMgdGhlIG5vcm1hbCBjbGljayBldmVudCAodXNlZnVsIGZvciB0aHVtYm5haWwgY2xpY2spICovXHJcblxyXG5pbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBSZW5kZXJlcjIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgR2FsbGVyeVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlL2dhbGxlcnkuc2VydmljZSc7XHJcblxyXG5kZWNsYXJlIGNvbnN0IEhhbW1lcjogYW55O1xyXG5cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdbdGFwXSdcclxufSlcclxuZXhwb3J0IGNsYXNzIFRhcERpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHRhcDogYW55O1xyXG4gIEBPdXRwdXQoKSB0YXBDbGljayA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBnYWxsZXJ5OiBHYWxsZXJ5U2VydmljZSwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc2V0VGFwRXZlbnQoKTtcclxuICB9XHJcblxyXG4gIC8qKiBFbmFibGUgZ2VzdHVyZXMgaWYgaGFtbWVyIGlzIGxvYWRlZCAqL1xyXG4gIHNldFRhcEV2ZW50KCkge1xyXG5cclxuICAgIGlmICh0aGlzLmdhbGxlcnkuY29uZmlnLmdlc3R1cmVzKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgSGFtbWVyID09PSAndW5kZWZpbmVkJykge1xyXG5cclxuICAgICAgICB0aHJvdyBFcnJvcignW05nR2FsbGVyeV06IEhhbW1lckpTIGlzIHVuZGVmaW5lZCwgbWFrZSBzdXJlIGl0IGlzIGxvYWRlZCcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8qKiBVc2UgdGFwIGZvciBjbGljayBldmVudCAqL1xyXG4gICAgICAgIGlmICh0eXBlb2YgSGFtbWVyICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgY29uc3QgbWMgPSBuZXcgSGFtbWVyKHRoaXMuZWwubmF0aXZlRWxlbWVudCk7XHJcbiAgICAgICAgICBtYy5vbigndGFwJywgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRhcENsaWNrLmVtaXQoKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLyoqIFVzZSBub3JtYWwgY2xpY2sgZXZlbnQgKi9cclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdvbmNsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMudGFwQ2xpY2suZW1pdCgpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG59XHJcbiJdfQ==