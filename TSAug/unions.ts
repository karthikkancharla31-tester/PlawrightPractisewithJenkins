let val: number|string|boolean;
val = "karthik";
console.log(val);

val = 123;
console.log(val);

function disp(name: string|string[]) { 
   if(typeof name == "string") { 
      console.log(name) 
   } else { 
      var i; 
      
      for(i = 0;i<name.length;i++) { 
         console.log(name[i])
      } 
   } 
} 
disp("mark") 
console.log("Printing names array....") 
disp(["Mark","Tom","Mary","John"])


var arr: number[]|string[];

var i:number;
arr = [1,2,4,5];

for(i=0; i<arr.length;i++){
    console.log(arr[i]);
}

arr = ["Cherry","tomato","Potato"];

for(i=0;i<arr.length;i++){
    console.log(arr[i]);
}
