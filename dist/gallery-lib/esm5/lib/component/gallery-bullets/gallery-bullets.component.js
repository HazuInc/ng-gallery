/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/gallery-bullets/gallery-bullets.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, ElementRef, Input, Renderer2, ChangeDetectionStrategy } from '@angular/core';
import { GalleryService } from '../../service/gallery.service';
var GalleryBulletsComponent = /** @class */ (function () {
    function GalleryBulletsComponent(gallery, renderer, el) {
        this.gallery = gallery;
        this.renderer = renderer;
        this.el = el;
    }
    /**
     * @return {?}
     */
    GalleryBulletsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (this.config.position) {
            /** @type {?} */
            var contDirection = void 0;
            /** @type {?} */
            var conWidth = void 0;
            /** @type {?} */
            var conHeight = void 0;
            /** @type {?} */
            var contTop = void 0;
            /** @type {?} */
            var hostRight = 'unset';
            /** @type {?} */
            var hostBottom = 'unset';
            switch (this.config.position) {
                case 'bottom':
                    contDirection = 'row';
                    conHeight = 'auto';
                    conWidth = '100%';
                    contTop = 'unset';
                    hostBottom = '0';
                    break;
                case 'left':
                    contDirection = 'column';
                    conWidth = 'auto';
                    conHeight = '100%';
                    break;
                case 'right':
                    conWidth = 'auto';
                    conHeight = '100%';
                    contDirection = 'column';
                    hostRight = '0';
                    break;
                default:
                    // top
                    contDirection = 'row';
                    conHeight = 'auto';
                    conWidth = '100%';
                    break;
            }
            this.renderer.setStyle(this.el.nativeElement, 'right', hostRight);
            this.renderer.setStyle(this.el.nativeElement, 'bottom', hostBottom);
            this.renderer.setStyle(this.el.nativeElement, 'width', conWidth);
            this.renderer.setStyle(this.el.nativeElement, 'height', conHeight);
            this.renderer.setStyle(this.el.nativeElement, 'flex-direction', contDirection);
        }
    };
    GalleryBulletsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gallery-bullets',
                    template: "<div class=\"g-bullet\"\r\n     *ngFor=\"let image of state.images; let i = index\"\r\n     [class.g-bullet-curr]=\"i === state.currIndex\"\r\n     (click)=\"gallery.set(i)\">\r\n\r\n  <div class=\"g-bullet-inner\" [ngStyle]=\"config.style\"></div>\r\n\r\n</div>\r\n",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    styles: [":host{position:absolute;display:flex;align-items:center;justify-content:center}.g-bullet{cursor:pointer;display:flex;z-index:300}.g-bullet-inner{margin:1em;height:4px;width:4px;background-color:rgba(255,255,255,.5);border-radius:2px;box-shadow:0 0 6px rgba(0,0,0,.8);transition:.2s}.g-bullet-curr .g-bullet-inner{transform:scale(1.5);background-color:#fff}"]
                }] }
    ];
    /** @nocollapse */
    GalleryBulletsComponent.ctorParameters = function () { return [
        { type: GalleryService },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    GalleryBulletsComponent.propDecorators = {
        state: [{ type: Input }],
        config: [{ type: Input }]
    };
    return GalleryBulletsComponent;
}());
export { GalleryBulletsComponent };
if (false) {
    /** @type {?} */
    GalleryBulletsComponent.prototype.state;
    /** @type {?} */
    GalleryBulletsComponent.prototype.config;
    /** @type {?} */
    GalleryBulletsComponent.prototype.gallery;
    /**
     * @type {?}
     * @private
     */
    GalleryBulletsComponent.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    GalleryBulletsComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS1idWxsZXRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dhbGxlcnktbGliLyIsInNvdXJjZXMiOlsibGliL2NvbXBvbmVudC9nYWxsZXJ5LWJ1bGxldHMvZ2FsbGVyeS1idWxsZXRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBVSxTQUFTLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBSS9EO0lBV0UsaUNBQW1CLE9BQXVCLEVBQVUsUUFBbUIsRUFBVSxFQUFjO1FBQTVFLFlBQU8sR0FBUCxPQUFPLENBQWdCO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFVLE9BQUUsR0FBRixFQUFFLENBQVk7SUFDL0YsQ0FBQzs7OztJQUVELDBDQUFROzs7SUFBUjtRQUNFLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUU7O2dCQUVwQixhQUFhLFNBQUE7O2dCQUFFLFFBQVEsU0FBQTs7Z0JBQUUsU0FBUyxTQUFBOztnQkFBRSxPQUFPLFNBQUE7O2dCQUMzQyxTQUFTLEdBQUcsT0FBTzs7Z0JBQUUsVUFBVSxHQUFHLE9BQU87WUFDN0MsUUFBUSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRTtnQkFDNUIsS0FBSyxRQUFRO29CQUNYLGFBQWEsR0FBRyxLQUFLLENBQUM7b0JBQ3RCLFNBQVMsR0FBRyxNQUFNLENBQUM7b0JBQ25CLFFBQVEsR0FBRyxNQUFNLENBQUM7b0JBQ2xCLE9BQU8sR0FBRyxPQUFPLENBQUM7b0JBQ2xCLFVBQVUsR0FBRyxHQUFHLENBQUM7b0JBQ2pCLE1BQU07Z0JBQ1IsS0FBSyxNQUFNO29CQUNULGFBQWEsR0FBRyxRQUFRLENBQUM7b0JBQ3pCLFFBQVEsR0FBRyxNQUFNLENBQUM7b0JBQ2xCLFNBQVMsR0FBRyxNQUFNLENBQUM7b0JBQ25CLE1BQU07Z0JBQ1IsS0FBSyxPQUFPO29CQUNWLFFBQVEsR0FBRyxNQUFNLENBQUM7b0JBQ2xCLFNBQVMsR0FBRyxNQUFNLENBQUM7b0JBQ25CLGFBQWEsR0FBRyxRQUFRLENBQUM7b0JBQ3pCLFNBQVMsR0FBRyxHQUFHLENBQUM7b0JBQ2hCLE1BQU07Z0JBQ1I7b0JBQ0UsTUFBTTtvQkFDTixhQUFhLEdBQUcsS0FBSyxDQUFDO29CQUN0QixTQUFTLEdBQUcsTUFBTSxDQUFDO29CQUNuQixRQUFRLEdBQUcsTUFBTSxDQUFDO29CQUNsQixNQUFNO2FBQ1Q7WUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDbEUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBQ3BFLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztZQUNqRSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsU0FBUyxDQUFDLENBQUM7WUFDbkUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsZ0JBQWdCLEVBQUUsYUFBYSxDQUFDLENBQUM7U0FDaEY7SUFDSCxDQUFDOztnQkFwREYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxpQkFBaUI7b0JBQzNCLHNSQUErQztvQkFFL0MsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07O2lCQUNoRDs7OztnQkFUUSxjQUFjO2dCQUR3QixTQUFTO2dCQUFwQyxVQUFVOzs7d0JBYTNCLEtBQUs7eUJBQ0wsS0FBSzs7SUE2Q1IsOEJBQUM7Q0FBQSxBQXRERCxJQXNEQztTQWhEWSx1QkFBdUI7OztJQUVsQyx3Q0FBNkI7O0lBQzdCLHlDQUFxQzs7SUFFekIsMENBQThCOzs7OztJQUFFLDJDQUEyQjs7Ozs7SUFBRSxxQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIElucHV0LCBPbkluaXQsIFJlbmRlcmVyMiwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgR2FsbGVyeVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlL2dhbGxlcnkuc2VydmljZSc7XHJcbmltcG9ydCB7IEdhbGxlcnlTdGF0ZSB9IGZyb20gJy4uLy4uL3NlcnZpY2UvZ2FsbGVyeS5zdGF0ZSc7XHJcbmltcG9ydCB7IEdhbGxlcnlCdWxsZXRDb25maWcgfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnYWxsZXJ5LWJ1bGxldHMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nYWxsZXJ5LWJ1bGxldHMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2dhbGxlcnktYnVsbGV0cy5jb21wb25lbnQuc2NzcyddLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5QnVsbGV0c0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHN0YXRlOiBHYWxsZXJ5U3RhdGU7XHJcbiAgQElucHV0KCkgY29uZmlnOiBHYWxsZXJ5QnVsbGV0Q29uZmlnO1xyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgZ2FsbGVyeTogR2FsbGVyeVNlcnZpY2UsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHJpdmF0ZSBlbDogRWxlbWVudFJlZikge1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBpZiAodGhpcy5jb25maWcucG9zaXRpb24pIHtcclxuXHJcbiAgICAgIGxldCBjb250RGlyZWN0aW9uLCBjb25XaWR0aCwgY29uSGVpZ2h0LCBjb250VG9wO1xyXG4gICAgICBsZXQgaG9zdFJpZ2h0ID0gJ3Vuc2V0JywgaG9zdEJvdHRvbSA9ICd1bnNldCc7XHJcbiAgICAgIHN3aXRjaCAodGhpcy5jb25maWcucG9zaXRpb24pIHtcclxuICAgICAgICBjYXNlICdib3R0b20nOlxyXG4gICAgICAgICAgY29udERpcmVjdGlvbiA9ICdyb3cnO1xyXG4gICAgICAgICAgY29uSGVpZ2h0ID0gJ2F1dG8nO1xyXG4gICAgICAgICAgY29uV2lkdGggPSAnMTAwJSc7XHJcbiAgICAgICAgICBjb250VG9wID0gJ3Vuc2V0JztcclxuICAgICAgICAgIGhvc3RCb3R0b20gPSAnMCc7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdsZWZ0JzpcclxuICAgICAgICAgIGNvbnREaXJlY3Rpb24gPSAnY29sdW1uJztcclxuICAgICAgICAgIGNvbldpZHRoID0gJ2F1dG8nO1xyXG4gICAgICAgICAgY29uSGVpZ2h0ID0gJzEwMCUnO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAncmlnaHQnOlxyXG4gICAgICAgICAgY29uV2lkdGggPSAnYXV0byc7XHJcbiAgICAgICAgICBjb25IZWlnaHQgPSAnMTAwJSc7XHJcbiAgICAgICAgICBjb250RGlyZWN0aW9uID0gJ2NvbHVtbic7XHJcbiAgICAgICAgICBob3N0UmlnaHQgPSAnMCc7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgLy8gdG9wXHJcbiAgICAgICAgICBjb250RGlyZWN0aW9uID0gJ3Jvdyc7XHJcbiAgICAgICAgICBjb25IZWlnaHQgPSAnYXV0byc7XHJcbiAgICAgICAgICBjb25XaWR0aCA9ICcxMDAlJztcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3JpZ2h0JywgaG9zdFJpZ2h0KTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdib3R0b20nLCBob3N0Qm90dG9tKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICd3aWR0aCcsIGNvbldpZHRoKTtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdoZWlnaHQnLCBjb25IZWlnaHQpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ2ZsZXgtZGlyZWN0aW9uJywgY29udERpcmVjdGlvbik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=