//1. Write a function to add two numbers.
function add(a, b) {
    var sum = a + b;
    console.log(sum);
}
add(23.4, 56.7);
//2. Write a function to check if a number is even or odd.
function isEven(a) {
    if (a % 2 == 0) {
        console.log("a is even " + a);
    }
    else {
        console.log("a is odd " + a);
    }
}
isEven(11);
isEven(8);
//3. Write a function to return the larger of two numbers.
function isLarge(a, b) {
    if (a > b) {
        return a;
    }
    else {
        return b;
    }
}
console.log(isLarge(12, 45));
console.log(isLarge(32, 10));
//4. Write a function to calculate the square of a number.
function square(sq) {
    var sqr = sq * sq;
    return sqr;
}
console.log(square(25));
//5. Write a function to reverse a string.
function rev(a) {
    var reverse = "";
    for (var i = a.length - 1; i >= 0; i--) {
        reverse += a[i];
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
function factorial(n) {
    if (n < 0) {
        return "no factorial for negative numbers";
    }
    else {
        var fact = 1;
        for (var i = 2; i <= n; i++) {
            fact *= i;
        }
        return fact;
    }
}
console.log(factorial(5));
console.log(factorial(-10));
console.log(factorial(1));
console.log(factorial(0));
//7. Write a function to check if a string is a palindrome.
function palindrome(a) {
    var rev = "";
    for (var i = a.length - 1; i >= 0; i--) {
        rev += a[i];
    }
    return rev == a;
}
console.log(" given string is palindrome " + palindrome("civic"));
console.log(" given string is palindrome " + palindrome("karthik"));
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
function sumOfDigits(a) {
    var n = Math.abs(a);
    var sum = 0;
    while (n > 0) {
        sum += n % 2;
        n = Math.floor(n / 2);
    }
    return sum;
}
console.log("sum of the digits is " + sumOfDigits(123));
//10.Write a function to convert Celsius to Fahrenheit.
function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}
// Example usage
console.log(celsiusToFahrenheit(0)); // Output: 32
console.log(celsiusToFahrenheit(25)); // Output: 77
console.log(celsiusToFahrenheit(100));
