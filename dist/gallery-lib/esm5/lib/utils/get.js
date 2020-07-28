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
export function get(obj, path, def) {
    if (def === void 0) { def = undefined; }
    if (!obj || !path) {
        return def;
    }
    /** @type {?} */
    var arr = path.split('.');
    /** @type {?} */
    var current = obj;
    for (var i = 0; i < arr.length; i++) {
        if (!current[arr[i]]) {
            return def;
        }
        current = current[arr[i]];
    }
    return current || def;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2V0LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2FsbGVyeS1saWIvIiwic291cmNlcyI6WyJsaWIvdXRpbHMvZ2V0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsTUFBTSxVQUFVLEdBQUcsQ0FBQyxHQUFRLEVBQUUsSUFBWSxFQUFFLEdBQW9CO0lBQXBCLG9CQUFBLEVBQUEsZUFBb0I7SUFDOUQsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRTtRQUNqQixPQUFPLEdBQUcsQ0FBQztLQUNaOztRQUVHLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQzs7UUFDckIsT0FBTyxHQUFHLEdBQUc7SUFFakIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDbkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQztZQUNuQixPQUFPLEdBQUcsQ0FBQztTQUNaO1FBQ0QsT0FBTyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUMzQjtJQUVELE9BQU8sT0FBTyxJQUFJLEdBQUcsQ0FBQztBQUV4QixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGdldChvYmo6IGFueSwgcGF0aDogc3RyaW5nLCBkZWY6IGFueSA9IHVuZGVmaW5lZCkge1xyXG4gIGlmICghb2JqIHx8ICFwYXRoKSB7XHJcbiAgICByZXR1cm4gZGVmO1xyXG4gIH1cclxuXHJcbiAgbGV0IGFyciA9IHBhdGguc3BsaXQoJy4nKTtcclxuICBsZXQgY3VycmVudCA9IG9iajtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgIGlmICghY3VycmVudFthcnJbaV1dKXtcclxuICAgICAgcmV0dXJuIGRlZjtcclxuICAgIH1cclxuICAgIGN1cnJlbnQgPSBjdXJyZW50W2FycltpXV07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gY3VycmVudCB8fCBkZWY7XHJcblxyXG59Il19