/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/gallery-nav/gallery-nav.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GalleryService } from '../../service/gallery.service';
var GalleryNavComponent = /** @class */ (function () {
    function GalleryNavComponent(gallery) {
        this.gallery = gallery;
    }
    GalleryNavComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gallery-nav',
                    template: "<div *ngIf=\"state.images.length > 1\" class=\"g-nav\">\r\n\r\n  <div class=\"g-nav-prev\" (click)=\"gallery.prev()\">\r\n    <i class=\"prev-arrow-ico\"></i>\r\n  </div>\r\n\r\n  <div class=\"g-nav-next\" (click)=\"gallery.next()\">\r\n    <i class=\"next-arrow-ico\"></i>\r\n  </div>\r\n\r\n</div>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["*{box-sizing:border-box}:host{z-index:201;position:absolute;left:0;right:0;top:0;bottom:0;display:flex}@media (max-width:480px){:host{display:none}}.g-nav{flex:1;height:100%;display:flex;flex-direction:row;opacity:0;transition:.4s linear;cursor:pointer}.g-nav:hover{opacity:1}.g-nav-next,.g-nav-prev{display:flex;align-items:center;height:100%;opacity:.7;position:relative;overflow:hidden;transition:.2s;z-index:0}.g-nav-next:hover,.g-nav-prev:hover{opacity:1}.g-nav-next{padding-right:.7em;flex:1;justify-content:flex-end}.g-nav-prev{padding-left:.7em;width:20%}.next-arrow-ico,.prev-arrow-ico{width:45px;height:80px}.next-arrow-ico{background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PiAgPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQxNC40OTYgNDE0LjQ5NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDE0LjQ5NiA0MTQuNDk2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+IDxkZWZzIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGZpbHRlciBpZD0iZHJvcHNoYWRvdyIgPiAgPGZlR2F1c3NpYW5CbHVyIGluPSJTb3VyY2VBbHBoYSIgc3RkRGV2aWF0aW9uPSIzIi8+ICAgPGZlT2Zmc2V0IGR4PSIyIiBkeT0iMiIgcmVzdWx0PSJvZmZzZXRibHVyIi8+ICAgPGZlTWVyZ2U+IDxmZU1lcmdlTm9kZS8+PGZlTWVyZ2VOb2RlIGluPSJTb3VyY2VHcmFwaGljIi8+ICAgPC9mZU1lcmdlPjwvZmlsdGVyPjwvZGVmcz4gIDxwb2x5Z29uIHN0eWxlPSJmaWxsOiNmZmY7IiBmaWx0ZXI9InVybCgjZHJvcHNoYWRvdykiIHBvaW50cz0iMTE4LjEyNiwwIDg5Ljc5NiwyOC4yMzggMjY4LjIyMywyMDcuMjQ4IDg5Ljc5NiwzODYuMjU4IDExOC4xMjYsNDE0LjQ5NiAzMjQuNywyMDcuMjQ4ICIvPjwvc3ZnPg==) center center no-repeat}.prev-arrow-ico{background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MTQuNDk2IDQxNC40OTYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQxNC40OTYgNDE0LjQ5NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxkZWZzIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGZpbHRlciBpZD0iZHJvcHNoYWRvdyIgPiAgPGZlR2F1c3NpYW5CbHVyIGluPSJTb3VyY2VBbHBoYSIgc3RkRGV2aWF0aW9uPSIzIi8+ICAgPGZlT2Zmc2V0IGR4PSIyIiBkeT0iMiIgcmVzdWx0PSJvZmZzZXRibHVyIi8+ICAgPGZlTWVyZ2U+IDxmZU1lcmdlTm9kZS8+PGZlTWVyZ2VOb2RlIGluPSJTb3VyY2VHcmFwaGljIi8+ICAgPC9mZU1lcmdlPjwvZmlsdGVyPjwvZGVmcz48cG9seWdvbiBzdHlsZT0iZmlsbDojZmZmOyIgZmlsdGVyPSJ1cmwoI2Ryb3BzaGFkb3cpIiBwb2ludHM9IjMyNC43LDI4LjIzOCAyOTYuMzcsMCA4OS43OTYsMjA3LjI0OCAyOTYuMzcsNDE0LjQ5NiAzMjQuNywzODYuMjU4IDE0Ni4yNzMsMjA3LjI0OCAiLz48L3N2Zz4=) center center no-repeat}"]
                }] }
    ];
    /** @nocollapse */
    GalleryNavComponent.ctorParameters = function () { return [
        { type: GalleryService }
    ]; };
    GalleryNavComponent.propDecorators = {
        state: [{ type: Input }]
    };
    return GalleryNavComponent;
}());
export { GalleryNavComponent };
if (false) {
    /** @type {?} */
    GalleryNavComponent.prototype.state;
    /** @type {?} */
    GalleryNavComponent.prototype.gallery;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2FsbGVyeS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L2dhbGxlcnktbmF2L2dhbGxlcnktbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBQyx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ3hFLE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQUU3RDtJQVVFLDZCQUFtQixPQUF1QjtRQUF2QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtJQUMxQyxDQUFDOztnQkFYRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGFBQWE7b0JBQ3ZCLDJUQUEyQztvQkFFM0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7OztnQkFQTyxjQUFjOzs7d0JBVW5CLEtBQUs7O0lBS1IsMEJBQUM7Q0FBQSxBQWJELElBYUM7U0FQWSxtQkFBbUI7OztJQUU5QixvQ0FBb0I7O0lBRVIsc0NBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7R2FsbGVyeVNlcnZpY2V9IGZyb20gJy4uLy4uL3NlcnZpY2UvZ2FsbGVyeS5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2FsbGVyeS1uYXYnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nYWxsZXJ5LW5hdi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2FsbGVyeS1uYXYuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2FsbGVyeU5hdkNvbXBvbmVudCB7XHJcblxyXG4gIEBJbnB1dCgpIHN0YXRlOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBnYWxsZXJ5OiBHYWxsZXJ5U2VydmljZSkge1xyXG4gIH1cclxuXHJcbn1cclxuIl19