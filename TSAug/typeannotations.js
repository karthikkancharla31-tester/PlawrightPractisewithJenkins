//function type annotations
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function add(a, b, c) {
        console.log((a + b + c).toFixed);
    }
    add(12, 34.3, 45);
    //return type annotations
    function add1(a, b) {
        return a + b;
    }
    console.log(add1(12.3, 45.3));
    //void type annotations
    function add2(a, b) {
        console.log(a + b);
    }
    add2(23, 34);
});
//# sourceMappingURL=typeannotations.js.map