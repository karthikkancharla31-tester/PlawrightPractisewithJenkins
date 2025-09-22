namespace Geometry {
  export class Circle {
    constructor(public radius: number) {}

    area(): number {
      return Math.PI * this.radius ** 2;
    }
  }
}
const circle = new Geometry.Circle(5);
console.log(circle.area());


namespace MyNamespace {
  export namespace MySubNamespace {
    export function myFunction() {
      console.log('This is my function in MySubNamespace');
    }
  }
}

MyNamespace.MySubNamespace.myFunction();