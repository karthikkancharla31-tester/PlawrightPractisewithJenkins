interface IGeneric<T>{
    value1:T
    value2:T
}

let obj:IGeneric<number> = {
        value1:10,
        value2:20
}

console.log(obj.value1);
console.log(obj.value2);

let objStr:IGeneric<string> = {
        value1:"Sam",
        value2:"Michal"
}

console.log(objStr.value1);
console.log(objStr.value2);

interface IGeneric1<T,U>{
   value1:T
   value2:U
}

let obj2:IGeneric1<string,number>={
      value1:"Karthik",
      value2:27
}

console.log(obj2.value1);


interface IGeneric2<T,U>{
    value1: T
    merge:(a:U,b:U) => U;

}

let obj3:IGeneric2<string,number> = {

    value1: "Fun",
    merge:(a,b) => a+b

}

console.log(obj3.value1);
console.log(obj3.merge(2,3));


interface func_interface<T,U>{
    (input:T):U;

}

const strTolen:func_interface<string,number> = (input) =>{
      return input.length;
}


const result = strTolen("Hello World!");
console.log(result);

const  numToStr:func_interface<number,string> = (input) =>{
    return `Number: ${input}`
}

const output = numToStr(123);

console.log(output);