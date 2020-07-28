/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/gallery-image/gallery-image.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { GalleryService } from '../../service/gallery.service';
import { animation } from './gallery-image.animation';
export class GalleryImageComponent {
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
        /** Enable gestures */
        if (this.config.gestures) {
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
     * @param {?} done
     * @return {?}
     */
    imageLoad(done) {
        this.loading = !done;
        /** TODO: Add some animation */
        if (!done) {
            this.animate = 'none';
        }
        else {
            switch (this.config.animation) {
                case 'fade':
                    this.animate = 'fade';
                    break;
                default:
                    this.animate = 'none';
            }
            //     this.animate = 'none';
            //   case 'slide':
            //     this.animate = (this.state.currIndex > this.state.prevIndex) ? 'slideLeft' : 'slideRight';
            //     break;
            //   default:
            //     this.animate = 'none';
        }
    }
}
GalleryImageComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery-image',
                template: "<div [@imgAnimate]=\"animate\" class=\"g-image\">\r\n  <img [lazyImage]=\"state.images[state.currIndex].src\" (lazyLoad)=\"imageLoad($event)\">\r\n</div>\r\n\r\n<gallery-loader *ngIf=\"loading\" [config]=\"config.loader\"></gallery-loader>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: animation,
                styles: [":host{order:1;flex:1;display:flex;flex-direction:column;transform:translate3d(0,0,0)}.g-image{position:absolute;left:0;right:0;top:0;bottom:0;background-repeat:no-repeat;background-size:contain;background-position:center center;z-index:3;display:flex;flex-direction:column;justify-content:center;align-items:center}.g-image img{box-shadow:0 0 4px rgba(0,0,0,.3);pointer-events:none;display:block;max-width:100%;max-height:100%}"]
            }] }
];
/** @nocollapse */
GalleryImageComponent.ctorParameters = () => [
    { type: GalleryService },
    { type: ElementRef },
    { type: Renderer2 }
];
GalleryImageComponent.propDecorators = {
    state: [{ type: Input }],
    config: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    GalleryImageComponent.prototype.state;
    /** @type {?} */
    GalleryImageComponent.prototype.config;
    /** @type {?} */
    GalleryImageComponent.prototype.loading;
    /** @type {?} */
    GalleryImageComponent.prototype.animate;
    /** @type {?} */
    GalleryImageComponent.prototype.gallery;
    /**
     * @type {?}
     * @private
     */
    GalleryImageComponent.prototype.el;
    /**
     * @type {?}
     * @private
     */
    GalleryImageComponent.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1pbWFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nYWxsZXJ5LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvZ2FsbGVyeS1pbWFnZS9nYWxsZXJ5LWltYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsU0FBUyxFQUVULEtBQUssRUFDTCxVQUFVLEVBQ1YsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBR3ZCLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUMvRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFXdEQsTUFBTSxPQUFPLHFCQUFxQjs7Ozs7O0lBT2hDLFlBQW1CLE9BQXVCLEVBQVUsRUFBYyxFQUFVLFFBQW1CO1FBQTVFLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQVUsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7SUFDL0YsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixzQkFBc0I7UUFDdEIsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUN4QixJQUFJLE9BQU8sTUFBTSxLQUFLLFdBQVcsRUFBRTtnQkFFakMsTUFBTSxLQUFLLENBQUMsNERBQTRELENBQUMsQ0FBQzthQUMzRTtpQkFBTTs7c0JBRUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYTs7c0JBQzFCLEVBQUUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxFQUFFLENBQUM7Z0JBRXpCLEVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVTs7O2dCQUFFLEdBQUcsRUFBRTtvQkFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsRUFBRSxFQUFFLGFBQWEsQ0FBQyxDQUFDO2dCQUMvQyxDQUFDLEVBQUMsQ0FBQztnQkFDSCxFQUFFLENBQUMsRUFBRSxDQUFDLFFBQVE7OztnQkFBRSxHQUFHLEVBQUU7b0JBQ25CLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxhQUFhLENBQUMsQ0FBQztnQkFDNUMsQ0FBQyxFQUFDLENBQUM7Z0JBQ0gsRUFBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLOzs7O2dCQUFFLENBQUMsQ0FBTSxFQUFFLEVBQUU7b0JBQ3RCLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxXQUFXLEVBQUUsZUFBZSxDQUFDLENBQUMsTUFBTSxlQUFlLENBQUMsQ0FBQztnQkFDbEYsQ0FBQyxFQUFDLENBQUM7Z0JBQ0gsMEJBQTBCO2dCQUMxQixFQUFFLENBQUMsRUFBRSxDQUFDLFdBQVc7OztnQkFBRSxHQUFHLEVBQUU7b0JBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3RCLENBQUMsRUFBQyxDQUFDO2dCQUNILEVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWTs7O2dCQUFFLEdBQUcsRUFBRTtvQkFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQyxFQUFDLENBQUM7YUFDSjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxTQUFTLENBQUMsSUFBYTtRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ3JCLCtCQUErQjtRQUUvQixJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1QsSUFBSSxDQUFDLE9BQU8sR0FBRyxNQUFNLENBQUM7U0FDdkI7YUFBTTtZQUNMLFFBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUU7Z0JBQzdCLEtBQUssTUFBTTtvQkFDVCxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztvQkFDdEIsTUFBTTtnQkFDUjtvQkFDRSxJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQzthQUN6QjtZQUNELDZCQUE2QjtZQUM3QixrQkFBa0I7WUFDbEIsaUdBQWlHO1lBQ2pHLGFBQWE7WUFDYixhQUFhO1lBQ2IsNkJBQTZCO1NBQzlCO0lBRUgsQ0FBQzs7O1lBdEVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsZUFBZTtnQkFDekIsK1BBQTZDO2dCQUU3QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsVUFBVSxFQUFFLFNBQVM7O2FBQ3RCOzs7O1lBWFEsY0FBYztZQUxyQixVQUFVO1lBQ1YsU0FBUzs7O29CQWtCUixLQUFLO3FCQUNMLEtBQUs7Ozs7SUFETixzQ0FBNkI7O0lBQzdCLHVDQUErQjs7SUFDL0Isd0NBQWlCOztJQUNqQix3Q0FBZ0I7O0lBRUosd0NBQThCOzs7OztJQUFFLG1DQUFzQjs7Ozs7SUFBRSx5Q0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENvbXBvbmVudCxcclxuICBPbkluaXQsXHJcbiAgSW5wdXQsXHJcbiAgRWxlbWVudFJlZixcclxuICBSZW5kZXJlcjJcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgR2FsbGVyeVN0YXRlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9nYWxsZXJ5LnN0YXRlJztcclxuaW1wb3J0IHsgR2FsbGVyeUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7IEdhbGxlcnlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9nYWxsZXJ5LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBhbmltYXRpb24gfSBmcm9tICcuL2dhbGxlcnktaW1hZ2UuYW5pbWF0aW9uJztcclxuXHJcbmRlY2xhcmUgY29uc3QgSGFtbWVyOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dhbGxlcnktaW1hZ2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nYWxsZXJ5LWltYWdlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nYWxsZXJ5LWltYWdlLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgYW5pbWF0aW9uczogYW5pbWF0aW9uXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5SW1hZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBzdGF0ZTogR2FsbGVyeVN0YXRlO1xyXG4gIEBJbnB1dCgpIGNvbmZpZzogR2FsbGVyeUNvbmZpZztcclxuICBsb2FkaW5nOiBib29sZWFuO1xyXG4gIGFuaW1hdGU6IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGdhbGxlcnk6IEdhbGxlcnlTZXJ2aWNlLCBwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLyoqIEVuYWJsZSBnZXN0dXJlcyAqL1xyXG4gICAgaWYgKHRoaXMuY29uZmlnLmdlc3R1cmVzKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgSGFtbWVyID09PSAndW5kZWZpbmVkJykge1xyXG5cclxuICAgICAgICB0aHJvdyBFcnJvcignW05nR2FsbGVyeV06IEhhbW1lckpTIGlzIHVuZGVmaW5lZCwgbWFrZSBzdXJlIGl0IGlzIGxvYWRlZCcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICBjb25zdCBlbCA9IHRoaXMuZWwubmF0aXZlRWxlbWVudDtcclxuICAgICAgICBjb25zdCBtYyA9IG5ldyBIYW1tZXIoZWwpO1xyXG5cclxuICAgICAgICBtYy5vbigncGFuc3RhcnQnLCAoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUNsYXNzKGVsLCAnZy1wYW4tcmVzZXQnKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBtYy5vbigncGFuZW5kJywgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhlbCwgJ2ctcGFuLXJlc2V0Jyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbWMub24oJ3BhbicsIChlOiBhbnkpID0+IHtcclxuICAgICAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUoZWwsICd0cmFuc2Zvcm0nLCBgdHJhbnNsYXRlM2QoJHtlLmRlbHRhWH1weCwgMHB4LCAwcHgpYCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLyoqIFN3aXBlIG5leHQgYW5kIHByZXYgKi9cclxuICAgICAgICBtYy5vbignc3dpcGVsZWZ0JywgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5nYWxsZXJ5Lm5leHQoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBtYy5vbignc3dpcGVyaWdodCcsICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuZ2FsbGVyeS5wcmV2KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGltYWdlTG9hZChkb25lOiBib29sZWFuKSB7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSAhZG9uZTtcclxuICAgIC8qKiBUT0RPOiBBZGQgc29tZSBhbmltYXRpb24gKi9cclxuICAgIFxyXG4gICAgaWYgKCFkb25lKSB7XHJcbiAgICAgIHRoaXMuYW5pbWF0ZSA9ICdub25lJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHN3aXRjaCAodGhpcy5jb25maWcuYW5pbWF0aW9uKSB7XHJcbiAgICAgICAgY2FzZSAnZmFkZSc6XHJcbiAgICAgICAgICB0aGlzLmFuaW1hdGUgPSAnZmFkZSc7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgdGhpcy5hbmltYXRlID0gJ25vbmUnO1xyXG4gICAgICB9XHJcbiAgICAgIC8vICAgICB0aGlzLmFuaW1hdGUgPSAnbm9uZSc7XHJcbiAgICAgIC8vICAgY2FzZSAnc2xpZGUnOlxyXG4gICAgICAvLyAgICAgdGhpcy5hbmltYXRlID0gKHRoaXMuc3RhdGUuY3VyckluZGV4ID4gdGhpcy5zdGF0ZS5wcmV2SW5kZXgpID8gJ3NsaWRlTGVmdCcgOiAnc2xpZGVSaWdodCc7XHJcbiAgICAgIC8vICAgICBicmVhaztcclxuICAgICAgLy8gICBkZWZhdWx0OlxyXG4gICAgICAvLyAgICAgdGhpcy5hbmltYXRlID0gJ25vbmUnO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbn1cclxuIl19