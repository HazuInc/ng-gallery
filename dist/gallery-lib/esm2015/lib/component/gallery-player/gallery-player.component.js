/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/gallery-player/gallery-player.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GalleryService } from '../../service/gallery.service';
export class GalleryPlayerComponent {
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
        /** Start auto-play if enabled */
        if (this.config.autoplay) {
            this.gallery.play();
        }
        /** TODO: Display status bar */
    }
}
GalleryPlayerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery-player',
                template: "<!--<div class=\"g-player-btns\">-->\r\n  <!--<div *ngIf=\"!state.play\" class=\"g-player-btn\" (click)=\"gallery.play()\">\u25B6</div>-->\r\n  <!--<div *ngIf=\"state.play\" class=\"g-player-btn\" (click)=\"gallery.stop()\">\u23F8</div>-->\r\n<!--</div>-->\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{position:absolute;z-index:310}.g-player-btns{display:flex;padding:.5em 1em}.g-player-btn{margin-right:.5em;color:#fff;cursor:pointer}"]
            }] }
];
/** @nocollapse */
GalleryPlayerComponent.ctorParameters = () => [
    { type: GalleryService }
];
GalleryPlayerComponent.propDecorators = {
    config: [{ type: Input }],
    state: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    GalleryPlayerComponent.prototype.config;
    /** @type {?} */
    GalleryPlayerComponent.prototype.state;
    /** @type {?} */
    GalleryPlayerComponent.prototype.gallery;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1wbGF5ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2FsbGVyeS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L2dhbGxlcnktcGxheWVyL2dhbGxlcnktcGxheWVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQVUvRCxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBS2pDLFlBQW1CLE9BQXVCO1FBQXZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO0lBQzFDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04saUNBQWlDO1FBQ2pDLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7WUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNyQjtRQUVELCtCQUErQjtJQUNqQyxDQUFDOzs7WUFyQkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLGdSQUE4QztnQkFFOUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2FBQ2hEOzs7O1lBVFEsY0FBYzs7O3FCQVlwQixLQUFLO29CQUNMLEtBQUs7Ozs7SUFETix3Q0FBbUM7O0lBQ25DLHVDQUE2Qjs7SUFFakIseUNBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvZ2FsbGVyeS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgR2FsbGVyeVBsYXlDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5U3RhdGUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL2dhbGxlcnkuc3RhdGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnYWxsZXJ5LXBsYXllcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dhbGxlcnktcGxheWVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nYWxsZXJ5LXBsYXllci5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5UGxheWVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgY29uZmlnOiBHYWxsZXJ5UGxheUNvbmZpZztcclxuICBASW5wdXQoKSBzdGF0ZTogR2FsbGVyeVN0YXRlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZ2FsbGVyeTogR2FsbGVyeVNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLyoqIFN0YXJ0IGF1dG8tcGxheSBpZiBlbmFibGVkICovXHJcbiAgICBpZiAodGhpcy5jb25maWcuYXV0b3BsYXkpIHtcclxuICAgICAgdGhpcy5nYWxsZXJ5LnBsYXkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogVE9ETzogRGlzcGxheSBzdGF0dXMgYmFyICovXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=