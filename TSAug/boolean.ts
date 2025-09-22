//boolean

let var1:boolean =true;
console.log(var1);

const var2 = Boolean(false);
const var3 = Boolean(0);
const var4 = Boolean("");
const var5 = Boolean(null);
const var6 = Boolean(undefined);
const var7 = new Boolean(NaN);

console.log(var2,var3,var4,var5,var6,var7);

const myBoolean2 = Boolean("");
console.log(myBoolean2,var3);


//const var8 = !!("");

//console.log(var8);

let x:boolean = true;
let y:boolean =false;
console.log(x&&y);
console.log(x||y);
console.log(!x);
console.log(!y);    

let age:number =25;
let isAdult:boolean = age>=18;
if(isAdult){
    console.log("is an adult");
}else{
    console.log("is not an adult");
}

let age1:number =25;
let isAdult1:string = age1>=18 ? 'is an adult' : 'is not an adult';
console.log(isAdult1);

