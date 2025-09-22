//symbol

const UNIQUE_KEY = Symbol();

let obj1 ={
    [UNIQUE_KEY] :  "abcd"
}; 

console.log(obj1[UNIQUE_KEY]);

//null

let empty:null = null;

console.log(empty);

//undefined

let undef:undefined;

console.log(undef);

//void

function greet(): void{
    console.log("void");
}
greet();

//array

let arr1:number[] = [1,2,3,4,5];
let str1:string[]= ["a","b","c"];

console.log(arr1);
console.log(str1);

//tuple

let tup:[string,number,boolean] = ["karthik",11,false];

console.log(tup);

//enum

/*enum Color {Red, Green, Blue}
let c: Color = Color.Green;
console.log(c); // Output: 1 */

enum Direction {
  North, // 0
  East,  // 1
  South, // 2
  West   // 3
}

let dir: Direction = Direction.South;
console.log(dir); // Output: 2


