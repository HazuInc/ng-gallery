var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ChangeDetectionStrategy, ElementRef, Renderer2 } from '@angular/core';
import { get } from '../../utils/get';
import { GalleryService } from '../../service/gallery.service';
var GalleryThumbComponent = /** @class */ (function () {
    function GalleryThumbComponent(gallery, el, renderer) {
        this.gallery = gallery;
        this.el = el;
        this.renderer = renderer;
    }
    GalleryThumbComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contStyle = this.getContainerStyle();
        /** Enable gestures */
        if (this.gallery.config.gestures) {
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
                /** Pan left and right */
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
    GalleryThumbComponent.prototype.translateThumbs = function () {
        var x = get(this.state, 'currIndex', 0) * get(this.config, 'width', 0) + get(this.config, 'width', 0) / 2;
        return "translate3d(" + -x + "px, 0, 0)";
    };
    GalleryThumbComponent.prototype.getContainerStyle = function () {
        /** Set thumbnails position (top, bottom) */
        var order = this.config.position === 'top' ? 0 : 2;
        this.renderer.setStyle(this.el.nativeElement, 'order', order);
        return {
            height: this.config.height + 'px',
            margin: this.config.space + 'px'
        };
    };
    GalleryThumbComponent.prototype.getThumbImage = function (i) {
        /** Use thumbnail if presented */
        var image = get(this.state, 'images', [])[i] || {};
        return "url(" + (image.thumbnail || image.src) + ")";
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], GalleryThumbComponent.prototype, "state", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], GalleryThumbComponent.prototype, "config", void 0);
    GalleryThumbComponent = __decorate([
        Component({
            selector: 'gallery-thumb',
            template: "\n    <div #container class=\"g-thumb-container\" [ngStyle]=\"contStyle\">\n\n      <div class=\"g-thumbs\" [style.transform]=\"translateThumbs()\">\n\n        <div class=\"g-thumb\" *ngFor=\"let image of state.images; let i = index\"\n             [class.g-thumb-current]=\"i === state.currIndex\"\n             [style.width.px]=\"gallery.config.thumbnails.width\"\n             [style.height.px]=\"gallery.config.thumbnails.height\">\n\n          <div class=\"g-thumb-image\" [style.backgroundImage]=\"getThumbImage(i)\"\n               [tap] (tapClick)=\"gallery.set(i)\">\n          </div>\n        </div>\n\n      </div>\n\n    </div>\n  ",
            styles: ["\n    :host{display:block;z-index:1}.g-thumb-container{position:relative;z-index:2;width:100%;height:100%;left:0}.g-thumb-container,.g-thumbs{top:0;display:-ms-flexbox;display:flex}.g-thumbs{position:absolute;left:50%;-ms-flex-align:center;align-items:center;transition:transform .3s ease-in;transform:translateZ(0)}.g-thumb{padding:8px;opacity:.5;transition:all .2s linear}.g-thumb-image{cursor:pointer;width:100%;height:100%;background-position:50%;background-size:cover;box-shadow:0 0 4px rgba(0,0,0,.3)}.g-thumb-current{opacity:1;padding:2px}\n  "],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [GalleryService, ElementRef, Renderer2])
    ], GalleryThumbComponent);
    return GalleryThumbComponent;
}());
export { GalleryThumbComponent };
//# sourceMappingURL=gallery-thumb.component.js.map