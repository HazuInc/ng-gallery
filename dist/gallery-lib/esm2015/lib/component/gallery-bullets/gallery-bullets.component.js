/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/gallery-bullets/gallery-bullets.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Renderer2, ChangeDetectionStrategy } from '@angular/core';
import { GalleryService } from '../../service/gallery.service';
export class GalleryBulletsComponent {
    /**
     * @param {?} gallery
     * @param {?} renderer
     * @param {?} el
     */
    constructor(gallery, renderer, el) {
        this.gallery = gallery;
        this.renderer = renderer;
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.config.position) {
            /** @type {?} */
            let contDirection;
            /** @type {?} */
            let conWidth;
            /** @type {?} */
            let conHeight;
            /** @type {?} */
            let contTop;
            /** @type {?} */
            let hostRight = 'unset';
            /** @type {?} */
            let hostBottom = 'unset';
            switch (this.config.position) {
                case 'bottom':
                    contDirection = 'row';
                    conHeight = 'auto';
                    conWidth = '100%';
                    contTop = 'unset';
                    hostBottom = '0';
                    break;
                case 'left':
                    contDirection = 'column';
                    conWidth = 'auto';
                    conHeight = '100%';
                    break;
                case 'right':
                    conWidth = 'auto';
                    conHeight = '100%';
                    contDirection = 'column';
                    hostRight = '0';
                    break;
                default:
                    // top
                    contDirection = 'row';
                    conHeight = 'auto';
                    conWidth = '100%';
                    break;
            }
            this.renderer.setStyle(this.el.nativeElement, 'right', hostRight);
            this.renderer.setStyle(this.el.nativeElement, 'bottom', hostBottom);
            this.renderer.setStyle(this.el.nativeElement, 'width', conWidth);
            this.renderer.setStyle(this.el.nativeElement, 'height', conHeight);
            this.renderer.setStyle(this.el.nativeElement, 'flex-direction', contDirection);
        }
    }
}
GalleryBulletsComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery-bullets',
                template: "<div class=\"g-bullet\"\r\n     *ngFor=\"let image of state.images; let i = index\"\r\n     [class.g-bullet-curr]=\"i === state.currIndex\"\r\n     (click)=\"gallery.set(i)\">\r\n\r\n  <div class=\"g-bullet-inner\" [ngStyle]=\"config.style\"></div>\r\n\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{position:absolute;display:flex;align-items:center;justify-content:center}.g-bullet{cursor:pointer;display:flex;z-index:300}.g-bullet-inner{margin:1em;height:4px;width:4px;background-color:rgba(255,255,255,.5);border-radius:2px;box-shadow:0 0 6px rgba(0,0,0,.8);transition:.2s}.g-bullet-curr .g-bullet-inner{transform:scale(1.5);background-color:#fff}"]
            }] }
];
/** @nocollapse */
GalleryBulletsComponent.ctorParameters = () => [
    { type: GalleryService },
    { type: Renderer2 },
    { type: ElementRef }
];
GalleryBulletsComponent.propDecorators = {
    state: [{ type: Input }],
    config: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    GalleryBulletsComponent.prototype.state;
    /** @type {?} */
    GalleryBulletsComponent.prototype.config;
    /** @type {?} */
    GalleryBulletsComponent.prototype.gallery;
    /**
     * @type {?}
     * @private
     */
    GalleryBulletsComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    GalleryBulletsComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1idWxsZXRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dhbGxlcnktbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9nYWxsZXJ5LWJ1bGxldHMvZ2FsbGVyeS1idWxsZXRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBVS9ELE1BQU0sT0FBTyx1QkFBdUI7Ozs7OztJQUtsQyxZQUFtQixPQUF1QixFQUFVLFFBQW1CLEVBQVUsRUFBYztRQUE1RSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBVSxPQUFFLEdBQUYsRUFBRSxDQUFZO0lBQy9GLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTs7Z0JBRXBCLGFBQWE7O2dCQUFFLFFBQVE7O2dCQUFFLFNBQVM7O2dCQUFFLE9BQU87O2dCQUMzQyxTQUFTLEdBQUcsT0FBTzs7Z0JBQUUsVUFBVSxHQUFHLE9BQU87WUFDN0MsUUFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtnQkFDNUIsS0FBSyxRQUFRO29CQUNYLGFBQWEsR0FBRyxLQUFLLENBQUM7b0JBQ3RCLFNBQVMsR0FBRyxNQUFNLENBQUM7b0JBQ25CLFFBQVEsR0FBRyxNQUFNLENBQUM7b0JBQ2xCLE9BQU8sR0FBRyxPQUFPLENBQUM7b0JBQ2xCLFVBQVUsR0FBRyxHQUFHLENBQUM7b0JBQ2pCLE1BQU07Z0JBQ1IsS0FBSyxNQUFNO29CQUNULGFBQWEsR0FBRyxRQUFRLENBQUM7b0JBQ3pCLFFBQVEsR0FBRyxNQUFNLENBQUM7b0JBQ2xCLFNBQVMsR0FBRyxNQUFNLENBQUM7b0JBQ25CLE1BQU07Z0JBQ1IsS0FBSyxPQUFPO29CQUNWLFFBQVEsR0FBRyxNQUFNLENBQUM7b0JBQ2xCLFNBQVMsR0FBRyxNQUFNLENBQUM7b0JBQ25CLGFBQWEsR0FBRyxRQUFRLENBQUM7b0JBQ3pCLFNBQVMsR0FBRyxHQUFHLENBQUM7b0JBQ2hCLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTtvQkFDTixhQUFhLEdBQUcsS0FBSyxDQUFDO29CQUN0QixTQUFTLEdBQUcsTUFBTSxDQUFDO29CQUNuQixRQUFRLEdBQUcsTUFBTSxDQUFDO29CQUNsQixNQUFNO2FBQ1Q7WUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDbEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDbkUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDLENBQUM7U0FDaEY7SUFDSCxDQUFDOzs7WUFwREYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLHNSQUErQztnQkFFL0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7O1lBVFEsY0FBYztZQUR3QixTQUFTO1lBQXBDLFVBQVU7OztvQkFhM0IsS0FBSztxQkFDTCxLQUFLOzs7O0lBRE4sd0NBQTZCOztJQUM3Qix5Q0FBcUM7O0lBRXpCLDBDQUE4Qjs7Ozs7SUFBRSwyQ0FBMkI7Ozs7O0lBQUUscUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbnB1dCwgT25Jbml0LCBSZW5kZXJlcjIsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEdhbGxlcnlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9nYWxsZXJ5LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5U3RhdGUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL2dhbGxlcnkuc3RhdGUnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5QnVsbGV0Q29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2FsbGVyeS1idWxsZXRzJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ2FsbGVyeS1idWxsZXRzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nYWxsZXJ5LWJ1bGxldHMuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2FsbGVyeUJ1bGxldHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBzdGF0ZTogR2FsbGVyeVN0YXRlO1xyXG4gIEBJbnB1dCgpIGNvbmZpZzogR2FsbGVyeUJ1bGxldENvbmZpZztcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGdhbGxlcnk6IEdhbGxlcnlTZXJ2aWNlLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIsIHByaXZhdGUgZWw6IEVsZW1lbnRSZWYpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYgKHRoaXMuY29uZmlnLnBvc2l0aW9uKSB7XHJcblxyXG4gICAgICBsZXQgY29udERpcmVjdGlvbiwgY29uV2lkdGgsIGNvbkhlaWdodCwgY29udFRvcDtcclxuICAgICAgbGV0IGhvc3RSaWdodCA9ICd1bnNldCcsIGhvc3RCb3R0b20gPSAndW5zZXQnO1xyXG4gICAgICBzd2l0Y2ggKHRoaXMuY29uZmlnLnBvc2l0aW9uKSB7XHJcbiAgICAgICAgY2FzZSAnYm90dG9tJzpcclxuICAgICAgICAgIGNvbnREaXJlY3Rpb24gPSAncm93JztcclxuICAgICAgICAgIGNvbkhlaWdodCA9ICdhdXRvJztcclxuICAgICAgICAgIGNvbldpZHRoID0gJzEwMCUnO1xyXG4gICAgICAgICAgY29udFRvcCA9ICd1bnNldCc7XHJcbiAgICAgICAgICBob3N0Qm90dG9tID0gJzAnO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgICBjb250RGlyZWN0aW9uID0gJ2NvbHVtbic7XHJcbiAgICAgICAgICBjb25XaWR0aCA9ICdhdXRvJztcclxuICAgICAgICAgIGNvbkhlaWdodCA9ICcxMDAlJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICAgIGNvbldpZHRoID0gJ2F1dG8nO1xyXG4gICAgICAgICAgY29uSGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgICAgY29udERpcmVjdGlvbiA9ICdjb2x1bW4nO1xyXG4gICAgICAgICAgaG9zdFJpZ2h0ID0gJzAnO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIC8vIHRvcFxyXG4gICAgICAgICAgY29udERpcmVjdGlvbiA9ICdyb3cnO1xyXG4gICAgICAgICAgY29uSGVpZ2h0ID0gJ2F1dG8nO1xyXG4gICAgICAgICAgY29uV2lkdGggPSAnMTAwJSc7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdyaWdodCcsIGhvc3RSaWdodCk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnYm90dG9tJywgaG9zdEJvdHRvbSk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnd2lkdGgnLCBjb25XaWR0aCk7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0U3R5bGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgY29uSGVpZ2h0KTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdmbGV4LWRpcmVjdGlvbicsIGNvbnREaXJlY3Rpb24pO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19