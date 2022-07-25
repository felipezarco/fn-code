"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function one(variable, object, options) {
    if ((typeof object === 'object' && object !== null)) {
        for (var _i = 0, _a = Object.entries(object); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            if (key == variable) {
                return value;
            }
        }
    }
    return options === null || options === void 0 ? void 0 : options.default;
}
exports.default = {
    one: one,
    switch: one
};
