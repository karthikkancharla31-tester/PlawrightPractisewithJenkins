define(["require", "exports"], function (require, exports) {
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
//# sourceMappingURL=interfaces.js.map