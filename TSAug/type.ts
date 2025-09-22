type Direction = 'north'|'south'|'east'|'west';

function move(direction:Direction){
 console.log(`Moving ${direction}`);
}

move('east')

type SmallPrimes = 2|3|5|7;

let prime: SmallPrimes;

prime = 5;

console.log(prime);

type MixedLiterls =12|'karthik'|true;

let val: MixedLiterls;
val = 'karthik';
console.log(val);   
val =12;
console.log(val);