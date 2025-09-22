type unionTypes = string|number|boolean;


function processInfo(value:unionTypes):void{
    if(typeof value === "string"){
        console.log("String value: "+value.toUpperCase());
    }else if(typeof value === "number"){
        console.log("Number value: "+(value*2));
    }else{
        console.log("Boolean value: "+(!value));
    }
}

processInfo("karthik");
processInfo(123);
processInfo(true);

//intersection types

interface Business{
    name:string;
    turnOver:number;
}

interface ContactDetails{
    //name:string;
    email:string;
    phone:number;

}

type BusinessContact = Business & ContactDetails;

let objBusinessContact:BusinessContact={
    name:"Tech Solutions",
    turnOver:500000,
    email:"abc@gmail.com",
    phone:9876543210
}

console.log(objBusinessContact.name);
console.log(objBusinessContact.turnOver);
console.log(objBusinessContact.email);
console.log(objBusinessContact.phone);


//partial type

interface ToDo{
    title:string;
    description:string;
}

type OptionalToDo= Partial<ToDo>;

let objOptionalTodo:OptionalToDo={
    title: "Harry Potter"
}

console.log(objOptionalTodo.title);

//pick utility type
interface ToDo{
    title:string;
    description:string;
}

type ToDoTitle = Pick<ToDo,'title'>;

let objToDoTitle:ToDoTitle={

    title:"Learn TypeScript"

}
 
console.log(objToDoTitle.title);

//omit utility type
interface ToDo{
    title:string;
    description:string;
    completed:boolean;
}       

type ToDoWithoutDescription = Omit<ToDo,'description'>;

let objToDoWithoutDescription:ToDoWithoutDescription={
    title:"Learn JavaScript",
    completed:false
}       

console.log(objToDoWithoutDescription.title);
console.log(objToDoWithoutDescription.completed);
//console.log(objToDoWithoutDescription.description); // Error: Property 'description' does not exist

//record utility type   

type StudentGrades = Record<string,number>;

let objStudentGrades:StudentGrades={        


    "karthik":85,
    "john":90,
    "alice":78
}       
console.log(objStudentGrades.karthik);
console.log(objStudentGrades.john);
console.log(objStudentGrades.alice);

//typeof type operator

const person ={
    name:"karthik",
    gender:"male"
}

type PersonType = typeof person;

let objEmployee:PersonType={
    name:"Alice",
    gender:"male"
}
console.log(objEmployee.name);
console.log(objEmployee.gender);  
console.log(objEmployee);

//keys

interface Person1{
    name:string
    age:number
}

type PersonKeys = keyof Person1;

const key1:PersonKeys="name"
const key2:PersonKeys="age"

console.log(key1);
console.log(key2);

//mapping properties

interface Fruit{
    name:string;
    color:string;
}

type FruitMapped = {
    [K in keyof Fruit]:number
}

let objFruitMapped:FruitMapped={
    name:1,
    color:2
}   

console.log(objFruitMapped.name);
console.log(objFruitMapped.color);
console.log(objFruitMapped);


//Accessing Object Property types

type User={
    id:number;
    name:string;
    age:number;
}


type UserNameType = User['name'];

let userName:UserNameType="karthik";
console.log(userName);

//Accessing nested object property types

type Employee2 = {
    id:number;
    personalInfo:{
        name:string;
        age:number;
    }
        
}

type EmployeeNameType = Employee2['personalInfo']['name'];
let employeeName:EmployeeNameType="karthik";
console.log(employeeName);

//keyof with index types

type User1 ={
    id:number;
    name:string;
    age:number;
    isAdmin:boolean;
}

type User1Keys = User1[keyof User1];

let user1Key:User1Keys;
user1Key =123;
console.log(user1Key);
user1Key="abc";
console.log(user1Key);
user1Key=true;
console.log(user1Key);


//conditional types

type Car={
    name:string;
    model:number;
    year:number;
}

type Name = {
    name:string;
}


type CarNameType = Car extends Name? string:any;

const carName:CarNameType="BMW";
console.log(carName);
