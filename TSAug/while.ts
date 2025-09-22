
//factorial in a given range

let num:number =5;
let factor:number=1;


while(num>=1){
    factor=factor*num;
    num--;
}
console.log(factor);

//while with break

let x:number =0;
while(x<5){
   
   if( x == 3)
    break;
console.log(x);
 x++
}

let i = 0;

while (i < 10) {
  i++;

  if (i % 2 === 0) {
    console.log(`even number: ${i}`);
    continue; // Skip even numbers
  }

  console.log(`Odd number: ${i}`);
}
