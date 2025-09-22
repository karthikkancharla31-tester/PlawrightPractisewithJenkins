function LogClass(target: Function) {
    console.log(`${target.name} is instantiated`);
}

// Decorator
@LogClass
class MyClass {
    constructor() { console.log("MyClass instance created"); }
}

// Create an instance of the class
const myClassInstance = new MyClass();