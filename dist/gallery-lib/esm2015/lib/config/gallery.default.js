/**
 * @fileoverview added by tsickle
 * Generated from: lib/config/gallery.default.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
export const defaultState = {
    images: undefined,
    prevIndex: 0,
    currIndex: 0,
    hasNext: undefined,
    hasPrev: undefined,
    active: false
};
/** @type {?} */
export const defaultConfig = {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FsbGVyeS5kZWZhdWx0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2FsbGVyeS1saWIvIiwic291cmNlcyI6WyJsaWIvY29uZmlnL2dhbGxlcnkuZGVmYXVsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxNQUFNLE9BQU8sWUFBWSxHQUFpQjtJQUN4QyxNQUFNLEVBQUUsU0FBUztJQUNqQixTQUFTLEVBQUUsQ0FBQztJQUNaLFNBQVMsRUFBRSxDQUFDO0lBQ1osT0FBTyxFQUFFLFNBQVM7SUFDbEIsT0FBTyxFQUFFLFNBQVM7SUFDbEIsTUFBTSxFQUFFLEtBQUs7Q0FDZDs7QUFFRCxNQUFNLE9BQU8sYUFBYSxHQUFrQjtJQUMxQyxLQUFLLEVBQUU7UUFDTCxVQUFVLEVBQUUsU0FBUztRQUNyQixLQUFLLEVBQUUsT0FBTztRQUNkLE1BQU0sRUFBRSxPQUFPO0tBQ2hCO0lBQ0QsU0FBUyxFQUFFLE1BQU07SUFDakIsTUFBTSxFQUFFO1FBQ04sS0FBSyxFQUFFLE1BQU07UUFDYixNQUFNLEVBQUUsTUFBTTtRQUNkLFFBQVEsRUFBRSxRQUFRO1FBQ2xCLElBQUksRUFBRSxNQUFNO0tBQ2I7SUFDRCxXQUFXLEVBQUU7UUFDWCxRQUFRLEVBQUUsUUFBUTtRQUNsQixPQUFPLEVBQUUsS0FBSztRQUNkLElBQUksRUFBRSxJQUFJO1FBQ1YsT0FBTyxFQUFFLElBQUk7UUFDYixLQUFLLEVBQUU7WUFDTCxLQUFLLEVBQUUsS0FBSztTQUNiO0tBQ0Y7SUFDRCxNQUFNLEVBQUU7UUFDTixRQUFRLEVBQUUsS0FBSztRQUNmLEtBQUssRUFBRSxJQUFJO0tBQ1o7SUFDRCxVQUFVLEVBQUU7UUFDVixLQUFLLEVBQUUsR0FBRztRQUNWLE1BQU0sRUFBRSxFQUFFO1FBQ1YsUUFBUSxFQUFFLE1BQU07UUFDaEIsS0FBSyxFQUFFLEVBQUU7S0FDVjtDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FsbGVyeVN0YXRlIH0gZnJvbSAnLi4vc2VydmljZS9nYWxsZXJ5LnN0YXRlJztcclxuaW1wb3J0IHsgR2FsbGVyeUNvbmZpZyB9IGZyb20gJy4vZ2FsbGVyeS5jb25maWcnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlZmF1bHRTdGF0ZTogR2FsbGVyeVN0YXRlID0ge1xyXG4gIGltYWdlczogdW5kZWZpbmVkLFxyXG4gIHByZXZJbmRleDogMCxcclxuICBjdXJySW5kZXg6IDAsXHJcbiAgaGFzTmV4dDogdW5kZWZpbmVkLFxyXG4gIGhhc1ByZXY6IHVuZGVmaW5lZCxcclxuICBhY3RpdmU6IGZhbHNlXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgZGVmYXVsdENvbmZpZzogR2FsbGVyeUNvbmZpZyA9IHtcclxuICBzdHlsZToge1xyXG4gICAgYmFja2dyb3VuZDogJyMxMjE1MTknLFxyXG4gICAgd2lkdGg6ICc5MDBweCcsXHJcbiAgICBoZWlnaHQ6ICc1MDBweCdcclxuICB9LFxyXG4gIGFuaW1hdGlvbjogJ2ZhZGUnLFxyXG4gIGxvYWRlcjoge1xyXG4gICAgd2lkdGg6ICc1MHB4JyxcclxuICAgIGhlaWdodDogJzUwcHgnLFxyXG4gICAgcG9zaXRpb246ICdjZW50ZXInLFxyXG4gICAgaWNvbjogJ292YWwnXHJcbiAgfSxcclxuICBkZXNjcmlwdGlvbjoge1xyXG4gICAgcG9zaXRpb246ICdib3R0b20nLFxyXG4gICAgb3ZlcmxheTogZmFsc2UsXHJcbiAgICB0ZXh0OiB0cnVlLFxyXG4gICAgY291bnRlcjogdHJ1ZSxcclxuICAgIHN0eWxlOiB7XHJcbiAgICAgIGNvbG9yOiAncmVkJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcGxheWVyOiB7XHJcbiAgICBhdXRvcGxheTogZmFsc2UsXHJcbiAgICBzcGVlZDogMzAwMFxyXG4gIH0sXHJcbiAgdGh1bWJuYWlsczoge1xyXG4gICAgd2lkdGg6IDEyMCxcclxuICAgIGhlaWdodDogOTAsXHJcbiAgICBwb3NpdGlvbjogJ2xlZnQnLFxyXG4gICAgc3BhY2U6IDMwXHJcbiAgfVxyXG59O1xyXG5cclxuXHJcblxyXG4iXX0=