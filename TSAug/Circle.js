/// <reference path ="./IShape.ts"/>
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Circle = void 0;
    // Import the IShape interface from the Drawing namespace
    //import { IShape } from "./IShape";
    class Circle {
        draw() {
            console.log("Circle is drawn");
        }
    }
    exports.Circle = Circle;
});
//# sourceMappingURL=Circle.js.map