var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, Renderer2, Input } from '@angular/core';
import { GalleryService } from '../service/gallery.service';
import { isEqual } from '../utils/index';
import { from } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
var GalleryDirective = /** @class */ (function () {
    function GalleryDirective(el, renderer, gallery) {
        this.el = el;
        this.renderer = renderer;
        this.gallery = gallery;
        this.srcList = [];
        this.subtree = '';
    }
    GalleryDirective.prototype.ngOnInit = function () {
        var _this = this;
        var target = this.el.nativeElement;
        var updateGallery = function () {
            // skip if content is the same 
            if (!target || (_this.content && _this.content === target.innerText)) {
                return;
            }
            else {
                _this.content = target.innerText;
            }
            var images = [];
            var classes = (_this.gallerize) ? _this.gallerize.split(' ').map(function (className) { return '.' + className; }) : '';
            // get all img elements from content
            var imageElements = target.querySelectorAll(_this.subtree + (" img" + classes));
            if (!imageElements || !imageElements.length) {
                _this.srcList = [];
                return;
            }
            var srcs = Array.from(imageElements).map(function (elem) {
                return elem.dataset && elem.dataset.originalImageUrl ? elem.dataset.originalImageUrl : elem.src;
            });
            //let srcs = pluck(imageElements, 'src');
            var isSame = isEqual(_this.srcList, srcs);
            _this.srcList = srcs;
            from(imageElements).pipe(map(function (img, i) {
                // add click event to the images
                var src = img.dataset && img.dataset.originalImageUrl ? img.dataset.originalImageUrl : img.src;
                _this.renderer.setStyle(img, 'cursor', 'pointer');
                if (!_this.filter || _this.filter(img)) {
                    _this.renderer.setProperty(img, 'onclick', function () {
                        if (_this.srcList.indexOf(src) !== -1) {
                            _this.gallery.set(i);
                        }
                    });
                }
                // create an image item
                images.push({
                    src: src,
                    text: img.alt
                });
            }), finalize(function () {
                if (!isSame) {
                    _this.gallery.load(images);
                }
            }))
                .subscribe();
        };
        // create an observer instance
        var observer = new MutationObserver(updateGallery);
        var config = { subtree: true, childList: true };
        observer.observe(target, config);
        updateGallery();
    };
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], GalleryDirective.prototype, "gallerize", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], GalleryDirective.prototype, "subtree", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Function)
    ], GalleryDirective.prototype, "filter", void 0);
    GalleryDirective = __decorate([
        Directive({
            selector: '[gallerize]'
        }),
        __metadata("design:paramtypes", [ElementRef, Renderer2, GalleryService])
    ], GalleryDirective);
    return GalleryDirective;
}());
export { GalleryDirective };
//# sourceMappingURL=gallery.directive.js.map