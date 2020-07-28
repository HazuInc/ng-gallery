/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/gallery-modal/gallery-modal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, HostListener, Input } from '@angular/core';
import { transition, state, trigger, style, animate } from '@angular/animations';
import { GalleryService } from '../../service/gallery.service';
var GalleryModalComponent = /** @class */ (function () {
    function GalleryModalComponent(gallery) {
        this.gallery = gallery;
        this.closeButton = true;
    }
    /** Activate keyboard for navigation */
    /**
     * Activate keyboard for navigation
     * @param {?} event
     * @return {?}
     */
    GalleryModalComponent.prototype.keyboardInput = /**
     * Activate keyboard for navigation
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (!this.gallery.state.getValue().active) {
            return;
        }
        event.stopPropagation();
        switch (event.keyCode) {
            case 37: // prev
                this.gallery.prev();
                break;
            case 39: // next
                this.gallery.next();
                break;
            case 13: // enter
                this.gallery.next();
                break;
            case 27: // esc
                this.gallery.close();
                break;
            default:
                return;
        }
    };
    /**
     * @return {?}
     */
    GalleryModalComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.gallery.reset();
    };
    GalleryModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gallery-modal',
                    template: "<div *ngIf=\"gallery.state | async as state\">\r\n\r\n  <div *ngIf=\"state.active\" class=\"g-modal\">\r\n\r\n    <div class=\"g-btn-close-container\">\r\n      <div *ngIf=\"closeButton\" class=\"g-btn-close\" (click)=\"gallery.close()\"></div>\r\n    </div>\r\n\r\n    <gallery-main [@popup] [state]=\"state\" [config]=\"gallery.config\"></gallery-main>\r\n\r\n    <div class=\"g-overlay\" (click)=\"gallery.close()\"></div>\r\n\r\n  </div>\r\n\r\n</div>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    animations: [
                        trigger('popup', [
                            state('in', style({ opacity: 0.8, transform: 'scale(0.2) translate3d(0, 100px, 0)' })),
                            transition('void => *', [
                                style({ opacity: 0.8, transform: 'scale(0.2) translate3d(0, 100px, 0)' }),
                                animate(300)
                            ]),
                            transition('* => void', [
                                animate(300, style({ opacity: 1, transform: 'scale(1)  translate3d(0, 0, 0)' }))
                            ])
                        ])
                    ],
                    styles: ["*{box-sizing:border-box}.g-modal{position:fixed;left:0;right:0;top:0;bottom:0;background-color:rgba(0,0,0,.6);z-index:1000;overflow:hidden;display:flex;flex-direction:column;justify-content:center;align-items:center}.g-overlay{position:absolute;left:0;right:0;top:0;bottom:0}.g-btn-close-container{width:100%;display:flex}@media (max-width:480px){.g-modal{padding:0}.g-btn-close-container{justify-content:flex-end}.g-btn-close-container .g-btn-close{margin:.5em;position:relative;right:0;top:0}}.g-btn-close{position:absolute;right:1em;top:1em;z-index:9999;cursor:pointer;width:30px;height:30px;transition:.2s linear;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwIDUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MCA1MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxjaXJjbGUgc3R5bGU9ImZpbGw6I0Q3NUE0QTsiIGN4PSIyNSIgY3k9IjI1IiByPSIyNSIvPjxwb2x5bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgcG9pbnRzPSIxNiwzNCAyNSwyNSAzNCwxNiAiLz48cG9seWxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiIHBvaW50cz0iMTYsMTYgMjUsMjUgMzQsMzQgIi8+PC9zdmc+)}.g-btn-close:active{transform:rotate(180deg) scale(.9)}"]
                }] }
    ];
    /** @nocollapse */
    GalleryModalComponent.ctorParameters = function () { return [
        { type: GalleryService }
    ]; };
    GalleryModalComponent.propDecorators = {
        closeButton: [{ type: Input }],
        keyboardInput: [{ type: HostListener, args: ['body:keydown', ['$event'],] }]
    };
    return GalleryModalComponent;
}());
export { GalleryModalComponent };
if (false) {
    /** @type {?} */
    GalleryModalComponent.prototype.closeButton;
    /** @type {?} */
    GalleryModalComponent.prototype.gallery;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nYWxsZXJ5LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvZ2FsbGVyeS1tb2RhbC9nYWxsZXJ5LW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNuRyxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUUvRDtJQStDRSwrQkFBbUIsT0FBdUI7UUFBdkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUE1QmpDLGdCQUFXLEdBQUcsSUFBSSxDQUFDO0lBNkI1QixDQUFDO0lBMUJELHVDQUF1Qzs7Ozs7O0lBRXZDLDZDQUFhOzs7OztJQURiLFVBQ2MsS0FBb0I7UUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLE1BQU0sRUFBQztZQUN4QyxPQUFPO1NBQ1I7UUFDRCxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsUUFBUSxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ3JCLEtBQUssRUFBRSxFQUFHLE9BQU87Z0JBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDcEIsTUFBTTtZQUNSLEtBQUssRUFBRSxFQUFHLE9BQU87Z0JBQ2YsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDcEIsTUFBTTtZQUNSLEtBQUssRUFBRSxFQUFHLFFBQVE7Z0JBQ2hCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3BCLE1BQU07WUFDUixLQUFLLEVBQUUsRUFBRyxNQUFNO2dCQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ3JCLE1BQU07WUFDUjtnQkFDRSxPQUFPO1NBQ1Y7SUFDSCxDQUFDOzs7O0lBS0QsMkNBQVc7OztJQUFYO1FBQ0UsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN2QixDQUFDOztnQkFwREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxlQUFlO29CQUN6Qix1ZEFBNkM7b0JBRTdDLGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxVQUFVLEVBQUU7d0JBQ1YsT0FBTyxDQUFDLE9BQU8sRUFBRTs0QkFDZixLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUcsU0FBUyxFQUFFLHFDQUFxQyxFQUFDLENBQUMsQ0FBQzs0QkFDdEYsVUFBVSxDQUFDLFdBQVcsRUFBRTtnQ0FDdEIsS0FBSyxDQUFDLEVBQUcsT0FBTyxFQUFFLEdBQUcsRUFBRyxTQUFTLEVBQUUscUNBQXFDLEVBQUUsQ0FBQztnQ0FDM0UsT0FBTyxDQUFDLEdBQUcsQ0FBQzs2QkFDYixDQUFDOzRCQUNGLFVBQVUsQ0FBQyxXQUFXLEVBQUU7Z0NBQ3RCLE9BQU8sQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEVBQUcsT0FBTyxFQUFFLENBQUMsRUFBRyxTQUFTLEVBQUUsZ0NBQWdDLEVBQUUsQ0FBQyxDQUFDOzZCQUNuRixDQUFDO3lCQUNILENBQUM7cUJBQUM7O2lCQUNOOzs7O2dCQWxCUSxjQUFjOzs7OEJBcUJwQixLQUFLO2dDQUlMLFlBQVksU0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBK0IxQyw0QkFBQztDQUFBLEFBdERELElBc0RDO1NBckNZLHFCQUFxQjs7O0lBRWhDLDRDQUE0Qjs7SUE0QmhCLHdDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyB0cmFuc2l0aW9uLCBzdGF0ZSwgdHJpZ2dlciwgc3R5bGUsIGFuaW1hdGUgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgR2FsbGVyeVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL2dhbGxlcnkuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dhbGxlcnktbW9kYWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nYWxsZXJ5LW1vZGFsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nYWxsZXJ5LW1vZGFsLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgYW5pbWF0aW9uczogW1xyXG4gICAgdHJpZ2dlcigncG9wdXAnLCBbXHJcbiAgICAgIHN0YXRlKCdpbicsIHN0eWxlKHsgb3BhY2l0eTogMC44ICwgdHJhbnNmb3JtOiAnc2NhbGUoMC4yKSB0cmFuc2xhdGUzZCgwLCAxMDBweCwgMCknfSkpLFxyXG4gICAgICB0cmFuc2l0aW9uKCd2b2lkID0+IConLCBbXHJcbiAgICAgICAgc3R5bGUoeyAgb3BhY2l0eTogMC44ICwgdHJhbnNmb3JtOiAnc2NhbGUoMC4yKSB0cmFuc2xhdGUzZCgwLCAxMDBweCwgMCknIH0pLFxyXG4gICAgICAgIGFuaW1hdGUoMzAwKVxyXG4gICAgICBdKSxcclxuICAgICAgdHJhbnNpdGlvbignKiA9PiB2b2lkJywgW1xyXG4gICAgICAgIGFuaW1hdGUoMzAwLCBzdHlsZSh7ICBvcGFjaXR5OiAxICwgdHJhbnNmb3JtOiAnc2NhbGUoMSkgIHRyYW5zbGF0ZTNkKDAsIDAsIDApJyB9KSlcclxuICAgICAgXSlcclxuICAgIF0pXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2FsbGVyeU1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuXHJcbiAgQElucHV0KCkgY2xvc2VCdXR0b24gPSB0cnVlO1xyXG4gIFxyXG5cclxuICAvKiogQWN0aXZhdGUga2V5Ym9hcmQgZm9yIG5hdmlnYXRpb24gKi9cclxuICBASG9zdExpc3RlbmVyKCdib2R5OmtleWRvd24nLCBbJyRldmVudCddKVxyXG4gIGtleWJvYXJkSW5wdXQoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgIGlmICghdGhpcy5nYWxsZXJ5LnN0YXRlLmdldFZhbHVlKCkuYWN0aXZlKXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgY2FzZSAzNzogIC8vIHByZXZcclxuICAgICAgICB0aGlzLmdhbGxlcnkucHJldigpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIDM5OiAgLy8gbmV4dFxyXG4gICAgICAgIHRoaXMuZ2FsbGVyeS5uZXh0KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMTM6ICAvLyBlbnRlclxyXG4gICAgICAgIHRoaXMuZ2FsbGVyeS5uZXh0KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMjc6ICAvLyBlc2NcclxuICAgICAgICB0aGlzLmdhbGxlcnkuY2xvc2UoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZ2FsbGVyeTogR2FsbGVyeVNlcnZpY2UpIHtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgdGhpcy5nYWxsZXJ5LnJlc2V0KCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=