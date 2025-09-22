//1. Print a number.

let a:number = 345;
console.log(a);

//2. Find the sum of two numbers.
let a1=10;
let b1=20;
let sum = a1+b1;
console.log(sum);

//3. Find the difference between two numbers.

let a2=10;
let b2=20;
let diff = a2-b2;
console.log(diff);

//4. Find the product of two numbers.

let a3=10;
let b3=20;
let pro = a3*b3;
console.log(pro);

//5. Find the quotient and remainder of two numbers.

let a4=13;
let b4=89;
let quo=(a4/b4).toFixed(2);
let rem=a4%b4;

console.log(quo);
console.log(rem);

//6. Convert a string to a number

let str:string = "123"
let num:number = Number(str);

console.log(num);

//7. Convert a number to a string.

let num1:number = 1234
let str1:string = String(num1);

console.log(str1);

//8. Find the absolute value of a number.

let num2 = -78;
console.log(Math.abs(num2));

//9. Find the square of a number.

let num3 = 10;
console.log(num3*num3);

//10. Find the square root of a number.

let num4 = 34;
console.log(Math.sqrt(num4).toFixed(2));

//11. Find the cube of a number.

console.log(num4*num4*num4);

//12. Find the cube root of a number.
console.log(Math.cbrt(num4).toFixed(2));

//13. Find the power of a number using `Math.pow()`.
console.log(Math.pow(2,3));

//14. Find the power of a number using exponentiation operator (`**`).

console.log(2**3);

//15. Find the maximum of two numbers.
console.log(Math.max(2,3));

//16. Find the minimum of two numbers.
console.log(Math.min(2,3));

//17. Generate a random number between 1 and 10.

console.log(Math.floor(Math.random()*10)+1);

//18. Generate a random number between two given numbers.

function getRandomBetween(min:number,max:number):number{
  return Math.floor(Math.random()*(max-min+1))+min;
}

console.log(getRandomBetween(5,10)); //console.log((Math.floor(Math.random()*6))+5);

//19. Round a number to the nearest integer.

console.log(Math.floor(Math.random()+1));

//20.Round a number to `n` decimal places.
console.log(Math.random().toFixed(2));

//21. Check if a number is even or odd.

let num5 = 25;

if(num5%2==0){
  console.log("even");
}
else{
  console.log("odd");
}

//22. Check if a number is prime.

function isPrime(n:number):boolean{
  if(n<=1){
    return false
  }

  for (let i =2;i<n;i++){
     if(n%i == 0){
      return false
     }
  }

  return true
    
}

console.log(isPrime(3));
console.log(isPrime(8));


//23. Find all prime numbers up to `n`.

/* 
  approach
  let range is 10
*/


function primesRange(n:number):number[]{
  const primes:number[] = [];

  for(let i =2;i<=n;i++){
    let isPrime:boolean= true;
     for(let j=2;j*j<=i;j++){
      if(i%j===0){
          isPrime = false;
          break
      }
     }
     if(isPrime){
      primes.push(i);
     }
  }
  return primes
}

console.log(primesRange(10));

//24. Find the sum of all digits in a number.

let dig = 12345;

let sumOfDig:number= dig.toString().split('').map(digit=>parseInt(digit,10)).reduce((acc,curr)=>acc+curr,0);

console.log(sumOfDig);

//25. Find the product of all digits in a number.

let proOfDig:number = dig.toString().split('').map(digit=>parseInt(digit,10)).reduce((acc,cur)=>acc*cur,1);
console.log(proOfDig);

//26. Reverse the digits of a number.

let revDig = dig.toString().split('').reverse().map(digit=>parseInt(digit,10)).join('');

console.log(revDig);

//27. Count the number of digits in a number.

let countDig = dig.toString().split('').map(digit=>parseInt(digit,10)).length;

console.log(countDig);

//28. Find the greatest common divisor (GCD) of two numbers.

/* Method  Euclidean Algorithm               

Step	a	b	 a % b	 Action Taken
1️⃣	 48	18	12	   temp = 18, b = 48 % 18 = 12, a = 18
2️⃣	 18	12	6	     temp = 12, b = 18 % 12 = 6, a = 12
3️⃣	 12	6	  0	     temp = 6, b = 12 % 6 = 0, a = 6

 */

function findGCD(a:number,b:number):number{
  while(b!==0){
    const temp = b;
    b= a%b;
    a = temp;
  }
  return Math.abs(a)
}

console.log(findGCD(48,18));

//29. Find the least common multiple (LCM) of two numbers. with using GCD

function findLCM(a: number, b: number): number {
  if (a === 0 || b === 0) return 0;
  return Math.abs(a * b) / findGCD(a, b);
}

console.log(findLCM(48,18));

//30. Check if a number is a palindrome.

let dig1 = 1212;
let dig1Str =dig1.toString();

let revDig1 = dig1Str.split('').reverse().join('')

console.log(dig1Str===revDig1);











