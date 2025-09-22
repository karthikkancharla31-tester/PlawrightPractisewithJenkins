//factorial in a given range

let num:number =5;
let factor:number =1;
let i:number;

for(i=num;i>=1;i--){
    factor=factor*i;
}

console.log(`Factorial of ${num} is ${factor}`);

// for with break

let x:number =0;

for(x;x<5;x++){
    if (x==4)
     break;
    console.log(x);
}

//for with continue

let y:number =0;
for(y;y<10;y++){
    if(y%2==0)
        continue;
    console.log(y);
}

// for...in loop

let j:any;
let k:any = "abc";

for(j in k){
    console.log(k[j]);
}

let arr:number[] = [10,20,30,40,50];
for(var d in arr){
  console.log(arr[d]);
}

let tup:[number,string,boolean] = [1,"karthik",true];
for (var t in tup){
    console.log(tup[t]);
}

//for of loop

let arr1:number[] = [12,34,23,45];

for (var l of arr1){
    console.log(l);
}
