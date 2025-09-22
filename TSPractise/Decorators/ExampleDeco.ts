// ------------------ CLASS DECORATOR ------------------
function Logger(constructor: Function) {
  console.log(`Class Decorator: ${constructor.name} was created`);
}

@Logger
class Example1 {}


// ------------------ DECORATOR FACTORY ------------------
function WithRole(role: string) {
  return function <T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      role = role;
    };
  };
}

@WithRole("Admin")
class Example2 {
  name = "Karthik";
}

const e2 = new Example2();
console.log("Decorator Factory Result:", e2.name, e2["role"]); // Karthik Admin

// ------------------ FIELD (PROPERTY) DECORATOR ------------------
function ReadOnly(target: any, propertyKey: string) {
  Object.defineProperty(target, propertyKey, {
    writable: false
  });
}

class Example3 {
  @ReadOnly
  id: number = 101;
}

const e3 = new Example3();
console.log("Field Decorator (ReadOnly):", e3.id);
// e3.id = 202; // ❌ Error: Cannot assign to read only property

// ------------------ METHOD DECORATOR ------------------
function LogMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const original = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log(`Method "${propertyKey}" called with:`, args);
    const result = original.apply(this, args);
    console.log(`Method "${propertyKey}" returned:`, result);
    return result;
  };
}

class Example4 {
  @LogMethod
  add(a: number, b: number) {
    return a + b;
  }
}

const e4 = new Example4();
e4.add(5, 10);

// ------------------ ACCESSOR DECORATOR ------------------
function LogAccessor(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalSet = descriptor.set;
  descriptor.set = function (value: any) {
    console.log(`Setting ${propertyKey} to:`, value);
    originalSet?.call(this, value);
  };
}

class Example5 {
  private _name: string = "";

  @LogAccessor
  set name(value: string) {
    this._name = value;
  }

  get name() {
    return this._name;
  }
}

const e5 = new Example5();
e5.name = "Karthik"; // Logs when setter is called
console.log("Accessor Decorator:", e5.name);
