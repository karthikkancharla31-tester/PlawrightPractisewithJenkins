// 1. Print a string.
let str:string = "Hello, World!";
console.log(str);
//2. Find the length of a string.
console.log("Length of the string is: "+str.length);
//3. Convert a string to uppercase.
console.log("Uppercase string is: "+str.toUpperCase());
//4. Convert a string to lowercase.
console.log("Lowercase string is: "+str.toLowerCase());
//5. Reverse a string.

let reversedStr = str.split("").reverse().join("");
console.log("Reversed string is: "+reversedStr);
 // reverse without using inbuilt functions

  let revStr:string ='';
   for(let i=str.length-1;i>=0;i--){
    revStr+=str[i];
   }
    console.log("original string: "+str);
    console.log("Reversed string without using inbuilt functions: "+revStr);

//6. Concatenate two strings.
let str2:string = " Welcome to TypeScript.";
let concatenatedStr = str.concat(str2);
console.log("first string: "+str);
console.log("second string: "+str2);
console.log("Concatenated string is: "+concatenatedStr);
console.log("Concatenated string is using + : "+str+str2);


//7. Find a character at a specific index in a string.
let index:number = 7;
console.log("Character at index "+index+" is: "+str.charAt(index)); 

//8. Find the index of a character in a string.
let char:string = 'o';
console.log("Index of character "+char+" is: "+str.indexOf(char));

//9. Extract a substring using `slice()`.
let start:number = 3;
let end:number = 8;
console.log("Substring from index "+start+" to "+end+" is: "+str.slice(start,end));

// 10. Extract a substring using `substring()`.

let a:number =3;
let b:number =8;

console.log("Substring from index "+start+" to "+end+" is: "+str.substring(a,b));

//11. Extract a substring using `substr()`.

/*let a1:number =3;
let b2:number =8;

console.log("Substring from index "+start+" to "+end+" is: "+str.substr(a,b)); // deprecated */ 

//12. Replace a substring in a string.

let original = "Hello Karthik"
let updated = original.replace("Karthik","Friend!");

console.log(updated);

//13. Check if a string contains a specific word.

let text = "Hello Doctor";
let isThere = text.includes("Doctor");

console.log(isThere);

//14. Count the occurrences of a character in a string.

/* 
approach 
str = "Hello world How are you"
count the occurrence of char o
*/

let str3 = "Hello world How are you";
let count =0;
let char1 = 'o';
for (let c of str3){
    if(char1==c){
        count++
    }
}
console.log(`character 'o' count in the given string is ${count}`);

//15. Count the occurrences of a word in a string.
/*
approach
str = "Hello world How are you Hello is Hello"
count occurrence of the word "Hello"
*/

let str4 = "Hello world How are you Hello is Hello";
let str4Array = str4.split(" ");
//console.log(str4Array);

let countWord =0;
let word1 = "Hello";

for(let w of str4Array){
    if(word1==w){
        countWord++
    }
}

console.log(`Word 'Hello' count in the given string is ${countWord}`);


//16. Check if a string starts with a given substring.

/*approach
  str = hello how are you
  substring = hello
  check string starts with substring true else false
*/

let str5 = "hello how are you";
let substr1 = "hello";
let flag:boolean;

if(str5.startsWith(substr1)){
    flag =true;
}else{
    flag =false;
}

console.log(`the given string "${str5}" starts with "${substr1}" is ${flag}`);

//17. Check if a string ends with a given substring.

let str6 = "hello how are you";
let substr2 = "abc";
let flag1:boolean;

if(str6.endsWith(substr2)){
    flag1 =true;
}else{
    flag1 =false;
}

console.log(`the given string "${str6}" end with "${substr2}" is ${flag1}`);

//18. Repeat a string `n` times.

let str7 = "Karthik "
let rep = str7.repeat(10);

console.log(rep);

//19. Trim whitespace from the start and end of a string.

let str8 = " abc ";
let tr = str8.trim();
console.log("xyz"+tr+"pqr");

//20. Split a string into an array of words.
let str9 = "Hello world How are you Hello is Hello";
let str9Array = str9.split(" ");
console.log(str9Array);

//21. Convert a string to an array of characters.

let str10 = "karthik"
let str10Array = str10.split("");
console.log(str10Array)

//22. Convert an array of characters to a string.

let arrToStr = str10Array.join('');
console.log(arrToStr);

//23. Remove all spaces from a string.

let str11 = "Karthik is learning TypeScript";
let removeSpaces = str11.replaceAll(' ','');
console.log(removeSpaces);

//24. Remove duplicate characters from a string.
/* 
  str = mississippi to misp
 */

  let str12= "mississippi"

  let dupArr= str12.split('');
  let dupRem = [...new Set(dupArr)].join('');

  console.log(dupRem);

  //25. Find the first non-repeating character in a string.

  /* 
    str = karthik  o/p = a
  */

    let str13 = "aabbccdde"
    let chars = str13.split('');
    let nonRepChar = chars.find(char => chars.filter(c=>c===char).length === 1);

    console.log(nonRepChar);

    //26. Find the last non-repeating character in a string.

    let str14 = "karthik"

    let chars1 = str14.split('').reverse();

    let nonRepCharLast = chars1.find(char => chars1.filter(c=>c===char).length === 1);

    console.log(nonRepCharLast);

    //27. Check if a string is a palindrome.

    let str15 = "madam"

    let revStr15 = str15.split('').reverse().join('');


    if(str15===revStr15){
        console.log("Palindrome")
    }else{
        console.log("Not a Palindrome")
    }

    //28. Check if two strings are anagrams.

    let str16 = "silent"
    let str17 = "listen"
   
     let angStr16 = str16.toLowerCase().split('').sort().join('');
     let angStr17 = str17.toLowerCase().split('').sort().join('');

     console.log(angStr16+" "+angStr17);

     if(angStr16===angStr17){
        console.log("Anagram");
     }else{
        console.log("Not an Anagram");
     }

     //29. Count the number of vowels in a string.

     let str18 = "karthik"
     const vowels = ['a','e','i','o','u'];

     let countVowels = str18.split('').filter(char=> vowels.includes(char)).length;

     console.log(countVowels);

     //30. Count the number of consonants in a string.

     let str19 = "karthik"
     const vowels1 = ['a','e','i','o','u'];

     let countCons = str19.split('').filter(char=> !vowels1.includes(char)).length;

     console.log(countCons);

     

