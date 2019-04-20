var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ElementRef, Input, Renderer2, ChangeDetectionStrategy } from '@angular/core';
import { GalleryService } from '../../service/gallery.service';
var GalleryBulletsComponent = /** @class */ (function () {
    function GalleryBulletsComponent(gallery, renderer, el) {
        this.gallery = gallery;
        this.renderer = renderer;
        this.el = el;
    }
    GalleryBulletsComponent.prototype.ngOnInit = function () {
        if (this.config.position) {
            var contDirection = void 0, conWidth = void 0, conHeight = void 0, contTop = void 0;
            var hostRight = 'unset', hostBottom = 'unset';
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
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], GalleryBulletsComponent.prototype, "state", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], GalleryBulletsComponent.prototype, "config", void 0);
    GalleryBulletsComponent = __decorate([
        Component({
            selector: 'gallery-bullets',
            template: "\n    <div class=\"g-bullet\"\n         *ngFor=\"let image of state.images; let i = index\"\n         [class.g-bullet-curr]=\"i === state.currIndex\"\n         (click)=\"gallery.set(i)\">\n\n      <div class=\"g-bullet-inner\" [ngStyle]=\"config.style\"></div>\n\n    </div>\n  ",
            styles: ["\n    :host{position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}.g-bullet,:host{display:-ms-flexbox;display:flex}.g-bullet{cursor:pointer;z-index:1}.g-bullet-inner{margin:1em;height:4px;width:4px;background-color:hsla(0,0%,100%,.5);border-radius:2px;box-shadow:0 0 6px rgba(0,0,0,.8);transition:all .2s ease}.g-bullet-curr .g-bullet-inner{transform:scale(1.5);background-color:#fff}\n  "],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [GalleryService, Renderer2, ElementRef])
    ], GalleryBulletsComponent);
    return GalleryBulletsComponent;
}());
export { GalleryBulletsComponent };
//# sourceMappingURL=gallery-bullets.component.js.map