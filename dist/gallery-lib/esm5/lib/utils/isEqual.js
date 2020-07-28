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
export function isEqual(array1, array2) {
    if (array1 === void 0) { array1 = []; }
    if (array2 === void 0) { array2 = []; }
    if (array1.length !== array2.length) {
        return false;
    }
    // array1 = array1.sort();
    // array2 = array2.sort();
    for (var i = array1.length; i--;) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNFcXVhbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dhbGxlcnktbGliLyIsInNvdXJjZXMiOlsibGliL3V0aWxzL2lzRXF1YWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLE1BQU0sVUFBVSxPQUFPLENBQUMsTUFBcUIsRUFBRSxNQUFxQjtJQUE1Qyx1QkFBQSxFQUFBLFdBQXFCO0lBQUUsdUJBQUEsRUFBQSxXQUFxQjtJQUNsRSxJQUFJLE1BQU0sQ0FBQyxNQUFNLEtBQUssTUFBTSxDQUFDLE1BQU0sRUFBRTtRQUNuQyxPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsMEJBQTBCO0lBQzFCLDBCQUEwQjtJQUUxQixLQUFLLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEdBQUc7UUFDaEMsSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQzNCLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7S0FDRjtJQUVELE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBpc0VxdWFsKGFycmF5MTogc3RyaW5nW10gPSBbXSwgYXJyYXkyOiBzdHJpbmdbXSA9IFtdKSB7XHJcbiAgaWYgKGFycmF5MS5sZW5ndGggIT09IGFycmF5Mi5sZW5ndGgpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIC8vIGFycmF5MSA9IGFycmF5MS5zb3J0KCk7XHJcbiAgLy8gYXJyYXkyID0gYXJyYXkyLnNvcnQoKTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IGFycmF5MS5sZW5ndGg7IGktLTspIHtcclxuICAgIGlmIChhcnJheTFbaV0gIT09IGFycmF5MltpXSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdHJ1ZTtcclxufSJdfQ==