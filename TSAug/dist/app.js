///<reference path ="./user-actions.ts"/>
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App;
    (function (App) {
        const u1 = createUser('jon', 28, "male");
        const u2 = createUser('jane', 24, 'female');
        console.log(u1, u2);
    })(App || (App = {}));
});
//# sourceMappingURL=app.js.map