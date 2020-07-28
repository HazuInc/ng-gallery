/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/gallery-loader/gallery-loader.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GalleryService } from '../../service/gallery.service';
var GalleryLoaderComponent = /** @class */ (function () {
    function GalleryLoaderComponent(gallery) {
        this.gallery = gallery;
    }
    /**
     * @return {?}
     */
    GalleryLoaderComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.icon = this.getIcon();
        this.styles = this.getStyle();
    };
    /**
     * @return {?}
     */
    GalleryLoaderComponent.prototype.getIcon = /**
     * @return {?}
     */
    function () {
        switch (this.config.icon) {
            case 'puff':
                return 'https://cdn.rawgit.com/SamHerbert/SVG-Loaders/75b65ef5/svg-loaders/puff.svg';
            case 'spinning-circles':
                return 'https://cdn.rawgit.com/SamHerbert/SVG-Loaders/75b65ef5/svg-loaders/ball-triangle.svg';
            case 'three-dots':
                return 'https://cdn.rawgit.com/SamHerbert/SVG-Loaders/75b65ef5/svg-loaders/three-dots.svg';
            case 'oval':
                return 'https://cdn.rawgit.com/SamHerbert/SVG-Loaders/75b65ef5/svg-loaders/oval.svg';
            case 'ball-triangle':
                return 'https://cdn.rawgit.com/SamHerbert/SVG-Loaders/75b65ef5/svg-loaders/ball-triangle.svg';
            case 'bars':
                return 'https://cdn.rawgit.com/SamHerbert/SVG-Loaders/75b65ef5/svg-loaders/bars.svg';
            case 'tail-spin':
                return 'https://cdn.rawgit.com/SamHerbert/SVG-Loaders/75b65ef5/svg-loaders/tail-spin.svg';
            default:
                return this.config.icon;
        }
    };
    /**
     * @return {?}
     */
    GalleryLoaderComponent.prototype.getStyle = /**
     * @return {?}
     */
    function () {
        switch (this.config.position) {
            case 'topLeft':
                return {
                    'align-items': 'flex-start',
                    'justify-content': 'flex-start'
                };
            case 'topRight':
                return {
                    'align-items': 'flex-start',
                    'justify-content': 'flex-end'
                };
            case 'bottomLeft':
                return {
                    'align-items': 'flex-end',
                    'justify-content': 'flex-start'
                };
            case 'bottomRight':
                return {
                    'align-items': 'flex-end',
                    'justify-content': 'flex-end'
                };
            default:
                return {
                    'align-items': 'center',
                    'justify-content': 'center'
                };
        }
    };
    GalleryLoaderComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gallery-loader',
                    template: "<div class=\"g-loader\" [ngStyle]=\"styles\">\r\n  <img [src]=\"icon\" [style.width]=\"config.width\" [style.height]=\"config.height\"/>\r\n</div>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: ["*{box-sizing:border-box}:host{z-index:2040}.g-loader{z-index:2050;position:absolute;width:100%;height:100%;display:flex;padding:1em}"]
                }] }
    ];
    /** @nocollapse */
    GalleryLoaderComponent.ctorParameters = function () { return [
        { type: GalleryService }
    ]; };
    GalleryLoaderComponent.propDecorators = {
        config: [{ type: Input }]
    };
    return GalleryLoaderComponent;
}());
export { GalleryLoaderComponent };
if (false) {
    /** @type {?} */
    GalleryLoaderComponent.prototype.config;
    /** @type {?} */
    GalleryLoaderComponent.prototype.icon;
    /** @type {?} */
    GalleryLoaderComponent.prototype.styles;
    /** @type {?} */
    GalleryLoaderComponent.prototype.gallery;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1sb2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2FsbGVyeS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L2dhbGxlcnktbG9hZGVyL2dhbGxlcnktbG9hZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUcvRDtJQVlFLGdDQUFtQixPQUF1QjtRQUF2QixZQUFPLEdBQVAsT0FBTyxDQUFnQjtJQUMxQyxDQUFDOzs7O0lBRUQseUNBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELHdDQUFPOzs7SUFBUDtRQUNFLFFBQVEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7WUFDeEIsS0FBSyxNQUFNO2dCQUNULE9BQU8sNkVBQTZFLENBQUM7WUFFdkYsS0FBSyxrQkFBa0I7Z0JBQ3JCLE9BQU8sc0ZBQXNGLENBQUM7WUFFaEcsS0FBSyxZQUFZO2dCQUNmLE9BQU8sbUZBQW1GLENBQUM7WUFFN0YsS0FBSyxNQUFNO2dCQUNULE9BQU8sNkVBQTZFLENBQUM7WUFFdkYsS0FBSyxlQUFlO2dCQUNsQixPQUFPLHNGQUFzRixDQUFDO1lBRWhHLEtBQUssTUFBTTtnQkFDVCxPQUFPLDZFQUE2RSxDQUFDO1lBRXZGLEtBQUssV0FBVztnQkFDZCxPQUFPLGtGQUFrRixDQUFDO1lBRTVGO2dCQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUM7U0FDM0I7SUFDSCxDQUFDOzs7O0lBRUQseUNBQVE7OztJQUFSO1FBQ0UsUUFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtZQUM1QixLQUFLLFNBQVM7Z0JBQ1osT0FBTztvQkFDTCxhQUFhLEVBQUUsWUFBWTtvQkFDM0IsaUJBQWlCLEVBQUUsWUFBWTtpQkFDaEMsQ0FBQztZQUVKLEtBQUssVUFBVTtnQkFDYixPQUFPO29CQUNMLGFBQWEsRUFBRSxZQUFZO29CQUMzQixpQkFBaUIsRUFBRSxVQUFVO2lCQUM5QixDQUFDO1lBQ0osS0FBSyxZQUFZO2dCQUNmLE9BQU87b0JBQ0wsYUFBYSxFQUFFLFVBQVU7b0JBQ3pCLGlCQUFpQixFQUFFLFlBQVk7aUJBQ2hDLENBQUM7WUFDSixLQUFLLGFBQWE7Z0JBQ2hCLE9BQU87b0JBQ0wsYUFBYSxFQUFFLFVBQVU7b0JBQ3pCLGlCQUFpQixFQUFFLFVBQVU7aUJBQzlCLENBQUM7WUFFSjtnQkFDRSxPQUFPO29CQUNMLGFBQWEsRUFBRSxRQUFRO29CQUN2QixpQkFBaUIsRUFBRSxRQUFRO2lCQUM1QixDQUFDO1NBQ0w7SUFDSCxDQUFDOztnQkE5RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7b0JBQzFCLGtLQUE4QztvQkFFOUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7OztnQkFSUSxjQUFjOzs7eUJBV3BCLEtBQUs7O0lBd0VSLDZCQUFDO0NBQUEsQUFoRkQsSUFnRkM7U0ExRVksc0JBQXNCOzs7SUFFakMsd0NBQXFDOztJQUNyQyxzQ0FBVTs7SUFDVix3Q0FBWTs7SUFFQSx5Q0FBOEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEdhbGxlcnlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZS9nYWxsZXJ5LnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5TG9hZGVyQ29uZmlnIH0gZnJvbSAnLi4vLi4vY29uZmlnJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2FsbGVyeS1sb2FkZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nYWxsZXJ5LWxvYWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2FsbGVyeS1sb2FkZXIuY29tcG9uZW50LnNjc3MnXSxcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2FsbGVyeUxvYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGNvbmZpZzogR2FsbGVyeUxvYWRlckNvbmZpZztcclxuICBpY29uOiBhbnk7XHJcbiAgc3R5bGVzOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBnYWxsZXJ5OiBHYWxsZXJ5U2VydmljZSkge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmljb24gPSB0aGlzLmdldEljb24oKTtcclxuICAgIHRoaXMuc3R5bGVzID0gdGhpcy5nZXRTdHlsZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SWNvbigpIHtcclxuICAgIHN3aXRjaCAodGhpcy5jb25maWcuaWNvbikge1xyXG4gICAgICBjYXNlICdwdWZmJzpcclxuICAgICAgICByZXR1cm4gJ2h0dHBzOi8vY2RuLnJhd2dpdC5jb20vU2FtSGVyYmVydC9TVkctTG9hZGVycy83NWI2NWVmNS9zdmctbG9hZGVycy9wdWZmLnN2Zyc7XHJcblxyXG4gICAgICBjYXNlICdzcGlubmluZy1jaXJjbGVzJzpcclxuICAgICAgICByZXR1cm4gJ2h0dHBzOi8vY2RuLnJhd2dpdC5jb20vU2FtSGVyYmVydC9TVkctTG9hZGVycy83NWI2NWVmNS9zdmctbG9hZGVycy9iYWxsLXRyaWFuZ2xlLnN2Zyc7XHJcblxyXG4gICAgICBjYXNlICd0aHJlZS1kb3RzJzpcclxuICAgICAgICByZXR1cm4gJ2h0dHBzOi8vY2RuLnJhd2dpdC5jb20vU2FtSGVyYmVydC9TVkctTG9hZGVycy83NWI2NWVmNS9zdmctbG9hZGVycy90aHJlZS1kb3RzLnN2Zyc7XHJcblxyXG4gICAgICBjYXNlICdvdmFsJzpcclxuICAgICAgICByZXR1cm4gJ2h0dHBzOi8vY2RuLnJhd2dpdC5jb20vU2FtSGVyYmVydC9TVkctTG9hZGVycy83NWI2NWVmNS9zdmctbG9hZGVycy9vdmFsLnN2Zyc7XHJcblxyXG4gICAgICBjYXNlICdiYWxsLXRyaWFuZ2xlJzpcclxuICAgICAgICByZXR1cm4gJ2h0dHBzOi8vY2RuLnJhd2dpdC5jb20vU2FtSGVyYmVydC9TVkctTG9hZGVycy83NWI2NWVmNS9zdmctbG9hZGVycy9iYWxsLXRyaWFuZ2xlLnN2Zyc7XHJcblxyXG4gICAgICBjYXNlICdiYXJzJzpcclxuICAgICAgICByZXR1cm4gJ2h0dHBzOi8vY2RuLnJhd2dpdC5jb20vU2FtSGVyYmVydC9TVkctTG9hZGVycy83NWI2NWVmNS9zdmctbG9hZGVycy9iYXJzLnN2Zyc7XHJcblxyXG4gICAgICBjYXNlICd0YWlsLXNwaW4nOlxyXG4gICAgICAgIHJldHVybiAnaHR0cHM6Ly9jZG4ucmF3Z2l0LmNvbS9TYW1IZXJiZXJ0L1NWRy1Mb2FkZXJzLzc1YjY1ZWY1L3N2Zy1sb2FkZXJzL3RhaWwtc3Bpbi5zdmcnO1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gdGhpcy5jb25maWcuaWNvbjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldFN0eWxlKCkge1xyXG4gICAgc3dpdGNoICh0aGlzLmNvbmZpZy5wb3NpdGlvbikge1xyXG4gICAgICBjYXNlICd0b3BMZWZ0JzpcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgJ2FsaWduLWl0ZW1zJzogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgICAgICAgJ2p1c3RpZnktY29udGVudCc6ICdmbGV4LXN0YXJ0J1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICBjYXNlICd0b3BSaWdodCc6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICdhbGlnbi1pdGVtcyc6ICdmbGV4LXN0YXJ0JyxcclxuICAgICAgICAgICdqdXN0aWZ5LWNvbnRlbnQnOiAnZmxleC1lbmQnXHJcbiAgICAgICAgfTtcclxuICAgICAgY2FzZSAnYm90dG9tTGVmdCc6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICdhbGlnbi1pdGVtcyc6ICdmbGV4LWVuZCcsXHJcbiAgICAgICAgICAnanVzdGlmeS1jb250ZW50JzogJ2ZsZXgtc3RhcnQnXHJcbiAgICAgICAgfTtcclxuICAgICAgY2FzZSAnYm90dG9tUmlnaHQnOlxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAnYWxpZ24taXRlbXMnOiAnZmxleC1lbmQnLFxyXG4gICAgICAgICAgJ2p1c3RpZnktY29udGVudCc6ICdmbGV4LWVuZCdcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgJ2FsaWduLWl0ZW1zJzogJ2NlbnRlcicsXHJcbiAgICAgICAgICAnanVzdGlmeS1jb250ZW50JzogJ2NlbnRlcidcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19