/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/gallery-player/gallery-player.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GalleryService } from '../../service/gallery.service';
var GalleryPlayerComponent = /** @class */ (function () {
    function GalleryPlayerComponent(gallery) {
        this.gallery = gallery;
    }
    /**
     * @return {?}
     */
    GalleryPlayerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        /** Start auto-play if enabled */
        if (this.config.autoplay) {
            this.gallery.play();
        }
        /** TODO: Display status bar */
    };
    GalleryPlayerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gallery-player',
                    template: "<!--<div class=\"g-player-btns\">-->\r\n  <!--<div *ngIf=\"!state.play\" class=\"g-player-btn\" (click)=\"gallery.play()\">\u25B6</div>-->\r\n  <!--<div *ngIf=\"state.play\" class=\"g-player-btn\" (click)=\"gallery.stop()\">\u23F8</div>-->\r\n<!--</div>-->\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{position:absolute;z-index:310}.g-player-btns{display:flex;padding:.5em 1em}.g-player-btn{margin-right:.5em;color:#fff;cursor:pointer}"]
                }] }
    ];
    /** @nocollapse */
    GalleryPlayerComponent.ctorParameters = function () { return [
        { type: GalleryService }
    ]; };
    GalleryPlayerComponent.propDecorators = {
        config: [{ type: Input }],
        state: [{ type: Input }]
    };
    return GalleryPlayerComponent;
}());
export { GalleryPlayerComponent };
if (false) {
    /** @type {?} */
    GalleryPlayerComponent.prototype.config;
    /** @type {?} */
    GalleryPlayerComponent.prototype.state;
    /** @type {?} */
    GalleryPlayerComponent.prototype.gallery;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1wbGF5ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2FsbGVyeS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L2dhbGxlcnktcGxheWVyL2dhbGxlcnktcGxheWVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUkvRDtJQVdFLGdDQUFtQixPQUF1QjtRQUF2QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtJQUMxQyxDQUFDOzs7O0lBRUQseUNBQVE7OztJQUFSO1FBQ0UsaUNBQWlDO1FBQ2pDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNyQjtRQUVELCtCQUErQjtJQUNqQyxDQUFDOztnQkFyQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLGdSQUE4QztvQkFFOUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7OztnQkFUUSxjQUFjOzs7eUJBWXBCLEtBQUs7d0JBQ0wsS0FBSzs7SUFjUiw2QkFBQztDQUFBLEFBdkJELElBdUJDO1NBakJZLHNCQUFzQjs7O0lBRWpDLHdDQUFtQzs7SUFDbkMsdUNBQTZCOztJQUVqQix5Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEdhbGxlcnlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9nYWxsZXJ5LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5UGxheUNvbmZpZyB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7IEdhbGxlcnlTdGF0ZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvZ2FsbGVyeS5zdGF0ZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dhbGxlcnktcGxheWVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ2FsbGVyeS1wbGF5ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2dhbGxlcnktcGxheWVyLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIEdhbGxlcnlQbGF5ZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBjb25maWc6IEdhbGxlcnlQbGF5Q29uZmlnO1xyXG4gIEBJbnB1dCgpIHN0YXRlOiBHYWxsZXJ5U3RhdGU7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBnYWxsZXJ5OiBHYWxsZXJ5U2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICAvKiogU3RhcnQgYXV0by1wbGF5IGlmIGVuYWJsZWQgKi9cclxuICAgIGlmICh0aGlzLmNvbmZpZy5hdXRvcGxheSkge1xyXG4gICAgICB0aGlzLmdhbGxlcnkucGxheSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBUT0RPOiBEaXNwbGF5IHN0YXR1cyBiYXIgKi9cclxuICB9XHJcblxyXG59XHJcbiJdfQ==