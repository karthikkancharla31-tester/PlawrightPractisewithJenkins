define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let i = 10;
    do {
        console.log(i);
        i--;
    } while (i >= 0);
    //do with factorial
    let num = 5;
    let factor = 1;
    do {
        factor = factor * num;
        num--;
    } while (num >= 1);
    console.log(factor);
});
//# sourceMappingURL=do.js.map