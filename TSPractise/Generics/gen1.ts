
function printVar<T>(val:T){
    console.log("data: "+val);

}

let arr = [1,2,3];
let obj = {name: "Kathik",age:26};

printVar(arr);
printVar(obj.name);
printVar(true);
printVar(1);

function typeVar<T>(val:T){
    console.log("data is "+ typeof val);

}

typeVar("abc");
typeVar(345);
typeVar(obj);


function concatenate<T,U>(first:T,second:U):T&U{
    return {...first,...second};

}

console.log(concatenate("Hello","World"));
console.log(concatenate([1,3,4,5],"World"));
console.log(concatenate("Hello",[4,5,3]));
console.log(concatenate([1,3,4,5],[6.7]));
console.log(concatenate(true,false));
console.log(concatenate({name:"Sam"},{age:26}));

