function ReadOnly(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  descriptor.writable = true; // make method read-only
}

class User {
  @ReadOnly
  greet() {
    return "Hello!";
  }
}

const u = new User();
console.log(u.greet()); // "Hello!"
u.greet = () => "Hi!";  // ❌ Error (in strict mode) because writable = false
