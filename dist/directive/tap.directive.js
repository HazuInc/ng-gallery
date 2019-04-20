/** This directive enable tap if HammerJS is loaded, otherwise it uses the normal click event (useful for thumbnail click) */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, EventEmitter, Input, Output, Renderer2 } from '@angular/core';
import { GalleryService } from '../service/gallery.service';
var TapDirective = /** @class */ (function () {
    function TapDirective(gallery, el, renderer) {
        this.gallery = gallery;
        this.el = el;
        this.renderer = renderer;
        this.tapClick = new EventEmitter();
    }
    TapDirective.prototype.ngOnInit = function () {
        this.setTapEvent();
    };
    /** Enable gestures if hammer is loaded */
    TapDirective.prototype.setTapEvent = function () {
        var _this = this;
        if (this.gallery.config.gestures) {
            if (typeof Hammer === 'undefined') {
                throw Error('[NgGallery]: HammerJS is undefined, make sure it is loaded');
            }
            else {
                /** Use tap for click event */
                if (typeof Hammer !== 'undefined') {
                    var mc = new Hammer(this.el.nativeElement);
                    mc.on('tap', function () {
                        _this.tapClick.emit();
                    });
                }
            }
        }
        else {
            /** Use normal click event */
            this.renderer.setProperty(this.el.nativeElement, 'onclick', function () {
                _this.tapClick.emit();
            });
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], TapDirective.prototype, "tap", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], TapDirective.prototype, "tapClick", void 0);
    TapDirective = __decorate([
        Directive({
            selector: '[tap]'
        }),
        __metadata("design:paramtypes", [GalleryService, ElementRef, Renderer2])
    ], TapDirective);
    return TapDirective;
}());
export { TapDirective };
//# sourceMappingURL=tap.directive.js.map