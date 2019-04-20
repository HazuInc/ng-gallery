var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GalleryService } from '../../service/gallery.service';
var GalleryComponent = /** @class */ (function () {
    function GalleryComponent(gallery) {
        this.gallery = gallery;
    }
    GalleryComponent.prototype.ngOnDestroy = function () {
        this.gallery.reset();
    };
    GalleryComponent = __decorate([
        Component({
            selector: 'gallery',
            template: '<gallery-main *ngIf="gallery.state | async as state" [state]="state" [config]="gallery.config"></gallery-main>',
            changeDetection: ChangeDetectionStrategy.OnPush,
            styles: ["\n    gallery-main{display:-ms-flexbox;display:flex;height:500px}\n  "]
        }),
        __metadata("design:paramtypes", [GalleryService])
    ], GalleryComponent);
    return GalleryComponent;
}());
export { GalleryComponent };
//# sourceMappingURL=gallery.component.js.map