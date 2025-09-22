// Enable "experimentalDecorators" in tsconfig.json before using decorators
// "experimentalDecorators": true

// Class Decorator
function Logger(constructor: Function) {
  console.log("Class Created:", constructor.name);
}

// Method Decorator
function LogMethod(
  target: any,
  propertyName: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;
  
  descriptor.value = function (...args: any[]) {
    console.log(`Method "${propertyName}" called with arguments:`, args);
    const result = originalMethod.apply(this, args);
    console.log(`Method "${propertyName}" returned:`, result);
    return result;
  };
  
  return descriptor;
}

@Logger
class Calculator {
  @LogMethod
  add(a: number, b: number): number {
    return a + b;
  }

  @LogMethod
  multiply(a: number, b: number): number {
    return a * b;
  }
}

const calc = new Calculator();
calc.add(5, 10);      // Logs method name, args, and result
calc.multiply(3, 4);  // Logs method name, args, and result
