function add(a:number, b:string,c?:boolean):void {
    console.log(a);
    console.log(b);
    if(c!==undefined){
        console.log(c);
    }
}

add(5,"hello");
add(10,"karthik",true);


function xyz(a:number,b:number =10):number {
   return a+b;
}

console.log(xyz(5));


function getNum():number{
    return 10;
}

function addNum(a:number,b:number=getNum()):number{
    return a+b;
}

console.log(addNum(20));

//anonymous function

let myFun = function(a:number,b:number):number{
     return a+b;
}

console.log(myFun(100,200));

//anonymous functions with arrows

var test = (a:number,b:number):number =>{
    return a+b;
}

console.log(test(50,60));


var num: number[] = [100,-3,30,25,50];

num.sort((v1:number,v2:number):number =>{
    return v1<v2 ? -1 : 1;
});

console.log(num);

//function constructor

var myFun1 = new Function("a","b","return a+b");

console.log(myFun1(10,20));

//rest parameters

//sum of all numbers in an array

function addAll(...nums:number[]):number{
    let sum =0;
    for(let num of nums){
       sum+=num;
    }
    return sum;
}

console.log(addAll(1,2,3,4,5,100));

let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
arr1.push(...arr2);
console.log(arr1);

function multi(a:number,b:number,c:number):number{
    return a*b*c;
}

let numbers1: [number, number, number];
numbers1 = [1,2,3];

console.log(multi(...numbers1));

//arrow functions

const add1 = (a:number,b:number):number => a+b;

console.log(add1(10,20));

const mul1 = (a:number,b:number):number => a*b;

console.log(mul1(10,20));

//arrow functions with no parameter

const greet = () => "hello world";

console.log(greet());

//arrow with single parameter

const add3 = (a:number) => a+10;

console.log(add3(100));


const mult3 = (a=10,b=20,c=30) => a*b*c;
console.log(mult3());
console.log(mult3(1,2,3));

//higher order functions

const opp = (x:number, y:number, operation:(a:number,b:number) => number)=>operation(x,y);
console.log(opp(10,20, (a,b)=>a+b));
