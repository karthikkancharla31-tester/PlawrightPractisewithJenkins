//51. Sum all numbers in an array using `reduce`.

const num:number[] = [12,435,543,22,34,32,456,32,134];

const sum = num.reduce((acc,cur)=>{
    return acc+cur;
},0);

console.log(sum);

//52. Find the maximum number using `reduce`.

const num1:number[] = [12,45,32,14,-345,333,222,45,67,8,9,445,5,10];

const max1 = num1.reduce((max,cur)=>{
    return cur>max?cur:max;
});

console.log(max1);

//53. Find the minimum number using `reduce`.

const min1 = num1.reduce((min,cur)=>{
    return cur<min?cur:min;
});

console.log(min1);

//54. Concatenate an array of strings using `reduce`.

let str3:string[] = ["H","E","L","L","O"];

const conStr = str3.reduce((acc,curr)=>{
    return acc+curr;
});

console.log(conStr);

//55. Flatten a nested array using `reduce`.

let arr13 = [[1,2],[3,4],[4,5]];

const conArr = arr13.reduce((acc,curr)=>acc.concat(curr),[]);

console.log(conArr);

//56. Count total number of characters in an array of strings.

let str4 = ["Karthik","is","A","Good","Boy"];

const countStr = str4.reduce((acc,curr)=>acc+curr.length,0);

console.log(countStr);



