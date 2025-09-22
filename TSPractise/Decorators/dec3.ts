// Decorator factory
function printExecution(method: any, _context: any) {
    // Returning a new function
    return function (value: any, ...args: any[]) {
        // Logging the method name at the start
        console.log("start:", method.name);
        // Calling the original method
        const result = method.call(value, ...args);
        return result;
    }
}

// Defining a class
class Person {
    constructor(private name: string) { }

    // Decorator
    @printExecution
    printName() {
        console.log(`Hello, my name is ${this.name}.`);
    }
}

// Create an object of the class
const user = new Person("John");
// Accessing the properties of the class
user.printName();