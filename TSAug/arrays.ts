let arr1:string[] = ["apple","banana","mango"];

console.log(arr1);
console.log(arr1[2]);

let arr2:number[] = [12,54,56,78,56];
console.log(arr2);
console.log(arr2[3]);

//multiples of 2

var arr3:number[] = new Array(4);
for(var i=0;i<arr3.length;i++){
    arr3[i]=i*2;
    console.log(arr3[i]);
}
console.log(arr3);

// array of strings

var arr4:string[] = new Array("tom","jerry","mickey");
    for (var i=0;i<arr4.length;i++){
        console.log(arr4[i]);
    }

//array destructuring
let fruits:string[] = ["apple","banana","mango"];

let [x,y,z]=fruits;
console.log(x);
console.log(y);
console.log(z); 

//array forin loop

let colors:string[] =["red","green","blue"];
let j:any;
for(j in colors){
    console.log(colors[j]);
}


var arr5:number[] = [1,2,3,4,5];
var k:any;
for(k in arr5){
    arr5[k]=k*3;
    console.log(arr5[k]);
}       
console.log(arr5);

let arr6: Array<any> = ["apple",5,"banana",10,"mango",15];  
console.log(arr6);

let arr8: (string|number)[] = ["apple",5,"banana",10,"mango",15];  
console.log(arr8);

//spread operator

let arr9:number[] =[1,2,3];
let coparry= [...arr9];
console.log(coparry);

let arr10:number[] =[...arr9,4,5,6];
console.log(arr10);

let cars:string[] =["BMW","Audi","Benz"];

for(let i in cars){
    console.log(cars[i]);

}

//mixed array
let mixedArray: (string | number | boolean)[] = [];

mixedArray.push("Hello");
mixedArray.push(42);
mixedArray.push(true);
mixedArray.push(53);

console.log(mixedArray);
