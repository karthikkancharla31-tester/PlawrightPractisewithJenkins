//boolean
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let var1 = true;
    console.log(var1);
    const var2 = Boolean(false);
    const var3 = Boolean(0);
    const var4 = Boolean("");
    const var5 = Boolean(null);
    const var6 = Boolean(undefined);
    const var7 = new Boolean(NaN);
    console.log(var2, var3, var4, var5, var6, var7);
    const myBoolean2 = Boolean("");
    console.log(myBoolean2, var3);
    //const var8 = !!("");
    //console.log(var8);
    let x = true;
    let y = false;
    console.log(x && y);
    console.log(x || y);
    console.log(!x);
    console.log(!y);
    let age = 25;
    let isAdult = age >= 18;
    if (isAdult) {
        console.log("is an adult");
    }
    else {
        console.log("is not an adult");
    }
    let age1 = 25;
    let isAdult1 = age1 >= 18 ? 'is an adult' : 'is not an adult';
    console.log(isAdult1);
});
//# sourceMappingURL=boolean.js.map