var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ElementRef, Renderer2, ChangeDetectionStrategy } from '@angular/core';
var GalleryTextComponent = /** @class */ (function () {
    function GalleryTextComponent(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    GalleryTextComponent.prototype.ngOnInit = function () {
        var el = this.el.nativeElement;
        // text overlay
        if (this.config.overlay) {
            this.renderer.setStyle(el, 'position', 'absolute');
        }
        // text position
        if (this.config.position === 'top') {
            this.renderer.setStyle(el, 'order', 0);
            this.renderer.setStyle(el, 'top', 0);
            this.renderer.setStyle(el, 'bottom', 'unset');
        }
        else {
            this.renderer.setStyle(el, 'order', 2);
            this.renderer.setStyle(el, 'top', 'unset');
            this.renderer.setStyle(el, 'bottom', 0);
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], GalleryTextComponent.prototype, "state", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], GalleryTextComponent.prototype, "config", void 0);
    GalleryTextComponent = __decorate([
        Component({
            selector: 'gallery-text',
            template: "\n    <div class=\"g-text-container\" [ngStyle]=\"config.style\">\n      <div *ngIf=\"config.text\" class=\"g-text\" [innerHtml]=\"state.images[state.currIndex]?.text\">\n      </div>\n      <div *ngIf=\"config.counter\" class=\"g-number\">\n        {{(state.currIndex + 1) + '/' + state.images.length}}\n      </div>\n    </div>\n  ",
            styles: ["\n    *{box-sizing:border-box}:host{position:relative;left:0;right:0;z-index:1}.g-text-container{padding:1em 2em;color:#ccc;font-size:13px;display:-ms-flexbox;display:flex;-ms-flex-direction:row;flex-direction:row;-ms-flex-line-pack:center;align-content:center;background-clip:padding-box;-webkit-font-smoothing:antialiased}.g-text{-ms-flex:1;flex:1}\n  "],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [ElementRef, Renderer2])
    ], GalleryTextComponent);
    return GalleryTextComponent;
}());
export { GalleryTextComponent };
//# sourceMappingURL=gallery-text.component.js.map