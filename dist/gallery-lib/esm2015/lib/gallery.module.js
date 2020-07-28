/**
 * @fileoverview added by tsickle
 * Generated from: lib/gallery.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
/**
 * Initialize ConfigService with URL
 * @param {?} config
 * @return {?}
 */
export function galleryFactory(config) {
    return new GalleryService(config);
}
/** @type {?} */
export const CONFIG = new InjectionToken('config');
export class GalleryModule {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nYWxsZXJ5LWxpYi8iLCJzb3VyY2VzIjpbImxpYi9nYWxsZXJ5Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQXVCLGNBQWMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFFL0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBRzNELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVDQUF1QyxDQUFDO0FBQ3pFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLCtDQUErQyxDQUFDO0FBQ3BGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBQ3ZGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1EQUFtRCxDQUFDO0FBQzFGLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHVEQUF1RCxDQUFDO0FBQ2hHLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLHFEQUFxRCxDQUFDO0FBQzdGLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGlEQUFpRCxDQUFDO0FBRXZGLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ2pFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7Ozs7OztBQUd6RCxNQUFNLFVBQVUsY0FBYyxDQUFDLE1BQXFCO0lBQ2xELE9BQU8sSUFBSSxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDcEMsQ0FBQzs7QUFFRCxNQUFNLE9BQU8sTUFBTSxHQUFHLElBQUksY0FBYyxDQUFnQixRQUFRLENBQUM7QUEyQmpFLE1BQU0sT0FBTyxhQUFhOzs7OztJQUN4QixNQUFNLENBQUMsT0FBTyxDQUFDLE1BQXNCO1FBRW5DLE9BQU87WUFDTCxRQUFRLEVBQUUsYUFBYTtZQUN2QixTQUFTLEVBQUU7Z0JBQ1QsRUFBRSxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7Z0JBQ3JDO29CQUNFLE9BQU8sRUFBRSxjQUFjO29CQUN2QixVQUFVLEVBQUUsY0FBYztvQkFDMUIsSUFBSSxFQUFFLENBQUMsTUFBTSxDQUFDO2lCQUNmO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBdkNGLFFBQVEsU0FBQztnQkFDUixPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxZQUFZLEVBQUU7b0JBQ1osZ0JBQWdCO29CQUNoQixtQkFBbUI7b0JBQ25CLHFCQUFxQjtvQkFDckIsZ0JBQWdCO29CQUNoQixvQkFBb0I7b0JBQ3BCLHFCQUFxQjtvQkFDckIsc0JBQXNCO29CQUN0QixxQkFBcUI7b0JBQ3JCLHVCQUF1QjtvQkFDdkIsc0JBQXNCO29CQUN0QixvQkFBb0I7b0JBQ3BCLFlBQVk7b0JBQ1osYUFBYTtpQkFDZDtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsZ0JBQWdCO29CQUNoQixnQkFBZ0I7b0JBQ2hCLHFCQUFxQjtpQkFDdEI7YUFDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBNb2R1bGVXaXRoUHJvdmlkZXJzLCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuaW1wb3J0IHsgR2FsbGVyeVNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2UvZ2FsbGVyeS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgR2FsbGVyeUNvbmZpZyB9IGZyb20gJy4vY29uZmlnL2dhbGxlcnkuY29uZmlnJztcclxuXHJcbmltcG9ydCB7IEdhbGxlcnlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9nYWxsZXJ5L2dhbGxlcnkuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR2FsbGVyeU5hdkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L2dhbGxlcnktbmF2L2dhbGxlcnktbmF2LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdhbGxlcnlUaHVtYkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L2dhbGxlcnktdGh1bWIvZ2FsbGVyeS10aHVtYi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5VGV4dENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L2dhbGxlcnktdGV4dC9nYWxsZXJ5LXRleHQuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR2FsbGVyeUltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnQvZ2FsbGVyeS1pbWFnZS9nYWxsZXJ5LWltYWdlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdhbGxlcnlMb2FkZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9nYWxsZXJ5LWxvYWRlci9nYWxsZXJ5LWxvYWRlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5TW9kYWxDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9nYWxsZXJ5LW1vZGFsL2dhbGxlcnktbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgR2FsbGVyeUJ1bGxldHNDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9nYWxsZXJ5LWJ1bGxldHMvZ2FsbGVyeS1idWxsZXRzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEdhbGxlcnlQbGF5ZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudC9nYWxsZXJ5LXBsYXllci9nYWxsZXJ5LXBsYXllci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBHYWxsZXJ5TWFpbkNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L2dhbGxlcnktbWFpbi9nYWxsZXJ5LW1haW4uY29tcG9uZW50JztcclxuXHJcbmltcG9ydCB7IEdhbGxlcnlEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9nYWxsZXJ5LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IExhenlEaXJlY3RpdmUgfSBmcm9tICcuL2RpcmVjdGl2ZS9sYXp5LmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFRhcERpcmVjdGl2ZSB9IGZyb20gJy4vZGlyZWN0aXZlL3RhcC5kaXJlY3RpdmUnO1xyXG5cclxuLyoqIEluaXRpYWxpemUgQ29uZmlnU2VydmljZSB3aXRoIFVSTCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2FsbGVyeUZhY3RvcnkoY29uZmlnOiBHYWxsZXJ5Q29uZmlnKSB7XHJcbiAgcmV0dXJuIG5ldyBHYWxsZXJ5U2VydmljZShjb25maWcpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPEdhbGxlcnlDb25maWc+KCdjb25maWcnKTtcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW1xyXG4gICAgQ29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtcclxuICAgIEdhbGxlcnlDb21wb25lbnQsXHJcbiAgICBHYWxsZXJ5TmF2Q29tcG9uZW50LFxyXG4gICAgR2FsbGVyeVRodW1iQ29tcG9uZW50LFxyXG4gICAgR2FsbGVyeURpcmVjdGl2ZSxcclxuICAgIEdhbGxlcnlUZXh0Q29tcG9uZW50LFxyXG4gICAgR2FsbGVyeUltYWdlQ29tcG9uZW50LFxyXG4gICAgR2FsbGVyeUxvYWRlckNvbXBvbmVudCxcclxuICAgIEdhbGxlcnlNb2RhbENvbXBvbmVudCxcclxuICAgIEdhbGxlcnlCdWxsZXRzQ29tcG9uZW50LFxyXG4gICAgR2FsbGVyeVBsYXllckNvbXBvbmVudCxcclxuICAgIEdhbGxlcnlNYWluQ29tcG9uZW50LFxyXG4gICAgVGFwRGlyZWN0aXZlLFxyXG4gICAgTGF6eURpcmVjdGl2ZVxyXG4gIF0sXHJcbiAgZXhwb3J0czogW1xyXG4gICAgR2FsbGVyeUNvbXBvbmVudCxcclxuICAgIEdhbGxlcnlEaXJlY3RpdmUsXHJcbiAgICBHYWxsZXJ5TW9kYWxDb21wb25lbnRcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHYWxsZXJ5TW9kdWxlIHtcclxuICBzdGF0aWMgZm9yUm9vdChjb25maWc/OiBHYWxsZXJ5Q29uZmlnKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IEdhbGxlcnlNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHsgcHJvdmlkZTogQ09ORklHLCB1c2VWYWx1ZTogY29uZmlnIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgcHJvdmlkZTogR2FsbGVyeVNlcnZpY2UsXHJcbiAgICAgICAgICB1c2VGYWN0b3J5OiBnYWxsZXJ5RmFjdG9yeSxcclxuICAgICAgICAgIGRlcHM6IFtDT05GSUddXHJcbiAgICAgICAgfVxyXG4gICAgICBdXHJcbiAgICB9O1xyXG4gIH1cclxufVxyXG5cclxuIl19