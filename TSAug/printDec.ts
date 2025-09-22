function PrintExecution(
  target: Object,
  propertyKey: string | symbol,
  descriptor: TypedPropertyDescriptor<any>
): TypedPropertyDescriptor<any> | void {
  const originalMethod = descriptor.value;
  descriptor.value = function (...args: any[]) {
    console.log("start:", propertyKey);
    const result = originalMethod.apply(this, args);
    console.log("end:", propertyKey);
    return result;
  };
  return descriptor;
}

class Student{
    constructor(private name:string,private rollno:number){

    }

    @PrintExecution
    sayHello(){
       console.log(`Hello, My name is ${this.name}`);
    }

    @PrintExecution
    getRollNo(){
       console.log(`My roll number is ${this.rollno}`);
    }   
}

const user = new Student("Karthik",101);
user.sayHello();
user.getRollNo();
