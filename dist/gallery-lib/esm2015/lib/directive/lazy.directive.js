/**
 * @fileoverview added by tsickle
 * Generated from: lib/directive/lazy.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Directive, ElementRef, Input, Output, EventEmitter, Renderer2 } from '@angular/core';
import { Subject, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
export class LazyDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    constructor(el, renderer) {
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
        (done) => of(done))))
            .subscribe((/**
         * @param {?} img
         * @return {?}
         */
        (img) => {
            if (img) {
                this.renderer.setProperty(this.el.nativeElement, 'src', img);
                this.lazyLoad.emit(true);
            }
            else {
                this.lazyLoad.emit(false);
            }
        }));
    }
    // Image source
    /**
     * @param {?} imagePath
     * @return {?}
     */
    set lazyImage(imagePath) {
        this.getImage(imagePath);
    }
    /**
     * @param {?} imagePath
     * @return {?}
     */
    getImage(imagePath) {
        this.lazyWorker.next('');
        /** @type {?} */
        const img = this.renderer.createElement('img');
        img.src = imagePath;
        img.onload = (/**
         * @return {?}
         */
        () => {
            this.lazyWorker.next(imagePath);
        });
        img.onerror = (/**
         * @param {?} err
         * @return {?}
         */
        (err) => {
            console.error('[GalleryLazyDirective]:', err);
            this.lazyWorker.next('');
        });
    }
}
LazyDirective.decorators = [
    { type: Directive, args: [{
                selector: '[lazyImage]'
            },] }
];
/** @nocollapse */
LazyDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
LazyDirective.propDecorators = {
    lazyImage: [{ type: Input, args: ['lazyImage',] }],
    lazyLoad: [{ type: Output }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGF6eS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nYWxsZXJ5LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9kaXJlY3RpdmUvbGF6eS5kaXJlY3RpdmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULFVBQVUsRUFDVixLQUFLLEVBQ0wsTUFBTSxFQUNOLFlBQVksRUFDWixTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFFdkIsT0FBTyxFQUFjLE9BQU8sRUFBRSxFQUFFLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0MsT0FBTyxFQUFFLFNBQVMsRUFBNEIsTUFBTSxnQkFBZ0IsQ0FBQztBQU1yRSxNQUFNLE9BQU8sYUFBYTs7Ozs7SUFZeEIsWUFBb0IsRUFBYyxFQUFVLFFBQW1CO1FBQTNDLE9BQUUsR0FBRixFQUFFLENBQVk7UUFBVSxhQUFRLEdBQVIsUUFBUSxDQUFXOzs7O1FBSi9ELGVBQVUsR0FBRyxJQUFJLE9BQU8sRUFBVSxDQUFDO1FBRXpCLGFBQVEsR0FBRyxJQUFJLFlBQVksQ0FBVSxLQUFLLENBQUMsQ0FBQztRQUlwRCxtR0FBbUc7UUFDbkcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUzs7OztRQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUMsQ0FBQzthQUNoRCxTQUFTOzs7O1FBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtZQUNqQixJQUFJLEdBQUcsRUFBRTtnQkFDUCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQzdELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO2FBQ3pCO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQzNCO1FBQ0gsQ0FBQyxFQUFDLENBQUM7SUFDUCxDQUFDOzs7Ozs7SUFyQkQsSUFBd0IsU0FBUyxDQUFDLFNBQWlCO1FBQ2pELElBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDM0IsQ0FBQzs7Ozs7SUFxQkQsUUFBUSxDQUFDLFNBQWlCO1FBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDOztjQUNuQixHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQzlDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsU0FBUyxDQUFDO1FBRXBCLEdBQUcsQ0FBQyxNQUFNOzs7UUFBRyxHQUFHLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbEMsQ0FBQyxDQUFBLENBQUM7UUFFRixHQUFHLENBQUMsT0FBTzs7OztRQUFHLENBQUMsR0FBUSxFQUFFLEVBQUU7WUFDekIsT0FBTyxDQUFDLEtBQUssQ0FBQyx5QkFBeUIsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUM5QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzQixDQUFDLENBQUEsQ0FBQztJQUNKLENBQUM7OztZQTFDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7YUFDeEI7Ozs7WUFiQyxVQUFVO1lBSVYsU0FBUzs7O3dCQWFSLEtBQUssU0FBQyxXQUFXO3VCQU9qQixNQUFNOzs7Ozs7O0lBRlAsbUNBQW1DOztJQUVuQyxpQ0FBc0Q7Ozs7O0lBRTFDLDJCQUFzQjs7Ozs7SUFBRSxpQ0FBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIElucHV0LFxyXG4gIE91dHB1dCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgUmVuZGVyZXIyXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBvZiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBzd2l0Y2hNYXAsIHRhcCwgdGFrZVdoaWxlLCBmaW5hbGl6ZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tsYXp5SW1hZ2VdJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTGF6eURpcmVjdGl2ZSB7XHJcblxyXG4gIC8vIEltYWdlIHNvdXJjZVxyXG4gIEBJbnB1dCgnbGF6eUltYWdlJykgc2V0IGxhenlJbWFnZShpbWFnZVBhdGg6IHN0cmluZykge1xyXG4gICAgdGhpcy5nZXRJbWFnZShpbWFnZVBhdGgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEEgc3ViamVjdCB0byBlbWl0IG9ubHkgbGFzdCBzZWxlY3RlZCBpbWFnZSAqL1xyXG4gIGxhenlXb3JrZXIgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XHJcblxyXG4gIEBPdXRwdXQoKSBsYXp5TG9hZCA9IG5ldyBFdmVudEVtaXR0ZXI8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHtcclxuXHJcbiAgICAvLyB0aGlzLmxhenlUZXN0LnN3aXRjaE1hcCgoZG9uZSkgPT4gKGRvbmUpID8gT2JzZXJ2YWJsZS5vZihkb25lKS5kZWxheSgxMDAwKSA6IE9ic2VydmFibGUub2YoZG9uZSlcclxuICAgIHRoaXMubGF6eVdvcmtlci5waXBlKHN3aXRjaE1hcCgoZG9uZSkgPT4gb2YoZG9uZSkpKVxyXG4gICAgICAuc3Vic2NyaWJlKChpbWcpID0+IHtcclxuICAgICAgICBpZiAoaW1nKSB7XHJcbiAgICAgICAgICB0aGlzLnJlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMuZWwubmF0aXZlRWxlbWVudCwgJ3NyYycsIGltZyk7XHJcbiAgICAgICAgICB0aGlzLmxhenlMb2FkLmVtaXQodHJ1ZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5sYXp5TG9hZC5lbWl0KGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW1hZ2UoaW1hZ2VQYXRoOiBzdHJpbmcpIHtcclxuICAgIHRoaXMubGF6eVdvcmtlci5uZXh0KCcnKTtcclxuICAgIGNvbnN0IGltZyA9IHRoaXMucmVuZGVyZXIuY3JlYXRlRWxlbWVudCgnaW1nJyk7XHJcbiAgICBpbWcuc3JjID0gaW1hZ2VQYXRoO1xyXG5cclxuICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgIHRoaXMubGF6eVdvcmtlci5uZXh0KGltYWdlUGF0aCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGltZy5vbmVycm9yID0gKGVycjogYW55KSA9PiB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1tHYWxsZXJ5TGF6eURpcmVjdGl2ZV06JywgZXJyKTtcclxuICAgICAgdGhpcy5sYXp5V29ya2VyLm5leHQoJycpO1xyXG4gICAgfTtcclxuICB9XHJcblxyXG59XHJcblxyXG4iXX0=