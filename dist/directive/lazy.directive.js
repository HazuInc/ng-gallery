var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Directive, ElementRef, Input, Output, EventEmitter, Renderer2 } from '@angular/core';
import { Subject, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
var LazyDirective = /** @class */ (function () {
    function LazyDirective(el, renderer) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        /** A subject to emit only last selected image */
        this.lazyWorker = new Subject();
        this.lazyLoad = new EventEmitter(false);
        // this.lazyTest.switchMap((done) => (done) ? Observable.of(done).delay(1000) : Observable.of(done)
        this.lazyWorker.pipe(switchMap(function (done) { return of(done); }))
            .subscribe(function (img) {
            if (img) {
                _this.renderer.setProperty(_this.el.nativeElement, 'src', img);
                _this.lazyLoad.emit(true);
            }
            else {
                _this.lazyLoad.emit(false);
            }
        });
    }
    Object.defineProperty(LazyDirective.prototype, "lazyImage", {
        // Image source
        set: function (imagePath) {
            this.getImage(imagePath);
        },
        enumerable: true,
        configurable: true
    });
    LazyDirective.prototype.getImage = function (imagePath) {
        var _this = this;
        this.lazyWorker.next('');
        var img = this.renderer.createElement('img');
        img.src = imagePath;
        img.onload = function () {
            _this.lazyWorker.next(imagePath);
        };
        img.onerror = function (err) {
            console.error('[GalleryLazyDirective]:', err);
            _this.lazyWorker.next('');
        };
    };
    __decorate([
        Input('lazyImage'),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], LazyDirective.prototype, "lazyImage", null);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], LazyDirective.prototype, "lazyLoad", void 0);
    LazyDirective = __decorate([
        Directive({
            selector: '[lazyImage]'
        }),
        __metadata("design:paramtypes", [ElementRef, Renderer2])
    ], LazyDirective);
    return LazyDirective;
}());
export { LazyDirective };
//# sourceMappingURL=lazy.directive.js.map