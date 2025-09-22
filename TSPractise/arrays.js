var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//1. Create an array and print all its elements.
var arr = [23, 56, 43, 5612, 34];
for (var i = 0; i < arr.length; i++) {
    console.log("array elements are: " + arr[i]);
}
//2. Find the length of an array.
console.log("Length of the array is: " + arr.length);
//3. Add an element to the end of an array.
arr.push(57);
console.log("After adding an element to the end: " + arr);
//4. Add an element to the beginning of an array.
arr.unshift(1);
console.log("After adding an element to the beginning: " + arr);
//5. Remove the last element from an array.
arr.pop();
console.log("After removing the last element: " + arr);
//6. Remove the first element from an array.
arr.shift();
console.log("After removing the first element: " + arr);
//7. Find an element in an array.
/*  approach:
   init finding element
   get the index of the elements
   check if index if -1 or not
   if -1 element not found
   else element found
*/
var element = 56;
console.log(arr);
var ind = arr.indexOf(element);
if (ind == -1) {
    console.log("Element not found");
}
else {
    console.log("Element found at index: " + ind);
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
var rev = [];
for (var i = arr.length - 1; i >= 0; i--) {
    var val = arr[i];
    if (typeof val === "number") {
        rev.push(val);
    }
}
console.log("original array: " + arr);
console.log("reversed array: " + rev);
var arr1 = ["apple", "banana", "mango", "berry"];
console.log(arr1.includes("apple"));
//11. Convert an array to a string.
var arr2 = [1, 2, 3, 4, 5];
var arrTostr = arr2.join('');
console.log(arrTostr);
//12. Convert a string to an array.
var str = "karthik";
var stringToarr = str.split('');
console.log(stringToarr);
//13. Merge two arrays.
var arr3 = [1, 2, 3, 4, 5];
var arr4 = [6, 7, 8, 9];
var arr3Mergarr4 = __spreadArray(__spreadArray([], arr3, true), arr4, true);
console.log(arr3Mergarr4);
//14. Copy an array.
var arrCopy = __spreadArray([], arr4, true);
console.log(arrCopy);
//15. Sort an array in ascending order.
var arr5 = [23, 43, 2, 123, 23, 54, -90, 3.4, 234];
var sortedAsc = arr5.sort(function (a, b) { return a - b; });
console.log(sortedAsc);
