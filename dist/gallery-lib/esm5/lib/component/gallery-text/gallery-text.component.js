/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/gallery-text/gallery-text.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, ElementRef, Renderer2, ChangeDetectionStrategy } from '@angular/core';
var GalleryTextComponent = /** @class */ (function () {
    function GalleryTextComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    GalleryTextComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var el = this.el.nativeElement;
        // text overlay
        if (this.config.overlay) {
            this.renderer.setStyle(el, 'position', 'absolute');
        }
        // text position
        if (this.config.position === 'top') {
            this.renderer.setStyle(el, 'order', 0);
            this.renderer.setStyle(el, 'top', 0);
            this.renderer.setStyle(el, 'bottom', 'unset');
        }
        else {
            this.renderer.setStyle(el, 'order', 2);
            this.renderer.setStyle(el, 'top', 'unset');
            this.renderer.setStyle(el, 'bottom', 0);
        }
    };
    GalleryTextComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gallery-text',
                    template: "<div class=\"g-text-container\" [ngStyle]=\"config.style\">\r\n  <div *ngIf=\"config.text\" class=\"g-text\" [innerHtml]=\"state.images[state.currIndex]?.text\">\r\n  </div>\r\n  <div *ngIf=\"config.counter\" class=\"g-number\">\r\n    {{(state.currIndex + 1) + '/' + state.images.length}}\r\n  </div>\r\n</div>\r\n\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["*{box-sizing:border-box}:host{position:relative;left:0;right:0;z-index:205}.g-text-container{padding:1em 2em;color:#ccc;font-size:13px;display:flex;flex-direction:row;align-content:center;background-clip:padding-box;-webkit-font-smoothing:antialiased}.g-text{flex:1}"]
                }] }
    ];
    /** @nocollapse */
    GalleryTextComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    GalleryTextComponent.propDecorators = {
        state: [{ type: Input }],
        config: [{ type: Input }]
    };
    return GalleryTextComponent;
}());
export { GalleryTextComponent };
if (false) {
    /** @type {?} */
    GalleryTextComponent.prototype.state;
    /** @type {?} */
    GalleryTextComponent.prototype.config;
    /**
     * @type {?}
     * @private
     */
    GalleryTextComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    GalleryTextComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS10ZXh0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dhbGxlcnktbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9nYWxsZXJ5LXRleHQvZ2FsbGVyeS10ZXh0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsS0FBSyxFQUFVLFVBQVUsRUFBRSxTQUFTLEVBQUUsdUJBQXVCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFJdkc7SUFXRSw4QkFBb0IsRUFBYyxFQUFVLFFBQW1CO1FBQTNDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXO0lBQy9ELENBQUM7Ozs7SUFFRCx1Q0FBUTs7O0lBQVI7O1lBQ1EsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYTtRQUNoQyxlQUFlO1FBQ2YsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sRUFBRTtZQUN2QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1NBQ3BEO1FBRUQsZ0JBQWdCO1FBQ2hCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEtBQUssS0FBSyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyQyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQy9DO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRSxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQztTQUN6QztJQUNILENBQUM7O2dCQS9CRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLDJVQUE0QztvQkFFNUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7OztnQkFUaUMsVUFBVTtnQkFBRSxTQUFTOzs7d0JBWXBELEtBQUs7eUJBQ0wsS0FBSzs7SUF1QlIsMkJBQUM7Q0FBQSxBQWhDRCxJQWdDQztTQTFCWSxvQkFBb0I7OztJQUUvQixxQ0FBNkI7O0lBQzdCLHNDQUFtQzs7Ozs7SUFFdkIsa0NBQXNCOzs7OztJQUFFLHdDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBFbGVtZW50UmVmLCBSZW5kZXJlcjIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5fSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtHYWxsZXJ5U3RhdGV9IGZyb20gJy4uLy4uL3NlcnZpY2UvZ2FsbGVyeS5zdGF0ZSc7XHJcbmltcG9ydCB7R2FsbGVyeURlc2NDb25maWd9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dhbGxlcnktdGV4dCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dhbGxlcnktdGV4dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2FsbGVyeS10ZXh0LmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEdhbGxlcnlUZXh0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgc3RhdGU6IEdhbGxlcnlTdGF0ZTtcclxuICBASW5wdXQoKSBjb25maWc6IEdhbGxlcnlEZXNjQ29uZmlnO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgY29uc3QgZWwgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICAvLyB0ZXh0IG92ZXJsYXlcclxuICAgIGlmICh0aGlzLmNvbmZpZy5vdmVybGF5KSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZWwsICdwb3NpdGlvbicsICdhYnNvbHV0ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRleHQgcG9zaXRpb25cclxuICAgIGlmICh0aGlzLmNvbmZpZy5wb3NpdGlvbiA9PT0gJ3RvcCcpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShlbCwgJ29yZGVyJywgMCk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZWwsICd0b3AnLCAwKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShlbCwgJ2JvdHRvbScsICd1bnNldCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShlbCwgJ29yZGVyJywgMik7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZWwsICd0b3AnLCAndW5zZXQnKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZShlbCwgJ2JvdHRvbScsIDApO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=