var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ChangeDetectionStrategy, Component, Input, ElementRef, Renderer2 } from '@angular/core';
import { GalleryService } from '../../service/gallery.service';
import { animation } from './gallery-image.animation';
var GalleryImageComponent = /** @class */ (function () {
    function GalleryImageComponent(gallery, el, renderer) {
        this.gallery = gallery;
        this.el = el;
        this.renderer = renderer;
    }
    GalleryImageComponent.prototype.ngOnInit = function () {
        var _this = this;
        /** Enable gestures */
        if (this.config.gestures) {
            if (typeof Hammer === 'undefined') {
                throw Error('[NgGallery]: HammerJS is undefined, make sure it is loaded');
            }
            else {
                var el_1 = this.el.nativeElement;
                var mc = new Hammer(el_1);
                mc.on('panstart', function () {
                    _this.renderer.removeClass(el_1, 'g-pan-reset');
                });
                mc.on('panend', function () {
                    _this.renderer.addClass(el_1, 'g-pan-reset');
                });
                mc.on('pan', function (e) {
                    _this.renderer.setStyle(el_1, 'transform', "translate3d(" + e.deltaX + "px, 0px, 0px)");
                });
                /** Swipe next and prev */
                mc.on('swipeleft', function () {
                    _this.gallery.next();
                });
                mc.on('swiperight', function () {
                    _this.gallery.prev();
                });
            }
        }
    };
    GalleryImageComponent.prototype.imageLoad = function (done) {
        this.loading = !done;
        /** TODO: Add some animation */
        if (!done) {
            this.animate = 'none';
        }
        else {
            switch (this.config.animation) {
                case 'fade':
                    this.animate = 'fade';
                    break;
                default:
                    this.animate = 'none';
            }
            //     this.animate = 'none';
            //   case 'slide':
            //     this.animate = (this.state.currIndex > this.state.prevIndex) ? 'slideLeft' : 'slideRight';
            //     break;
            //   default:
            //     this.animate = 'none';
        }
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], GalleryImageComponent.prototype, "state", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], GalleryImageComponent.prototype, "config", void 0);
    GalleryImageComponent = __decorate([
        Component({
            selector: 'gallery-image',
            template: "\n    <div [@imgAnimate]=\"animate\" class=\"g-image\">\n      <img [lazyImage]=\"state.images[state.currIndex].src\" (lazyLoad)=\"imageLoad($event)\">\n    </div>\n\n    <gallery-loader *ngIf=\"loading\" [config]=\"config.loader\"></gallery-loader>\n  ",
            styles: ["\n    :host{-ms-flex-order:1;order:1;-ms-flex:1;flex:1;flex-direction:column;transform:translateZ(0)}.g-image,:host{display:-ms-flexbox;display:flex;-ms-flex-direction:column}.g-image{position:absolute;left:0;right:0;top:0;bottom:0;background-repeat:no-repeat;background-size:contain;background-position:50%;z-index:1;flex-direction:column;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center}.g-image img{box-shadow:0 0 4px rgba(0,0,0,.3);pointer-events:none;display:block;max-width:100%;max-height:100%}\n  "],
            changeDetection: ChangeDetectionStrategy.OnPush,
            animations: animation
        }),
        __metadata("design:paramtypes", [GalleryService, ElementRef, Renderer2])
    ], GalleryImageComponent);
    return GalleryImageComponent;
}());
export { GalleryImageComponent };
//# sourceMappingURL=gallery-image.component.js.map