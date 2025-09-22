
function merge<T,U>(obj1:T,obj2:U){
   return {...obj1,...obj2}
}

const mergeObj = merge({name:"Sam"},{age:26});

console.log(mergeObj);


function merge1<T extends object, U extends object>(obj1:T,obj2:U){
  return {...obj1,...obj2}
}

const mergeObj1 = merge1({name:"Sam"},{age:26});

console.log(mergeObj1);

interface Employee{
    empCode: number
    empDept: string
}

interface Person{
    name: string
    age:number
    email:string
}

function merged1<T extends Person, U extends Employee>(obj1:T,obj2:U){
    return {...obj1,...obj2}

}

const person: Person = { name: 'John', age: 30, email: 'abc@gmail.com' };
const employee: Employee = { empCode: 1001, empDept: 'IT' };

console.log(merged1(person,employee));


function getValue<T extends object, U extends keyof T>(obj:T,key:U){
    return obj[key]
}

const obj = {
    name: 'Sam',
    age: 34
};

const name1 = getValue(obj,'name');

console.group(name1)