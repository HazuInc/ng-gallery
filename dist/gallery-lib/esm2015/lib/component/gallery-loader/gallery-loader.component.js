/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/gallery-loader/gallery-loader.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GalleryService } from '../../service/gallery.service';
export class GalleryLoaderComponent {
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
        this.icon = this.getIcon();
        this.styles = this.getStyle();
    }
    /**
     * @return {?}
     */
    getIcon() {
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
    }
    /**
     * @return {?}
     */
    getStyle() {
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
    }
}
GalleryLoaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery-loader',
                template: "<div class=\"g-loader\" [ngStyle]=\"styles\">\r\n  <img [src]=\"icon\" [style.width]=\"config.width\" [style.height]=\"config.height\"/>\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["*{box-sizing:border-box}:host{z-index:2040}.g-loader{z-index:2050;position:absolute;width:100%;height:100%;display:flex;padding:1em}"]
            }] }
];
/** @nocollapse */
GalleryLoaderComponent.ctorParameters = () => [
    { type: GalleryService }
];
GalleryLoaderComponent.propDecorators = {
    config: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1sb2FkZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2FsbGVyeS1saWIvIiwic291cmNlcyI6WyJsaWIvY29tcG9uZW50L2dhbGxlcnktbG9hZGVyL2dhbGxlcnktbG9hZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQVMvRCxNQUFNLE9BQU8sc0JBQXNCOzs7O0lBTWpDLFlBQW1CLE9BQXVCO1FBQXZCLFlBQU8sR0FBUCxPQUFPLENBQWdCO0lBQzFDLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDaEMsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxRQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO1lBQ3hCLEtBQUssTUFBTTtnQkFDVCxPQUFPLDZFQUE2RSxDQUFDO1lBRXZGLEtBQUssa0JBQWtCO2dCQUNyQixPQUFPLHNGQUFzRixDQUFDO1lBRWhHLEtBQUssWUFBWTtnQkFDZixPQUFPLG1GQUFtRixDQUFDO1lBRTdGLEtBQUssTUFBTTtnQkFDVCxPQUFPLDZFQUE2RSxDQUFDO1lBRXZGLEtBQUssZUFBZTtnQkFDbEIsT0FBTyxzRkFBc0YsQ0FBQztZQUVoRyxLQUFLLE1BQU07Z0JBQ1QsT0FBTyw2RUFBNkUsQ0FBQztZQUV2RixLQUFLLFdBQVc7Z0JBQ2QsT0FBTyxrRkFBa0YsQ0FBQztZQUU1RjtnQkFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO1NBQzNCO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixRQUFRLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFO1lBQzVCLEtBQUssU0FBUztnQkFDWixPQUFPO29CQUNMLGFBQWEsRUFBRSxZQUFZO29CQUMzQixpQkFBaUIsRUFBRSxZQUFZO2lCQUNoQyxDQUFDO1lBRUosS0FBSyxVQUFVO2dCQUNiLE9BQU87b0JBQ0wsYUFBYSxFQUFFLFlBQVk7b0JBQzNCLGlCQUFpQixFQUFFLFVBQVU7aUJBQzlCLENBQUM7WUFDSixLQUFLLFlBQVk7Z0JBQ2YsT0FBTztvQkFDTCxhQUFhLEVBQUUsVUFBVTtvQkFDekIsaUJBQWlCLEVBQUUsWUFBWTtpQkFDaEMsQ0FBQztZQUNKLEtBQUssYUFBYTtnQkFDaEIsT0FBTztvQkFDTCxhQUFhLEVBQUUsVUFBVTtvQkFDekIsaUJBQWlCLEVBQUUsVUFBVTtpQkFDOUIsQ0FBQztZQUVKO2dCQUNFLE9BQU87b0JBQ0wsYUFBYSxFQUFFLFFBQVE7b0JBQ3ZCLGlCQUFpQixFQUFFLFFBQVE7aUJBQzVCLENBQUM7U0FDTDtJQUNILENBQUM7OztZQTlFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtnQkFDMUIsa0tBQThDO2dCQUU5QyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTs7YUFDaEQ7Ozs7WUFSUSxjQUFjOzs7cUJBV3BCLEtBQUs7Ozs7SUFBTix3Q0FBcUM7O0lBQ3JDLHNDQUFVOztJQUNWLHdDQUFZOztJQUVBLHlDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDb21wb25lbnQsIElucHV0LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgR2FsbGVyeVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL2dhbGxlcnkuc2VydmljZSc7XHJcbmltcG9ydCB7IEdhbGxlcnlMb2FkZXJDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnYWxsZXJ5LWxvYWRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dhbGxlcnktbG9hZGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nYWxsZXJ5LWxvYWRlci5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5TG9hZGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgY29uZmlnOiBHYWxsZXJ5TG9hZGVyQ29uZmlnO1xyXG4gIGljb246IGFueTtcclxuICBzdHlsZXM6IGFueTtcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIGdhbGxlcnk6IEdhbGxlcnlTZXJ2aWNlKSB7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuaWNvbiA9IHRoaXMuZ2V0SWNvbigpO1xyXG4gICAgdGhpcy5zdHlsZXMgPSB0aGlzLmdldFN0eWxlKCk7XHJcbiAgfVxyXG5cclxuICBnZXRJY29uKCkge1xyXG4gICAgc3dpdGNoICh0aGlzLmNvbmZpZy5pY29uKSB7XHJcbiAgICAgIGNhc2UgJ3B1ZmYnOlxyXG4gICAgICAgIHJldHVybiAnaHR0cHM6Ly9jZG4ucmF3Z2l0LmNvbS9TYW1IZXJiZXJ0L1NWRy1Mb2FkZXJzLzc1YjY1ZWY1L3N2Zy1sb2FkZXJzL3B1ZmYuc3ZnJztcclxuXHJcbiAgICAgIGNhc2UgJ3NwaW5uaW5nLWNpcmNsZXMnOlxyXG4gICAgICAgIHJldHVybiAnaHR0cHM6Ly9jZG4ucmF3Z2l0LmNvbS9TYW1IZXJiZXJ0L1NWRy1Mb2FkZXJzLzc1YjY1ZWY1L3N2Zy1sb2FkZXJzL2JhbGwtdHJpYW5nbGUuc3ZnJztcclxuXHJcbiAgICAgIGNhc2UgJ3RocmVlLWRvdHMnOlxyXG4gICAgICAgIHJldHVybiAnaHR0cHM6Ly9jZG4ucmF3Z2l0LmNvbS9TYW1IZXJiZXJ0L1NWRy1Mb2FkZXJzLzc1YjY1ZWY1L3N2Zy1sb2FkZXJzL3RocmVlLWRvdHMuc3ZnJztcclxuXHJcbiAgICAgIGNhc2UgJ292YWwnOlxyXG4gICAgICAgIHJldHVybiAnaHR0cHM6Ly9jZG4ucmF3Z2l0LmNvbS9TYW1IZXJiZXJ0L1NWRy1Mb2FkZXJzLzc1YjY1ZWY1L3N2Zy1sb2FkZXJzL292YWwuc3ZnJztcclxuXHJcbiAgICAgIGNhc2UgJ2JhbGwtdHJpYW5nbGUnOlxyXG4gICAgICAgIHJldHVybiAnaHR0cHM6Ly9jZG4ucmF3Z2l0LmNvbS9TYW1IZXJiZXJ0L1NWRy1Mb2FkZXJzLzc1YjY1ZWY1L3N2Zy1sb2FkZXJzL2JhbGwtdHJpYW5nbGUuc3ZnJztcclxuXHJcbiAgICAgIGNhc2UgJ2JhcnMnOlxyXG4gICAgICAgIHJldHVybiAnaHR0cHM6Ly9jZG4ucmF3Z2l0LmNvbS9TYW1IZXJiZXJ0L1NWRy1Mb2FkZXJzLzc1YjY1ZWY1L3N2Zy1sb2FkZXJzL2JhcnMuc3ZnJztcclxuXHJcbiAgICAgIGNhc2UgJ3RhaWwtc3Bpbic6XHJcbiAgICAgICAgcmV0dXJuICdodHRwczovL2Nkbi5yYXdnaXQuY29tL1NhbUhlcmJlcnQvU1ZHLUxvYWRlcnMvNzViNjVlZjUvc3ZnLWxvYWRlcnMvdGFpbC1zcGluLnN2Zyc7XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbmZpZy5pY29uO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0U3R5bGUoKSB7XHJcbiAgICBzd2l0Y2ggKHRoaXMuY29uZmlnLnBvc2l0aW9uKSB7XHJcbiAgICAgIGNhc2UgJ3RvcExlZnQnOlxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAnYWxpZ24taXRlbXMnOiAnZmxleC1zdGFydCcsXHJcbiAgICAgICAgICAnanVzdGlmeS1jb250ZW50JzogJ2ZsZXgtc3RhcnQnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgIGNhc2UgJ3RvcFJpZ2h0JzpcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgJ2FsaWduLWl0ZW1zJzogJ2ZsZXgtc3RhcnQnLFxyXG4gICAgICAgICAgJ2p1c3RpZnktY29udGVudCc6ICdmbGV4LWVuZCdcclxuICAgICAgICB9O1xyXG4gICAgICBjYXNlICdib3R0b21MZWZ0JzpcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgJ2FsaWduLWl0ZW1zJzogJ2ZsZXgtZW5kJyxcclxuICAgICAgICAgICdqdXN0aWZ5LWNvbnRlbnQnOiAnZmxleC1zdGFydCdcclxuICAgICAgICB9O1xyXG4gICAgICBjYXNlICdib3R0b21SaWdodCc6XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICdhbGlnbi1pdGVtcyc6ICdmbGV4LWVuZCcsXHJcbiAgICAgICAgICAnanVzdGlmeS1jb250ZW50JzogJ2ZsZXgtZW5kJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAnYWxpZ24taXRlbXMnOiAnY2VudGVyJyxcclxuICAgICAgICAgICdqdXN0aWZ5LWNvbnRlbnQnOiAnY2VudGVyJ1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=