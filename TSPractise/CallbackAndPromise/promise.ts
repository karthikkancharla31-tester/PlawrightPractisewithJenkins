//61. Write a function that returns a resolved Promise with "Hello World".

function sayHello():Promise<string>{
  return Promise.resolve("Hello World!")
}

sayHello().then((message)=>console.log(message));


//62. Create a function that returns a rejected Promise with an error message.

function throwError():Promise<string>{

    return Promise.reject("Something went wrong")

}

throwError()
     .then((message)=>console.log("success"))
     .catch((message)=>console.log("Failure: "+message));

//63. Implement a function that returns a Promise resolving after 2 seconds.

function delay(ms:number):Promise<void>{

  return new Promise(resolve => setTimeout(resolve,ms));
}

delay(2000)
   .then(()=>console.log("After 2 secs"));