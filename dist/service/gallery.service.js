var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
import { Optional } from '@angular/core';
import { defaultState, defaultConfig } from '../config/gallery.default';
import { get } from '../utils/get';
import { Subject } from 'rxjs';
import { BehaviorSubject, of, interval as rxInterval } from 'rxjs';
import { switchMap, tap, takeWhile, finalize } from 'rxjs/operators';
var GalleryService = /** @class */ (function () {
    function GalleryService(config) {
        var _this = this;
        /** Gallery config */
        this.config = defaultConfig;
        /** Initialize the state */
        this.state = new BehaviorSubject(defaultState);
        /** Initialize the config */
        this.config = Object.assign({}, defaultConfig, config);
        /** Initialize the player for play/pause commands */
        this.player = new Subject();
        this.player.pipe(switchMap(function (interval) { return (interval) ? _this.playerEngine(interval) : of(null); })).subscribe();
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
            hasNext: index < get(state, 'images.length', 0) - 1,
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
            this.set(get(state, 'images.length', 0) - 1);
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
        this.state.next(defaultState);
        this.stop();
    };
    /** Play slide show */
    GalleryService.prototype.play = function (interval) {
        var speed = interval || get(this.config, 'player.speed', 0) || 2000;
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
        return rxInterval(interval).pipe(takeWhile(function () { return _this.state.getValue().play || false; }), tap(function () { return _this.next(); }), finalize(function () { return _this.state.next(Object.assign({}, _this.state.getValue(), { play: false })); }));
    };
    GalleryService = __decorate([
        __param(0, Optional()),
        __metadata("design:paramtypes", [Object])
    ], GalleryService);
    return GalleryService;
}());
export { GalleryService };
//# sourceMappingURL=gallery.service.js.map