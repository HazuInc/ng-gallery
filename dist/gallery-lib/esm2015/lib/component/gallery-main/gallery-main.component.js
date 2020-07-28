/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/gallery-main/gallery-main.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { GalleryService } from '../../service/gallery.service';
export class GalleryMainComponent {
    /**
     * @param {?} gallery
     */
    constructor(gallery) {
        this.gallery = gallery;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // shortcut for thumbnail config
        /** @type {?} */
        const thumbPos = this.config.thumbnails ? this.config.thumbnails.position : 0;
        this.thumbDirection = (thumbPos === 'left' || thumbPos === 'right') ? 'row' : 'column';
    }
}
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
GalleryMainComponent.ctorParameters = () => [
    { type: GalleryService }
];
GalleryMainComponent.propDecorators = {
    state: [{ type: Input }],
    config: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1tYWluLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dhbGxlcnktbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9nYWxsZXJ5LW1haW4vZ2FsbGVyeS1tYWluLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLGlCQUFpQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBR3JHLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQVMvRCxNQUFNLE9BQU8sb0JBQW9COzs7O0lBTy9CLFlBQW1CLE9BQXVCO1FBQXZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO0lBQzFDLENBQUM7Ozs7SUFFRCxRQUFROzs7Y0FFQSxRQUFRLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RSxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsUUFBUSxLQUFLLE1BQU0sSUFBSSxRQUFRLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO0lBQ3pGLENBQUM7OztZQXJCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGNBQWM7Z0JBQ3hCLDRsQ0FBNEM7Z0JBRTVDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO2dCQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTs7YUFDdEM7Ozs7WUFSUSxjQUFjOzs7b0JBV3BCLEtBQUs7cUJBQ0wsS0FBSzs7OztJQUROLHFDQUE2Qjs7SUFDN0Isc0NBQStCOztJQUMvQix1Q0FBYTs7SUFDYiw4Q0FBb0I7O0lBRVIsdUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgVmlld0VuY2Fwc3VsYXRpb24gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgR2FsbGVyeVN0YXRlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9nYWxsZXJ5LnN0YXRlJztcclxuaW1wb3J0IHsgR2FsbGVyeUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7IEdhbGxlcnlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9nYWxsZXJ5LnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnYWxsZXJ5LW1haW4nLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nYWxsZXJ5LW1haW4uY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2dhbGxlcnktbWFpbi5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmVcclxufSlcclxuZXhwb3J0IGNsYXNzIEdhbGxlcnlNYWluQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgc3RhdGU6IEdhbGxlcnlTdGF0ZTtcclxuICBASW5wdXQoKSBjb25maWc6IEdhbGxlcnlDb25maWc7XHJcbiAgbG9hZGluZzogYW55O1xyXG4gIHRodW1iRGlyZWN0aW9uOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBnYWxsZXJ5OiBHYWxsZXJ5U2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvLyBzaG9ydGN1dCBmb3IgdGh1bWJuYWlsIGNvbmZpZ1xyXG4gICAgY29uc3QgdGh1bWJQb3MgPSB0aGlzLmNvbmZpZy50aHVtYm5haWxzID8gdGhpcy5jb25maWcudGh1bWJuYWlscy5wb3NpdGlvbiA6IDA7XHJcbiAgICB0aGlzLnRodW1iRGlyZWN0aW9uID0gKHRodW1iUG9zID09PSAnbGVmdCcgfHwgdGh1bWJQb3MgPT09ICdyaWdodCcpID8gJ3JvdycgOiAnY29sdW1uJztcclxuICB9XHJcblxyXG59XHJcbiJdfQ==