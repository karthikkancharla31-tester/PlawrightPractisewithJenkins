class Car{
    engine:string;

    constructor(engine:string){
        this.engine =engine;
    }

    disp():void{
            console.log("Engine is "+this.engine)
    }
}

var obj = new Car("XXYZ12E");

console.log(obj.engine);
obj.disp();

var person:{firstName:string,lastName:string} ={
    firstName: "tom",
    lastName:"Hanks"
};

console.log(person.firstName);
console.log(person.lastName);

//class Inheritance

class Shape{
    area:number;

    constructor(a:number){
        this.area=a;
    }
}

class Circle extends Shape{
    disp():void{
        console.log("area is"+this.area)
    }
}

var obj1 = new Circle(123);

obj1.disp();

//multi level Inheritance

class Root{
    str:string;
}

class Child extends Root{


}

class Leaf extends Child{

}


var obj3 = new Leaf();

obj3.str = "hello";

console.log(obj3.str);

//class inheritance and method overriding

class Printer{
    doPrint():void{
      console.log("do print from the parent called");
    }
}

class StringPrinter extends Printer{
    doPrint():void{
        super.doPrint();
        console.log(" do print is printing a string")
    }
}

var obj5 = new StringPrinter();
obj5.doPrint();

//static keyword

    class StaticMem{
        static num:number;
        static disp():void{
            console.log(StaticMem.num);
        }
    }

    StaticMem.num=12;
    StaticMem.disp();

    //instanceof operator

    class Person{

    }

    var obj6 = new Person();

    var isPerson = obj6 instanceof Person;
    console.log("obj6 is instanceof Person: "+isPerson);

    //private

    class Encapsulate{
        str:string = "hello"
        private str2:string= "world"

        //public method to access private property
        getPrivate():string{
                return this.str2;
        }
    }

    var obj7 = new Encapsulate();

    console.log(obj7.str)     //accessible 
   // console.log(obj7.str2)   //compilation Error as str2 is private  

   //to access private we need to create public method in class

   console.log(obj7.getPrivate());

   //protected

   class BaseTest{
    protected testName = "Hello"

    public displayTestName():void{
        console.log(" base test:"+this.testName);
    }
   }

   class ExtendedTest extends BaseTest{
    public showExtendedTest():void{
        console.log(" Extended test:"+this.testName);
    }
   }

   const base = new BaseTest();
   base.displayTestName();

   const extend = new ExtendedTest();
   extend.showExtendedTest();


   //classes and Interfaces

   interface ILoan{
    interest:number;
    execute():void;
   }

   class AgriLoan implements ILoan{
    rebate:number
    interest:number
    

        constructor(interest:number,rebate:number){
            this.interest = interest;
            this.rebate = rebate;
        }

        execute(): void {
            console.log("abcd: "+this.interest+"efgh: "+this.rebate)
        }
   }

   var obj8 = new AgriLoan(10,12);

   console.log("interest is "+obj8.interest+"rebate is "+obj8.rebate);
   obj8.execute();

   //object

   var person :{
    firstName:string,
    lastName:string
   }  ={
    firstName :"karthik",
    lastName:"kancharla"

   }

   console.log(person.firstName);
   console.log(person.lastName);

   //object as function parameter

   var customer = {
    firstName: "Tom",
    lastName: "Hanks"
   }

   var customerFullName = function(obj:{ firstName:string,lastName:string}){
    console.log(obj.firstName);
    console.log(obj.lastName);
   }

   customerFullName(customer);


   //anonymous object

   var brand = function(obj:{ model:string,gas:string}){
    console.log(obj.model);
    console.log(obj.gas);
   }


   brand({model:"Benz", gas:"Petrol"});


   //Access modifiers

   //public

   class Vehical{
        public brand:string ="";

        public getModel():void{
            console.log("Model is "+this.brand);
        }

   }

   const vehicalObj = new Vehical();
   vehicalObj.brand = "BENZ";
   vehicalObj.getModel();


   class BankAccount
   {
    private balance:number;

    constructor(balance:number){
        this.balance=balance
    }
   
     private calInterest():number{

        const interest = 0.67;

        return this.balance*interest;

     }

     public pubCalInterest():number{
        const interest = 0.67;

        return this.balance*interest;
     }

   }

   var objInterest = new BankAccount(20123);

  // console.log(objInterest.balance);
   //console.log(objInterest.calInterest());
   console.log(objInterest.pubCalInterest());


   //read only interfaces

   interface Planet{
    gravity:number;
    readonly habitual:boolean;
   }

   let objPlanet :Planet= {
        gravity :22.5,
        habitual:true
   }

   //objPlanet.habitual=false;

   console.log(objPlanet.gravity);
   console.log(objPlanet.habitual);


   //readonly classes

   class Student{
     firstName:string;
     lastName:string;
     readonly marks:number;

     constructor(firstName:string,lastName:string,marks:number){
        this.firstName=firstName;
        this.lastName=lastName;
        this.marks=marks;
     }

     getDetails():void{
        console.log(this.firstName);
        console.log(this.lastName);
        console.log(this.marks);
     }

   }

   let objStudent = new Student("karthik","kancharla",234)

    // objStudent.marks=567;
    objStudent.getDetails();

    // readonly type

    type Xyz = {
      x:number;
    readonly  y:number;
      z:number;
    }

    let objXYZ:Xyz= {
        x :12,
        y:20,
        z:34

    }

    //objXYZ.y=45;
    console.log(objXYZ.x);
    console.log(objXYZ.y);
    console.log(objXYZ.z);


    //super

    class Person1{
        name:string;
        constructor(name:string){
            this.name=name;
        }

        display():void{
            console.log(this.name);
        }
    }

    class Employee1 extends Person1{
        empCode:number;

        constructor(name:string,empCode:number){
            super(name);
            this.empCode=empCode;
        }

        show():void{
            super.display();
        }
    }

     let emp = new Employee1("karthik",1234);

     emp.show();
   
     //static

     class Circle1{
        static pi:number = 3.141;
     }

     console.log(Circle1.pi);

     //static method

     class Square1{
        static area(side:number):number{
            return side*side;
        }
     }

     let area1= Square1.area(5);

     console.log("Area is: "+area1);

     //private static

     class Student1{
        private static studentCount:number = 0;

        age:number;

        constructor(public name:string,age:number){
            this.name=name;
            this.age=age;
            Student1.studentCount++;

        }

        static getStudentCount():number{
            return Student1.studentCount;
        }

     }

     let objStudent1 = new Student1("karthik",36);
     let objStudent2 = new Student1("Ramesh",56);

     console.log(Student1.getStudentCount());

     //abstract class

     abstract class simple{
        property1:string;
        //property2:string;

        constructor(property1:string){
               this.property1=property1;
               //this.property2=property2;

        }

        abstract demo():void;

        save():void{
            console.log("save method of abstract class is executed");
        }

     }



class test2 extends simple{
    property3:string;
    constructor(property1:string,property3:string){
        super(property1);
        this.property3=property3;
    }

    demo():void{
        console.log("value of property3 is "+this.property3+" value of property1 is :"+this.property1);
    }
}

let testObj = new test2("abc","efg");

testObj.demo();
testObj.save();

//Accessors
//getters

class Person2{
    private name: string;

    constructor(name:string){
        this.name=name;
    }

    get SName():string{
         return this.name;
    }
}

const person3 = new Person2("Jon");

console.log(person3.SName);

//setter

class TextContiner{
    private _container:string ='';

    set content(value:string){
        this._container = value.trim().toLocaleLowerCase();
    }

    get content():string{
        return this._container;
    }
}

const text = new TextContiner();
text.content = "Hello Karthik";
console.log(text.content);