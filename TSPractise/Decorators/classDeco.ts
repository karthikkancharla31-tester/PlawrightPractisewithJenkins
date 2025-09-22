

//Example 1: Simple Class Decorator (Logging)
function Logger(constructor:Function){
   console.log("Class created: "+constructor.name)
}

@Logger
class User{
  constructor(public name:string){
    console.log("Name is: "+name)
  }
}

const u1 = new User("Karthik");
console.log("---------------------------------");

//Example 2: Adding Properties with a Class Decorator

function AddCreatedDate<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    createdDate = new Date();
  };
}

@AddCreatedDate
class Product {

  constructor(public name: string) {}
}

const p = new Product("Laptop");
console.log(p.name);        // Laptop
console.log(p.createdDate);

console.log("---------------------------------");

//Example 3: Class Decorator with Parameters (Factory Style)

function WithRole(role: string) {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      role = role;
    };
  };
}

@WithRole("Admin")
class Employee {
  constructor(public name: string) {}
}

const e = new Employee("Karthik");
console.log(e.name); // Karthik
console.log(e.role); // Admin

