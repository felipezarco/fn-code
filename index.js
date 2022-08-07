"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function one(variable, switchObjectOrArray, options) {
    if ((typeof switchObjectOrArray === 'object' && switchObjectOrArray !== null)) {
        for (var _i = 0, _a = Object.entries(switchObjectOrArray); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (key == variable) {
                return value;
            }
        }
    }
    if (Array.isArray(switchObjectOrArray) && switchObjectOrArray.length) {
        for (var _c = 0, switchObjectOrArray_1 = switchObjectOrArray; _c < switchObjectOrArray_1.length; _c++) {
            var switchObject = switchObjectOrArray_1[_c];
            if (typeof switchObject.case === 'function' && switchObject.case(variable)) {
                return switchObject.value;
            }
        }
    }
    return options === null || options === void 0 ? void 0 : options.default;
}
var fn = { one: one, switch: one };
exports.default = fn;
