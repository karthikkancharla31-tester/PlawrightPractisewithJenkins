define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log(Number.EPSILON);
    console.log(Number.MAX_SAFE_INTEGER);
    console.log(Number.MIN_SAFE_INTEGER);
    console.log(Number.MAX_VALUE);
    console.log(Number.MIN_VALUE);
    var month = 0;
    if (month <= 0 || month > 12) {
        month = Number.NaN;
        console.log("month is " + month);
    }
    else {
        console.log("month is " + month);
    }
});
//# sourceMappingURL=numbers.js.map