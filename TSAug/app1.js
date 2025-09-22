var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function LoggerDecorator(logMsg) {
        function Logger(target) {
            console.log("logging...");
            console.log(target);
        }
        return Logger;
    }
    function Template(template, elementId) {
        return function (target) {
            const u = new target();
        };
    }
    let User = class User {
        constructor() {
            this.name = "Jon";
            this.age = 30;
            console.log("User class constructor created");
        }
    };
    User = __decorate([
        LoggerDecorator("this is custom logger")
    ], User);
    const u = new User();
});
//# sourceMappingURL=app1.js.map