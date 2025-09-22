define(["require", "exports", "./Circle", "./Triangle"], function (require, exports, Circle_1, Triangle_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function drawAllShapes(shape) {
        shape.draw();
    }
    drawAllShapes(new Circle_1.Circle());
    drawAllShapes(new Triangle_1.Triangle());
});
//# sourceMappingURL=TestShape.js.map