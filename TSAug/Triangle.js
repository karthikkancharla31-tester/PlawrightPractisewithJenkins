/// <reference path ="./IShape.ts"/>
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Drawing;
    (function (Drawing) {
        class Triangle {
            draw() {
                console.log("Triangle is drawn");
            }
        }
        Drawing.Triangle = Triangle;
    })(Drawing || (Drawing = {}));
});
//# sourceMappingURL=Triangle.js.map