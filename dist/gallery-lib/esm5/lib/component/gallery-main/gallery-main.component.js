/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/gallery-main/gallery-main.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { GalleryService } from '../../service/gallery.service';
var GalleryMainComponent = /** @class */ (function () {
    function GalleryMainComponent(gallery) {
        this.gallery = gallery;
    }
    /**
     * @return {?}
     */
    GalleryMainComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // shortcut for thumbnail config
        /** @type {?} */
        var thumbPos = this.config.thumbnails ? this.config.thumbnails.position : 0;
        this.thumbDirection = (thumbPos === 'left' || thumbPos === 'right') ? 'row' : 'column';
    };
    GalleryMainComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gallery-main',
                    template: "<div class=\"g-container\" [style.flexDirection]=\"thumbDirection\" [ngStyle]=\"config.style\">\r\n\r\n  <gallery-thumb *ngIf=\"config.thumbnails\" [state]=\"state\" [config]=\"config.thumbnails\"\r\n                 [style.background]=\"config.style?.background\"></gallery-thumb>\r\n\r\n  <div class=\"g-box\">\r\n\r\n    <div class=\"g-image-box\">\r\n\r\n      <gallery-image [state]=\"state\" [config]=\"config\" (loading)=\"loading = $event\"></gallery-image>\r\n\r\n      <gallery-nav *ngIf=\"config.navigation\" [state]=\"state\"></gallery-nav>\r\n\r\n      <!--<div class=\"g-layer\" *ngIf=\"state.images[state.currIndex].layer\" [innerHtml]=\"state.images[state.currIndex].layer\"></div>-->\r\n\r\n    </div>\r\n\r\n    <gallery-text *ngIf=\"config.description\" [state]=\"state\" [config]=\"config.description\"></gallery-text>\r\n\r\n    <gallery-bullets *ngIf=\"config.bullets\" [state]=\"state\" [config]=\"config.bullets\"></gallery-bullets>\r\n\r\n    <gallery-player *ngIf=\"config.player\" [state]=\"state\" [config]=\"config.player\"></gallery-player>\r\n\r\n  </div>\r\n\r\n</div>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    styles: ["gallery-main{flex:1;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}gallery-main *{box-sizing:border-box}.g-container{overflow:hidden;position:relative;z-index:200;max-height:100%;max-width:100%;display:flex;flex-direction:column}@media (max-width:480px){.g-container{width:100%!important;flex:1;flex-direction:column!important}}.g-box,.g-image-box{position:relative;display:flex;flex-direction:column;flex:1;order:1;height:100%}.g-layer{position:absolute;left:0;top:0;right:0;bottom:0;z-index:250}.g-pan-reset{transition:.3s linear;transform:translate3d(0,0,0)!important}"]
                }] }
    ];
    /** @nocollapse */
    GalleryMainComponent.ctorParameters = function () { return [
        { type: GalleryService }
    ]; };
    GalleryMainComponent.propDecorators = {
        state: [{ type: Input }],
        config: [{ type: Input }]
    };
    return GalleryMainComponent;
}());
export { GalleryMainComponent };
if (false) {
    /** @type {?} */
    GalleryMainComponent.prototype.state;
    /** @type {?} */
    GalleryMainComponent.prototype.config;
    /** @type {?} */
    GalleryMainComponent.prototype.loading;
    /** @type {?} */
    GalleryMainComponent.prototype.thumbDirection;
    /** @type {?} */
    GalleryMainComponent.prototype.gallery;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1tYWluLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dhbGxlcnktbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9nYWxsZXJ5LW1haW4vZ2FsbGVyeS1tYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3JHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUvRDtJQWNFLDhCQUFtQixPQUF1QjtRQUF2QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtJQUMxQyxDQUFDOzs7O0lBRUQsdUNBQVE7OztJQUFSOzs7WUFFUSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsUUFBUSxLQUFLLE1BQU0sSUFBSSxRQUFRLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ3pGLENBQUM7O2dCQXJCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGNBQWM7b0JBQ3hCLDRsQ0FBNEM7b0JBRTVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7aUJBQ3RDOzs7O2dCQVJRLGNBQWM7Ozt3QkFXcEIsS0FBSzt5QkFDTCxLQUFLOztJQWFSLDJCQUFDO0NBQUEsQUF2QkQsSUF1QkM7U0FoQlksb0JBQW9COzs7SUFFL0IscUNBQTZCOztJQUM3QixzQ0FBK0I7O0lBQy9CLHVDQUFhOztJQUNiLDhDQUFvQjs7SUFFUix1Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5U3RhdGUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL2dhbGxlcnkuc3RhdGUnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5Q29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuaW1wb3J0IHsgR2FsbGVyeVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL2dhbGxlcnkuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dhbGxlcnktbWFpbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dhbGxlcnktbWFpbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2FsbGVyeS1tYWluLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2FsbGVyeU1haW5Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBzdGF0ZTogR2FsbGVyeVN0YXRlO1xyXG4gIEBJbnB1dCgpIGNvbmZpZzogR2FsbGVyeUNvbmZpZztcclxuICBsb2FkaW5nOiBhbnk7XHJcbiAgdGh1bWJEaXJlY3Rpb246IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGdhbGxlcnk6IEdhbGxlcnlTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIHNob3J0Y3V0IGZvciB0aHVtYm5haWwgY29uZmlnXHJcbiAgICBjb25zdCB0aHVtYlBvcyA9IHRoaXMuY29uZmlnLnRodW1ibmFpbHMgPyB0aGlzLmNvbmZpZy50aHVtYm5haWxzLnBvc2l0aW9uIDogMDtcclxuICAgIHRoaXMudGh1bWJEaXJlY3Rpb24gPSAodGh1bWJQb3MgPT09ICdsZWZ0JyB8fCB0aHVtYlBvcyA9PT0gJ3JpZ2h0JykgPyAncm93JyA6ICdjb2x1bW4nO1xyXG4gIH1cclxuXHJcbn1cclxuIl19