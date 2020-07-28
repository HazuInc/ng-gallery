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
export function isEqual(array1 = [], array2 = []) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNFcXVhbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dhbGxlcnktbGliLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL2lzRXF1YWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE1BQU0sVUFBVSxPQUFPLENBQUMsU0FBbUIsRUFBRSxFQUFFLFNBQW1CLEVBQUU7SUFDbEUsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLE1BQU0sQ0FBQyxNQUFNLEVBQUU7UUFDbkMsT0FBTyxLQUFLLENBQUM7S0FDZDtJQUVELDBCQUEwQjtJQUMxQiwwQkFBMEI7SUFFMUIsS0FBSyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxHQUFHO1FBQ2hDLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUMzQixPQUFPLEtBQUssQ0FBQztTQUNkO0tBQ0Y7SUFFRCxPQUFPLElBQUksQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gaXNFcXVhbChhcnJheTE6IHN0cmluZ1tdID0gW10sIGFycmF5Mjogc3RyaW5nW10gPSBbXSkge1xyXG4gIGlmIChhcnJheTEubGVuZ3RoICE9PSBhcnJheTIubGVuZ3RoKSB7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxuICAvLyBhcnJheTEgPSBhcnJheTEuc29ydCgpO1xyXG4gIC8vIGFycmF5MiA9IGFycmF5Mi5zb3J0KCk7XHJcblxyXG4gIGZvciAobGV0IGkgPSBhcnJheTEubGVuZ3RoOyBpLS07KSB7XHJcbiAgICBpZiAoYXJyYXkxW2ldICE9PSBhcnJheTJbaV0pIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHRydWU7XHJcbn0iXX0=