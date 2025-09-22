function printExecution(method:any,_context:any){

    return function(value:any,...args:any[]){
        console.log("start: ",method.name);
        const result = method.call(value,...args);
        console.log("end: "+method.name);
        return result;
    }

}

class Student{
    constructor(private name: string,private rollNo:number){}

    @printExecution
    sayHello(){
        console.log(`Hello, my name is ${this.name}.`);
    }

    @printExecution
    printrollNo() {
        console.log(`My RollNo is ${this.rollNo}.`);
    }
}

const user = new Student("John", 20);
// Accessing the properties of the class
user.sayHello();
user.printrollNo();