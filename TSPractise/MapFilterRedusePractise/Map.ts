//1. Use `map` to square every number in an array.

const num:number[] = [1,2,3,4,5];
const squared =num.map(a=>a*a);
console.log(squared)


//2. Convert an array of strings to uppercase using `map`

const arr:string[] = ["apple","banana","mango","berry"];
const uppArr = arr.map(a=>a.toUpperCase());
console.log(uppArr);

//3. Add `10` to each number in an array using `map`.

const arr1:number[] = [1,2,3,4,5];
const addTen =arr1.map(a=>a+10);
console.log(addTen);

//4. Extract only the names from an array of objects `{id, name}`.

type People ={
  name:string,
  age:number,
}

const arr9:People[]=[
  {name:"karthik",age:24},
  {name:"suresh",age:56},
  {name:"ramesh",age:12}
]
 
const name1 = arr9.map(a=>a.name);

console.log(name1);

//5. Convert an array of numbers to strings.

let arr10:number[] = [1,2,3,4,5];
const arr10ToStr = arr10.map(a=>a.toString());

console.log(arr10ToStr);

//6. Use `map` to double each element in an array.
let arr11:number[] = [12,23,45,21,45];

const doub = arr11.map(a=>a*2);

console.log(doub);

//7. Convert temperatures from Celsius to Fahrenheit.