define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    //let
    let car_name = "benz";
    let car_price = 10000;
    car_price = 90;
    console.log(car_name);
    console.log(car_price);
    console.log("-----------------");
    //const
    const lang = "Python";
    const val = 3.141;
    console.log(lang);
    console.log(val);
    console.log("-----------------");
    //scope
    var message = "333";
    let message_let = "999";
    const message_const = "000";
    function testScope() {
        if (true) {
            message = "hello";
            console.log(message);
            message_let = "world";
            console.log(message_let);
            message_let = "world Update";
            console.log(message_let);
            const message_const = "karthik";
            console.log(message_const);
            // message_const =" suresh";
        }
        console.log(message);
        console.log(message_let);
        console.log(message_const);
    }
    testScope();
    console.log("-----------------");
});
//# sourceMappingURL=letconst.js.map