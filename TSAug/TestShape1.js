define(["require", "exports", "./Circle", "./Triangle"], function (require, exports, circle, triangle) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Triangle = exports.Circle = void 0;
    class Circle {
        draw() {
            console.log("Cirlce is drawn (external module)");
        }
    }
    exports.Circle = Circle;
    class Triangle {
        draw() {
            console.log("Triangle is drawn (external module)");
        }
    }
    exports.Triangle = Triangle;
    function drawAllShapes(shapeToDraw) {
        shapeToDraw.draw();
    }
    drawAllShapes(new circle.Circle());
    drawAllShapes(new triangle.Triangle());
});
//# sourceMappingURL=TestShape1.js.map