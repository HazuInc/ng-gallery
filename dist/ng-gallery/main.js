(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/component/gallery-bullets/gallery-bullets.component.html":
/*!**********************************************************************!*\
  !*** ./src/component/gallery-bullets/gallery-bullets.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"g-bullet\"\r\n     *ngFor=\"let image of state.images; let i = index\"\r\n     [class.g-bullet-curr]=\"i === state.currIndex\"\r\n     (click)=\"gallery.set(i)\">\r\n\r\n  <div class=\"g-bullet-inner\" [ngStyle]=\"config.style\"></div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/component/gallery-bullets/gallery-bullets.component.scss":
/*!**********************************************************************!*\
  !*** ./src/component/gallery-bullets/gallery-bullets.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: absolute;\n  display: flex;\n  align-items: center;\n  justify-content: center; }\n\n.g-bullet {\n  cursor: pointer;\n  display: flex;\n  z-index: 300; }\n\n.g-bullet-inner {\n  margin: 1em;\n  height: 4px;\n  width: 4px;\n  background-color: rgba(255, 255, 255, 0.5);\n  border-radius: 2px;\n  box-shadow: 0 0 6px rgba(0, 0, 0, 0.8);\n  transition: all ease 0.2s; }\n\n.g-bullet-curr .g-bullet-inner {\n  transform: scale(1.5);\n  background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnQvZ2FsbGVyeS1idWxsZXRzL0Q6XFxfd29ya1dvd2FcXFNvZnRncmVhdFxcbmctZ2FsbGVyeS9zcmNcXGNvbXBvbmVudFxcZ2FsbGVyeS1idWxsZXRzXFxnYWxsZXJ5LWJ1bGxldHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQTs7QUFHekI7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiLFlBQVksRUFBQTs7QUFHZDtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsVUFBVTtFQUNWLDBDQUEyQjtFQUMzQixrQkFBa0I7RUFDbEIsc0NBQTZCO0VBQzdCLHlCQUF5QixFQUFBOztBQUczQjtFQUNFLHFCQUFxQjtFQUNyQix1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvY29tcG9uZW50L2dhbGxlcnktYnVsbGV0cy9nYWxsZXJ5LWJ1bGxldHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmctYnVsbGV0IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB6LWluZGV4OiAzMDA7XHJcbn1cclxuXHJcbi5nLWJ1bGxldC1pbm5lciB7XHJcbiAgbWFyZ2luOiAxZW07XHJcbiAgaGVpZ2h0OiA0cHg7XHJcbiAgd2lkdGg6IDRweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCNmZmYsIDAuNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGJveC1zaGFkb3c6IDAgMCA2cHggcmdiYSgjMDAwLCAwLjgpO1xyXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlIDAuMnM7XHJcbn1cclxuXHJcbi5nLWJ1bGxldC1jdXJyIC5nLWJ1bGxldC1pbm5lciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/component/gallery-bullets/gallery-bullets.component.ts":
/*!********************************************************************!*\
  !*** ./src/component/gallery-bullets/gallery-bullets.component.ts ***!
  \********************************************************************/
/*! exports provided: GalleryBulletsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryBulletsComponent", function() { return GalleryBulletsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_gallery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/gallery.service */ "./src/service/gallery.service.ts");



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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GalleryBulletsComponent.prototype, "state", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GalleryBulletsComponent.prototype, "config", void 0);
    GalleryBulletsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gallery-bullets',
            template: __webpack_require__(/*! ./gallery-bullets.component.html */ "./src/component/gallery-bullets/gallery-bullets.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./gallery-bullets.component.scss */ "./src/component/gallery-bullets/gallery-bullets.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_gallery_service__WEBPACK_IMPORTED_MODULE_2__["GalleryService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], GalleryBulletsComponent);
    return GalleryBulletsComponent;
}());



/***/ }),

/***/ "./src/component/gallery-image/gallery-image.animation.ts":
/*!****************************************************************!*\
  !*** ./src/component/gallery-image/gallery-image.animation.ts ***!
  \****************************************************************/
/*! exports provided: animation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "animation", function() { return animation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var animation = [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('imgAnimate', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('fade', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('none => fade', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                opacity: 0
            }),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in')
        ])
    ])
];
// export const animation: AnimationEntryMetadata = [
//   trigger('imgIn', [
//     state('none', style({ opacity: 1 })),
//     state('slideRight', style({ transform: 'translate3d(0, 0, 0)' })),
//     state('slideLeft', style({ transform: 'translate3d(0, 0, 0)' })),
//     transition('slideLeft <=> *', [
//       style({
//         transform: 'translate3d(100%, 0, 0)'
//       }),
//       animate('0.5s ease-in')
//     ]),
//     transition('slideRight <=> *', [
//       style({
//         transform: 'translate3d(-100%, 0, 0)'
//       }),
//       animate('0.5s ease-in')
//     ]),
//     transition('fade <=> *', [
//       style({
//         opacity: 0
//       }),
//       animate('0.5s ease-in')
//     ]),
//   ]),
//   trigger('imgOut', [
//     state('slideRight', style({ transform: 'translate3d(100%, 0, 0)' })),
//     state('slideLeft', style({ transform: 'translate3d(-100%, 0, 0)' })),
//     state('fade', style({ opacity: 0 })),
//     state('none', style({ opacity: 1 })),
//     transition('slideLeft <=> *', [
//       style({
//         transform: 'translate3d(0, 0, 0)'
//       }),
//       animate('0.5s ease-in')
//     ]),
//     transition('slideRight <=> *', [
//       style({
//         transform: 'translate3d(0, 0, 0)'
//       }),
//       animate('0.5s ease-in')
//     ]),
//     transition('fade <=> *', [
//       style({
//         opacity: 1
//       }),
//       animate('1s ease-in')
//     ]),
//   ]),
// ];


/***/ }),

/***/ "./src/component/gallery-image/gallery-image.component.html":
/*!******************************************************************!*\
  !*** ./src/component/gallery-image/gallery-image.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [@imgAnimate]=\"animate\" class=\"g-image\">\r\n  <img [lazyImage]=\"state.images[state.currIndex].src\" (lazyLoad)=\"imageLoad($event)\">\r\n</div>\r\n\r\n<gallery-loader *ngIf=\"loading\" [config]=\"config.loader\"></gallery-loader>\r\n"

/***/ }),

/***/ "./src/component/gallery-image/gallery-image.component.scss":
/*!******************************************************************!*\
  !*** ./src/component/gallery-image/gallery-image.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  order: 1;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  transform: translate3d(0px, 0px, 0px); }\n\n.g-image {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center center;\n  z-index: 3;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n.g-image img {\n    box-shadow: 0 0 4px rgba(0, 0, 0, 0.3);\n    pointer-events: none;\n    display: block;\n    max-width: 100%;\n    max-height: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnQvZ2FsbGVyeS1pbWFnZS9EOlxcX3dvcmtXb3dhXFxTb2Z0Z3JlYXRcXG5nLWdhbGxlcnkvc3JjXFxjb21wb25lbnRcXGdhbGxlcnktaW1hZ2VcXGdhbGxlcnktaW1hZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxRQUFRO0VBQ1IsT0FBTztFQUNQLGFBQVk7RUFDWixzQkFBc0I7RUFDdEIscUNBQXFDLEVBQUE7O0FBR3ZDO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsTUFBTTtFQUNOLFNBQVM7RUFDVCw0QkFBNEI7RUFDNUIsd0JBQXdCO0VBQ3hCLGtDQUFrQztFQUNsQyxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CLEVBQUE7O0FBYnJCO0lBZ0JJLHNDQUFzQztJQUN0QyxvQkFBb0I7SUFDcEIsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0IsRUFBQSIsImZpbGUiOiJzcmMvY29tcG9uZW50L2dhbGxlcnktaW1hZ2UvZ2FsbGVyeS1pbWFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBvcmRlcjogMTtcclxuICBmbGV4OiAxO1xyXG4gIGRpc3BsYXk6ZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XHJcbn1cclxuXHJcbi5nLWltYWdlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgei1pbmRleDogMztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgaW1nIHtcclxuICAgIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/component/gallery-image/gallery-image.component.ts":
/*!****************************************************************!*\
  !*** ./src/component/gallery-image/gallery-image.component.ts ***!
  \****************************************************************/
/*! exports provided: GalleryImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryImageComponent", function() { return GalleryImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_gallery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/gallery.service */ "./src/service/gallery.service.ts");
/* harmony import */ var _gallery_image_animation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery-image.animation */ "./src/component/gallery-image/gallery-image.animation.ts");




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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GalleryImageComponent.prototype, "state", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GalleryImageComponent.prototype, "config", void 0);
    GalleryImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gallery-image',
            template: __webpack_require__(/*! ./gallery-image.component.html */ "./src/component/gallery-image/gallery-image.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            animations: _gallery_image_animation__WEBPACK_IMPORTED_MODULE_3__["animation"],
            styles: [__webpack_require__(/*! ./gallery-image.component.scss */ "./src/component/gallery-image/gallery-image.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_gallery_service__WEBPACK_IMPORTED_MODULE_2__["GalleryService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], GalleryImageComponent);
    return GalleryImageComponent;
}());



/***/ }),

/***/ "./src/component/gallery-loader/gallery-loader.component.html":
/*!********************************************************************!*\
  !*** ./src/component/gallery-loader/gallery-loader.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"g-loader\" [ngStyle]=\"styles\">\r\n  <img [src]=\"icon\" [style.width]=\"config.width\" [style.height]=\"config.height\"/>\r\n</div>\r\n"

/***/ }),

/***/ "./src/component/gallery-loader/gallery-loader.component.scss":
/*!********************************************************************!*\
  !*** ./src/component/gallery-loader/gallery-loader.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\n:host {\n  z-index: 2040; }\n\n.g-loader {\n  z-index: 2050;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  padding: 1em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnQvZ2FsbGVyeS1sb2FkZXIvRDpcXF93b3JrV293YVxcU29mdGdyZWF0XFxuZy1nYWxsZXJ5L3NyY1xcY29tcG9uZW50XFxnYWxsZXJ5LWxvYWRlclxcZ2FsbGVyeS1sb2FkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0IsRUFBQTs7QUFFeEI7RUFDRSxhQUFhLEVBQUE7O0FBR2Y7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvY29tcG9uZW50L2dhbGxlcnktbG9hZGVyL2dhbGxlcnktbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKntcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcbjpob3N0IHtcclxuICB6LWluZGV4OiAyMDQwO1xyXG59XHJcblxyXG4uZy1sb2FkZXIge1xyXG4gIHotaW5kZXg6IDIwNTA7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDFlbTtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/component/gallery-loader/gallery-loader.component.ts":
/*!******************************************************************!*\
  !*** ./src/component/gallery-loader/gallery-loader.component.ts ***!
  \******************************************************************/
/*! exports provided: GalleryLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryLoaderComponent", function() { return GalleryLoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_gallery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/gallery.service */ "./src/service/gallery.service.ts");



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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GalleryLoaderComponent.prototype, "config", void 0);
    GalleryLoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gallery-loader',
            template: __webpack_require__(/*! ./gallery-loader.component.html */ "./src/component/gallery-loader/gallery-loader.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./gallery-loader.component.scss */ "./src/component/gallery-loader/gallery-loader.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_gallery_service__WEBPACK_IMPORTED_MODULE_2__["GalleryService"]])
    ], GalleryLoaderComponent);
    return GalleryLoaderComponent;
}());



/***/ }),

/***/ "./src/component/gallery-main/gallery-main.component.html":
/*!****************************************************************!*\
  !*** ./src/component/gallery-main/gallery-main.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"g-container\" [style.flexDirection]=\"thumbDirection\" [ngStyle]=\"config.style\">\r\n\r\n  <gallery-thumb *ngIf=\"config.thumbnails\" [state]=\"state\" [config]=\"config.thumbnails\"\r\n                 [style.background]=\"config.style?.background\"></gallery-thumb>\r\n\r\n  <div class=\"g-box\">\r\n\r\n    <div class=\"g-image-box\">\r\n\r\n      <gallery-image [state]=\"state\" [config]=\"config\" (loading)=\"loading = $event\"></gallery-image>\r\n\r\n      <gallery-nav *ngIf=\"config.navigation\" [state]=\"state\"></gallery-nav>\r\n\r\n      <!--<div class=\"g-layer\" *ngIf=\"state.images[state.currIndex].layer\" [innerHtml]=\"state.images[state.currIndex].layer\"></div>-->\r\n\r\n    </div>\r\n\r\n    <gallery-text *ngIf=\"config.description\" [state]=\"state\" [config]=\"config.description\"></gallery-text>\r\n\r\n    <gallery-bullets *ngIf=\"config.bullets\" [state]=\"state\" [config]=\"config.bullets\"></gallery-bullets>\r\n\r\n    <gallery-player *ngIf=\"config.player\" [state]=\"state\" [config]=\"config.player\"></gallery-player>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/component/gallery-main/gallery-main.component.scss":
/*!****************************************************************!*\
  !*** ./src/component/gallery-main/gallery-main.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "gallery-main {\n  flex: 1;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n  gallery-main * {\n    box-sizing: border-box; }\n  .g-container {\n  overflow: hidden;\n  position: relative;\n  z-index: 200;\n  max-height: 100%;\n  max-width: 100%;\n  display: flex;\n  flex-direction: column; }\n  @media (max-width: 480px) {\n    .g-container {\n      width: 100% !important;\n      flex: 1;\n      flex-direction: column !important; } }\n  .g-box {\n  height: 100%; }\n  .g-box, .g-image-box {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  order: 1;\n  height: 100%; }\n  .g-layer {\n  position: absolute;\n  left: 0;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  z-index: 250; }\n  .g-pan-reset {\n  transition: all linear 0.3s;\n  transform: translate3d(0px, 0px, 0px) !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnQvZ2FsbGVyeS1tYWluL0Q6XFxfd29ya1dvd2FcXFNvZnRncmVhdFxcbmctZ2FsbGVyeS9zcmNcXGNvbXBvbmVudFxcZ2FsbGVyeS1tYWluXFxnYWxsZXJ5LW1haW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxPQUFPO0VBQ1AsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBO0VBTnJCO0lBUUksc0JBQXNCLEVBQUE7RUFJMUI7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0IsRUFBQTtFQUV0QjtJQVRGO01BVUksc0JBQXNCO01BQ3RCLE9BQU87TUFFUCxpQ0FBaUMsRUFBQSxFQUVwQztFQUNEO0VBQ0UsWUFBWSxFQUFBO0VBRWQ7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixPQUFPO0VBQ1AsUUFBUTtFQUNSLFlBQVksRUFBQTtFQUdkO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxZQUFZLEVBQUE7RUFHZDtFQUNFLDJCQUEyQjtFQUMzQixnREFBZ0QsRUFBQSIsImZpbGUiOiJzcmMvY29tcG9uZW50L2dhbGxlcnktbWFpbi9nYWxsZXJ5LW1haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJnYWxsZXJ5LW1haW4ge1xyXG4gIGZsZXg6IDE7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgKiB7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxufVxyXG5cclxuLmctY29udGFpbmVyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyMDA7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBmbGV4OiAxO1xyXG4gICAgLy8gZm9yY2UgaG9yaXpvbnRhbCBvbiBtb2JpbGVcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4gIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLmctYm94e1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG4uZy1ib3gsIC5nLWltYWdlLWJveCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4OiAxO1xyXG4gIG9yZGVyOiAxO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmctbGF5ZXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgei1pbmRleDogMjUwO1xyXG59XHJcblxyXG4uZy1wYW4tcmVzZXQge1xyXG4gIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgMC4zcztcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpICFpbXBvcnRhbnQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/component/gallery-main/gallery-main.component.ts":
/*!**************************************************************!*\
  !*** ./src/component/gallery-main/gallery-main.component.ts ***!
  \**************************************************************/
/*! exports provided: GalleryMainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryMainComponent", function() { return GalleryMainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_gallery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/gallery.service */ "./src/service/gallery.service.ts");



var GalleryMainComponent = /** @class */ (function () {
    function GalleryMainComponent(gallery) {
        this.gallery = gallery;
    }
    GalleryMainComponent.prototype.ngOnInit = function () {
        // shortcut for thumbnail config
        var thumbPos = this.config.thumbnails ? this.config.thumbnails.position : 0;
        this.thumbDirection = (thumbPos === 'left' || thumbPos === 'right') ? 'row' : 'column';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GalleryMainComponent.prototype, "state", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GalleryMainComponent.prototype, "config", void 0);
    GalleryMainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gallery-main',
            template: __webpack_require__(/*! ./gallery-main.component.html */ "./src/component/gallery-main/gallery-main.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [__webpack_require__(/*! ./gallery-main.component.scss */ "./src/component/gallery-main/gallery-main.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_gallery_service__WEBPACK_IMPORTED_MODULE_2__["GalleryService"]])
    ], GalleryMainComponent);
    return GalleryMainComponent;
}());



/***/ }),

/***/ "./src/component/gallery-modal/gallery-modal.component.html":
/*!******************************************************************!*\
  !*** ./src/component/gallery-modal/gallery-modal.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"gallery.state | async as state\">\r\n\r\n  <div *ngIf=\"state.active\" class=\"g-modal\">\r\n\r\n    <div class=\"g-btn-close-container\">\r\n      <div *ngIf=\"closeButton\" class=\"g-btn-close\" (click)=\"gallery.close()\"></div>\r\n    </div>\r\n\r\n    <gallery-main [@popup] [state]=\"state\" [config]=\"gallery.config\"></gallery-main>\r\n\r\n    <div class=\"g-overlay\" (click)=\"gallery.close()\"></div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/component/gallery-modal/gallery-modal.component.scss":
/*!******************************************************************!*\
  !*** ./src/component/gallery-modal/gallery-modal.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\n.g-modal {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.6);\n  z-index: 1000;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n@media (max-width: 480px) {\n    .g-modal {\n      padding: 0; } }\n\n.g-overlay {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0; }\n\n.g-btn-close-container {\n  width: 100%;\n  display: flex; }\n\n@media (max-width: 480px) {\n    .g-btn-close-container {\n      justify-content: flex-end; }\n      .g-btn-close-container .g-btn-close {\n        margin: 0.5em;\n        position: relative;\n        right: 0;\n        top: 0; } }\n\n.g-btn-close {\n  position: absolute;\n  right: 1em;\n  top: 1em;\n  z-index: 9999;\n  cursor: pointer;\n  width: 30px;\n  height: 30px;\n  transition: all linear 0.2s;\n  background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwIDUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MCA1MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxjaXJjbGUgc3R5bGU9ImZpbGw6I0Q3NUE0QTsiIGN4PSIyNSIgY3k9IjI1IiByPSIyNSIvPjxwb2x5bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgcG9pbnRzPSIxNiwzNCAyNSwyNSAzNCwxNiAiLz48cG9seWxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiIHBvaW50cz0iMTYsMTYgMjUsMjUgMzQsMzQgIi8+PC9zdmc+); }\n\n.g-btn-close:active {\n    transform: rotate(180deg) scale(0.9); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnQvZ2FsbGVyeS1tb2RhbC9EOlxcX3dvcmtXb3dhXFxTb2Z0Z3JlYXRcXG5nLWdhbGxlcnkvc3JjXFxjb21wb25lbnRcXGdhbGxlcnktbW9kYWxcXGdhbGxlcnktbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLFFBQVE7RUFDUixNQUFNO0VBQ04sU0FBUztFQUNULG9DQUE0QjtFQUM1QixhQUFhO0VBQ2IsZ0JBQWdCO0VBRWhCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQixFQUFBOztBQUVuQjtJQWZGO01BZ0JJLFVBQVUsRUFBQSxFQUdiOztBQUVEO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsTUFBTTtFQUNOLFNBQVMsRUFBQTs7QUFJWDtFQUNFLFdBQVc7RUFDWCxhQUFhLEVBQUE7O0FBRWI7SUFKRjtNQUtJLHlCQUF5QixFQUFBO01BTDdCO1FBT00sYUFBYTtRQUNiLGtCQUFrQjtRQUNsQixRQUFRO1FBQ1IsTUFBTSxFQUFBLEVBQ1A7O0FBSUw7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFFBQVE7RUFDUixhQUFhO0VBQ2IsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLHl5QkFBeXlCLEVBQUE7O0FBVDN5QjtJQVdJLG9DQUFxQyxFQUFBIiwiZmlsZSI6InNyYy9jb21wb25lbnQvZ2FsbGVyeS1tb2RhbC9nYWxsZXJ5LW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmctbW9kYWwge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIHRvcDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYShibGFjaywgMC42KTtcclxuICB6LWluZGV4OiAxMDAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLmctb3ZlcmxheSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJvdHRvbTogMDtcclxuXHJcbn1cclxuXHJcbi5nLWJ0bi1jbG9zZS1jb250YWluZXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgIC5nLWJ0bi1jbG9zZSB7XHJcbiAgICAgIG1hcmdpbjogMC41ZW07XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgcmlnaHQ6IDA7XHJcbiAgICAgIHRvcDogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5nLWJ0bi1jbG9zZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAxZW07XHJcbiAgdG9wOiAxZW07XHJcbiAgei1pbmRleDogOTk5OTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAzMHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCBsaW5lYXIgMC4ycztcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpYVhOdkxUZzROVGt0TVNJL1BqeHpkbWNnZG1WeWMybHZiajBpTVM0eElpQnBaRDBpUTJGd1lWOHhJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGh0Ykc1ek9uaHNhVzVyUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMM2hzYVc1cklpQjRQU0l3Y0hnaUlIazlJakJ3ZUNJZ2RtbGxkMEp2ZUQwaU1DQXdJRFV3SURVd0lpQnpkSGxzWlQwaVpXNWhZbXhsTFdKaFkydG5jbTkxYm1RNmJtVjNJREFnTUNBMU1DQTFNRHNpSUhodGJEcHpjR0ZqWlQwaWNISmxjMlZ5ZG1VaVBqeGphWEpqYkdVZ2MzUjViR1U5SW1acGJHdzZJMFEzTlVFMFFUc2lJR040UFNJeU5TSWdZM2s5SWpJMUlpQnlQU0l5TlNJdlBqeHdiMng1YkdsdVpTQnpkSGxzWlQwaVptbHNiRHB1YjI1bE8zTjBjbTlyWlRvalJrWkdSa1pHTzNOMGNtOXJaUzEzYVdSMGFEb3lPM04wY205clpTMXNhVzVsWTJGd09uSnZkVzVrTzNOMGNtOXJaUzF0YVhSbGNteHBiV2wwT2pFd095SWdjRzlwYm5SelBTSXhOaXd6TkNBeU5Td3lOU0F6TkN3eE5pQWlMejQ4Y0c5c2VXeHBibVVnYzNSNWJHVTlJbVpwYkd3NmJtOXVaVHR6ZEhKdmEyVTZJMFpHUmtaR1JqdHpkSEp2YTJVdGQybGtkR2c2TWp0emRISnZhMlV0YkdsdVpXTmhjRHB5YjNWdVpEdHpkSEp2YTJVdGJXbDBaWEpzYVcxcGREb3hNRHNpSUhCdmFXNTBjejBpTVRZc01UWWdNalVzTWpVZ016UXNNelFnSWk4K1BDOXpkbWMrKTtcclxuICAmOmFjdGl2ZSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpIHNjYWxlKDAuOTApO1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/component/gallery-modal/gallery-modal.component.ts":
/*!****************************************************************!*\
  !*** ./src/component/gallery-modal/gallery-modal.component.ts ***!
  \****************************************************************/
/*! exports provided: GalleryModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryModalComponent", function() { return GalleryModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
/* harmony import */ var _service_gallery_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/gallery.service */ "./src/service/gallery.service.ts");




var GalleryModalComponent = /** @class */ (function () {
    function GalleryModalComponent(gallery) {
        this.gallery = gallery;
        this.closeButton = true;
    }
    /** Activate keyboard for navigation */
    GalleryModalComponent.prototype.keyboardInput = function (event) {
        if (!this.gallery.state.getValue().active) {
            return;
        }
        event.stopPropagation();
        switch (event.keyCode) {
            case 37: // prev
                this.gallery.prev();
                break;
            case 39: // next
                this.gallery.next();
                break;
            case 13: // enter
                this.gallery.next();
                break;
            case 27: // esc
                this.gallery.close();
                break;
            default:
                return;
        }
    };
    GalleryModalComponent.prototype.ngOnDestroy = function () {
        this.gallery.reset();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GalleryModalComponent.prototype, "closeButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('body:keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], GalleryModalComponent.prototype, "keyboardInput", null);
    GalleryModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gallery-modal',
            template: __webpack_require__(/*! ./gallery-modal.component.html */ "./src/component/gallery-modal/gallery-modal.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('popup', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0.8, transform: 'scale(0.2) translate3d(0, 100px, 0)' })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('void => *', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0.8, transform: 'scale(0.2) translate3d(0, 100px, 0)' }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(300)
                    ]),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => void', [
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(300, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'scale(1)  translate3d(0, 0, 0)' }))
                    ])
                ])
            ],
            styles: [__webpack_require__(/*! ./gallery-modal.component.scss */ "./src/component/gallery-modal/gallery-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_gallery_service__WEBPACK_IMPORTED_MODULE_3__["GalleryService"]])
    ], GalleryModalComponent);
    return GalleryModalComponent;
}());



/***/ }),

/***/ "./src/component/gallery-nav/gallery-nav.component.html":
/*!**************************************************************!*\
  !*** ./src/component/gallery-nav/gallery-nav.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"state.images.length > 1\" class=\"g-nav\">\r\n\r\n  <div class=\"g-nav-prev\" (click)=\"gallery.prev()\">\r\n    <i class=\"prev-arrow-ico\"></i>\r\n  </div>\r\n\r\n  <div class=\"g-nav-next\" (click)=\"gallery.next()\">\r\n    <i class=\"next-arrow-ico\"></i>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/component/gallery-nav/gallery-nav.component.scss":
/*!**************************************************************!*\
  !*** ./src/component/gallery-nav/gallery-nav.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\n:host {\n  z-index: 201;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  display: flex; }\n\n@media (max-width: 480px) {\n    :host {\n      display: none; } }\n\n.g-nav {\n  flex: 1;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  opacity: 0;\n  transition: all linear 0.4s;\n  cursor: pointer; }\n\n.g-nav:hover {\n    opacity: 1; }\n\n.g-nav-next, .g-nav-prev {\n    display: flex;\n    align-items: center;\n    height: 100%;\n    opacity: 0.7;\n    position: relative;\n    overflow: hidden;\n    transition: all 0.2s ease;\n    z-index: 0; }\n\n.g-nav-next:hover, .g-nav-prev:hover {\n      opacity: 1; }\n\n.g-nav-next {\n    padding-right: 0.7em;\n    flex: 1;\n    justify-content: flex-end; }\n\n.g-nav-prev {\n    padding-left: 0.7em;\n    width: 20%; }\n\n.next-arrow-ico, .prev-arrow-ico {\n  width: 45px;\n  height: 80px; }\n\n.next-arrow-ico {\n  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PiAgPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQxNC40OTYgNDE0LjQ5NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDE0LjQ5NiA0MTQuNDk2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+IDxkZWZzIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGZpbHRlciBpZD0iZHJvcHNoYWRvdyIgPiAgPGZlR2F1c3NpYW5CbHVyIGluPSJTb3VyY2VBbHBoYSIgc3RkRGV2aWF0aW9uPSIzIi8+ICAgPGZlT2Zmc2V0IGR4PSIyIiBkeT0iMiIgcmVzdWx0PSJvZmZzZXRibHVyIi8+ICAgPGZlTWVyZ2U+IDxmZU1lcmdlTm9kZS8+PGZlTWVyZ2VOb2RlIGluPSJTb3VyY2VHcmFwaGljIi8+ICAgPC9mZU1lcmdlPjwvZmlsdGVyPjwvZGVmcz4gIDxwb2x5Z29uIHN0eWxlPSJmaWxsOiNmZmY7IiBmaWx0ZXI9InVybCgjZHJvcHNoYWRvdykiIHBvaW50cz0iMTE4LjEyNiwwIDg5Ljc5NiwyOC4yMzggMjY4LjIyMywyMDcuMjQ4IDg5Ljc5NiwzODYuMjU4IDExOC4xMjYsNDE0LjQ5NiAzMjQuNywyMDcuMjQ4ICIvPjwvc3ZnPg==) no-repeat center center; }\n\n.prev-arrow-ico {\n  background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MTQuNDk2IDQxNC40OTYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQxNC40OTYgNDE0LjQ5NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxkZWZzIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGZpbHRlciBpZD0iZHJvcHNoYWRvdyIgPiAgPGZlR2F1c3NpYW5CbHVyIGluPSJTb3VyY2VBbHBoYSIgc3RkRGV2aWF0aW9uPSIzIi8+ICAgPGZlT2Zmc2V0IGR4PSIyIiBkeT0iMiIgcmVzdWx0PSJvZmZzZXRibHVyIi8+ICAgPGZlTWVyZ2U+IDxmZU1lcmdlTm9kZS8+PGZlTWVyZ2VOb2RlIGluPSJTb3VyY2VHcmFwaGljIi8+ICAgPC9mZU1lcmdlPjwvZmlsdGVyPjwvZGVmcz48cG9seWdvbiBzdHlsZT0iZmlsbDojZmZmOyIgZmlsdGVyPSJ1cmwoI2Ryb3BzaGFkb3cpIiBwb2ludHM9IjMyNC43LDI4LjIzOCAyOTYuMzcsMCA4OS43OTYsMjA3LjI0OCAyOTYuMzcsNDE0LjQ5NiAzMjQuNywzODYuMjU4IDE0Ni4yNzMsMjA3LjI0OCAiLz48L3N2Zz4=) no-repeat center center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnQvZ2FsbGVyeS1uYXYvRDpcXF93b3JrV293YVxcU29mdGdyZWF0XFxuZy1nYWxsZXJ5L3NyY1xcY29tcG9uZW50XFxnYWxsZXJ5LW5hdlxcZ2FsbGVyeS1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0IsRUFBQTs7QUFFeEI7RUFDRSxZQUFZO0VBRVosa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxRQUFRO0VBQ1IsTUFBTTtFQUNOLFNBQVM7RUFDVCxhQUFhLEVBQUE7O0FBQ2I7SUFURjtNQVVJLGFBQWEsRUFBQSxFQUVoQjs7QUFFRDtFQUNFLE9BQU87RUFDUCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLGVBQWUsRUFBQTs7QUFQakI7SUFVSSxVQUFVLEVBQUE7O0FBR1o7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixZQUFZO0lBR1osa0JBQWlCO0lBQ2pCLGdCQUFlO0lBQ2YseUJBQXlCO0lBQ3pCLFVBQVMsRUFBQTs7QUFWVjtNQWFHLFVBQVUsRUFBQTs7QUFHZDtJQUNFLG9CQUFvQjtJQUNwQixPQUFPO0lBQ1AseUJBQXlCLEVBQUE7O0FBRTNCO0lBQ0UsbUJBQW1CO0lBQ25CLFVBQVUsRUFBQTs7QUFJZDtFQUNFLFdBQVc7RUFDWCxZQUFZLEVBQUE7O0FBT2Q7RUFDRSwyOUJBQTI5QixFQUFBOztBQUc3OUI7RUFDRSwrOEJBQSs4QixFQUFBIiwiZmlsZSI6InNyYy9jb21wb25lbnQvZ2FsbGVyeS1uYXYvZ2FsbGVyeS1uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIqe1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuOmhvc3R7XHJcbiAgei1pbmRleDogMjAxO1xyXG5cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgYm90dG9tOiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuLmctbmF2IHtcclxuICBmbGV4OiAxO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDAuNHM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgfVxyXG5cclxuICAmLW5leHQsICYtcHJldiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9wYWNpdHk6IDAuNztcclxuXHJcblxyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzpoaWRkZW47XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgei1pbmRleDowO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG4gIH1cclxuICAmLW5leHQge1xyXG4gICAgcGFkZGluZy1yaWdodDogMC43ZW07XHJcbiAgICBmbGV4OiAxO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICB9XHJcbiAgJi1wcmV2IHtcclxuICAgIHBhZGRpbmctbGVmdDogMC43ZW07XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gIH1cclxufVxyXG5cclxuLm5leHQtYXJyb3ctaWNvLCAucHJldi1hcnJvdy1pY28ge1xyXG4gIHdpZHRoOiA0NXB4O1xyXG4gIGhlaWdodDogODBweDtcclxuICAvL2ZpbHRlcjogdXJsKCNkcm9wc2hhZG93KTtcclxuICAvL2ZpbGw6IGJsYWNrO1xyXG4gIC8vd2Via2l0LWZpbHRlcjogZHJvcC1zaGFkb3coIDJweCAycHggNHB4IHJnYmEoMCwwLDAsLjQpICk7XHJcbiAgLy9maWx0ZXI6IGRyb3Atc2hhZG93KCAycHggMnB4IDRweCByZ2JhKDAsMCwwLC40KSApO1xyXG59XHJcblxyXG4ubmV4dC1hcnJvdy1pY28ge1xyXG4gIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlhWE52TFRnNE5Ua3RNU0kvUGlBZ1BITjJaeUIyWlhKemFXOXVQU0l4TGpFaUlHbGtQU0pNWVhsbGNsOHhJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGh0Ykc1ek9uaHNhVzVyUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMM2hzYVc1cklpQjRQU0l3Y0hnaUlIazlJakJ3ZUNJZ2RtbGxkMEp2ZUQwaU1DQXdJRFF4TkM0ME9UWWdOREUwTGpRNU5pSWdjM1I1YkdVOUltVnVZV0pzWlMxaVlXTnJaM0p2ZFc1a09tNWxkeUF3SURBZ05ERTBMalE1TmlBME1UUXVORGsyT3lJZ2VHMXNPbk53WVdObFBTSndjbVZ6WlhKMlpTSStJRHhrWldaeklIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK1BHWnBiSFJsY2lCcFpEMGlaSEp2Y0hOb1lXUnZkeUlnUGlBZ1BHWmxSMkYxYzNOcFlXNUNiSFZ5SUdsdVBTSlRiM1Z5WTJWQmJIQm9ZU0lnYzNSa1JHVjJhV0YwYVc5dVBTSXpJaTgrSUNBZ1BHWmxUMlptYzJWMElHUjRQU0l5SWlCa2VUMGlNaUlnY21WemRXeDBQU0p2Wm1aelpYUmliSFZ5SWk4K0lDQWdQR1psVFdWeVoyVStJRHhtWlUxbGNtZGxUbTlrWlM4K1BHWmxUV1Z5WjJWT2IyUmxJR2x1UFNKVGIzVnlZMlZIY21Gd2FHbGpJaTgrSUNBZ1BDOW1aVTFsY21kbFBqd3ZabWxzZEdWeVBqd3ZaR1ZtY3o0Z0lEeHdiMng1WjI5dUlITjBlV3hsUFNKbWFXeHNPaU5tWm1ZN0lpQm1hV3gwWlhJOUluVnliQ2dqWkhKdmNITm9ZV1J2ZHlraUlIQnZhVzUwY3owaU1URTRMakV5Tml3d0lEZzVMamM1Tml3eU9DNHlNemdnTWpZNExqSXlNeXd5TURjdU1qUTRJRGc1TGpjNU5pd3pPRFl1TWpVNElERXhPQzR4TWpZc05ERTBMalE1TmlBek1qUXVOeXd5TURjdU1qUTRJQ0l2UGp3dmMzWm5QZz09KSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxufVxyXG5cclxuLnByZXYtYXJyb3ctaWNvIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpYVhOdkxUZzROVGt0TVNJL1BqeHpkbWNnZG1WeWMybHZiajBpTVM0eElpQnBaRDBpVEdGNVpYSmZNU0lnZUcxc2JuTTlJbWgwZEhBNkx5OTNkM2N1ZHpNdWIzSm5Mekl3TURBdmMzWm5JaUI0Yld4dWN6cDRiR2x1YXowaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1UazVPUzk0YkdsdWF5SWdlRDBpTUhCNElpQjVQU0l3Y0hnaUlIWnBaWGRDYjNnOUlqQWdNQ0EwTVRRdU5EazJJRFF4TkM0ME9UWWlJSE4wZVd4bFBTSmxibUZpYkdVdFltRmphMmR5YjNWdVpEcHVaWGNnTUNBd0lEUXhOQzQwT1RZZ05ERTBMalE1TmpzaUlIaHRiRHB6Y0dGalpUMGljSEpsYzJWeWRtVWlQanhrWldaeklIaHRiRzV6UFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eU1EQXdMM04yWnlJK1BHWnBiSFJsY2lCcFpEMGlaSEp2Y0hOb1lXUnZkeUlnUGlBZ1BHWmxSMkYxYzNOcFlXNUNiSFZ5SUdsdVBTSlRiM1Z5WTJWQmJIQm9ZU0lnYzNSa1JHVjJhV0YwYVc5dVBTSXpJaTgrSUNBZ1BHWmxUMlptYzJWMElHUjRQU0l5SWlCa2VUMGlNaUlnY21WemRXeDBQU0p2Wm1aelpYUmliSFZ5SWk4K0lDQWdQR1psVFdWeVoyVStJRHhtWlUxbGNtZGxUbTlrWlM4K1BHWmxUV1Z5WjJWT2IyUmxJR2x1UFNKVGIzVnlZMlZIY21Gd2FHbGpJaTgrSUNBZ1BDOW1aVTFsY21kbFBqd3ZabWxzZEdWeVBqd3ZaR1ZtY3o0OGNHOXNlV2R2YmlCemRIbHNaVDBpWm1sc2JEb2pabVptT3lJZ1ptbHNkR1Z5UFNKMWNtd29JMlJ5YjNCemFHRmtiM2NwSWlCd2IybHVkSE05SWpNeU5DNDNMREk0TGpJek9DQXlPVFl1TXpjc01DQTRPUzQzT1RZc01qQTNMakkwT0NBeU9UWXVNemNzTkRFMExqUTVOaUF6TWpRdU55d3pPRFl1TWpVNElERTBOaTR5TnpNc01qQTNMakkwT0NBaUx6NDhMM04yWno0PSkgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XHJcblxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/component/gallery-nav/gallery-nav.component.ts":
/*!************************************************************!*\
  !*** ./src/component/gallery-nav/gallery-nav.component.ts ***!
  \************************************************************/
/*! exports provided: GalleryNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryNavComponent", function() { return GalleryNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_gallery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/gallery.service */ "./src/service/gallery.service.ts");



var GalleryNavComponent = /** @class */ (function () {
    function GalleryNavComponent(gallery) {
        this.gallery = gallery;
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GalleryNavComponent.prototype, "state", void 0);
    GalleryNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gallery-nav',
            template: __webpack_require__(/*! ./gallery-nav.component.html */ "./src/component/gallery-nav/gallery-nav.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./gallery-nav.component.scss */ "./src/component/gallery-nav/gallery-nav.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_gallery_service__WEBPACK_IMPORTED_MODULE_2__["GalleryService"]])
    ], GalleryNavComponent);
    return GalleryNavComponent;
}());



/***/ }),

/***/ "./src/component/gallery-player/gallery-player.component.html":
/*!********************************************************************!*\
  !*** ./src/component/gallery-player/gallery-player.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"g-player-btns\">-->\r\n  <!--<div *ngIf=\"!state.play\" class=\"g-player-btn\" (click)=\"gallery.play()\">▶</div>-->\r\n  <!--<div *ngIf=\"state.play\" class=\"g-player-btn\" (click)=\"gallery.stop()\">⏸</div>-->\r\n<!--</div>-->\r\n"

/***/ }),

/***/ "./src/component/gallery-player/gallery-player.component.scss":
/*!********************************************************************!*\
  !*** ./src/component/gallery-player/gallery-player.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  position: absolute;\n  z-index: 310; }\n\n.g-player-btns {\n  display: flex;\n  padding: 0.5em 1em; }\n\n.g-player-btn {\n  margin-right: 0.5em;\n  color: #ffffff;\n  cursor: pointer; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnQvZ2FsbGVyeS1wbGF5ZXIvRDpcXF93b3JrV293YVxcU29mdGdyZWF0XFxuZy1nYWxsZXJ5L3NyY1xcY29tcG9uZW50XFxnYWxsZXJ5LXBsYXllclxcZ2FsbGVyeS1wbGF5ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWSxFQUFBOztBQVNkO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLG1CQUFtQjtFQUNuQixjQUFjO0VBQ2QsZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9jb21wb25lbnQvZ2FsbGVyeS1wbGF5ZXIvZ2FsbGVyeS1wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDMxMDtcclxufVxyXG5cclxuLy8uZy1wcm9ncmVzcyB7XHJcbi8vICBoZWlnaHQ6IDNweDtcclxuLy8gIGJhY2tncm91bmQtY29sb3I6ICNjZjE1ZTM7XHJcbi8vICB3aWR0aDogMDtcclxuLy99XHJcblxyXG4uZy1wbGF5ZXItYnRucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAwLjVlbSAxZW07XHJcbn1cclxuXHJcbi5nLXBsYXllci1idG4ge1xyXG4gIG1hcmdpbi1yaWdodDogMC41ZW07XHJcbiAgY29sb3I6ICNmZmZmZmY7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/component/gallery-player/gallery-player.component.ts":
/*!******************************************************************!*\
  !*** ./src/component/gallery-player/gallery-player.component.ts ***!
  \******************************************************************/
/*! exports provided: GalleryPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryPlayerComponent", function() { return GalleryPlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_gallery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/gallery.service */ "./src/service/gallery.service.ts");



var GalleryPlayerComponent = /** @class */ (function () {
    function GalleryPlayerComponent(gallery) {
        this.gallery = gallery;
    }
    GalleryPlayerComponent.prototype.ngOnInit = function () {
        /** Start auto-play if enabled */
        if (this.config.autoplay) {
            this.gallery.play();
        }
        /** TODO: Display status bar */
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GalleryPlayerComponent.prototype, "config", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GalleryPlayerComponent.prototype, "state", void 0);
    GalleryPlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gallery-player',
            template: __webpack_require__(/*! ./gallery-player.component.html */ "./src/component/gallery-player/gallery-player.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./gallery-player.component.scss */ "./src/component/gallery-player/gallery-player.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_gallery_service__WEBPACK_IMPORTED_MODULE_2__["GalleryService"]])
    ], GalleryPlayerComponent);
    return GalleryPlayerComponent;
}());



/***/ }),

/***/ "./src/component/gallery-text/gallery-text.component.html":
/*!****************************************************************!*\
  !*** ./src/component/gallery-text/gallery-text.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"g-text-container\" [ngStyle]=\"config.style\">\r\n  <div *ngIf=\"config.text\" class=\"g-text\" [innerHtml]=\"state.images[state.currIndex]?.text\">\r\n  </div>\r\n  <div *ngIf=\"config.counter\" class=\"g-number\">\r\n    {{(state.currIndex + 1) + '/' + state.images.length}}\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/component/gallery-text/gallery-text.component.scss":
/*!****************************************************************!*\
  !*** ./src/component/gallery-text/gallery-text.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  box-sizing: border-box; }\n\n:host {\n  position: relative;\n  left: 0;\n  right: 0;\n  z-index: 205; }\n\n.g-text-container {\n  padding: 1em 2em;\n  color: #ccc;\n  font-size: 13px;\n  display: flex;\n  flex-direction: row;\n  align-content: center;\n  background-clip: padding-box;\n  -webkit-font-smoothing: antialiased; }\n\n.g-text {\n  flex: 1; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnQvZ2FsbGVyeS10ZXh0L0Q6XFxfd29ya1dvd2FcXFNvZnRncmVhdFxcbmctZ2FsbGVyeS9zcmNcXGNvbXBvbmVudFxcZ2FsbGVyeS10ZXh0XFxnYWxsZXJ5LXRleHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBc0IsRUFBQTs7QUFHeEI7RUFDRSxrQkFBa0I7RUFDbEIsT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHFCQUFxQjtFQUNyQiw0QkFBNEI7RUFDNUIsbUNBQW1DLEVBQUE7O0FBR3JDO0VBQ0UsT0FBTyxFQUFBIiwiZmlsZSI6InNyYy9jb21wb25lbnQvZ2FsbGVyeS10ZXh0L2dhbGxlcnktdGV4dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiAyMDU7XHJcbn1cclxuXHJcbi5nLXRleHQtY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAxZW0gMmVtO1xyXG4gIGNvbG9yOiAjY2NjO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY2xpcDogcGFkZGluZy1ib3g7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbn1cclxuXHJcbi5nLXRleHQge1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/component/gallery-text/gallery-text.component.ts":
/*!**************************************************************!*\
  !*** ./src/component/gallery-text/gallery-text.component.ts ***!
  \**************************************************************/
/*! exports provided: GalleryTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryTextComponent", function() { return GalleryTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GalleryTextComponent.prototype, "state", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GalleryTextComponent.prototype, "config", void 0);
    GalleryTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gallery-text',
            template: __webpack_require__(/*! ./gallery-text.component.html */ "./src/component/gallery-text/gallery-text.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./gallery-text.component.scss */ "./src/component/gallery-text/gallery-text.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], GalleryTextComponent);
    return GalleryTextComponent;
}());



/***/ }),

/***/ "./src/component/gallery-thumb/gallery-thumb.component.html":
/*!******************************************************************!*\
  !*** ./src/component/gallery-thumb/gallery-thumb.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div #container class=\"g-thumb-container\" [ngStyle]=\"contStyle\">\r\n\r\n  <div class=\"g-thumbs\" [style.transform]=\"translateThumbs()\">\r\n\r\n    <div class=\"g-thumb\" *ngFor=\"let image of state.images; let i = index\"\r\n         [class.g-thumb-current]=\"i === state.currIndex\"\r\n         [style.width.px]=\"gallery.config.thumbnails.width\"\r\n         [style.height.px]=\"gallery.config.thumbnails.height\">\r\n\r\n      <div class=\"g-thumb-image\" [style.backgroundImage]=\"getThumbImage(i)\"\r\n           [tap] (tapClick)=\"gallery.set(i)\">\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/component/gallery-thumb/gallery-thumb.component.scss":
/*!******************************************************************!*\
  !*** ./src/component/gallery-thumb/gallery-thumb.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  z-index: 1; }\n\n.g-thumb-container {\n  position: relative;\n  z-index: 206;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  display: flex; }\n\n.g-thumbs {\n  position: absolute;\n  top: 0;\n  left: 50%;\n  display: flex;\n  align-items: center;\n  transition: transform ease-in 300ms;\n  transform: translate3d(0, 0, 0); }\n\n.g-thumb {\n  padding: 8px;\n  opacity: 0.5;\n  transition: all linear 0.2s; }\n\n.g-thumb-image {\n  cursor: pointer;\n  width: 100%;\n  height: 100%;\n  background-position: center center;\n  background-size: cover;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.3); }\n\n.g-thumb-current {\n  opacity: 1;\n  padding: 2px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnQvZ2FsbGVyeS10aHVtYi9EOlxcX3dvcmtXb3dhXFxTb2Z0Z3JlYXRcXG5nLWdhbGxlcnkvc3JjXFxjb21wb25lbnRcXGdhbGxlcnktdGh1bWJcXGdhbGxlcnktdGh1bWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFjO0VBQ2QsVUFBVSxFQUFBOztBQUdaO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLE9BQU87RUFDUCxNQUFNO0VBQ04sYUFBYSxFQUFBOztBQUdmO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixTQUFTO0VBQ1QsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQ0FBbUM7RUFDbkMsK0JBQStCLEVBQUE7O0FBR2pDO0VBQ0UsWUFBWTtFQUNaLFlBQVk7RUFDWiwyQkFBMkIsRUFBQTs7QUFHN0I7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsc0JBQXNCO0VBQ3RCLHNDQUFzQyxFQUFBOztBQUd4QztFQUNFLFVBQVU7RUFDVixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2NvbXBvbmVudC9nYWxsZXJ5LXRodW1iL2dhbGxlcnktdGh1bWIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmctdGh1bWItY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjA2O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4uZy10aHVtYnMge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gZWFzZS1pbiAzMDBtcztcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xyXG59XHJcblxyXG4uZy10aHVtYiB7XHJcbiAgcGFkZGluZzogOHB4O1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICB0cmFuc2l0aW9uOiBhbGwgbGluZWFyIDAuMnM7XHJcbn1cclxuXHJcbi5nLXRodW1iLWltYWdlIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG5cclxuLmctdGh1bWItY3VycmVudCB7XHJcbiAgb3BhY2l0eTogMTtcclxuICBwYWRkaW5nOiAycHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/component/gallery-thumb/gallery-thumb.component.ts":
/*!****************************************************************!*\
  !*** ./src/component/gallery-thumb/gallery-thumb.component.ts ***!
  \****************************************************************/
/*! exports provided: GalleryThumbComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryThumbComponent", function() { return GalleryThumbComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/get */ "./src/utils/get.ts");
/* harmony import */ var _service_gallery_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../service/gallery.service */ "./src/service/gallery.service.ts");




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
        var x = Object(_utils_get__WEBPACK_IMPORTED_MODULE_2__["get"])(this.state, 'currIndex', 0) * Object(_utils_get__WEBPACK_IMPORTED_MODULE_2__["get"])(this.config, 'width', 0) + Object(_utils_get__WEBPACK_IMPORTED_MODULE_2__["get"])(this.config, 'width', 0) / 2;
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
        var image = Object(_utils_get__WEBPACK_IMPORTED_MODULE_2__["get"])(this.state, 'images', [])[i] || {};
        return "url(" + (image.thumbnail || image.src) + ")";
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GalleryThumbComponent.prototype, "state", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], GalleryThumbComponent.prototype, "config", void 0);
    GalleryThumbComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gallery-thumb',
            template: __webpack_require__(/*! ./gallery-thumb.component.html */ "./src/component/gallery-thumb/gallery-thumb.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./gallery-thumb.component.scss */ "./src/component/gallery-thumb/gallery-thumb.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_gallery_service__WEBPACK_IMPORTED_MODULE_3__["GalleryService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], GalleryThumbComponent);
    return GalleryThumbComponent;
}());



/***/ }),

/***/ "./src/component/gallery/gallery.component.scss":
/*!******************************************************!*\
  !*** ./src/component/gallery/gallery.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "gallery-main {\n  display: flex;\n  height: 500px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9jb21wb25lbnQvZ2FsbGVyeS9EOlxcX3dvcmtXb3dhXFxTb2Z0Z3JlYXRcXG5nLWdhbGxlcnkvc3JjXFxjb21wb25lbnRcXGdhbGxlcnlcXGdhbGxlcnkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9jb21wb25lbnQvZ2FsbGVyeS9nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiZ2FsbGVyeS1tYWluIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/component/gallery/gallery.component.ts":
/*!****************************************************!*\
  !*** ./src/component/gallery/gallery.component.ts ***!
  \****************************************************/
/*! exports provided: GalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryComponent", function() { return GalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_gallery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/gallery.service */ "./src/service/gallery.service.ts");



var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(gallery) {
        this.gallery = gallery;
    }
    GalleryComponent.prototype.ngOnDestroy = function () {
        this.gallery.reset();
    };
    GalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'gallery',
            template: '<gallery-main *ngIf="gallery.state | async as state" [state]="state" [config]="gallery.config"></gallery-main>',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./gallery.component.scss */ "./src/component/gallery/gallery.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_gallery_service__WEBPACK_IMPORTED_MODULE_2__["GalleryService"]])
    ], GalleryComponent);
    return GalleryComponent;
}());



/***/ }),

/***/ "./src/config/gallery.default.ts":
/*!***************************************!*\
  !*** ./src/config/gallery.default.ts ***!
  \***************************************/
/*! exports provided: defaultState, defaultConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultState", function() { return defaultState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultConfig", function() { return defaultConfig; });
var defaultState = {
    images: undefined,
    prevIndex: 0,
    currIndex: 0,
    hasNext: undefined,
    hasPrev: undefined,
    active: false
};
var defaultConfig = {
    style: {
        background: '#121519',
        width: '900px',
        height: '500px'
    },
    animation: 'fade',
    loader: {
        width: '50px',
        height: '50px',
        position: 'center',
        icon: 'oval'
    },
    description: {
        position: 'bottom',
        overlay: false,
        text: true,
        counter: true,
        style: {
            color: 'red'
        }
    },
    player: {
        autoplay: false,
        speed: 3000
    },
    thumbnails: {
        width: 120,
        height: 90,
        position: 'left',
        space: 30
    }
};


/***/ }),

/***/ "./src/directive/gallery.directive.ts":
/*!********************************************!*\
  !*** ./src/directive/gallery.directive.ts ***!
  \********************************************/
/*! exports provided: GalleryDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryDirective", function() { return GalleryDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_gallery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/gallery.service */ "./src/service/gallery.service.ts");
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/index */ "./src/utils/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");






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
            // get all img elements from content
            var imageElements = target.querySelectorAll(_this.subtree + (" img" + _this.gallerize));
            if (!imageElements || !imageElements.length) {
                _this.srcList = [];
                return;
            }
            var srcs = Array.from(imageElements).map(function (elem) {
                return elem.dataset && elem.dataset.originalImageUrl ? elem.dataset.originalImageUrl : elem.src;
            });
            //let srcs = pluck(imageElements, 'src');
            var isSame = Object(_utils_index__WEBPACK_IMPORTED_MODULE_3__["isEqual"])(_this.srcList, srcs);
            _this.srcList = srcs;
            Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["from"])(imageElements).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (img, i) {
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
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () {
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GalleryDirective.prototype, "gallerize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GalleryDirective.prototype, "exclude", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], GalleryDirective.prototype, "subtree", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], GalleryDirective.prototype, "filter", void 0);
    GalleryDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[gallerize]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _service_gallery_service__WEBPACK_IMPORTED_MODULE_2__["GalleryService"]])
    ], GalleryDirective);
    return GalleryDirective;
}());



/***/ }),

/***/ "./src/directive/lazy.directive.ts":
/*!*****************************************!*\
  !*** ./src/directive/lazy.directive.ts ***!
  \*****************************************/
/*! exports provided: LazyDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyDirective", function() { return LazyDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var LazyDirective = /** @class */ (function () {
    function LazyDirective(el, renderer) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        /** A subject to emit only last selected image */
        this.lazyWorker = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.lazyLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"](false);
        // this.lazyTest.switchMap((done) => (done) ? Observable.of(done).delay(1000) : Observable.of(done)
        this.lazyWorker.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (done) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(done); }))
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('lazyImage'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [String])
    ], LazyDirective.prototype, "lazyImage", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], LazyDirective.prototype, "lazyLoad", void 0);
    LazyDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[lazyImage]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], LazyDirective);
    return LazyDirective;
}());



/***/ }),

/***/ "./src/directive/tap.directive.ts":
/*!****************************************!*\
  !*** ./src/directive/tap.directive.ts ***!
  \****************************************/
/*! exports provided: TapDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TapDirective", function() { return TapDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_gallery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/gallery.service */ "./src/service/gallery.service.ts");
/** This directive enable tap if HammerJS is loaded, otherwise it uses the normal click event (useful for thumbnail click) */



var TapDirective = /** @class */ (function () {
    function TapDirective(gallery, el, renderer) {
        this.gallery = gallery;
        this.el = el;
        this.renderer = renderer;
        this.tapClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
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
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TapDirective.prototype, "tap", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TapDirective.prototype, "tapClick", void 0);
    TapDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[tap]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_service_gallery_service__WEBPACK_IMPORTED_MODULE_2__["GalleryService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]])
    ], TapDirective);
    return TapDirective;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/gallery.module.ts":
/*!*******************************!*\
  !*** ./src/gallery.module.ts ***!
  \*******************************/
/*! exports provided: galleryFactory, CONFIG, GalleryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "galleryFactory", function() { return galleryFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG", function() { return CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryModule", function() { return GalleryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _service_gallery_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/gallery.service */ "./src/service/gallery.service.ts");
/* harmony import */ var _component_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/gallery/gallery.component */ "./src/component/gallery/gallery.component.ts");
/* harmony import */ var _component_gallery_nav_gallery_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/gallery-nav/gallery-nav.component */ "./src/component/gallery-nav/gallery-nav.component.ts");
/* harmony import */ var _component_gallery_thumb_gallery_thumb_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/gallery-thumb/gallery-thumb.component */ "./src/component/gallery-thumb/gallery-thumb.component.ts");
/* harmony import */ var _component_gallery_text_gallery_text_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/gallery-text/gallery-text.component */ "./src/component/gallery-text/gallery-text.component.ts");
/* harmony import */ var _component_gallery_image_gallery_image_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./component/gallery-image/gallery-image.component */ "./src/component/gallery-image/gallery-image.component.ts");
/* harmony import */ var _component_gallery_loader_gallery_loader_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./component/gallery-loader/gallery-loader.component */ "./src/component/gallery-loader/gallery-loader.component.ts");
/* harmony import */ var _component_gallery_modal_gallery_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./component/gallery-modal/gallery-modal.component */ "./src/component/gallery-modal/gallery-modal.component.ts");
/* harmony import */ var _component_gallery_bullets_gallery_bullets_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./component/gallery-bullets/gallery-bullets.component */ "./src/component/gallery-bullets/gallery-bullets.component.ts");
/* harmony import */ var _component_gallery_player_gallery_player_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./component/gallery-player/gallery-player.component */ "./src/component/gallery-player/gallery-player.component.ts");
/* harmony import */ var _component_gallery_main_gallery_main_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/gallery-main/gallery-main.component */ "./src/component/gallery-main/gallery-main.component.ts");
/* harmony import */ var _directive_gallery_directive__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./directive/gallery.directive */ "./src/directive/gallery.directive.ts");
/* harmony import */ var _directive_lazy_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./directive/lazy.directive */ "./src/directive/lazy.directive.ts");
/* harmony import */ var _directive_tap_directive__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./directive/tap.directive */ "./src/directive/tap.directive.ts");

















/** Initialize ConfigService with URL */
function galleryFactory(config) {
    return new _service_gallery_service__WEBPACK_IMPORTED_MODULE_3__["GalleryService"](config);
}
var CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('config');
var GalleryModule = /** @class */ (function () {
    function GalleryModule() {
    }
    GalleryModule_1 = GalleryModule;
    GalleryModule.forRoot = function (config) {
        return {
            ngModule: GalleryModule_1,
            providers: [
                { provide: CONFIG, useValue: config },
                {
                    provide: _service_gallery_service__WEBPACK_IMPORTED_MODULE_3__["GalleryService"],
                    useFactory: galleryFactory,
                    deps: [CONFIG]
                }
            ]
        };
    };
    var GalleryModule_1;
    GalleryModule = GalleryModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            declarations: [
                _component_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"],
                _component_gallery_nav_gallery_nav_component__WEBPACK_IMPORTED_MODULE_5__["GalleryNavComponent"],
                _component_gallery_thumb_gallery_thumb_component__WEBPACK_IMPORTED_MODULE_6__["GalleryThumbComponent"],
                _directive_gallery_directive__WEBPACK_IMPORTED_MODULE_14__["GalleryDirective"],
                _component_gallery_text_gallery_text_component__WEBPACK_IMPORTED_MODULE_7__["GalleryTextComponent"],
                _component_gallery_image_gallery_image_component__WEBPACK_IMPORTED_MODULE_8__["GalleryImageComponent"],
                _component_gallery_loader_gallery_loader_component__WEBPACK_IMPORTED_MODULE_9__["GalleryLoaderComponent"],
                _component_gallery_modal_gallery_modal_component__WEBPACK_IMPORTED_MODULE_10__["GalleryModalComponent"],
                _component_gallery_bullets_gallery_bullets_component__WEBPACK_IMPORTED_MODULE_11__["GalleryBulletsComponent"],
                _component_gallery_player_gallery_player_component__WEBPACK_IMPORTED_MODULE_12__["GalleryPlayerComponent"],
                _component_gallery_main_gallery_main_component__WEBPACK_IMPORTED_MODULE_13__["GalleryMainComponent"],
                _directive_tap_directive__WEBPACK_IMPORTED_MODULE_16__["TapDirective"],
                _directive_lazy_directive__WEBPACK_IMPORTED_MODULE_15__["LazyDirective"]
            ],
            exports: [
                _component_gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__["GalleryComponent"],
                _directive_gallery_directive__WEBPACK_IMPORTED_MODULE_14__["GalleryDirective"],
                _component_gallery_modal_gallery_modal_component__WEBPACK_IMPORTED_MODULE_10__["GalleryModalComponent"]
            ]
        })
    ], GalleryModule);
    return GalleryModule;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _gallery_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./gallery.module */ "./src/gallery.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_gallery_module__WEBPACK_IMPORTED_MODULE_2__["GalleryModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ "./src/service/gallery.service.ts":
/*!****************************************!*\
  !*** ./src/service/gallery.service.ts ***!
  \****************************************/
/*! exports provided: GalleryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GalleryService", function() { return GalleryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _config_gallery_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/gallery.default */ "./src/config/gallery.default.ts");
/* harmony import */ var _utils_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/get */ "./src/utils/get.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");







var GalleryService = /** @class */ (function () {
    function GalleryService(config) {
        var _this = this;
        /** Gallery config */
        this.config = _config_gallery_default__WEBPACK_IMPORTED_MODULE_2__["defaultConfig"];
        /** Initialize the state */
        this.state = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](_config_gallery_default__WEBPACK_IMPORTED_MODULE_2__["defaultState"]);
        /** Initialize the config */
        this.config = Object.assign({}, _config_gallery_default__WEBPACK_IMPORTED_MODULE_2__["defaultConfig"], config);
        /** Initialize the player for play/pause commands */
        this.player = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.player.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (interval) { return (interval) ? _this.playerEngine(interval) : Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])(null); })).subscribe();
    }
    /** Load images and reset the state */
    GalleryService.prototype.load = function (images) {
        this.state.next({
            images: images,
            currIndex: 0,
            hasNext: images.length > 1,
            hasPrev: false,
            active: false
        });
    };
    /** Set current image and update the state */
    GalleryService.prototype.set = function (index) {
        var state = this.state.getValue();
        this.state.next(Object.assign({}, state, {
            prevIndex: state.currIndex,
            currIndex: index,
            hasNext: index < Object(_utils_get__WEBPACK_IMPORTED_MODULE_3__["get"])(state, 'images.length', 0) - 1,
            hasPrev: index > 0,
            active: true
        }));
    };
    /** Go to next image and update the state */
    GalleryService.prototype.next = function () {
        var state = this.state.getValue();
        if (state.hasNext) {
            var index = (state.currIndex || 0) + 1;
            this.set(index);
        }
        else {
            this.set(0);
        }
    };
    /** Go to previous image and update the state */
    GalleryService.prototype.prev = function () {
        var state = this.state.getValue();
        if (state.hasPrev) {
            var index = (state.currIndex || 0) - 1;
            this.set(index);
        }
        else {
            this.set(Object(_utils_get__WEBPACK_IMPORTED_MODULE_3__["get"])(state, 'images.length', 0) - 1);
        }
    };
    /** Close gallery modal if open */
    GalleryService.prototype.close = function () {
        var state = this.state.getValue();
        this.state.next(Object.assign({}, state, {
            active: false,
            play: false
        }));
        this.stop();
    };
    /** Reset gallery with initial state */
    GalleryService.prototype.reset = function () {
        this.state.next(_config_gallery_default__WEBPACK_IMPORTED_MODULE_2__["defaultState"]);
        this.stop();
    };
    /** Play slide show */
    GalleryService.prototype.play = function (interval) {
        var speed = interval || Object(_utils_get__WEBPACK_IMPORTED_MODULE_3__["get"])(this.config, 'player.speed', 0) || 2000;
        var state = this.state.getValue();
        /** Open and play the gallery, 'active' opens gallery modal */
        this.state.next(Object.assign({}, state, { play: true, active: true }));
        this.player.next(speed);
    };
    /** End slide show */
    GalleryService.prototype.stop = function () {
        this.player.next(0);
    };
    GalleryService.prototype.playerEngine = function (interval) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(interval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeWhile"])(function () { return _this.state.getValue().play || false; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function () { return _this.next(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(function () { return _this.state.next(Object.assign({}, _this.state.getValue(), { play: false })); }));
    };
    GalleryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], GalleryService);
    return GalleryService;
}());



/***/ }),

/***/ "./src/utils/get.ts":
/*!**************************!*\
  !*** ./src/utils/get.ts ***!
  \**************************/
/*! exports provided: get */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "get", function() { return get; });
function get(obj, path, def) {
    if (def === void 0) { def = undefined; }
    if (!obj || !path) {
        return def;
    }
    var arr = path.split('.');
    var current = obj;
    for (var i = 0; i < arr.length; i++) {
        if (!current[arr[i]]) {
            return def;
        }
        current = current[arr[i]];
    }
    return current || def;
}


/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/*! exports provided: get, pluck, isEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _get__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./get */ "./src/utils/get.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "get", function() { return _get__WEBPACK_IMPORTED_MODULE_0__["get"]; });

/* harmony import */ var _pluck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pluck */ "./src/utils/pluck.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "pluck", function() { return _pluck__WEBPACK_IMPORTED_MODULE_1__["pluck"]; });

/* harmony import */ var _isEqual__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./isEqual */ "./src/utils/isEqual.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return _isEqual__WEBPACK_IMPORTED_MODULE_2__["isEqual"]; });







/***/ }),

/***/ "./src/utils/isEqual.ts":
/*!******************************!*\
  !*** ./src/utils/isEqual.ts ***!
  \******************************/
/*! exports provided: isEqual */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEqual", function() { return isEqual; });
function isEqual(array1, array2) {
    if (array1 === void 0) { array1 = []; }
    if (array2 === void 0) { array2 = []; }
    if (array1.length !== array2.length) {
        return false;
    }
    // array1 = array1.sort();
    // array2 = array2.sort();
    for (var i = array1.length; i--;) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}


/***/ }),

/***/ "./src/utils/pluck.ts":
/*!****************************!*\
  !*** ./src/utils/pluck.ts ***!
  \****************************/
/*! exports provided: pluck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pluck", function() { return pluck; });
function pluck(array, field) {
    var result = [];
    for (var i = array.length; i--;) {
        result.push(array[i][field]);
    }
    return result;
}


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\_workWowa\Softgreat\ng-gallery\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map