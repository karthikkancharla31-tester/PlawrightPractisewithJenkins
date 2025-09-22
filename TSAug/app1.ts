
function LoggerDecorator(logMsg: string){

    function Logger(target: Function){
    console.log("logging...");
    console.log(target);
}

return Logger;

}

function Template(template:string, elementId: string){
    return function(target: any){
         const u = new target();
    }
}




@LoggerDecorator("this is custom logger")
class User{
    name: string = "Jon";
    age: number = 30;

    constructor(){
        console.log("User class constructor created");
    }
}

const u = new User();