define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TrafficLight;
    (function (TrafficLight) {
        TrafficLight["Red"] = "stop";
        TrafficLight["Yellow"] = "caution";
        TrafficLight["Green"] = "go";
    })(TrafficLight || (TrafficLight = {}));
    console.log(TrafficLight.Red);
    console.log(TrafficLight.Yellow);
    console.log(TrafficLight.Green);
});
//# sourceMappingURL=enum.js.map