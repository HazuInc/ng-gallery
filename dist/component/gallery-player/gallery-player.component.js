var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { GalleryService } from '../../service/gallery.service';
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
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], GalleryPlayerComponent.prototype, "config", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], GalleryPlayerComponent.prototype, "state", void 0);
    GalleryPlayerComponent = __decorate([
        Component({
            selector: 'gallery-player',
            template: "\n    <!--<div class=\"g-player-btns\">-->\n      <!--<div *ngIf=\"!state.play\" class=\"g-player-btn\" (click)=\"gallery.play()\">▶</div>-->\n      <!--<div *ngIf=\"state.play\" class=\"g-player-btn\" (click)=\"gallery.stop()\">⏸</div>-->\n    <!--</div>-->\n  ",
            styles: ["\n    :host{position:absolute;z-index:1}.g-player-btns{display:-ms-flexbox;display:flex;padding:.5em 1em}.g-player-btn{margin-right:.5em;color:#fff;cursor:pointer}\n  "],
            changeDetection: ChangeDetectionStrategy.OnPush
        }),
        __metadata("design:paramtypes", [GalleryService])
    ], GalleryPlayerComponent);
    return GalleryPlayerComponent;
}());
export { GalleryPlayerComponent };
//# sourceMappingURL=gallery-player.component.js.map