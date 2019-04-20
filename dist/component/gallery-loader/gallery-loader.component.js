var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GalleryService } from '../../service/gallery.service';
var GalleryLoaderComponent = /** @class */ (function () {
    function GalleryLoaderComponent(gallery) {
        this.gallery = gallery;
    }
    GalleryLoaderComponent.prototype.ngOnInit = function () {
        this.icon = this.getIcon();
        this.styles = this.getStyle();
    };
    GalleryLoaderComponent.prototype.getIcon = function () {
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
    GalleryLoaderComponent.prototype.getStyle = function () {
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
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], GalleryLoaderComponent.prototype, "config", void 0);
    GalleryLoaderComponent = __decorate([
        Component({
            selector: 'gallery-loader',
            template: "\n    <div class=\"g-loader\" [ngStyle]=\"styles\">\n      <img [src]=\"icon\" [style.width]=\"config.width\" [style.height]=\"config.height\"/>\n    </div>\n  ",
            styles: ["\n    *{box-sizing:border-box}:host{z-index:1}.g-loader{z-index:2;position:absolute;width:100%;height:100%;display:-ms-flexbox;display:flex;padding:1em}\n  "],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [GalleryService])
    ], GalleryLoaderComponent);
    return GalleryLoaderComponent;
}());
export { GalleryLoaderComponent };
//# sourceMappingURL=gallery-loader.component.js.map