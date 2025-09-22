//factorial in a given range
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let num = 5;
    let factor = 1;
    while (num >= 1) {
        factor = factor * num;
        num--;
    }
    console.log(factor);
    //while with break
    let x = 0;
    while (x < 5) {
        if (x == 3)
            break;
        console.log(x);
        x++;
    }
    let i = 0;
    while (i < 10) {
        i++;
        if (i % 2 === 0) {
            console.log(`even number: ${i}`);
            continue; // Skip even numbers
        }
        console.log(`Odd number: ${i}`);
    }
});
//# sourceMappingURL=while.js.map