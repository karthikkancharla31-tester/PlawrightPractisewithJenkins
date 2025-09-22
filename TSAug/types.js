//symbol
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const UNIQUE_KEY = Symbol();
    let obj1 = {
        [UNIQUE_KEY]: "abcd"
    };
    console.log(obj1[UNIQUE_KEY]);
    //null
    let empty = null;
    console.log(empty);
    //undefined
    let undef;
    console.log(undef);
    //void
    function greet() {
        console.log("void");
    }
    greet();
    //array
    let arr1 = [1, 2, 3, 4, 5];
    let str1 = ["a", "b", "c"];
    console.log(arr1);
    console.log(str1);
    //tuple
    let tup = ["karthik", 11, false];
    console.log(tup);
    //enum
    /*enum Color {Red, Green, Blue}
    let c: Color = Color.Green;
    console.log(c); // Output: 1 */
    var Direction;
    (function (Direction) {
        Direction[Direction["North"] = 0] = "North";
        Direction[Direction["East"] = 1] = "East";
        Direction[Direction["South"] = 2] = "South";
        Direction[Direction["West"] = 3] = "West"; // 3
    })(Direction || (Direction = {}));
    let dir = Direction.South;
    console.log(dir); // Output: 2
});
//# sourceMappingURL=types.js.map