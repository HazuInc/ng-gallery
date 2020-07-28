/**
 * @fileoverview added by tsickle
 * Generated from: lib/directive/lazy.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Output, EventEmitter, Renderer2 } from '@angular/core';
import { Subject, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
var LazyDirective = /** @class */ (function () {
    function LazyDirective(el, renderer) {
        var _this = this;
        this.el = el;
        this.renderer = renderer;
        /**
         * A subject to emit only last selected image
         */
        this.lazyWorker = new Subject();
        this.lazyLoad = new EventEmitter(false);
        // this.lazyTest.switchMap((done) => (done) ? Observable.of(done).delay(1000) : Observable.of(done)
        this.lazyWorker.pipe(switchMap((/**
         * @param {?} done
         * @return {?}
         */
        function (done) { return of(done); })))
            .subscribe((/**
         * @param {?} img
         * @return {?}
         */
        function (img) {
            if (img) {
                _this.renderer.setProperty(_this.el.nativeElement, 'src', img);
                _this.lazyLoad.emit(true);
            }
            else {
                _this.lazyLoad.emit(false);
            }
        }));
    }
    Object.defineProperty(LazyDirective.prototype, "lazyImage", {
        // Image source
        set: 
        // Image source
        /**
         * @param {?} imagePath
         * @return {?}
         */
        function (imagePath) {
            this.getImage(imagePath);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} imagePath
     * @return {?}
     */
    LazyDirective.prototype.getImage = /**
     * @param {?} imagePath
     * @return {?}
     */
    function (imagePath) {
        var _this = this;
        this.lazyWorker.next('');
        /** @type {?} */
        var img = this.renderer.createElement('img');
        img.src = imagePath;
        img.onload = (/**
         * @return {?}
         */
        function () {
            _this.lazyWorker.next(imagePath);
        });
        img.onerror = (/**
         * @param {?} err
         * @return {?}
         */
        function (err) {
            console.error('[GalleryLazyDirective]:', err);
            _this.lazyWorker.next('');
        });
    };
    LazyDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[lazyImage]'
                },] }
    ];
    /** @nocollapse */
    LazyDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 }
    ]; };
    LazyDirective.propDecorators = {
        lazyImage: [{ type: Input, args: ['lazyImage',] }],
        lazyLoad: [{ type: Output }]
    };
    return LazyDirective;
}());
export { LazyDirective };
if (false) {
    /**
     * A subject to emit only last selected image
     * @type {?}
     */
    LazyDirective.prototype.lazyWorker;
    /** @type {?} */
    LazyDirective.prototype.lazyLoad;
    /**
     * @type {?}
     * @private
     */
    LazyDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    LazyDirective.prototype.renderer;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nYWxsZXJ5LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmUvbGF6eS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFjLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBNEIsTUFBTSxnQkFBZ0IsQ0FBQztBQUdyRTtJQWVFLHVCQUFvQixFQUFjLEVBQVUsUUFBbUI7UUFBL0QsaUJBWUM7UUFabUIsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7Ozs7UUFKL0QsZUFBVSxHQUFHLElBQUksT0FBTyxFQUFVLENBQUM7UUFFekIsYUFBUSxHQUFHLElBQUksWUFBWSxDQUFVLEtBQUssQ0FBQyxDQUFDO1FBSXBELG1HQUFtRztRQUNuRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTOzs7O1FBQUMsVUFBQyxJQUFJLElBQUssT0FBQSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQVIsQ0FBUSxFQUFDLENBQUM7YUFDaEQsU0FBUzs7OztRQUFDLFVBQUMsR0FBRztZQUNiLElBQUksR0FBRyxFQUFFO2dCQUNQLEtBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEtBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDN0QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7YUFDekI7aUJBQU07Z0JBQ0wsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDM0I7UUFDSCxDQUFDLEVBQUMsQ0FBQztJQUNQLENBQUM7SUFyQkQsc0JBQXdCLG9DQUFTO1FBRGpDLGVBQWU7Ozs7Ozs7UUFDZixVQUFrQyxTQUFpQjtZQUNqRCxJQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNCLENBQUM7OztPQUFBOzs7OztJQXFCRCxnQ0FBUTs7OztJQUFSLFVBQVMsU0FBaUI7UUFBMUIsaUJBYUM7UUFaQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQzs7WUFDbkIsR0FBRyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUM5QyxHQUFHLENBQUMsR0FBRyxHQUFHLFNBQVMsQ0FBQztRQUVwQixHQUFHLENBQUMsTUFBTTs7O1FBQUc7WUFDWCxLQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNsQyxDQUFDLENBQUEsQ0FBQztRQUVGLEdBQUcsQ0FBQyxPQUFPOzs7O1FBQUcsVUFBQyxHQUFRO1lBQ3JCLE9BQU8sQ0FBQyxLQUFLLENBQUMseUJBQXlCLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDOUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDM0IsQ0FBQyxDQUFBLENBQUM7SUFDSixDQUFDOztnQkExQ0YsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxhQUFhO2lCQUN4Qjs7OztnQkFiQyxVQUFVO2dCQUlWLFNBQVM7Ozs0QkFhUixLQUFLLFNBQUMsV0FBVzsyQkFPakIsTUFBTTs7SUErQlQsb0JBQUM7Q0FBQSxBQTVDRCxJQTRDQztTQXpDWSxhQUFhOzs7Ozs7SUFReEIsbUNBQW1DOztJQUVuQyxpQ0FBc0Q7Ozs7O0lBRTFDLDJCQUFzQjs7Ozs7SUFBRSxpQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgUmVuZGVyZXIyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAsIHRhcCwgdGFrZVdoaWxlLCBmaW5hbGl6ZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tsYXp5SW1hZ2VdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTGF6eURpcmVjdGl2ZSB7XHJcblxyXG4gIC8vIEltYWdlIHNvdXJjZVxyXG4gIEBJbnB1dCgnbGF6eUltYWdlJykgc2V0IGxhenlJbWFnZShpbWFnZVBhdGg6IHN0cmluZykge1xyXG4gICAgdGhpcy5nZXRJbWFnZShpbWFnZVBhdGgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEEgc3ViamVjdCB0byBlbWl0IG9ubHkgbGFzdCBzZWxlY3RlZCBpbWFnZSAqL1xyXG4gIGxhenlXb3JrZXIgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSBsYXp5TG9hZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuXHJcbiAgICAvLyB0aGlzLmxhenlUZXN0LnN3aXRjaE1hcCgoZG9uZSkgPT4gKGRvbmUpID8gT2JzZXJ2YWJsZS5vZihkb25lKS5kZWxheSgxMDAwKSA6IE9ic2VydmFibGUub2YoZG9uZSlcclxuICAgIHRoaXMubGF6eVdvcmtlci5waXBlKHN3aXRjaE1hcCgoZG9uZSkgPT4gb2YoZG9uZSkpKVxyXG4gICAgICAuc3Vic2NyaWJlKChpbWcpID0+IHtcclxuICAgICAgICBpZiAoaW1nKSB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3NyYycsIGltZyk7XHJcbiAgICAgICAgICB0aGlzLmxhenlMb2FkLmVtaXQodHJ1ZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5sYXp5TG9hZC5lbWl0KGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW1hZ2UoaW1hZ2VQYXRoOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubGF6eVdvcmtlci5uZXh0KCcnKTtcclxuICAgIGNvbnN0IGltZyA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWcuc3JjID0gaW1hZ2VQYXRoO1xyXG5cclxuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMubGF6eVdvcmtlci5uZXh0KGltYWdlUGF0aCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGltZy5vbmVycm9yID0gKGVycjogYW55KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tHYWxsZXJ5TGF6eURpcmVjdGl2ZV06JywgZXJyKTtcclxuICAgICAgdGhpcy5sYXp5V29ya2VyLm5leHQoJycpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG59XHJcblxyXG4iXX0=