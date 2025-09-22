define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function processInfo(value) {
        if (typeof value === "string") {
            console.log("String value: " + value.toUpperCase());
        }
        else if (typeof value === "number") {
            console.log("Number value: " + (value * 2));
        }
        else {
            console.log("Boolean value: " + (!value));
        }
    }
    processInfo("karthik");
    processInfo(123);
    processInfo(true);
    let objBusinessContact = {
        name: "Tech Solutions",
        turnOver: 500000,
        email: "abc@gmail.com",
        phone: 9876543210
    };
    console.log(objBusinessContact.name);
    console.log(objBusinessContact.turnOver);
    console.log(objBusinessContact.email);
    console.log(objBusinessContact.phone);
    let objOptionalTodo = {
        title: "Harry Potter"
    };
    console.log(objOptionalTodo.title);
    let objToDoTitle = {
        title: "Learn TypeScript"
    };
    console.log(objToDoTitle.title);
    let objToDoWithoutDescription = {
        title: "Learn JavaScript",
        completed: false
    };
    console.log(objToDoWithoutDescription.title);
    console.log(objToDoWithoutDescription.completed);
    let objStudentGrades = {
        "karthik": 85,
        "john": 90,
        "alice": 78
    };
    console.log(objStudentGrades.karthik);
    console.log(objStudentGrades.john);
    console.log(objStudentGrades.alice);
    //typeof type operator
    const person = {
        name: "karthik",
        gender: "male"
    };
    let objEmployee = {
        name: "Alice",
        gender: "male"
    };
    console.log(objEmployee.name);
    console.log(objEmployee.gender);
    console.log(objEmployee);
    const key1 = "name";
    const key2 = "age";
    console.log(key1);
    console.log(key2);
    let objFruitMapped = {
        name: 1,
        color: 2
    };
    console.log(objFruitMapped.name);
    console.log(objFruitMapped.color);
    console.log(objFruitMapped);
    let userName = "karthik";
    console.log(userName);
    let employeeName = "karthik";
    console.log(employeeName);
    let user1Key;
    user1Key = 123;
    console.log(user1Key);
    user1Key = "abc";
    console.log(user1Key);
    user1Key = true;
    console.log(user1Key);
    const carName = "BMW";
    console.log(carName);
});
//# sourceMappingURL=typeManipulation.js.map