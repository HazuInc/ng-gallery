/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/gallery/gallery.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GalleryService } from '../../service/gallery.service';
var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(gallery) {
        this.gallery = gallery;
    }
    /**
     * @return {?}
     */
    GalleryComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.gallery.reset();
    };
    GalleryComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gallery',
                    template: '<gallery-main *ngIf="gallery.state | async as state" [state]="state" [config]="gallery.config"></gallery-main>',
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["gallery-main{display:flex;height:500px}"]
                }] }
    ];
    /** @nocollapse */
    GalleryComponent.ctorParameters = function () { return [
        { type: GalleryService }
    ]; };
    return GalleryComponent;
}());
export { GalleryComponent };
if (false) {
    /** @type {?} */
    GalleryComponent.prototype.gallery;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nYWxsZXJ5LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQWEsTUFBTSxlQUFlLENBQUM7QUFDOUUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBRS9EO0lBUUUsMEJBQW1CLE9BQXVCO1FBQXZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO0lBQzFDLENBQUM7Ozs7SUFFRCxzQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZCLENBQUM7O2dCQWJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsUUFBUSxFQUFFLGdIQUFnSDtvQkFDMUgsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUVoRDs7OztnQkFQUSxjQUFjOztJQWlCdkIsdUJBQUM7Q0FBQSxBQWZELElBZUM7U0FUWSxnQkFBZ0I7OztJQUVmLG1DQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvZ2FsbGVyeS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2FsbGVyeScsXHJcbiAgdGVtcGxhdGU6ICc8Z2FsbGVyeS1tYWluICpuZ0lmPVwiZ2FsbGVyeS5zdGF0ZSB8IGFzeW5jIGFzIHN0YXRlXCIgW3N0YXRlXT1cInN0YXRlXCIgW2NvbmZpZ109XCJnYWxsZXJ5LmNvbmZpZ1wiPjwvZ2FsbGVyeS1tYWluPicsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2FsbGVyeS5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5Q29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGdhbGxlcnk6IEdhbGxlcnlTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuZ2FsbGVyeS5yZXNldCgpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19