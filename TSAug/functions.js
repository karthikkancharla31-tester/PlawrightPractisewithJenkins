define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function add(a, b, c) {
        console.log(a);
        console.log(b);
        if (c !== undefined) {
            console.log(c);
        }
    }
    add(5, "hello");
    add(10, "karthik", true);
    function xyz(a, b = 10) {
        return a + b;
    }
    console.log(xyz(5));
    function getNum() {
        return 10;
    }
    function addNum(a, b = getNum()) {
        return a + b;
    }
    console.log(addNum(20));
    //anonymous function
    let myFun = function (a, b) {
        return a + b;
    };
    console.log(myFun(100, 200));
    //anonymous functions with arrows
    var test = (a, b) => {
        return a + b;
    };
    console.log(test(50, 60));
    var num = [100, -3, 30, 25, 50];
    num.sort((v1, v2) => {
        return v1 < v2 ? -1 : 1;
    });
    console.log(num);
    //function constructor
    var myFun1 = new Function("a", "b", "return a+b");
    console.log(myFun1(10, 20));
    //rest parameters
    //sum of all numbers in an array
    function addAll(...nums) {
        let sum = 0;
        for (let num of nums) {
            sum += num;
        }
        return sum;
    }
    console.log(addAll(1, 2, 3, 4, 5, 100));
    let arr1 = [1, 2, 3, 4, 5];
    let arr2 = [6, 7, 8, 9, 10];
    arr1.push(...arr2);
    console.log(arr1);
    function multi(a, b, c) {
        return a * b * c;
    }
    let numbers1;
    numbers1 = [1, 2, 3];
    console.log(multi(...numbers1));
    //arrow functions
    const add1 = (a, b) => a + b;
    console.log(add1(10, 20));
    const mul1 = (a, b) => a * b;
    console.log(mul1(10, 20));
    //arrow functions with no parameter
    const greet = () => "hello world";
    console.log(greet());
    //arrow with single parameter
    const add3 = (a) => a + 10;
    console.log(add3(100));
    const mult3 = (a = 10, b = 20, c = 30) => a * b * c;
    console.log(mult3());
    console.log(mult3(1, 2, 3));
    //higher order functions
    const opp = (x, y, operation) => operation(x, y);
    console.log(opp(10, 20, (a, b) => a + b));
});
//# sourceMappingURL=functions.js.map