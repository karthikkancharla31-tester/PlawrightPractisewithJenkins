
//41. Write a function that accepts a callback and calls it.


function executeCallback(callback:()=>void):void{

    console.log("Before calling callback function")
    callback();
    console.log("After calling callback function")

}

executeCallback(()=>console.log("Hello from the callback"));


//42. Create a function that takes a number and a callback, returning the number squared via callback.

function squaredNumber(a:number,callback:(result:number)=>void):void{

const squared = a*a;

callback(squared);

}

squaredNumber(10,(result)=>console.log("square value: "+result));

//43. Implement a callback function for string manipulation (uppercase conversion).

function upperFun(a:string,callback:(result:string)=>void):void{
    const upper = a.toUpperCase()
callback(upper);

}

upperFun("karthik",(result)=>console.log("upper case string is "+result));


//44. Write a function that simulates fetching user data and passes it to a callback.

interface User{
    id:number
    name:string
    email:string
}

function fetchUserData(callback:(user:User)=>void):void{

    console.log("fetching user data.....");

    setTimeout(()=>{
        const user:User ={
            id:1,
            name:"Karthik",
            email:"karthik@sample.com"
        };
        callback(user);
    },2000);

}


fetchUserData((user)=>console.log("user fetched date is ",user));