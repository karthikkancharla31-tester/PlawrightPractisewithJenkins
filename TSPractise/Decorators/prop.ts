

const obj: any = {};

Object.defineProperty(obj, "name", {
  value: "Karthik",
  writable: true,     // Cannot be reassigned
  enumerable: true,    // Shows up in for...in loops
  configurable: false, // Cannot be deleted
});

console.log(obj.name); // "Karthik"
console.log(Object.getOwnPropertyDescriptor(obj, "name"));
obj.name = "Other";    // ❌ Error in strict mode, ignored otherwise
