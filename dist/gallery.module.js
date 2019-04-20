var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GalleryService } from './service/gallery.service';
import { GalleryComponent } from './component/gallery/gallery.component';
import { GalleryNavComponent } from './component/gallery-nav/gallery-nav.component';
import { GalleryThumbComponent } from './component/gallery-thumb/gallery-thumb.component';
import { GalleryTextComponent } from './component/gallery-text/gallery-text.component';
import { GalleryImageComponent } from './component/gallery-image/gallery-image.component';
import { GalleryLoaderComponent } from './component/gallery-loader/gallery-loader.component';
import { GalleryModalComponent } from './component/gallery-modal/gallery-modal.component';
import { GalleryBulletsComponent } from './component/gallery-bullets/gallery-bullets.component';
import { GalleryPlayerComponent } from './component/gallery-player/gallery-player.component';
import { GalleryMainComponent } from './component/gallery-main/gallery-main.component';
import { GalleryDirective } from './directive/gallery.directive';
import { LazyDirective } from './directive/lazy.directive';
import { TapDirective } from './directive/tap.directive';
/** Initialize ConfigService with URL */
export function galleryFactory(config) {
    return new GalleryService(config);
}
export var CONFIG = new InjectionToken('config');
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
                    provide: GalleryService,
                    useFactory: galleryFactory,
                    deps: [CONFIG]
                }
            ]
        };
    };
    var GalleryModule_1;
    GalleryModule = GalleryModule_1 = __decorate([
        NgModule({
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
        })
    ], GalleryModule);
    return GalleryModule;
}());
export { GalleryModule };
//# sourceMappingURL=gallery.module.js.map