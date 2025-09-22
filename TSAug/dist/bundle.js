define("IShape", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
/// <reference path ="./IShape.ts"/>
define("Circle", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Circle = void 0;
    // Import the IShape interface from the Drawing namespace
    //import { IShape } from "./IShape";
    class Circle {
        draw() {
            console.log("Circle is drawn");
        }
    }
    exports.Circle = Circle;
});
define("MathFunctions", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.add = add;
    function add(a, b) {
        return a + b;
    }
});
/// <reference path ="./IShape.ts"/>
define("Triangle", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Drawing;
    (function (Drawing) {
        class Triangle {
            draw() {
                console.log("Triangle is drawn");
            }
        }
        Drawing.Triangle = Triangle;
    })(Drawing || (Drawing = {}));
});
define("TestShape", ["require", "exports", "Circle", "Triangle"], function (require, exports, Circle_1, Triangle_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function drawAllShapes(shape) {
        shape.draw();
    }
    drawAllShapes(new Circle_1.Circle());
    drawAllShapes(new Triangle_1.Triangle());
});
define("alias", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let user1 = 123;
    console.log(user1);
    function logMessage(message) {
        console.log(message);
    }
    logMessage("Hello");
    let color = [255, "red", true];
    console.log(color);
});
define("any", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let x;
    x = 10;
    console.log(x);
    x = "hello";
    console.log(x);
    x = true;
    console.log(x);
});
/// <reference path="./MathFunctions.ts"/>
define("app", ["require", "exports", "MathFunctions"], function (require, exports, MathFunctions_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log((0, MathFunctions_1.add)(2, 3));
});
define("arrays", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let arr1 = ["apple", "banana", "mango"];
    console.log(arr1);
    console.log(arr1[2]);
    let arr2 = [12, 54, 56, 78, 56];
    console.log(arr2);
    console.log(arr2[3]);
    //multiples of 2
    var arr3 = new Array(4);
    for (var i = 0; i < arr3.length; i++) {
        arr3[i] = i * 2;
        console.log(arr3[i]);
    }
    console.log(arr3);
    // array of strings
    var arr4 = new Array("tom", "jerry", "mickey");
    for (var i = 0; i < arr4.length; i++) {
        console.log(arr4[i]);
    }
    //array destructuring
    let fruits = ["apple", "banana", "mango"];
    let [x, y, z] = fruits;
    console.log(x);
    console.log(y);
    console.log(z);
    //array forin loop
    let colors = ["red", "green", "blue"];
    let j;
    for (j in colors) {
        console.log(colors[j]);
    }
    var arr5 = [1, 2, 3, 4, 5];
    var k;
    for (k in arr5) {
        arr5[k] = k * 3;
        console.log(arr5[k]);
    }
    console.log(arr5);
    let arr6 = ["apple", 5, "banana", 10, "mango", 15];
    console.log(arr6);
    let arr8 = ["apple", 5, "banana", 10, "mango", 15];
    console.log(arr8);
    //spread operator
    let arr9 = [1, 2, 3];
    let coparry = [...arr9];
    console.log(coparry);
    let arr10 = [...arr9, 4, 5, 6];
    console.log(arr10);
    let cars = ["BMW", "Audi", "Benz"];
    for (let i in cars) {
        console.log(cars[i]);
    }
    //mixed array
    let mixedArray = [];
    mixedArray.push("Hello");
    mixedArray.push(42);
    mixedArray.push(true);
    mixedArray.push(53);
    console.log(mixedArray);
});
//boolean
define("boolean", ["require", "exports"], function (require, exports) {
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
define("classes", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class Car {
        constructor(engine) {
            this.engine = engine;
        }
        disp() {
            console.log("Engine is " + this.engine);
        }
    }
    var obj = new Car("XXYZ12E");
    console.log(obj.engine);
    obj.disp();
    var person = {
        firstName: "tom",
        lastName: "Hanks"
    };
    console.log(person.firstName);
    console.log(person.lastName);
    //class Inheritance
    class Shape {
        constructor(a) {
            this.area = a;
        }
    }
    class Circle extends Shape {
        disp() {
            console.log("area is" + this.area);
        }
    }
    var obj1 = new Circle(123);
    obj1.disp();
    //multi level Inheritance
    class Root {
    }
    class Child extends Root {
    }
    class Leaf extends Child {
    }
    var obj3 = new Leaf();
    obj3.str = "hello";
    console.log(obj3.str);
    //class inheritance and method overriding
    class Printer {
        doPrint() {
            console.log("do print from the parent called");
        }
    }
    class StringPrinter extends Printer {
        doPrint() {
            super.doPrint();
            console.log(" do print is printing a string");
        }
    }
    var obj5 = new StringPrinter();
    obj5.doPrint();
    //static keyword
    class StaticMem {
        static disp() {
            console.log(StaticMem.num);
        }
    }
    StaticMem.num = 12;
    StaticMem.disp();
    //instanceof operator
    class Person {
    }
    var obj6 = new Person();
    var isPerson = obj6 instanceof Person;
    console.log("obj6 is instanceof Person: " + isPerson);
    //private
    class Encapsulate {
        constructor() {
            this.str = "hello";
            this.str2 = "world";
        }
        //public method to access private property
        getPrivate() {
            return this.str2;
        }
    }
    var obj7 = new Encapsulate();
    console.log(obj7.str); //accessible 
    // console.log(obj7.str2)   //compilation Error as str2 is private  
    //to access private we need to create public method in class
    console.log(obj7.getPrivate());
    //protected
    class BaseTest {
        constructor() {
            this.testName = "Hello";
        }
        displayTestName() {
            console.log(" base test:" + this.testName);
        }
    }
    class ExtendedTest extends BaseTest {
        showExtendedTest() {
            console.log(" Extended test:" + this.testName);
        }
    }
    const base = new BaseTest();
    base.displayTestName();
    const extend = new ExtendedTest();
    extend.showExtendedTest();
    class AgriLoan {
        constructor(interest, rebate) {
            this.interest = interest;
            this.rebate = rebate;
        }
        execute() {
            console.log("abcd: " + this.interest + "efgh: " + this.rebate);
        }
    }
    var obj8 = new AgriLoan(10, 12);
    console.log("interest is " + obj8.interest + "rebate is " + obj8.rebate);
    obj8.execute();
    //object
    var person = {
        firstName: "karthik",
        lastName: "kancharla"
    };
    console.log(person.firstName);
    console.log(person.lastName);
    //object as function parameter
    var customer = {
        firstName: "Tom",
        lastName: "Hanks"
    };
    var customerFullName = function (obj) {
        console.log(obj.firstName);
        console.log(obj.lastName);
    };
    customerFullName(customer);
    //anonymous object
    var brand = function (obj) {
        console.log(obj.model);
        console.log(obj.gas);
    };
    brand({ model: "Benz", gas: "Petrol" });
    //Access modifiers
    //public
    class Vehical {
        constructor() {
            this.brand = "";
        }
        getModel() {
            console.log("Model is " + this.brand);
        }
    }
    const vehicalObj = new Vehical();
    vehicalObj.brand = "BENZ";
    vehicalObj.getModel();
    class BankAccount {
        constructor(balance) {
            this.balance = balance;
        }
        calInterest() {
            const interest = 0.67;
            return this.balance * interest;
        }
        pubCalInterest() {
            const interest = 0.67;
            return this.balance * interest;
        }
    }
    var objInterest = new BankAccount(20123);
    // console.log(objInterest.balance);
    //console.log(objInterest.calInterest());
    console.log(objInterest.pubCalInterest());
    let objPlanet = {
        gravity: 22.5,
        habitual: true
    };
    //objPlanet.habitual=false;
    console.log(objPlanet.gravity);
    console.log(objPlanet.habitual);
    //readonly classes
    class Student {
        constructor(firstName, lastName, marks) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.marks = marks;
        }
        getDetails() {
            console.log(this.firstName);
            console.log(this.lastName);
            console.log(this.marks);
        }
    }
    let objStudent = new Student("karthik", "kancharla", 234);
    // objStudent.marks=567;
    objStudent.getDetails();
    let objXYZ = {
        x: 12,
        y: 20,
        z: 34
    };
    //objXYZ.y=45;
    console.log(objXYZ.x);
    console.log(objXYZ.y);
    console.log(objXYZ.z);
    //super
    class Person1 {
        constructor(name) {
            this.name = name;
        }
        display() {
            console.log(this.name);
        }
    }
    class Employee1 extends Person1 {
        constructor(name, empCode) {
            super(name);
            this.empCode = empCode;
        }
        show() {
            super.display();
        }
    }
    let emp = new Employee1("karthik", 1234);
    emp.show();
    //static
    class Circle1 {
    }
    Circle1.pi = 3.141;
    console.log(Circle1.pi);
    //static method
    class Square1 {
        static area(side) {
            return side * side;
        }
    }
    let area1 = Square1.area(5);
    console.log("Area is: " + area1);
    //private static
    class Student1 {
        constructor(name, age) {
            this.name = name;
            this.name = name;
            this.age = age;
            Student1.studentCount++;
        }
        static getStudentCount() {
            return Student1.studentCount;
        }
    }
    Student1.studentCount = 0;
    let objStudent1 = new Student1("karthik", 36);
    let objStudent2 = new Student1("Ramesh", 56);
    console.log(Student1.getStudentCount());
    //abstract class
    class simple {
        //property2:string;
        constructor(property1) {
            this.property1 = property1;
            //this.property2=property2;
        }
        save() {
            console.log("save method of abstract class is executed");
        }
    }
    class test2 extends simple {
        constructor(property1, property3) {
            super(property1);
            this.property3 = property3;
        }
        demo() {
            console.log("value of property3 is " + this.property3 + " value of property1 is :" + this.property1);
        }
    }
    let testObj = new test2("abc", "efg");
    testObj.demo();
    testObj.save();
    //Accessors
    //getters
    class Person2 {
        constructor(name) {
            this.name = name;
        }
        get SName() {
            return this.name;
        }
    }
    const person3 = new Person2("Jon");
    console.log(person3.SName);
    //setter
    class TextContiner {
        constructor() {
            this._container = '';
        }
        set content(value) {
            this._container = value.trim().toLocaleLowerCase();
        }
        get content() {
            return this._container;
        }
    }
    const text = new TextContiner();
    text.content = "Hello Karthik";
    console.log(text.content);
});
define("do", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let i = 10;
    do {
        console.log(i);
        i--;
    } while (i >= 0);
    //do with factorial
    let num = 5;
    let factor = 1;
    do {
        factor = factor * num;
        num--;
    } while (num >= 1);
    console.log(factor);
});
define("enum", ["require", "exports"], function (require, exports) {
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
/*var message: string = "Hello, World!";

console.log(message); */
define("firstpro", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /*var num: number = 42;
    console.log(num); */
    function printNumber(num) {
        console.log(num);
    }
    var a = 10;
    console.log(a);
});
//factorial in a given range
define("for", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let num = 5;
    let factor = 1;
    let i;
    for (i = num; i >= 1; i--) {
        factor = factor * i;
    }
    console.log(`Factorial of ${num} is ${factor}`);
    // for with break
    let x = 0;
    for (x; x < 5; x++) {
        if (x == 4)
            break;
        console.log(x);
    }
    //for with continue
    let y = 0;
    for (y; y < 10; y++) {
        if (y % 2 == 0)
            continue;
        console.log(y);
    }
    // for...in loop
    let j;
    let k = "abc";
    for (j in k) {
        console.log(k[j]);
    }
    let arr = [10, 20, 30, 40, 50];
    for (var d in arr) {
        console.log(arr[d]);
    }
    let tup = [1, "karthik", true];
    for (var t in tup) {
        console.log(tup[t]);
    }
    //for of loop
    let arr1 = [12, 34, 23, 45];
    for (var l of arr1) {
        console.log(l);
    }
});
define("functions", ["require", "exports"], function (require, exports) {
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
define("if", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var x = 10;
    var y = 20;
    if (y > x) {
        console.log("y is greater than x");
    }
    var num = 12;
    if (num % 2 == 0) {
        console.log("Even number");
    }
    else {
        console.log("Odd number");
    }
    var grade = 90;
    if (grade > 90) {
        console.log("A grade");
    }
    else if (grade > 80) {
        console.log("B grade");
    }
    else {
        console.log("keep trying");
    }
});
define("interfaces", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var customer = {
        firstName: "Karthik",
        lastName: "Kancharla",
        sayHi: () => "Hi There"
    };
    console.log("Customer Object ");
    console.log(customer.firstName);
    console.log(customer.lastName);
    console.log(customer.sayHi());
    var employee = {
        firstName: "tom",
        lastName: "Hanks",
        sayHi: () => "Hello world"
    };
    console.log("Employee  Object ");
    console.log(employee.firstName);
    console.log(employee.lastName);
    console.log(employee.sayHi());
    //commandline as string
    var options = {
        program: "test1",
        commandline: "hello"
    };
    console.log(options.commandline);
    //commandline as string array
    options = {
        program: "test1",
        commandline: ["hello", "world"]
    };
    console.log(options.commandline[0]);
    //commandline as function
    options = {
        program: "test1:",
        commandline: () => "hello world"
    };
    var fn = options.commandline;
    console.log(fn());
    const square = {
        color: "blue",
        name: "Navy"
    };
    console.log(square.color);
    console.log(square.name);
    class Printer {
        print() {
            console.log("Printing....");
        }
        scan() {
            console.log("Scanning....");
        }
        copy() {
            console.log("Copying....");
        }
    }
    const device = new Printer();
    device.print();
    device.scan();
    device.copy();
    const product = {
        name: "Laptop",
        price: 25000,
        discount: 5,
        reviews: ["Good", "Value for money"],
        featured: true
    };
    console.log(product.name);
    console.log(product.price);
    console.log(product.discount);
    console.log(product.reviews);
    console.log(product.featured);
    const dog = {
        name: "Buddy",
        makeSound: () => "Woof Woof"
    };
    console.log(dog.makeSound());
});
define("intersectionTypes", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let obj_book_and_author = {
        book_id: "12AC",
        book_name: "Harry Potter",
        author_id: "3E2C",
        author_name: "J.K. Rowling",
    };
    console.log(obj_book_and_author.book_id);
    console.log(obj_book_and_author.book_name);
    console.log(obj_book_and_author.author_id);
    console.log(obj_book_and_author.author_name);
});
define("letconst", ["require", "exports"], function (require, exports) {
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
define("validators", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("letters_validators", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /// <reference path="validators.ts" />
    var Validation;
    (function (Validation) {
        const lettersRegexp = /^[A-Za-z]+$/;
        class LettersValidator {
            isValid(s) {
                return lettersRegexp.test(s);
            }
        }
        Validation.LettersValidator = LettersValidator;
    })(Validation || (Validation = {}));
});
/// <reference path="validators.ts" />
/// <reference path="letters-validator.ts" />
/// <reference path="zipcode-validator.ts" />
define("main", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // Now you can use the validators from multiple files
    let validators = {};
    validators["letters"] = new Validation.LettersValidator();
    validators["zipcode"] = new Validation.ZipCodeValidator();
    // Some samples to validate
    let strings = ["Hello", "98052", "101"];
    // Validate each
    strings.forEach(s => {
        for (let name in validators) {
            console.log(`"${s}" - ${validators[name].isValid(s) ? "matches" : "does not match"} ${name}`);
        }
    });
});
define("numbers", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    console.log(Number.EPSILON);
    console.log(Number.MAX_SAFE_INTEGER);
    console.log(Number.MIN_SAFE_INTEGER);
    console.log(Number.MAX_VALUE);
    console.log(Number.MIN_VALUE);
    var month = 0;
    if (month <= 0 || month > 12) {
        month = Number.NaN;
        console.log("month is " + month);
    }
    else {
        console.log("month is " + month);
    }
});
define("operators", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var num = -10;
    var result = num > 0 ? "+ve" : "-ve";
    console.log(result);
});
define("readFile", ["require", "exports", "fs"], function (require, exports, fs_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    const content = (0, fs_1.readFileSync)('sample.txt', 'utf-8');
    console.log(content);
});
define("strings", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let message = "Hello, World!";
    console.log(message[3]);
});
define("switch", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var grade = 'c';
    switch (grade) {
        case 'A':
            console.log('Excellent');
            break;
        case 'B':
            console.log('very good');
            break;
        default:
            console.log('keep trying');
    }
});
define("tuples", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let var1 = ["hello", 25];
    console.log(var1[1]);
    var tup = [];
    tup[0] = "hello";
    tup[1] = 25;
    console.log(tup);
});
define("type", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function move(direction) {
        console.log(`Moving ${direction}`);
    }
    move('east');
    let prime;
    prime = 5;
    console.log(prime);
    let val;
    val = 'karthik';
    console.log(val);
    val = 12;
    console.log(val);
});
//in Type Guard
define("typeGaurds", ["require", "exports"], function (require, exports) {
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
define("typeManipulation", ["require", "exports"], function (require, exports) {
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
//function type annotations
define("typeannotations", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function add(a, b, c) {
        console.log((a + b + c).toFixed);
    }
    add(12, 34.3, 45);
    //return type annotations
    function add1(a, b) {
        return a + b;
    }
    console.log(add1(12.3, 45.3));
    //void type annotations
    function add2(a, b) {
        console.log(a + b);
    }
    add2(23, 34);
});
//symbol
define("types", ["require", "exports"], function (require, exports) {
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
define("unions", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    let val;
    val = "karthik";
    console.log(val);
    val = 123;
    console.log(val);
    function disp(name) {
        if (typeof name == "string") {
            console.log(name);
        }
        else {
            var i;
            for (i = 0; i < name.length; i++) {
                console.log(name[i]);
            }
        }
    }
    disp("mark");
    console.log("Printing names array....");
    disp(["Mark", "Tom", "Mary", "John"]);
    var arr;
    var i;
    arr = [1, 2, 4, 5];
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
    arr = ["Cherry", "tomato", "Potato"];
    for (i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
});
define("variables", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var name1 = "Karthik";
    var score1 = 35;
    var score2 = 45.67;
    var sum = score1 + score2;
    console.log("Name: " + name1);
    console.log("Score1: " + score1);
    console.log("Score2: " + score2);
    console.log("Sum: " + sum);
    // type Assertion
    /*var str1:string = "123";
    var str2:number = number as str1;
    console.log(typeof(str2));*/
    /*var str = '1'
    var str3:number = <number> <any> str   //str is now of type number
    console.log(typeof(str3)) */
    /*var str:any = '123';
    var str4:number = str as number;
    console.log(typeof(str4)); */
    var num = 12; //global variable
    class Numbers {
        constructor() {
            this.num = 13; // class variable
        }
        storeNum(num) {
            //local variable
            console.log(num);
        }
    }
    Numbers.num = 14; // static variable
    console.log("Global_Num: " + num);
    console.log("static variable: " + Numbers.num);
    var obj = new Numbers();
    console.log("Class variable: " + obj.num);
    console.log("local variable: " + obj.storeNum(15));
});
//factorial in a given range
define("while", ["require", "exports"], function (require, exports) {
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
define("zipcode_validators", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /// <reference path="validators.ts" />
    var Validation;
    (function (Validation) {
        const zipCodeRegexp = /^[0-9]+$/;
        class ZipCodeValidator {
            isValid(s) {
                return zipCodeRegexp.test(s) && s.length === 5;
            }
        }
        Validation.ZipCodeValidator = ZipCodeValidator;
    })(Validation || (Validation = {}));
});
define("src/user-actions", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App;
    (function (App) {
        class User {
            constructor(name, age, gender) {
                this.name = name;
                this.age = age;
                this.gender = gender;
            }
        }
        let userList = [];
        function createUser(name, age, gender) {
            const u = new User(name, age, gender);
            userList.push(u);
            return u;
        }
        App.createUser = createUser;
        function getUsers() {
            return userList;
        }
        App.getUsers = getUsers;
    })(App || (App = {}));
});
///<reference path ="./user-actions.ts"/>
define("src/app", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App;
    (function (App) {
        const u1 = createUser('jon', 28, "male");
        const u2 = createUser('jane', 24, 'female');
        console.log(u1, u2);
    })(App || (App = {}));
});
//# sourceMappingURL=bundle.js.map