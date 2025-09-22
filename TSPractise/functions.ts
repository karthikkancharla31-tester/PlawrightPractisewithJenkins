//1. Write a function to add two numbers.

function add(a:number,b:number):void{
   let sum = a+b;
   console.log(sum);
     
}

add(23.4,56.7);

//2. Write a function to check if a number is even or odd.

function isEven(a:number){

    if(a%2==0){
        console.log("a is even "+a);
    }else{
        console.log("a is odd "+a);
    }
}

isEven(11);
isEven(8);


//3. Write a function to return the larger of two numbers.

function isLarge(a:number,b:number):number{
    if (a>b){
      return a
    }else{
      return b 
    }
}

console.log(isLarge(12,45));
console.log(isLarge(32,10));


//4. Write a function to calculate the square of a number.

function square(sq:number):number{
    let sqr = sq*sq;
    return sqr;
}

console.log(square(25));

//5. Write a function to reverse a string.

function rev(a:string):string{
    let reverse:string = "";

    for(let i = a.length-1;i>=0;i--){
        reverse+= a[i];

    }
    return reverse;
}

console.log(rev("Hello"));

//6. Write a function to find factorial of a number.

//approach
 /*
    n =5  1*2*3*4*5
   fact = 1

   id n<0 invalid
   for i =2, i<=n, i++
     fact=fact*i
   return fact
     
 */

   function factorial(n:number){
    if(n<0){
         return "no factorial for negative numbers"
    }else{

     let fact = 1;
     for(let i = 2; i<=n;i++){
        fact*=i;
     }

      return fact;

    }

   }

   console.log(factorial(5));
   console.log(factorial(-10));
   console.log(factorial(1));
   console.log(factorial(0));


   //7. Write a function to check if a string is a palindrome.


   function palindrome(a:string):boolean{

       let rev:string = "";

       for(let i=a.length-1;i>=0;i--){
        rev+=a[i];
       }

       return rev==a;
   }

   console.log(" given string is palindrome "+palindrome("civic"));
   console.log(" given string is palindrome "+palindrome("karthik"));


   //8. Write a function to count vowels in a string.

  /* function countVowels(str:string):number{
    let count =0;
    let vowels = new Set(['a','e','i','o','u']);
      
    for(let char of str.toLowerCase()){
        if(vowels.has(char)){
            count++
        }
    }
    return count;
   }

   console.log("vowels count is "+countVowels("karthik"));
   console.log("vowels count is "+countVowels("kArthik"));
   
   PS C:\Users\karth\OneDrive\Desktop\PlaywrightProject2025\TSPractise> tsc functions.ts
    functions.ts:121:22 - error TS2583: Cannot find name 'Set'. Do you need to change your target 
    library? Try changing the 'lib' compiler option to 'es2015' or later.
    121     let vowels = new Set(['a','e','i','o','u']);
                         ~~~
    Found 1 error in functions.ts:121
   
   */


   //9. Write a function to find the sum of digits of a number.

   function sumOfDigits(a:number):number{
     let n = Math.abs(a);
     let sum = 0;

     while(n>0){
        sum+=n%2;
        n=Math.floor(n/2);
     }

     return sum;
   }

   console.log("sum of the digits is "+sumOfDigits(123));

   //10.Write a function to convert Celsius to Fahrenheit.

   function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9/5) + 32;
}

// Example usage
console.log(celsiusToFahrenheit(0));    // Output: 32
console.log(celsiusToFahrenheit(25));   // Output: 77
console.log(celsiusToFahrenheit(100));


//11. Write a function to check if a number is prime.

function isPrime(n:number):boolean{
  if (n<=1)
    return false;
  if (n==2)
    return true;
  if(n%2===0)
    return false;

  const sqrt =  Math.floor(Math.sqrt(n));
  for( let i =3;i<=sqrt;i++){
    if(n%i==0){
      return false
    }
  }
  return true
}

console.log(isPrime(97));
console.log(isPrime(8));

//12. Write a function to calculate the area of a rectangle.

function areaRect(a:number,b:number):number{
  let area = a*b;
  return area
}

console.log(areaRect(3.2,4.5));

//13. Write a function to calculate simple interest.

function simpleInterest(p:number,r:number,t:number):number{
  let simpleI = (p+r+t)/100;
  return simpleI;
}

console.log(simpleInterest(1000,2.5,60));


//14. Write a function to return maximum of three numbers.

function maxOfthree(a:number,b:number,c:number):number{
  let max = a;
  if(b>max)
     max =b;
  if(c>max)
    max =c;
  return max;
}

console.log(maxOfthree(12,34,5));

//15. Write a function to calculate power of a number.
/*
b^e = 2^3 = 2*2*2
*/ 

function power(b:number,e:number):number{
  let result =1;

  for(let i =0;i<e;i++){
    result*=b;
  }
  return result;
}

console.log(power(2,3));

//16. Write a function with optional parameter.

function opt(a:number,b?:number){
  let sum = a+a;
  console.log(sum);
}

opt(3);

//17. Write a function with default parameter value.

function def(a:number,b:number=5){
  let sum = a+b;
  console.log(sum);
}

def(4);

//18. Write a function that accepts rest parameters and returns their sum.

function sumAll(...arr:number[]):number{
  return arr.reduce((acc,cur)=>acc+cur,0);
}

console.log(sumAll(1,2,3,4,5));

//19. Write a function that returns multiple values as a tuple.

function address():[number,string,boolean]{
  const hno= 120;
  const streetName = "Texas";
  const flag = true;

  return [hno,streetName,flag];
}

const [a,b,c] = address(); //Array destructuring

console.log(`House No: ${a}, Street name: ${b}, in USA: ${c}`);

//20. Write a function that accepts a string and number and returns a formatted string.

function data(a:string,b:number):string{
  return `Name is ${a} and age is ${b}`;
}

console.log(data("karthik",36));

//21. Write a function that accepts an object `{name, age}` and returns greeting.

function greetPerson(Person:{name:string;age:number}):string{
  return `Hello! ${Person.name} You are ${Person.age} years old`
}

const user = {
  name:"Karthik",
  age: 26
}

console.log(greetPerson(user));

//22. Write a function with `void` return type that just logs a message.

function logMessage(){
  console.log("Log Message");
}

logMessage();

//23. Write a function returning a boolean.

function flag():boolean{
  return true;
}

console.log(flag());

//24. Write a function returning `Promise<string>`(

function getGreetingAsync():Promise<string>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
       resolve(`Hello, Karthik! Your async operation completed.`);
    },1000);
  });
}

getGreetingAsync().then(message => console.log(message));

//25. Write a function returning an array of numbers.

function evenNumbers(a:number[]):number[]{
  const even:number[]= a.filter(x=>x%2==0);
  return even;
}

console.log(evenNumbers([1,2,3,4,5,6,7,8,9]));

//26. Write a function with explicit type annotation for arguments.

function calculateEMV(probability: number, impact: number): number {
  return probability * impact;
}

// Example usage
const emv = calculateEMV(0.25, 100000);
console.log(`Expected Monetary Value: ₹${emv}`); // Output: ₹25000

//27. Write a function that takes another function as argument.

function executeCallback(callback:(message:string)=>void):void{
  const msg = "Hello from inside the executor!";
  callback(msg);
}

function printMessage(message:string):void{
  console.log(`Received: ${message}`);
}

executeCallback(printMessage);


//28. Write a function with a union type parameter (`string | number`).

function dateOfBirth(dob:string|number){
  console.log(dob);
}
dateOfBirth("12thJune2000");
dateOfBirth(12062000);

//29. Write a function with a generic parameter.

function wrapInArray<T>(value:T):T[]{
  return [value];
}

console.log(wrapInArray(42));
console.log(wrapInArray("Karthik"));
console.log(wrapInArray({ id: 1 }));

//30. Write a function that narrows type at runtime.

function processValue(value:string|number):string{
  if(typeof value ==="string"){
    return `value is ${value.length}`;
  }else{
    return `value is ${value*value}`;
  }
}

console.log(processValue("Karthik"));
console.log(processValue(26));




