import { transition, state, trigger, style, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { Subject, BehaviorSubject, of, interval, from } from 'rxjs';
import { switchMap, tap, takeWhile, finalize, map } from 'rxjs/operators';
import { Optional, ChangeDetectionStrategy, Component, ElementRef, Input, Renderer2, ViewEncapsulation, HostListener, Directive, Output, EventEmitter, NgModule, InjectionToken } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/config/gallery.default.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const defaultState = {
    images: undefined,
    prevIndex: 0,
    currIndex: 0,
    hasNext: undefined,
    hasPrev: undefined,
    active: false
};
/** @type {?} */
const defaultConfig = {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/get.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?} obj
 * @param {?} path
 * @param {?=} def
 * @return {?}
 */
function get(obj, path, def = undefined) {
    if (!obj || !path) {
        return def;
    }
    /** @type {?} */
    let arr = path.split('.');
    /** @type {?} */
    let current = obj;
    for (let i = 0; i < arr.length; i++) {
        if (!current[arr[i]]) {
            return def;
        }
        current = current[arr[i]];
    }
    return current || def;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/service/gallery.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GalleryService {
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
        (interval$$1) => (interval$$1) ? this.playerEngine(interval$$1) : of(null)))).subscribe();
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
        const state$$1 = this.state.getValue();
        this.state.next(Object.assign({}, state$$1, {
            prevIndex: state$$1.currIndex,
            currIndex: index,
            hasNext: index < get(state$$1, 'images.length', 0) - 1,
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
        const state$$1 = this.state.getValue();
        if (state$$1.hasNext) {
            /** @type {?} */
            const index = (state$$1.currIndex || 0) + 1;
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
        const state$$1 = this.state.getValue();
        if (state$$1.hasPrev) {
            /** @type {?} */
            const index = (state$$1.currIndex || 0) - 1;
            this.set(index);
        }
        else {
            this.set(get(state$$1, 'images.length', 0) - 1);
        }
    }
    /**
     * Close gallery modal if open
     * @return {?}
     */
    close() {
        /** @type {?} */
        const state$$1 = this.state.getValue();
        this.state.next(Object.assign({}, state$$1, {
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
    play(interval$$1) {
        /** @type {?} */
        const speed = interval$$1 || get(this.config, 'player.speed', 0) || 2000;
        /** @type {?} */
        const state$$1 = this.state.getValue();
        /** Open and play the gallery, 'active' opens gallery modal */
        this.state.next(Object.assign({}, state$$1, { play: true, active: true }));
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
    playerEngine(interval$$1) {
        return interval(interval$$1).pipe(takeWhile((/**
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/gallery/gallery.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GalleryComponent {
    /**
     * @param {?} gallery
     */
    constructor(gallery) {
        this.gallery = gallery;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.gallery.reset();
    }
}
GalleryComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery',
                template: '<gallery-main *ngIf="gallery.state | async as state" [state]="state" [config]="gallery.config"></gallery-main>',
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["gallery-main{display:flex;height:500px}"]
            }] }
];
/** @nocollapse */
GalleryComponent.ctorParameters = () => [
    { type: GalleryService }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/gallery-bullets/gallery-bullets.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GalleryBulletsComponent {
    /**
     * @param {?} gallery
     * @param {?} renderer
     * @param {?} el
     */
    constructor(gallery, renderer, el) {
        this.gallery = gallery;
        this.renderer = renderer;
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.config.position) {
            /** @type {?} */
            let contDirection;
            /** @type {?} */
            let conWidth;
            /** @type {?} */
            let conHeight;
            /** @type {?} */
            let hostRight = 'unset';
            /** @type {?} */
            let hostBottom = 'unset';
            switch (this.config.position) {
                case 'bottom':
                    contDirection = 'row';
                    conHeight = 'auto';
                    conWidth = '100%';
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
    }
}
GalleryBulletsComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery-bullets',
                template: "<div class=\"g-bullet\"\r\n     *ngFor=\"let image of state.images; let i = index\"\r\n     [class.g-bullet-curr]=\"i === state.currIndex\"\r\n     (click)=\"gallery.set(i)\">\r\n\r\n  <div class=\"g-bullet-inner\" [ngStyle]=\"config.style\"></div>\r\n\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{position:absolute;display:flex;align-items:center;justify-content:center}.g-bullet{cursor:pointer;display:flex;z-index:300}.g-bullet-inner{margin:1em;height:4px;width:4px;background-color:rgba(255,255,255,.5);border-radius:2px;box-shadow:0 0 6px rgba(0,0,0,.8);transition:.2s}.g-bullet-curr .g-bullet-inner{transform:scale(1.5);background-color:#fff}"]
            }] }
];
/** @nocollapse */
GalleryBulletsComponent.ctorParameters = () => [
    { type: GalleryService },
    { type: Renderer2 },
    { type: ElementRef }
];
GalleryBulletsComponent.propDecorators = {
    state: [{ type: Input }],
    config: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/gallery-image/gallery-image.animation.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const animation = [
    trigger('imgAnimate', [
        state('fade', style({ opacity: 1 })),
        transition('none => fade', [
            style({
                opacity: 0
            }),
            animate('0.5s ease-in')
        ])
    ])
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/gallery-image/gallery-image.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GalleryImageComponent {
    /**
     * @param {?} gallery
     * @param {?} el
     * @param {?} renderer
     */
    constructor(gallery, el, renderer) {
        this.gallery = gallery;
        this.el = el;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** Enable gestures */
        if (this.config.gestures) {
            if (typeof Hammer === 'undefined') {
                throw Error('[NgGallery]: HammerJS is undefined, make sure it is loaded');
            }
            else {
                /** @type {?} */
                const el = this.el.nativeElement;
                /** @type {?} */
                const mc = new Hammer(el);
                mc.on('panstart', (/**
                 * @return {?}
                 */
                () => {
                    this.renderer.removeClass(el, 'g-pan-reset');
                }));
                mc.on('panend', (/**
                 * @return {?}
                 */
                () => {
                    this.renderer.addClass(el, 'g-pan-reset');
                }));
                mc.on('pan', (/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => {
                    this.renderer.setStyle(el, 'transform', `translate3d(${e.deltaX}px, 0px, 0px)`);
                }));
                /** Swipe next and prev */
                mc.on('swipeleft', (/**
                 * @return {?}
                 */
                () => {
                    this.gallery.next();
                }));
                mc.on('swiperight', (/**
                 * @return {?}
                 */
                () => {
                    this.gallery.prev();
                }));
            }
        }
    }
    /**
     * @param {?} done
     * @return {?}
     */
    imageLoad(done) {
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
    }
}
GalleryImageComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery-image',
                template: "<div [@imgAnimate]=\"animate\" class=\"g-image\">\r\n  <img [lazyImage]=\"state.images[state.currIndex].src\" (lazyLoad)=\"imageLoad($event)\">\r\n</div>\r\n\r\n<gallery-loader *ngIf=\"loading\" [config]=\"config.loader\"></gallery-loader>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: animation,
                styles: [":host{order:1;flex:1;display:flex;flex-direction:column;transform:translate3d(0,0,0)}.g-image{position:absolute;left:0;right:0;top:0;bottom:0;background-repeat:no-repeat;background-size:contain;background-position:center center;z-index:3;display:flex;flex-direction:column;justify-content:center;align-items:center}.g-image img{box-shadow:0 0 4px rgba(0,0,0,.3);pointer-events:none;display:block;max-width:100%;max-height:100%}"]
            }] }
];
/** @nocollapse */
GalleryImageComponent.ctorParameters = () => [
    { type: GalleryService },
    { type: ElementRef },
    { type: Renderer2 }
];
GalleryImageComponent.propDecorators = {
    state: [{ type: Input }],
    config: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/gallery-loader/gallery-loader.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GalleryLoaderComponent {
    /**
     * @param {?} gallery
     */
    constructor(gallery) {
        this.gallery = gallery;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.icon = this.getIcon();
        this.styles = this.getStyle();
    }
    /**
     * @return {?}
     */
    getIcon() {
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
    }
    /**
     * @return {?}
     */
    getStyle() {
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
    }
}
GalleryLoaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery-loader',
                template: "<div class=\"g-loader\" [ngStyle]=\"styles\">\r\n  <img [src]=\"icon\" [style.width]=\"config.width\" [style.height]=\"config.height\"/>\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["*{box-sizing:border-box}:host{z-index:2040}.g-loader{z-index:2050;position:absolute;width:100%;height:100%;display:flex;padding:1em}"]
            }] }
];
/** @nocollapse */
GalleryLoaderComponent.ctorParameters = () => [
    { type: GalleryService }
];
GalleryLoaderComponent.propDecorators = {
    config: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/gallery-main/gallery-main.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GalleryMainComponent {
    /**
     * @param {?} gallery
     */
    constructor(gallery) {
        this.gallery = gallery;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // shortcut for thumbnail config
        /** @type {?} */
        const thumbPos = this.config.thumbnails ? this.config.thumbnails.position : 0;
        this.thumbDirection = (thumbPos === 'left' || thumbPos === 'right') ? 'row' : 'column';
    }
}
GalleryMainComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery-main',
                template: "<div class=\"g-container\" [style.flexDirection]=\"thumbDirection\" [ngStyle]=\"config.style\">\r\n\r\n  <gallery-thumb *ngIf=\"config.thumbnails\" [state]=\"state\" [config]=\"config.thumbnails\"\r\n                 [style.background]=\"config.style?.background\"></gallery-thumb>\r\n\r\n  <div class=\"g-box\">\r\n\r\n    <div class=\"g-image-box\">\r\n\r\n      <gallery-image [state]=\"state\" [config]=\"config\" (loading)=\"loading = $event\"></gallery-image>\r\n\r\n      <gallery-nav *ngIf=\"config.navigation\" [state]=\"state\"></gallery-nav>\r\n\r\n      <!--<div class=\"g-layer\" *ngIf=\"state.images[state.currIndex].layer\" [innerHtml]=\"state.images[state.currIndex].layer\"></div>-->\r\n\r\n    </div>\r\n\r\n    <gallery-text *ngIf=\"config.description\" [state]=\"state\" [config]=\"config.description\"></gallery-text>\r\n\r\n    <gallery-bullets *ngIf=\"config.bullets\" [state]=\"state\" [config]=\"config.bullets\"></gallery-bullets>\r\n\r\n    <gallery-player *ngIf=\"config.player\" [state]=\"state\" [config]=\"config.player\"></gallery-player>\r\n\r\n  </div>\r\n\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                styles: ["gallery-main{flex:1;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}gallery-main *{box-sizing:border-box}.g-container{overflow:hidden;position:relative;z-index:200;max-height:100%;max-width:100%;display:flex;flex-direction:column}@media (max-width:480px){.g-container{width:100%!important;flex:1;flex-direction:column!important}}.g-box,.g-image-box{position:relative;display:flex;flex-direction:column;flex:1;order:1;height:100%}.g-layer{position:absolute;left:0;top:0;right:0;bottom:0;z-index:250}.g-pan-reset{transition:.3s linear;transform:translate3d(0,0,0)!important}"]
            }] }
];
/** @nocollapse */
GalleryMainComponent.ctorParameters = () => [
    { type: GalleryService }
];
GalleryMainComponent.propDecorators = {
    state: [{ type: Input }],
    config: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/gallery-modal/gallery-modal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GalleryModalComponent {
    /**
     * @param {?} gallery
     */
    constructor(gallery) {
        this.gallery = gallery;
        this.closeButton = true;
    }
    /**
     * Activate keyboard for navigation
     * @param {?} event
     * @return {?}
     */
    keyboardInput(event) {
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
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.gallery.reset();
    }
}
GalleryModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery-modal',
                template: "<div *ngIf=\"gallery.state | async as state\">\r\n\r\n  <div *ngIf=\"state.active\" class=\"g-modal\">\r\n\r\n    <div class=\"g-btn-close-container\">\r\n      <div *ngIf=\"closeButton\" class=\"g-btn-close\" (click)=\"gallery.close()\"></div>\r\n    </div>\r\n\r\n    <gallery-main [@popup] [state]=\"state\" [config]=\"gallery.config\"></gallery-main>\r\n\r\n    <div class=\"g-overlay\" (click)=\"gallery.close()\"></div>\r\n\r\n  </div>\r\n\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                animations: [
                    trigger('popup', [
                        state('in', style({ opacity: 0.8, transform: 'scale(0.2) translate3d(0, 100px, 0)' })),
                        transition('void => *', [
                            style({ opacity: 0.8, transform: 'scale(0.2) translate3d(0, 100px, 0)' }),
                            animate(300)
                        ]),
                        transition('* => void', [
                            animate(300, style({ opacity: 1, transform: 'scale(1)  translate3d(0, 0, 0)' }))
                        ])
                    ])
                ],
                styles: ["*{box-sizing:border-box}.g-modal{position:fixed;left:0;right:0;top:0;bottom:0;background-color:rgba(0,0,0,.6);z-index:1000;overflow:hidden;display:flex;flex-direction:column;justify-content:center;align-items:center}.g-overlay{position:absolute;left:0;right:0;top:0;bottom:0}.g-btn-close-container{width:100%;display:flex}@media (max-width:480px){.g-modal{padding:0}.g-btn-close-container{justify-content:flex-end}.g-btn-close-container .g-btn-close{margin:.5em;position:relative;right:0;top:0}}.g-btn-close{position:absolute;right:1em;top:1em;z-index:9999;cursor:pointer;width:30px;height:30px;transition:.2s linear;background-image:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUwIDUwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MCA1MDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxjaXJjbGUgc3R5bGU9ImZpbGw6I0Q3NUE0QTsiIGN4PSIyNSIgY3k9IjI1IiByPSIyNSIvPjxwb2x5bGluZSBzdHlsZT0iZmlsbDpub25lO3N0cm9rZTojRkZGRkZGO3N0cm9rZS13aWR0aDoyO3N0cm9rZS1saW5lY2FwOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwOyIgcG9pbnRzPSIxNiwzNCAyNSwyNSAzNCwxNiAiLz48cG9seWxpbmUgc3R5bGU9ImZpbGw6bm9uZTtzdHJva2U6I0ZGRkZGRjtzdHJva2Utd2lkdGg6MjtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMDsiIHBvaW50cz0iMTYsMTYgMjUsMjUgMzQsMzQgIi8+PC9zdmc+)}.g-btn-close:active{transform:rotate(180deg) scale(.9)}"]
            }] }
];
/** @nocollapse */
GalleryModalComponent.ctorParameters = () => [
    { type: GalleryService }
];
GalleryModalComponent.propDecorators = {
    closeButton: [{ type: Input }],
    keyboardInput: [{ type: HostListener, args: ['body:keydown', ['$event'],] }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/gallery-nav/gallery-nav.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GalleryNavComponent {
    /**
     * @param {?} gallery
     */
    constructor(gallery) {
        this.gallery = gallery;
    }
}
GalleryNavComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery-nav',
                template: "<div *ngIf=\"state.images.length > 1\" class=\"g-nav\">\r\n\r\n  <div class=\"g-nav-prev\" (click)=\"gallery.prev()\">\r\n    <i class=\"prev-arrow-ico\"></i>\r\n  </div>\r\n\r\n  <div class=\"g-nav-next\" (click)=\"gallery.next()\">\r\n    <i class=\"next-arrow-ico\"></i>\r\n  </div>\r\n\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["*{box-sizing:border-box}:host{z-index:201;position:absolute;left:0;right:0;top:0;bottom:0;display:flex}@media (max-width:480px){:host{display:none}}.g-nav{flex:1;height:100%;display:flex;flex-direction:row;opacity:0;transition:.4s linear;cursor:pointer}.g-nav:hover{opacity:1}.g-nav-next,.g-nav-prev{display:flex;align-items:center;height:100%;opacity:.7;position:relative;overflow:hidden;transition:.2s;z-index:0}.g-nav-next:hover,.g-nav-prev:hover{opacity:1}.g-nav-next{padding-right:.7em;flex:1;justify-content:flex-end}.g-nav-prev{padding-left:.7em;width:20%}.next-arrow-ico,.prev-arrow-ico{width:45px;height:80px}.next-arrow-ico{background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PiAgPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJMYXllcl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQxNC40OTYgNDE0LjQ5NiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNDE0LjQ5NiA0MTQuNDk2OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+IDxkZWZzIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGZpbHRlciBpZD0iZHJvcHNoYWRvdyIgPiAgPGZlR2F1c3NpYW5CbHVyIGluPSJTb3VyY2VBbHBoYSIgc3RkRGV2aWF0aW9uPSIzIi8+ICAgPGZlT2Zmc2V0IGR4PSIyIiBkeT0iMiIgcmVzdWx0PSJvZmZzZXRibHVyIi8+ICAgPGZlTWVyZ2U+IDxmZU1lcmdlTm9kZS8+PGZlTWVyZ2VOb2RlIGluPSJTb3VyY2VHcmFwaGljIi8+ICAgPC9mZU1lcmdlPjwvZmlsdGVyPjwvZGVmcz4gIDxwb2x5Z29uIHN0eWxlPSJmaWxsOiNmZmY7IiBmaWx0ZXI9InVybCgjZHJvcHNoYWRvdykiIHBvaW50cz0iMTE4LjEyNiwwIDg5Ljc5NiwyOC4yMzggMjY4LjIyMywyMDcuMjQ4IDg5Ljc5NiwzODYuMjU4IDExOC4xMjYsNDE0LjQ5NiAzMjQuNywyMDcuMjQ4ICIvPjwvc3ZnPg==) center center no-repeat}.prev-arrow-ico{background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/PjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0MTQuNDk2IDQxNC40OTYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQxNC40OTYgNDE0LjQ5NjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxkZWZzIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGZpbHRlciBpZD0iZHJvcHNoYWRvdyIgPiAgPGZlR2F1c3NpYW5CbHVyIGluPSJTb3VyY2VBbHBoYSIgc3RkRGV2aWF0aW9uPSIzIi8+ICAgPGZlT2Zmc2V0IGR4PSIyIiBkeT0iMiIgcmVzdWx0PSJvZmZzZXRibHVyIi8+ICAgPGZlTWVyZ2U+IDxmZU1lcmdlTm9kZS8+PGZlTWVyZ2VOb2RlIGluPSJTb3VyY2VHcmFwaGljIi8+ICAgPC9mZU1lcmdlPjwvZmlsdGVyPjwvZGVmcz48cG9seWdvbiBzdHlsZT0iZmlsbDojZmZmOyIgZmlsdGVyPSJ1cmwoI2Ryb3BzaGFkb3cpIiBwb2ludHM9IjMyNC43LDI4LjIzOCAyOTYuMzcsMCA4OS43OTYsMjA3LjI0OCAyOTYuMzcsNDE0LjQ5NiAzMjQuNywzODYuMjU4IDE0Ni4yNzMsMjA3LjI0OCAiLz48L3N2Zz4=) center center no-repeat}"]
            }] }
];
/** @nocollapse */
GalleryNavComponent.ctorParameters = () => [
    { type: GalleryService }
];
GalleryNavComponent.propDecorators = {
    state: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/gallery-player/gallery-player.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GalleryPlayerComponent {
    /**
     * @param {?} gallery
     */
    constructor(gallery) {
        this.gallery = gallery;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** Start auto-play if enabled */
        if (this.config.autoplay) {
            this.gallery.play();
        }
        /** TODO: Display status bar */
    }
}
GalleryPlayerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery-player',
                template: "<!--<div class=\"g-player-btns\">-->\r\n  <!--<div *ngIf=\"!state.play\" class=\"g-player-btn\" (click)=\"gallery.play()\">\u25B6</div>-->\r\n  <!--<div *ngIf=\"state.play\" class=\"g-player-btn\" (click)=\"gallery.stop()\">\u23F8</div>-->\r\n<!--</div>-->\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{position:absolute;z-index:310}.g-player-btns{display:flex;padding:.5em 1em}.g-player-btn{margin-right:.5em;color:#fff;cursor:pointer}"]
            }] }
];
/** @nocollapse */
GalleryPlayerComponent.ctorParameters = () => [
    { type: GalleryService }
];
GalleryPlayerComponent.propDecorators = {
    config: [{ type: Input }],
    state: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/gallery-text/gallery-text.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GalleryTextComponent {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const el = this.el.nativeElement;
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
    }
}
GalleryTextComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery-text',
                template: "<div class=\"g-text-container\" [ngStyle]=\"config.style\">\r\n  <div *ngIf=\"config.text\" class=\"g-text\" [innerHtml]=\"state.images[state.currIndex]?.text\">\r\n  </div>\r\n  <div *ngIf=\"config.counter\" class=\"g-number\">\r\n    {{(state.currIndex + 1) + '/' + state.images.length}}\r\n  </div>\r\n</div>\r\n\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: ["*{box-sizing:border-box}:host{position:relative;left:0;right:0;z-index:205}.g-text-container{padding:1em 2em;color:#ccc;font-size:13px;display:flex;flex-direction:row;align-content:center;background-clip:padding-box;-webkit-font-smoothing:antialiased}.g-text{flex:1}"]
            }] }
];
/** @nocollapse */
GalleryTextComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 }
];
GalleryTextComponent.propDecorators = {
    state: [{ type: Input }],
    config: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/component/gallery-thumb/gallery-thumb.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GalleryThumbComponent {
    /**
     * @param {?} gallery
     * @param {?} el
     * @param {?} renderer
     */
    constructor(gallery, el, renderer) {
        this.gallery = gallery;
        this.el = el;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.contStyle = this.getContainerStyle();
        /** Enable gestures */
        if (this.gallery.config.gestures) {
            if (typeof Hammer === 'undefined') {
                throw Error('[NgGallery]: HammerJS is undefined, make sure it is loaded');
            }
            else {
                /** @type {?} */
                const el = this.el.nativeElement;
                /** @type {?} */
                const mc = new Hammer(el);
                mc.on('panstart', (/**
                 * @return {?}
                 */
                () => {
                    this.renderer.removeClass(el, 'g-pan-reset');
                }));
                mc.on('panend', (/**
                 * @return {?}
                 */
                () => {
                    this.renderer.addClass(el, 'g-pan-reset');
                }));
                /** Pan left and right */
                mc.on('pan', (/**
                 * @param {?} e
                 * @return {?}
                 */
                (e) => {
                    this.renderer.setStyle(el, 'transform', `translate3d(${e.deltaX}px, 0px, 0px)`);
                }));
                /** Swipe next and prev */
                mc.on('swipeleft', (/**
                 * @return {?}
                 */
                () => {
                    this.gallery.next();
                }));
                mc.on('swiperight', (/**
                 * @return {?}
                 */
                () => {
                    this.gallery.prev();
                }));
            }
        }
    }
    /**
     * @return {?}
     */
    translateThumbs() {
        /** @type {?} */
        const x = get(this.state, 'currIndex', 0) * get(this.config, 'width', 0) + get(this.config, 'width', 0) / 2;
        return `translate3d(${-x}px, 0, 0)`;
    }
    /**
     * @return {?}
     */
    getContainerStyle() {
        /**
         * Set thumbnails position (top, bottom)
         * @type {?}
         */
        const order = this.config.position === 'top' ? 0 : 2;
        this.renderer.setStyle(this.el.nativeElement, 'order', order);
        return {
            height: this.config.height + 'px',
            margin: this.config.space + 'px'
        };
    }
    /**
     * @param {?} i
     * @return {?}
     */
    getThumbImage(i) {
        /**
         * Use thumbnail if presented
         * @type {?}
         */
        let image = get(this.state, 'images', [])[i] || {};
        return `url(${image.thumbnail || image.src})`;
    }
}
GalleryThumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'gallery-thumb',
                template: "<div #container class=\"g-thumb-container\" [ngStyle]=\"contStyle\">\r\n\r\n  <div class=\"g-thumbs\" [style.transform]=\"translateThumbs()\">\r\n\r\n    <div class=\"g-thumb\" *ngFor=\"let image of state.images; let i = index\"\r\n         [class.g-thumb-current]=\"i === state.currIndex\"\r\n         [style.width.px]=\"gallery.config.thumbnails.width\"\r\n         [style.height.px]=\"gallery.config.thumbnails.height\">\r\n\r\n      <div class=\"g-thumb-image\" [style.backgroundImage]=\"getThumbImage(i)\"\r\n           [tap] (tapClick)=\"gallery.set(i)\">\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n",
                changeDetection: ChangeDetectionStrategy.OnPush,
                styles: [":host{display:block;z-index:1}.g-thumb-container{position:relative;z-index:206;width:100%;height:100%;left:0;top:0;display:flex}.g-thumbs{position:absolute;top:0;left:50%;display:flex;align-items:center;transition:transform .3s ease-in;transform:translate3d(0,0,0)}.g-thumb{padding:8px;opacity:.5;transition:.2s linear}.g-thumb-image{cursor:pointer;width:100%;height:100%;background-position:center center;background-size:cover;box-shadow:0 0 4px rgba(0,0,0,.3)}.g-thumb-current{opacity:1;padding:2px}"]
            }] }
];
/** @nocollapse */
GalleryThumbComponent.ctorParameters = () => [
    { type: GalleryService },
    { type: ElementRef },
    { type: Renderer2 }
];
GalleryThumbComponent.propDecorators = {
    state: [{ type: Input }],
    config: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/pluck.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/isEqual.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @param {?=} array1
 * @param {?=} array2
 * @return {?}
 */
function isEqual(array1 = [], array2 = []) {
    if (array1.length !== array2.length) {
        return false;
    }
    // array1 = array1.sort();
    // array2 = array2.sort();
    for (let i = array1.length; i--;) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/index.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directive/gallery.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class GalleryDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} gallery
     */
    constructor(el, renderer, gallery) {
        this.el = el;
        this.renderer = renderer;
        this.gallery = gallery;
        this.srcList = [];
        this.subtree = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        let target = this.el.nativeElement;
        /** @type {?} */
        var updateGallery = (/**
         * @return {?}
         */
        () => {
            // skip if content is the same 
            if (!target || (this.content && this.content === target.innerText)) {
                return;
            }
            else {
                this.content = target.innerText;
            }
            /** @type {?} */
            const images = [];
            // get all img elements from content
            /** @type {?} */
            const imageElements = target.querySelectorAll(this.subtree + ` img${this.gallerize}`);
            if (!imageElements || !imageElements.length) {
                this.srcList = [];
                return;
            }
            /** @type {?} */
            let srcs = Array.from(imageElements).map((/**
             * @param {?} elem
             * @return {?}
             */
            (elem) => {
                return elem.dataset && elem.dataset.originalImageUrl ? elem.dataset.originalImageUrl : elem.src;
            }))
            //let srcs = pluck(imageElements, 'src');
            ;
            //let srcs = pluck(imageElements, 'src');
            /** @type {?} */
            let isSame = isEqual(this.srcList, srcs);
            this.srcList = srcs;
            from(imageElements).pipe(map((/**
             * @param {?} img
             * @param {?} i
             * @return {?}
             */
            (img, i) => {
                // add click event to the images
                /** @type {?} */
                let src = img.dataset && img.dataset.originalImageUrl ? img.dataset.originalImageUrl : img.src;
                this.renderer.setStyle(img, 'cursor', 'pointer');
                if (!this.filter || this.filter(img)) {
                    this.renderer.setProperty(img, 'onclick', (/**
                     * @return {?}
                     */
                    () => {
                        if (this.srcList.indexOf(src) !== -1) {
                            this.gallery.set(i);
                        }
                    }));
                }
                // create an image item
                images.push({
                    src: src,
                    text: img.alt
                });
            })), finalize((/**
             * @return {?}
             */
            () => {
                if (!isSame) {
                    this.gallery.load(images);
                }
            })))
                .subscribe();
        })
        // create an observer instance
        ;
        // create an observer instance
        /** @type {?} */
        var observer = new MutationObserver(updateGallery);
        /** @type {?} */
        var config = { subtree: true, childList: true };
        observer.observe(target, config);
        updateGallery();
    }
}
GalleryDirective.decorators = [
    { type: Directive, args: [{
                selector: '[gallerize]'
            },] }
];
/** @nocollapse */
GalleryDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: GalleryService }
];
GalleryDirective.propDecorators = {
    gallerize: [{ type: Input }],
    exclude: [{ type: Input }],
    subtree: [{ type: Input }],
    filter: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directive/lazy.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class LazyDirective {
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

/**
 * @fileoverview added by tsickle
 * Generated from: lib/directive/tap.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class TapDirective {
    /**
     * @param {?} gallery
     * @param {?} el
     * @param {?} renderer
     */
    constructor(gallery, el, renderer) {
        this.gallery = gallery;
        this.el = el;
        this.renderer = renderer;
        this.tapClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.setTapEvent();
    }
    /**
     * Enable gestures if hammer is loaded
     * @return {?}
     */
    setTapEvent() {
        if (this.gallery.config.gestures) {
            if (typeof Hammer === 'undefined') {
                throw Error('[NgGallery]: HammerJS is undefined, make sure it is loaded');
            }
            else {
                /** Use tap for click event */
                if (typeof Hammer !== 'undefined') {
                    /** @type {?} */
                    const mc = new Hammer(this.el.nativeElement);
                    mc.on('tap', (/**
                     * @return {?}
                     */
                    () => {
                        this.tapClick.emit();
                    }));
                }
            }
        }
        else {
            /** Use normal click event */
            this.renderer.setProperty(this.el.nativeElement, 'onclick', (/**
             * @return {?}
             */
            () => {
                this.tapClick.emit();
            }));
        }
    }
}
TapDirective.decorators = [
    { type: Directive, args: [{
                selector: '[tap]'
            },] }
];
/** @nocollapse */
TapDirective.ctorParameters = () => [
    { type: GalleryService },
    { type: ElementRef },
    { type: Renderer2 }
];
TapDirective.propDecorators = {
    tap: [{ type: Input }],
    tapClick: [{ type: Output }]
};

/**
 * @fileoverview added by tsickle
 * Generated from: lib/gallery.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * Initialize ConfigService with URL
 * @param {?} config
 * @return {?}
 */
function galleryFactory(config) {
    return new GalleryService(config);
}
/** @type {?} */
const CONFIG = new InjectionToken('config');
class GalleryModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: GalleryModule,
            providers: [
                { provide: CONFIG, useValue: config },
                {
                    provide: GalleryService,
                    useFactory: galleryFactory,
                    deps: [CONFIG]
                }
            ]
        };
    }
}
GalleryModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule
                ],
                declarations: [
                    GalleryComponent,
                    GalleryNavComponent,
                    GalleryThumbComponent,
                    GalleryDirective,
                    GalleryTextComponent,
                    GalleryImageComponent,
                    GalleryLoaderComponent,
                    GalleryModalComponent,
                    GalleryBulletsComponent,
                    GalleryPlayerComponent,
                    GalleryMainComponent,
                    TapDirective,
                    LazyDirective
                ],
                exports: [
                    GalleryComponent,
                    GalleryDirective,
                    GalleryModalComponent
                ]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/service/gallery.state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: gallery-lib.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { GalleryComponent, GalleryBulletsComponent, animation, GalleryImageComponent, GalleryLoaderComponent, GalleryMainComponent, GalleryModalComponent, GalleryNavComponent, GalleryPlayerComponent, GalleryTextComponent, GalleryThumbComponent, galleryFactory, CONFIG, GalleryModule, GalleryDirective, LazyDirective, TapDirective, GalleryService };

//# sourceMappingURL=gallery-lib.js.map