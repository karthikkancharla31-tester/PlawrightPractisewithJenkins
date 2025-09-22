//1. Create an array and print all its elements.
let arr:number[] = [23,56,43,5612,34];

for(let i =0;i<arr.length;i++){
    console.log("array elements are: "+arr[i]);
}
    
//2. Find the length of an array.

console.log("Length of the array is: "+arr.length);

//3. Add an element to the end of an array.
arr.push(57);
console.log("After adding an element to the end: "+arr);

//4. Add an element to the beginning of an array.
arr.unshift(1);
console.log("After adding an element to the beginning: "+arr);

//5. Remove the last element from an array.
arr.pop();
console.log("After removing the last element: "+arr);

//6. Remove the first element from an array.
arr.shift();
console.log("After removing the first element: "+arr);


//7. Find an element in an array.
/*  approach:
   init finding element
   get the index of the elements
   check if index if -1 or not
   if -1 element not found
   else element found
*/
 let element = 56;
 console.log(arr);
 let ind = arr.indexOf(element);
 if(ind==-1){
    console.log("Element not found");
    }else{
    console.log("Element found at index: "+ind);
 }

// 8. Check if an element exists in an array.
  /* if(ind==-1){
    console.log("Element not found");
    }else{
    console.log("Element found at index: "+ind);
 }*/


// 9. Find the index of an element in an array.

// done in question 7


//10. Reverse an array
/*
  //approach

  init array
  create an empty array
    run a loop from last index to first index of the array
    check if the element is number
     if number
    push each element to the empty array
  print the new array
    
*/


let rev:number[] =[];
for(let i=arr.length-1;i>=0;i--){
    const val = arr[i];
    if (typeof val === "number") {
        rev.push(val);
    }
}

console.log("original array: "+arr);
console.log("reversed array: "+rev);


let arr1 = ["apple","banana","mango","berry"];

console.log(arr1.includes("apple"));

//11. Convert an array to a string.

let arr2 = [1,2,3,4,5];

let arrTostr = arr2.join('');

console.log(arrTostr);

//12. Convert a string to an array.

let str:string = "karthik"

let stringToarr = str.split('');

console.log(stringToarr);

//13. Merge two arrays.

let arr3 = [1,2,3,4,5];
let arr4 = [6,7,8,9];

let arr3Mergarr4 = [...arr3,...arr4];

console.log(arr3Mergarr4);

//14. Copy an array.

let arrCopy = [...arr4];

console.log(arrCopy);


//15. Sort an array in ascending order.

let arr5 = [23,43,2,123,23,54,-90,3.4,234];

const sortedAsc = arr5.sort((a,b)=>a-b);

console.log(sortedAsc);
//find the 2nd lowest element

console.log("second lowest is: "+sortedAsc[1]);

//16. Sort an array in descending order.

const sortedDec = arr5.sort((a,b)=>b-a);
console.log(sortedDec);
console.log("second highest is: "+sortedDec[1]);

//17. Sort an array of objects by a property.

type People ={
  name:string,
  age:number,
}

const arr6:People[]=[
  {name:"karthik",age:24},
  {name:"suresh",age:56},
  {name:"ramesh",age:12}
]

const sortedByProp = arr6.sort((a,b)=>a.age-b.age);

console.log(sortedByProp);


//18. Filter even numbers from an array.

const arr7 = [1,2,3,4,5,6,7,8,9];

const evenArr = arr7.filter(a=>a%2==0);

console.log(evenArr);

//19. Filter odd numbers from an array.

const oddArr = arr7.filter(a=>a%2!=0);

console.log(oddArr);


//20. Remove duplicates from an array.

let arr8 = [1,2,2,5,4,2,6,5,8,7,5,9,6,7];

let uniqArr = [...new Set(arr8)];
console.log(uniqArr);


//21. Find the maximum element in an array.

const numbers = [12, 45, 7, 89, 23];

const maxValue = Math.max(...numbers);

console.log(`Maximum value: ${maxValue}`); // Output: 89

//22. Find the minimum element in an array

const minValue = Math.min(...numbers);
console.log(`Minimum value: ${minValue}`);

//23. Find the sum of all elements in an array.

const sum1 = numbers.reduce((acc,curr)=>acc+curr,0);

console.log(sum1);

//24. Find the average of an array.

const avg = sum1/numbers.length

console.log(avg);

//25. Count occurrences of an element in an array.

/* arr = [1,3,4,1,2,5,1,3,4]
   count occur of 1 
*/

let arr9:number[] = [1,3,4,1,2,5,1,3,4];

const filter1 = arr9.filter(a=>a==1);
const countOcc = filter1.length;

console.log(countOcc);

const data: number[] = [1, 2, 3, 2, 4, 2, 5];
const target = 2;

let count = 0;

for (let i = 0; i < data.length; i++) {
  if (data[i] === target) {
    count++;
  }
}

console.log(`Element ${target} occurs ${count} times.`); // Output: Element 2 occurs 3 times.


//26. Rotate an array to the right by `k` positions.

function rotateRight(arr:number[],k:number):number[]{   //[1, 2, 3, 4, 5]; 0 1 2 3 4

 const n = arr.length; //5
 const result = new Array(n);
 k= k%n // handle overflow  2%5 =2

 for(let i =0 ;i<n;i++){
  result[(i+k)%n]=arr[i]; // (0+2)%5 = 2  1+2 % 5 = 3 3+2%5 =0
 }
  return result;
}

const original1 = [1,2,3,4,5];
console.log(rotateRight(original1,2));

//27. Rotate an array to the left by `k` positions.

function rotateLeft(arr: number[], k: number): number[] {
  const n = arr.length;
  const result = new Array(n);
  k = k % n; // Handle overflow

  for (let i = 0; i < n; i++) {
    result[i] = arr[(i + k) % n];
  }

  return result;
}

// Example usage
const original = [1, 2, 3, 4, 5];
console.log(rotateLeft(original, 2)); // Output: [3, 4, 5, 1, 2]

//28. Find the second largest element in an array.

const sortedDec1 = arr5.sort((a,b)=>b-a);
console.log(sortedDec1);
console.log("second highest is: "+sortedDec1[1]);

//29.Find the second smallest element in an array.

const sortedAsc1 = arr5.sort((a,b)=>a-b);
console.log(sortedAsc1);
console.log("second Smallest is: "+sortedAsc1[1]);

//30. Find the most frequent element in an array.

/* 
 approach
 arr = [1,23,4,5,3,23,23,1,1,3,1,1]
 here most frequent element is 1
*/ 

/*const data1 = [1, 2, 2, 3, 4, 2, 3, 3, 3];

const frequencyMap: { [key: number]: number } = {};

for (let i = 0; i < data1.length; i++) {
  const num1 = data1[i];
  if (frequencyMap[num1] === undefined) {
    frequencyMap[num1] = 1;
  } else {
    frequencyMap[num1]++;
  }
}

let maxCount = 0;
let mostFrequent = null;

for (let key in frequencyMap) {
  if (frequencyMap[key] > maxCount) {
    maxCount = frequencyMap[key];
    mostFrequent = key;
  }
}

console.log(`Most frequent element: ${mostFrequent}`); // Output: 3 */




