//in Type Guard
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let obj1 = { id: 123, name: "karthik" };
    let obj2 = { name: "Joe", roll: 908 };
    let obj3 = {
        id: 345,
        marks: {
            english: 87,
            math: 90
        }
    };
    console.log('name' in obj1);
    console.log('id' in obj2);
    console.log('english' in obj3.marks);
    //instance of
    class Parent {
        constructor(id) {
            this.id = id;
        }
    }
    class Child extends Parent {
        constructor(id, name) {
            super(id);
            this.name = name;
        }
    }
    let child = new Child(123, "karthik");
    console.log("---------");
    console.log(child instanceof Child);
    console.log(child instanceof Parent);
    console.log(child.id);
});
//# sourceMappingURL=typeGaurds.js.map