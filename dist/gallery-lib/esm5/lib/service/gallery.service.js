/**
 * @fileoverview added by tsickle
 * Generated from: lib/service/gallery.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Optional } from '@angular/core';
import { defaultState, defaultConfig } from '../config/gallery.default';
import { get } from '../utils/get';
import { Subject } from 'rxjs';
import { BehaviorSubject, of, interval as rxInterval } from 'rxjs';
import { switchMap, tap, takeWhile, finalize } from 'rxjs/operators';
var GalleryService = /** @class */ (function () {
    function GalleryService(config) {
        var _this = this;
        /**
         * Gallery config
         */
        this.config = defaultConfig;
        /** Initialize the state */
        this.state = new BehaviorSubject(defaultState);
        /** Initialize the config */
        this.config = Object.assign({}, defaultConfig, config);
        /** Initialize the player for play/pause commands */
        this.player = new Subject();
        this.player.pipe(switchMap((/**
         * @param {?} interval
         * @return {?}
         */
        function (interval) { return (interval) ? _this.playerEngine(interval) : of(null); }))).subscribe();
    }
    /** Load images and reset the state */
    /**
     * Load images and reset the state
     * @param {?} images
     * @return {?}
     */
    GalleryService.prototype.load = /**
     * Load images and reset the state
     * @param {?} images
     * @return {?}
     */
    function (images) {
        this.state.next({
            images: images,
            currIndex: 0,
            hasNext: images.length > 1,
            hasPrev: false,
            active: false
        });
    };
    /** Set current image and update the state */
    /**
     * Set current image and update the state
     * @param {?} index
     * @return {?}
     */
    GalleryService.prototype.set = /**
     * Set current image and update the state
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var state = this.state.getValue();
        this.state.next(Object.assign({}, state, {
            prevIndex: state.currIndex,
            currIndex: index,
            hasNext: index < get(state, 'images.length', 0) - 1,
            hasPrev: index > 0,
            active: true
        }));
    };
    /** Go to next image and update the state */
    /**
     * Go to next image and update the state
     * @return {?}
     */
    GalleryService.prototype.next = /**
     * Go to next image and update the state
     * @return {?}
     */
    function () {
        /** @type {?} */
        var state = this.state.getValue();
        if (state.hasNext) {
            /** @type {?} */
            var index = (state.currIndex || 0) + 1;
            this.set(index);
        }
        else {
            this.set(0);
        }
    };
    /** Go to previous image and update the state */
    /**
     * Go to previous image and update the state
     * @return {?}
     */
    GalleryService.prototype.prev = /**
     * Go to previous image and update the state
     * @return {?}
     */
    function () {
        /** @type {?} */
        var state = this.state.getValue();
        if (state.hasPrev) {
            /** @type {?} */
            var index = (state.currIndex || 0) - 1;
            this.set(index);
        }
        else {
            this.set(get(state, 'images.length', 0) - 1);
        }
    };
    /** Close gallery modal if open */
    /**
     * Close gallery modal if open
     * @return {?}
     */
    GalleryService.prototype.close = /**
     * Close gallery modal if open
     * @return {?}
     */
    function () {
        /** @type {?} */
        var state = this.state.getValue();
        this.state.next(Object.assign({}, state, {
            active: false,
            play: false
        }));
        this.stop();
    };
    /** Reset gallery with initial state */
    /**
     * Reset gallery with initial state
     * @return {?}
     */
    GalleryService.prototype.reset = /**
     * Reset gallery with initial state
     * @return {?}
     */
    function () {
        this.state.next(defaultState);
        this.stop();
    };
    /** Play slide show */
    /**
     * Play slide show
     * @param {?=} interval
     * @return {?}
     */
    GalleryService.prototype.play = /**
     * Play slide show
     * @param {?=} interval
     * @return {?}
     */
    function (interval) {
        /** @type {?} */
        var speed = interval || get(this.config, 'player.speed', 0) || 2000;
        /** @type {?} */
        var state = this.state.getValue();
        /** Open and play the gallery, 'active' opens gallery modal */
        this.state.next(Object.assign({}, state, { play: true, active: true }));
        this.player.next(speed);
    };
    /** End slide show */
    /**
     * End slide show
     * @return {?}
     */
    GalleryService.prototype.stop = /**
     * End slide show
     * @return {?}
     */
    function () {
        this.player.next(0);
    };
    /**
     * @param {?=} interval
     * @return {?}
     */
    GalleryService.prototype.playerEngine = /**
     * @param {?=} interval
     * @return {?}
     */
    function (interval) {
        var _this = this;
        return rxInterval(interval).pipe(takeWhile((/**
         * @return {?}
         */
        function () { return _this.state.getValue().play || false; })), tap((/**
         * @return {?}
         */
        function () { return _this.next(); })), finalize((/**
         * @return {?}
         */
        function () { return _this.state.next(Object.assign({}, _this.state.getValue(), { play: false })); })));
    };
    /** @nocollapse */
    GalleryService.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: Optional }] }
    ]; };
    return GalleryService;
}());
export { GalleryService };
if (false) {
    /**
     * Gallery state
     * @type {?}
     */
    GalleryService.prototype.state;
    /**
     * Gallery config
     * @type {?}
     */
    GalleryService.prototype.config;
    /**
     * Gallery slide show player
     * @type {?}
     */
    GalleryService.prototype.player;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2FsbGVyeS1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9nYWxsZXJ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWMsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXJELE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFeEUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNuQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxlQUFlLEVBQWMsRUFBRSxFQUFFLFFBQVEsSUFBSSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJFO0lBU0Usd0JBQXdCLE1BQXFCO1FBQTdDLGlCQVVDOzs7O1FBZEQsV0FBTSxHQUFrQixhQUFhLENBQUM7UUFNcEMsMkJBQTJCO1FBQzNCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxlQUFlLENBQWUsWUFBWSxDQUFDLENBQUM7UUFDN0QsNEJBQTRCO1FBQzVCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFLEVBQUUsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBRXZELG9EQUFvRDtRQUNwRCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksT0FBTyxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUzs7OztRQUFDLFVBQUMsUUFBUSxJQUFLLE9BQUEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFB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OztJQUV0QyxnQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgR2FsbGVyeVN0YXRlLCBHYWxsZXJ5SW1hZ2UgfSBmcm9tICcuL2dhbGxlcnkuc3RhdGUnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2dhbGxlcnkuY29uZmlnJztcclxuaW1wb3J0IHsgZGVmYXVsdFN0YXRlLCBkZWZhdWx0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2dhbGxlcnkuZGVmYXVsdCc7XHJcblxyXG5pbXBvcnQgeyBnZXQgfSBmcm9tICcuLi91dGlscy9nZXQnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIG9mLCBpbnRlcnZhbCBhcyByeEludGVydmFsIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHN3aXRjaE1hcCwgdGFwLCB0YWtlV2hpbGUsIGZpbmFsaXplIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbGxlcnlTZXJ2aWNlIHtcclxuXHJcbiAgLyoqIEdhbGxlcnkgc3RhdGUgKi9cclxuICBzdGF0ZTogQmVoYXZpb3JTdWJqZWN0PEdhbGxlcnlTdGF0ZT47XHJcbiAgLyoqIEdhbGxlcnkgY29uZmlnICovXHJcbiAgY29uZmlnOiBHYWxsZXJ5Q29uZmlnID0gZGVmYXVsdENvbmZpZztcclxuICAvKiogR2FsbGVyeSBzbGlkZSBzaG93IHBsYXllciAqL1xyXG4gIHBsYXllcjogU3ViamVjdDxudW1iZXI+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBjb25maWc6IEdhbGxlcnlDb25maWcpIHtcclxuXHJcbiAgICAvKiogSW5pdGlhbGl6ZSB0aGUgc3RhdGUgKi9cclxuICAgIHRoaXMuc3RhdGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEdhbGxlcnlTdGF0ZT4oZGVmYXVsdFN0YXRlKTtcclxuICAgIC8qKiBJbml0aWFsaXplIHRoZSBjb25maWcgKi9cclxuICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdENvbmZpZywgY29uZmlnKTtcclxuXHJcbiAgICAvKiogSW5pdGlhbGl6ZSB0aGUgcGxheWVyIGZvciBwbGF5L3BhdXNlIGNvbW1hbmRzICovXHJcbiAgICB0aGlzLnBsYXllciA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgICB0aGlzLnBsYXllci5waXBlKHN3aXRjaE1hcCgoaW50ZXJ2YWwpID0+IChpbnRlcnZhbCkgPyB0aGlzLnBsYXllckVuZ2luZShpbnRlcnZhbCkgOiBvZihudWxsKSkpLnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIExvYWQgaW1hZ2VzIGFuZCByZXNldCB0aGUgc3RhdGUgKi9cclxuICBsb2FkKGltYWdlczogR2FsbGVyeUltYWdlW10pIHtcclxuXHJcbiAgICB0aGlzLnN0YXRlLm5leHQoe1xyXG4gICAgICBpbWFnZXM6IGltYWdlcyxcclxuICAgICAgY3VyckluZGV4OiAwLFxyXG4gICAgICBoYXNOZXh0OiBpbWFnZXMubGVuZ3RoID4gMSxcclxuICAgICAgaGFzUHJldjogZmFsc2UsXHJcbiAgICAgIGFjdGl2ZTogZmFsc2VcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIFNldCBjdXJyZW50IGltYWdlIGFuZCB1cGRhdGUgdGhlIHN0YXRlICovXHJcbiAgc2V0KGluZGV4OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5zdGF0ZS5nZXRWYWx1ZSgpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUubmV4dChPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICBwcmV2SW5kZXg6IHN0YXRlLmN1cnJJbmRleCxcclxuICAgICAgY3VyckluZGV4OiBpbmRleCxcclxuICAgICAgaGFzTmV4dDogaW5kZXggPCBnZXQoc3RhdGUsICdpbWFnZXMubGVuZ3RoJywgMCkgLSAxLFxyXG4gICAgICBoYXNQcmV2OiBpbmRleCA+IDAsXHJcbiAgICAgIGFjdGl2ZTogdHJ1ZVxyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEdvIHRvIG5leHQgaW1hZ2UgYW5kIHVwZGF0ZSB0aGUgc3RhdGUgKi9cclxuICBuZXh0KCkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLnN0YXRlLmdldFZhbHVlKCk7XHJcblxyXG4gICAgaWYgKHN0YXRlLmhhc05leHQpIHtcclxuICAgICAgY29uc3QgaW5kZXggPSAoc3RhdGUuY3VyckluZGV4IHx8IDApICsgMTtcclxuICAgICAgdGhpcy5zZXQoaW5kZXgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXQoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogR28gdG8gcHJldmlvdXMgaW1hZ2UgYW5kIHVwZGF0ZSB0aGUgc3RhdGUgKi9cclxuICBwcmV2KCkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLnN0YXRlLmdldFZhbHVlKCk7XHJcblxyXG4gICAgaWYgKHN0YXRlLmhhc1ByZXYpIHtcclxuICAgICAgY29uc3QgaW5kZXggPSAoc3RhdGUuY3VyckluZGV4IHx8IDApIC0gMTtcclxuICAgICAgdGhpcy5zZXQoaW5kZXgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXQoZ2V0KHN0YXRlLCAnaW1hZ2VzLmxlbmd0aCcsIDApIC0gMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQ2xvc2UgZ2FsbGVyeSBtb2RhbCBpZiBvcGVuICovXHJcbiAgY2xvc2UoKSB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuc3RhdGUuZ2V0VmFsdWUoKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlLm5leHQoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgYWN0aXZlOiBmYWxzZSxcclxuICAgICAgcGxheTogZmFsc2VcclxuICAgIH0pKTtcclxuICAgIHRoaXMuc3RvcCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFJlc2V0IGdhbGxlcnkgd2l0aCBpbml0aWFsIHN0YXRlICovXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLnN0YXRlLm5leHQoZGVmYXVsdFN0YXRlKTtcclxuICAgIHRoaXMuc3RvcCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFBsYXkgc2xpZGUgc2hvdyAqL1xyXG4gIHBsYXkoaW50ZXJ2YWw/OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHNwZWVkID0gaW50ZXJ2YWwgfHwgZ2V0KHRoaXMuY29uZmlnLCAncGxheWVyLnNwZWVkJywgMCkgfHwgMjAwMDtcclxuXHJcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuc3RhdGUuZ2V0VmFsdWUoKTtcclxuICAgIC8qKiBPcGVuIGFuZCBwbGF5IHRoZSBnYWxsZXJ5LCAnYWN0aXZlJyBvcGVucyBnYWxsZXJ5IG1vZGFsICovXHJcbiAgICB0aGlzLnN0YXRlLm5leHQoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgcGxheTogdHJ1ZSwgYWN0aXZlOiB0cnVlIH0pKTtcclxuICAgIHRoaXMucGxheWVyLm5leHQoc3BlZWQpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEVuZCBzbGlkZSBzaG93ICovXHJcbiAgc3RvcCgpIHtcclxuICAgIHRoaXMucGxheWVyLm5leHQoMCk7XHJcbiAgfVxyXG5cclxuICBwbGF5ZXJFbmdpbmUoaW50ZXJ2YWw/OiBudW1iZXIpIHtcclxuXHJcbiAgICByZXR1cm4gcnhJbnRlcnZhbChpbnRlcnZhbCkucGlwZShcclxuICAgICAgdGFrZVdoaWxlKCgpID0+IHRoaXMuc3RhdGUuZ2V0VmFsdWUoKS5wbGF5IHx8IGZhbHNlKSxcclxuICAgICAgdGFwKCgpID0+IHRoaXMubmV4dCgpKSxcclxuICAgICAgZmluYWxpemUoKCkgPT4gdGhpcy5zdGF0ZS5uZXh0KE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuZ2V0VmFsdWUoKSwgeyBwbGF5OiBmYWxzZSB9KSkpKTtcclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=