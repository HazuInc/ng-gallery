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
export function get(obj, path, def = undefined) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2FsbGVyeS1saWIvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsTUFBTSxVQUFVLEdBQUcsQ0FBQyxHQUFRLEVBQUUsSUFBWSxFQUFFLE1BQVcsU0FBUztJQUM5RCxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFO1FBQ2pCLE9BQU8sR0FBRyxDQUFDO0tBQ1o7O1FBRUcsR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDOztRQUNyQixPQUFPLEdBQUcsR0FBRztJQUVqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtRQUNuQyxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFDO1lBQ25CLE9BQU8sR0FBRyxDQUFDO1NBQ1o7UUFDRCxPQUFPLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQzNCO0lBRUQsT0FBTyxPQUFPLElBQUksR0FBRyxDQUFDO0FBRXhCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gZ2V0KG9iajogYW55LCBwYXRoOiBzdHJpbmcsIGRlZjogYW55ID0gdW5kZWZpbmVkKSB7XHJcbiAgaWYgKCFvYmogfHwgIXBhdGgpIHtcclxuICAgIHJldHVybiBkZWY7XHJcbiAgfVxyXG5cclxuICBsZXQgYXJyID0gcGF0aC5zcGxpdCgnLicpO1xyXG4gIGxldCBjdXJyZW50ID0gb2JqO1xyXG5cclxuICBmb3IgKGxldCBpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xyXG4gICAgaWYgKCFjdXJyZW50W2FycltpXV0pe1xyXG4gICAgICByZXR1cm4gZGVmO1xyXG4gICAgfVxyXG4gICAgY3VycmVudCA9IGN1cnJlbnRbYXJyW2ldXTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjdXJyZW50IHx8IGRlZjtcclxuXHJcbn0iXX0=