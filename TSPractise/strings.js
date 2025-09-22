// 1. Print a string.
var str = "Hello, World!";
console.log(str);
//2. Find the length of a string.
console.log("Length of the string is: " + str.length);
//3. Convert a string to uppercase.
console.log("Uppercase string is: " + str.toUpperCase());
//4. Convert a string to lowercase.
console.log("Lowercase string is: " + str.toLowerCase());
//5. Reverse a string.
var reversedStr = str.split("").reverse().join("");
console.log("Reversed string is: " + reversedStr);
// reverse without using inbuilt functions
var revStr = '';
for (var i = str.length - 1; i >= 0; i--) {
    revStr += str[i];
}
console.log("original string: " + str);
console.log("Reversed string without using inbuilt functions: " + revStr);
//6. Concatenate two strings.
var str2 = " Welcome to TypeScript.";
var concatenatedStr = str.concat(str2);
console.log("first string: " + str);
console.log("second string: " + str2);
console.log("Concatenated string is: " + concatenatedStr);
console.log("Concatenated string is using + : " + str + str2);
//7. Find a character at a specific index in a string.
var index = 7;
console.log("Character at index " + index + " is: " + str.charAt(index));
//8. Find the index of a character in a string.
var char = 'o';
console.log("Index of character " + char + " is: " + str.indexOf(char));
//9. Extract a substring using `slice()`.
var start = 3;
var end = 8;
console.log("Substring from index " + start + " to " + end + " is: " + str.slice(start, end));
