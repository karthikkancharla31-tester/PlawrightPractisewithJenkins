
interface IPerson{
    firstName: string;
    lastName: string;
    sayHi():string; //sayHi:()=> string;
}

var customer: IPerson = {
    firstName:"Karthik",
    lastName: "Kancharla",
    sayHi:()=>"Hi There"

}

console.log("Customer Object ");
console.log(customer.firstName);
console.log(customer.lastName);
console.log(customer.sayHi());

var employee:IPerson = {
    firstName: "tom",
    lastName:"Hanks",
    sayHi: ()=>"Hello world"
}

console.log("Employee  Object ");
console.log(employee.firstName);
console.log(employee.lastName);
console.log(employee.sayHi());


//union types in interfaces

interface RunOptions{
    program:string;
    commandline:string[]|string|(()=>string);
}


//commandline as string
var options:RunOptions ={
    program: "test1",
    commandline:"hello"
}
console.log(options.commandline);

//commandline as string array
options= {
    program: "test1",
    commandline:["hello","world"]

}

console.log(options.commandline[0]);

//commandline as function

options ={
    program:"test1:",
    commandline: ()=>"hello world"
}

var fn:any = options.commandline;

console.log(fn());

//extending interfaces

interface Shape{
    color:string;
}

interface ColorShade extends Shape{
    name:string;
}

const square:ColorShade ={
    color:"blue",
    name:"Navy"
}

console.log(square.color);
console.log(square.name);   

//extending multiple interfaces

interface Printable{
    print():void;
}

interface Scannable{
    scan():void;
}

interface MultifunctionalDevice extends Printable,Scannable{
    copy():void;
}
class Printer implements MultifunctionalDevice{

    print(){
        console.log("Printing....");
    }
    scan(){
        console.log("Scanning....");
    }       
    copy(){
        console.log("Copying....");
    }   
    
}

const device = new Printer();


device.print();
device.scan();
device.copy();

interface Product{
    name:string;
    price:number;
}

interface DiscountedProduct extends Product{
    discount:number;
}

interface ProductWithReviews extends Product{
    reviews:string[];
}

interface FeaturedProduct extends DiscountedProduct,ProductWithReviews{
    featured:boolean;
}

const product :FeaturedProduct ={
    name:"Laptop",
    price:25000,
    discount:5,
    reviews:["Good","Value for money"],
    featured:true
}

console.log(product.name);
console.log(product.price);
console.log(product.discount);
console.log(product.reviews);
console.log(product.featured);  


//function override

interface Animal{
    name:string;
    makeSound():void;
}

interface Dog extends Animal{
    makeSound():string;
}

const dog:Dog ={
    name:"Buddy",
    makeSound:()=>"Woof Woof"
    
};

console.log(dog.makeSound());

