define(["require", "exports"], function (require, exports) {
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
//# sourceMappingURL=classes.js.map