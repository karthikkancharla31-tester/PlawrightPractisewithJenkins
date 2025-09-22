//function type annotations

function add(a:number,b:number,c:number){
    console.log((a+b+c).toFixed);
}
add(12,34.3,45);


//return type annotations
function add1(a:number,b:number):number
{
    return a+b;

}

console.log(add1(12.3,45.3));

//void type annotations
function add2(a:number,b:number):void{
    console.log(a+b);
}
add2(23,34);