//26. Filter out even numbers from an array.

const num:number[] = [1,23,4,5,45,34,2,3,34,56,345,222];
const evenNum = num.filter(a=>a%2==0);
console.log(evenNum);

//27. Filter out odd numbers.

const oddNum =num.filter(a=>a%2!=0);
console.log(oddNum);

//28. Keep only numbers greater than 10.

const num2:number[] = [1,34,2,5,6,89,11,32,8,67,5,78,9];
const tenGreat = num2.filter(a=>a>10);
console.log(tenGreat);

//29. Filter strings longer than 5 characters.

let str1:string[] = ["karthik","hello","ace","world","Planet","sea","ocean"];

const getLongStr = str1.filter(a=>a.length>5);
console.log(getLongStr);

//30. Keep only objects with `age > 18`.

type Bio ={
    name:string,
    age:number
}

let arr12:Bio[] = [
    {name: "Karhtik",age:20},
    {name:"Suresh",age:10},
    {name:"Ramesh",age:56},
    {name:"Jon",age:15}
]


const getHigherAge = arr12.filter(a=>a.age>18);

console.log(getHigherAge);

//31. Filter array of strings to include only those containing `"a"`.

let str2:string[] = ["karthik","Net","World","Hello","Ocean","Sea"];

let onlyStr = str2.filter(a=>a.includes('a'));

console.log(onlyStr);