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
export class GalleryService {
    /**
     * @param {?} config
     */
    constructor(config) {
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
        (interval) => (interval) ? this.playerEngine(interval) : of(null)))).subscribe();
    }
    /**
     * Load images and reset the state
     * @param {?} images
     * @return {?}
     */
    load(images) {
        this.state.next({
            images: images,
            currIndex: 0,
            hasNext: images.length > 1,
            hasPrev: false,
            active: false
        });
    }
    /**
     * Set current image and update the state
     * @param {?} index
     * @return {?}
     */
    set(index) {
        /** @type {?} */
        const state = this.state.getValue();
        this.state.next(Object.assign({}, state, {
            prevIndex: state.currIndex,
            currIndex: index,
            hasNext: index < get(state, 'images.length', 0) - 1,
            hasPrev: index > 0,
            active: true
        }));
    }
    /**
     * Go to next image and update the state
     * @return {?}
     */
    next() {
        /** @type {?} */
        const state = this.state.getValue();
        if (state.hasNext) {
            /** @type {?} */
            const index = (state.currIndex || 0) + 1;
            this.set(index);
        }
        else {
            this.set(0);
        }
    }
    /**
     * Go to previous image and update the state
     * @return {?}
     */
    prev() {
        /** @type {?} */
        const state = this.state.getValue();
        if (state.hasPrev) {
            /** @type {?} */
            const index = (state.currIndex || 0) - 1;
            this.set(index);
        }
        else {
            this.set(get(state, 'images.length', 0) - 1);
        }
    }
    /**
     * Close gallery modal if open
     * @return {?}
     */
    close() {
        /** @type {?} */
        const state = this.state.getValue();
        this.state.next(Object.assign({}, state, {
            active: false,
            play: false
        }));
        this.stop();
    }
    /**
     * Reset gallery with initial state
     * @return {?}
     */
    reset() {
        this.state.next(defaultState);
        this.stop();
    }
    /**
     * Play slide show
     * @param {?=} interval
     * @return {?}
     */
    play(interval) {
        /** @type {?} */
        const speed = interval || get(this.config, 'player.speed', 0) || 2000;
        /** @type {?} */
        const state = this.state.getValue();
        /** Open and play the gallery, 'active' opens gallery modal */
        this.state.next(Object.assign({}, state, { play: true, active: true }));
        this.player.next(speed);
    }
    /**
     * End slide show
     * @return {?}
     */
    stop() {
        this.player.next(0);
    }
    /**
     * @param {?=} interval
     * @return {?}
     */
    playerEngine(interval) {
        return rxInterval(interval).pipe(takeWhile((/**
         * @return {?}
         */
        () => this.state.getValue().play || false)), tap((/**
         * @return {?}
         */
        () => this.next())), finalize((/**
         * @return {?}
         */
        () => this.state.next(Object.assign({}, this.state.getValue(), { play: false })))));
    }
}
/** @nocollapse */
GalleryService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2FsbGVyeS1saWIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZS9nYWxsZXJ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQWMsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXJELE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFFeEUsT0FBTyxFQUFFLEdBQUcsRUFBRSxNQUFNLGNBQWMsQ0FBQztBQUNuQyxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxlQUFlLEVBQWMsRUFBRSxFQUFFLFFBQVEsSUFBSSxVQUFVLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDL0UsT0FBTyxFQUFFLFNBQVMsRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXJFLE1BQU0sT0FBTyxjQUFjOzs7O0lBU3pCLFlBQXdCLE1BQXFCOzs7O1FBSjdDLFdBQU0sR0FBa0IsYUFBYSxDQUFDO1FBTXBDLDJCQUEyQjtRQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksZUFBZSxDQUFlLFlBQVksQ0FBQyxDQUFDO1FBQzdELDRCQUE0QjtRQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQUV2RCxvREFBb0Q7UUFDcEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQzVCLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVM7Ozs7UUFBQyxDQUFDLFFBQVEsRUFBRSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxD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LEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDeEUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFHRCxJQUFJO1FBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxZQUFZLENBQUMsUUFBaUI7UUFFNUIsT0FBTyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUM5QixTQUFTOzs7UUFBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksSUFBSSxLQUFLLEVBQUMsRUFDcEQsR0FBRzs7O1FBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxFQUFDLEVBQ3RCLFFBQVE7OztRQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsQ0FBQztJQUVoRyxDQUFDOzs7OzRDQXBHWSxRQUFROzs7Ozs7O0lBTnJCLCtCQUFxQzs7Ozs7SUFFckMsZ0NBQXNDOzs7OztJQUV0QyxnQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgR2FsbGVyeVN0YXRlLCBHYWxsZXJ5SW1hZ2UgfSBmcm9tICcuL2dhbGxlcnkuc3RhdGUnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2dhbGxlcnkuY29uZmlnJztcclxuaW1wb3J0IHsgZGVmYXVsdFN0YXRlLCBkZWZhdWx0Q29uZmlnIH0gZnJvbSAnLi4vY29uZmlnL2dhbGxlcnkuZGVmYXVsdCc7XHJcblxyXG5pbXBvcnQgeyBnZXQgfSBmcm9tICcuLi91dGlscy9nZXQnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUsIG9mLCBpbnRlcnZhbCBhcyByeEludGVydmFsIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IHN3aXRjaE1hcCwgdGFwLCB0YWtlV2hpbGUsIGZpbmFsaXplIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbGxlcnlTZXJ2aWNlIHtcclxuXHJcbiAgLyoqIEdhbGxlcnkgc3RhdGUgKi9cclxuICBzdGF0ZTogQmVoYXZpb3JTdWJqZWN0PEdhbGxlcnlTdGF0ZT47XHJcbiAgLyoqIEdhbGxlcnkgY29uZmlnICovXHJcbiAgY29uZmlnOiBHYWxsZXJ5Q29uZmlnID0gZGVmYXVsdENvbmZpZztcclxuICAvKiogR2FsbGVyeSBzbGlkZSBzaG93IHBsYXllciAqL1xyXG4gIHBsYXllcjogU3ViamVjdDxudW1iZXI+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihAT3B0aW9uYWwoKSBjb25maWc6IEdhbGxlcnlDb25maWcpIHtcclxuXHJcbiAgICAvKiogSW5pdGlhbGl6ZSB0aGUgc3RhdGUgKi9cclxuICAgIHRoaXMuc3RhdGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PEdhbGxlcnlTdGF0ZT4oZGVmYXVsdFN0YXRlKTtcclxuICAgIC8qKiBJbml0aWFsaXplIHRoZSBjb25maWcgKi9cclxuICAgIHRoaXMuY29uZmlnID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdENvbmZpZywgY29uZmlnKTtcclxuXHJcbiAgICAvKiogSW5pdGlhbGl6ZSB0aGUgcGxheWVyIGZvciBwbGF5L3BhdXNlIGNvbW1hbmRzICovXHJcbiAgICB0aGlzLnBsYXllciA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgICB0aGlzLnBsYXllci5waXBlKHN3aXRjaE1hcCgoaW50ZXJ2YWwpID0+IChpbnRlcnZhbCkgPyB0aGlzLnBsYXllckVuZ2luZShpbnRlcnZhbCkgOiBvZihudWxsKSkpLnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIExvYWQgaW1hZ2VzIGFuZCByZXNldCB0aGUgc3RhdGUgKi9cclxuICBsb2FkKGltYWdlczogR2FsbGVyeUltYWdlW10pIHtcclxuXHJcbiAgICB0aGlzLnN0YXRlLm5leHQoe1xyXG4gICAgICBpbWFnZXM6IGltYWdlcyxcclxuICAgICAgY3VyckluZGV4OiAwLFxyXG4gICAgICBoYXNOZXh0OiBpbWFnZXMubGVuZ3RoID4gMSxcclxuICAgICAgaGFzUHJldjogZmFsc2UsXHJcbiAgICAgIGFjdGl2ZTogZmFsc2VcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqIFNldCBjdXJyZW50IGltYWdlIGFuZCB1cGRhdGUgdGhlIHN0YXRlICovXHJcbiAgc2V0KGluZGV4OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHN0YXRlID0gdGhpcy5zdGF0ZS5nZXRWYWx1ZSgpO1xyXG5cclxuICAgIHRoaXMuc3RhdGUubmV4dChPYmplY3QuYXNzaWduKHt9LCBzdGF0ZSwge1xyXG4gICAgICBwcmV2SW5kZXg6IHN0YXRlLmN1cnJJbmRleCxcclxuICAgICAgY3VyckluZGV4OiBpbmRleCxcclxuICAgICAgaGFzTmV4dDogaW5kZXggPCBnZXQoc3RhdGUsICdpbWFnZXMubGVuZ3RoJywgMCkgLSAxLFxyXG4gICAgICBoYXNQcmV2OiBpbmRleCA+IDAsXHJcbiAgICAgIGFjdGl2ZTogdHJ1ZVxyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEdvIHRvIG5leHQgaW1hZ2UgYW5kIHVwZGF0ZSB0aGUgc3RhdGUgKi9cclxuICBuZXh0KCkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLnN0YXRlLmdldFZhbHVlKCk7XHJcblxyXG4gICAgaWYgKHN0YXRlLmhhc05leHQpIHtcclxuICAgICAgY29uc3QgaW5kZXggPSAoc3RhdGUuY3VyckluZGV4IHx8IDApICsgMTtcclxuICAgICAgdGhpcy5zZXQoaW5kZXgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXQoMCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogR28gdG8gcHJldmlvdXMgaW1hZ2UgYW5kIHVwZGF0ZSB0aGUgc3RhdGUgKi9cclxuICBwcmV2KCkge1xyXG4gICAgY29uc3Qgc3RhdGUgPSB0aGlzLnN0YXRlLmdldFZhbHVlKCk7XHJcblxyXG4gICAgaWYgKHN0YXRlLmhhc1ByZXYpIHtcclxuICAgICAgY29uc3QgaW5kZXggPSAoc3RhdGUuY3VyckluZGV4IHx8IDApIC0gMTtcclxuICAgICAgdGhpcy5zZXQoaW5kZXgpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zZXQoZ2V0KHN0YXRlLCAnaW1hZ2VzLmxlbmd0aCcsIDApIC0gMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKiogQ2xvc2UgZ2FsbGVyeSBtb2RhbCBpZiBvcGVuICovXHJcbiAgY2xvc2UoKSB7XHJcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuc3RhdGUuZ2V0VmFsdWUoKTtcclxuXHJcbiAgICB0aGlzLnN0YXRlLm5leHQoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHtcclxuICAgICAgYWN0aXZlOiBmYWxzZSxcclxuICAgICAgcGxheTogZmFsc2VcclxuICAgIH0pKTtcclxuICAgIHRoaXMuc3RvcCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFJlc2V0IGdhbGxlcnkgd2l0aCBpbml0aWFsIHN0YXRlICovXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLnN0YXRlLm5leHQoZGVmYXVsdFN0YXRlKTtcclxuICAgIHRoaXMuc3RvcCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqIFBsYXkgc2xpZGUgc2hvdyAqL1xyXG4gIHBsYXkoaW50ZXJ2YWw/OiBudW1iZXIpIHtcclxuICAgIGNvbnN0IHNwZWVkID0gaW50ZXJ2YWwgfHwgZ2V0KHRoaXMuY29uZmlnLCAncGxheWVyLnNwZWVkJywgMCkgfHwgMjAwMDtcclxuXHJcbiAgICBjb25zdCBzdGF0ZSA9IHRoaXMuc3RhdGUuZ2V0VmFsdWUoKTtcclxuICAgIC8qKiBPcGVuIGFuZCBwbGF5IHRoZSBnYWxsZXJ5LCAnYWN0aXZlJyBvcGVucyBnYWxsZXJ5IG1vZGFsICovXHJcbiAgICB0aGlzLnN0YXRlLm5leHQoT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHsgcGxheTogdHJ1ZSwgYWN0aXZlOiB0cnVlIH0pKTtcclxuICAgIHRoaXMucGxheWVyLm5leHQoc3BlZWQpO1xyXG4gIH1cclxuXHJcbiAgLyoqIEVuZCBzbGlkZSBzaG93ICovXHJcbiAgc3RvcCgpIHtcclxuICAgIHRoaXMucGxheWVyLm5leHQoMCk7XHJcbiAgfVxyXG5cclxuICBwbGF5ZXJFbmdpbmUoaW50ZXJ2YWw/OiBudW1iZXIpIHtcclxuXHJcbiAgICByZXR1cm4gcnhJbnRlcnZhbChpbnRlcnZhbCkucGlwZShcclxuICAgICAgdGFrZVdoaWxlKCgpID0+IHRoaXMuc3RhdGUuZ2V0VmFsdWUoKS5wbGF5IHx8IGZhbHNlKSxcclxuICAgICAgdGFwKCgpID0+IHRoaXMubmV4dCgpKSxcclxuICAgICAgZmluYWxpemUoKCkgPT4gdGhpcy5zdGF0ZS5uZXh0KE9iamVjdC5hc3NpZ24oe30sIHRoaXMuc3RhdGUuZ2V0VmFsdWUoKSwgeyBwbGF5OiBmYWxzZSB9KSkpKTtcclxuXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=