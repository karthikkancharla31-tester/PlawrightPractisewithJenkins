//76. Use `filter` + `map` to square only even numbers.

const num:number[] = [1,2,3,4,5,6,7,8,9];

const evenSquared = num.filter(a=>a%2==0).map(b=>b*b);

console.log(evenSquared);

//77. Use `filter` + `map` to uppercase words longer than 4 letters.

const str5 = ["sea","ocean","banana","mango","four"];

const upperGreaterFour = str5.filter(a=>a.length>4).map(b=>b.toUpperCase());

console.log(upperGreaterFour);

