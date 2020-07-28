/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/gallery-modal/gallery-modal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, HostListener, Input } from '@angular/core';
import { transition, state, trigger, style, animate } from '@angular/animations';
import { GalleryService } from '../../service/gallery.service';
export class GalleryModalComponent {
    /**
     * @param {?} gallery
     */
    constructor(gallery) {
        this.gallery = gallery;
        this.closeButton = true;
    }
    /**
     * Activate keyboard for navigation
     * @param {?} event
     * @return {?}
     */
    keyboardInput(event) {
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
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.gallery.reset();
    }
}
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
GalleryModalComponent.ctorParameters = () => [
    { type: GalleryService }
];
GalleryModalComponent.propDecorators = {
    closeButton: [{ type: Input }],
    keyboardInput: [{ type: HostListener, args: ['body:keydown', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    GalleryModalComponent.prototype.closeButton;
    /** @type {?} */
    GalleryModalComponent.prototype.gallery;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1tb2RhbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nYWxsZXJ5LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jb21wb25lbnQvZ2FsbGVyeS1tb2RhbC9nYWxsZXJ5LW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLEtBQUssRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUNuRyxPQUFPLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBQ2pGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQW1CL0QsTUFBTSxPQUFPLHFCQUFxQjs7OztJQThCaEMsWUFBbUIsT0FBdUI7UUFBdkIsWUFBTyxHQUFQLE9BQU8sQ0FBZ0I7UUE1QmpDLGdCQUFXLEdBQUcsSUFBSSxDQUFDO0lBNkI1QixDQUFDOzs7Ozs7SUF4QkQsYUFBYSxDQUFDLEtBQW9CO1FBQ2hDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQyxNQUFNLEVBQUM7WUFDeEMsT0FBTztTQUNSO1FBQ0QsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLFFBQVEsS0FBSyxDQUFDLE9BQU8sRUFBRTtZQUNyQixLQUFLLEVBQUUsRUFBRyxPQUFPO2dCQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3BCLE1BQU07WUFDUixLQUFLLEVBQUUsRUFBRyxPQUFPO2dCQUNmLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7Z0JBQ3BCLE1BQU07WUFDUixLQUFLLEVBQUUsRUFBRyxRQUFRO2dCQUNoQixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNwQixNQUFNO1lBQ1IsS0FBSyxFQUFFLEVBQUcsTUFBTTtnQkFDZCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO2dCQUNyQixNQUFNO1lBQ1I7Z0JBQ0UsT0FBTztTQUNWO0lBQ0gsQ0FBQzs7OztJQUtELFdBQVc7UUFDVCxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3ZCLENBQUM7OztZQXBERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLHVkQUE2QztnQkFFN0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLFVBQVUsRUFBRTtvQkFDVixPQUFPLENBQUMsT0FBTyxFQUFFO3dCQUNmLEtBQUssQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLEVBQUUsT0FBTyxFQUFFLEdBQUcsRUFBRyxTQUFTLEVBQUUscUNBQXFDLEVBQUMsQ0FBQyxDQUFDO3dCQUN0RixVQUFVLENBQUMsV0FBVyxFQUFFOzRCQUN0QixLQUFLLENBQUMsRUFBRyxPQUFPLEVBQUUsR0FBRyxFQUFHLFNBQVMsRUFBRSxxQ0FBcUMsRUFBRSxDQUFDOzRCQUMzRSxPQUFPLENBQUMsR0FBRyxDQUFDO3lCQUNiLENBQUM7d0JBQ0YsVUFBVSxDQUFDLFdBQVcsRUFBRTs0QkFDdEIsT0FBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsRUFBRyxPQUFPLEVBQUUsQ0FBQyxFQUFHLFNBQVMsRUFBRSxnQ0FBZ0MsRUFBRSxDQUFDLENBQUM7eUJBQ25GLENBQUM7cUJBQ0gsQ0FBQztpQkFBQzs7YUFDTjs7OztZQWxCUSxjQUFjOzs7MEJBcUJwQixLQUFLOzRCQUlMLFlBQVksU0FBQyxjQUFjLEVBQUUsQ0FBQyxRQUFRLENBQUM7Ozs7SUFKeEMsNENBQTRCOztJQTRCaEIsd0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENvbXBvbmVudCwgSG9zdExpc3RlbmVyLCBJbnB1dCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IHRyYW5zaXRpb24sIHN0YXRlLCB0cmlnZ2VyLCBzdHlsZSwgYW5pbWF0ZSB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5U2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvZ2FsbGVyeS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2FsbGVyeS1tb2RhbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dhbGxlcnktbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2dhbGxlcnktbW9kYWwuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBhbmltYXRpb25zOiBbXHJcbiAgICB0cmlnZ2VyKCdwb3B1cCcsIFtcclxuICAgICAgc3RhdGUoJ2luJywgc3R5bGUoeyBvcGFjaXR5OiAwLjggLCB0cmFuc2Zvcm06ICdzY2FsZSgwLjIpIHRyYW5zbGF0ZTNkKDAsIDEwMHB4LCAwKSd9KSksXHJcbiAgICAgIHRyYW5zaXRpb24oJ3ZvaWQgPT4gKicsIFtcclxuICAgICAgICBzdHlsZSh7ICBvcGFjaXR5OiAwLjggLCB0cmFuc2Zvcm06ICdzY2FsZSgwLjIpIHRyYW5zbGF0ZTNkKDAsIDEwMHB4LCAwKScgfSksXHJcbiAgICAgICAgYW5pbWF0ZSgzMDApXHJcbiAgICAgIF0pLFxyXG4gICAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXHJcbiAgICAgICAgYW5pbWF0ZSgzMDAsIHN0eWxlKHsgIG9wYWNpdHk6IDEgLCB0cmFuc2Zvcm06ICdzY2FsZSgxKSAgdHJhbnNsYXRlM2QoMCwgMCwgMCknIH0pKVxyXG4gICAgICBdKVxyXG4gICAgXSldXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5TW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG5cclxuICBASW5wdXQoKSBjbG9zZUJ1dHRvbiA9IHRydWU7XHJcbiAgXHJcblxyXG4gIC8qKiBBY3RpdmF0ZSBrZXlib2FyZCBmb3IgbmF2aWdhdGlvbiAqL1xyXG4gIEBIb3N0TGlzdGVuZXIoJ2JvZHk6a2V5ZG93bicsIFsnJGV2ZW50J10pXHJcbiAga2V5Ym9hcmRJbnB1dChldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgaWYgKCF0aGlzLmdhbGxlcnkuc3RhdGUuZ2V0VmFsdWUoKS5hY3RpdmUpe1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICBjYXNlIDM3OiAgLy8gcHJldlxyXG4gICAgICAgIHRoaXMuZ2FsbGVyeS5wcmV2KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgMzk6ICAvLyBuZXh0XHJcbiAgICAgICAgdGhpcy5nYWxsZXJ5Lm5leHQoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAxMzogIC8vIGVudGVyXHJcbiAgICAgICAgdGhpcy5nYWxsZXJ5Lm5leHQoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAyNzogIC8vIGVzY1xyXG4gICAgICAgIHRoaXMuZ2FsbGVyeS5jbG9zZSgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBnYWxsZXJ5OiBHYWxsZXJ5U2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLmdhbGxlcnkucmVzZXQoKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==