type UserID = number;

let user1:UserID = 123;

console.log(user1);

type StringOrNumber = string|number;

function logMessage (message: StringOrNumber):void{
    console.log(message);

}

logMessage("Hello");

type RGB = [number,string,boolean];

let color: RGB = [255,"red",true];
console.log(color);





