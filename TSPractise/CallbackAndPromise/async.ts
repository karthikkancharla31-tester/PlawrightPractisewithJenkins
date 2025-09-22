
//81. Write an async function that returns "Hello Async".


async function getMessage(): Promise<string> {
  return "Hello Async";
}
async function main(){
    const msg = await getMessage();
    console.log(msg);
}

main();


//82. Implement a function that waits 2 seconds before returning a message.

function delay(ms:number):Promise<void>{

    return new Promise(resolve => setTimeout(resolve,ms));

}


async function getDelayedMessage():Promise<string>{
   await delay(2000);
   return "Hello after 2 sec"
}

(async ()=>{
   const msg = await getDelayedMessage();
   console.log(msg);
})();


//83. Write an async function that fetches user data and logs it.

async function fetchUserData():Promise<void>{

    try{

        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

        if(!response.ok){
            throw new Error (`HTTP error! Status: ${response.status}`);
        }

        const user = await response.json();
        console.log("USer Data: ",user);

    }catch(error){
        console.error("Error fetching user data:", error);

    }

}

fetchUserData();


//84. Convert a Promise-based function into async/await.

function getNumber():Promise<number>{

    return new Promise(
        (resolve,reject) => {
            setTimeout(()=>{
             const num = Math.floor(Math.random()*10);
              if(num>2){
                resolve(num);
               }else{
                reject("num is too small");
               }
            },1000);
        }
    );
}

async function fetchNumber():Promise<void>{

    try{
        const result = await getNumber();
        console.log("Resolved: ",result);
    }catch(error){
        console.log("Rejected: ",error);
    }

}

fetchNumber();


//86. Implement sequential execution of async tasks using async/await.


function delayTask(taskName: string,ms:number):Promise<string>{

    return new Promise((resolve)=>{
        setTimeout(()=>{
           resolve(`✅ ${taskName} completed after ${ms / 1000} seconds`);
        },ms);
    });
}

async function runSeqTasks():Promise<void>{

console.log("🚀 Starting tasks...");

const task1 = await delayTask("Task 1", 1000);
  console.log(task1);

const task2 = await delayTask("Task 2", 2000);
  console.log(task2);

const task3 = await delayTask("Task 3", 5000);
  console.log(task3);

const task4 = await delayTask("Task 4", 200);
  console.log(task4);

const task5 = await delayTask("Task 5", 3000);
  console.log(task5);
}


runSeqTasks();

//using promise all

async function runParallelTasks(): Promise<void> {
  console.log("🚀 Starting tasks in parallel...");

  const [task1, task2, task3,task4,task5] = await Promise.all([
    delayTask("Task 1 parallel", 1000),
    delayTask("Task 2 parallel", 2000),
    delayTask("Task 3 parallel", 5000),
    delayTask("Task 4 parallel", 500),
    delayTask("Task 5 parallel", 3000),
  ]);

  console.log(task1);
  console.log(task2);
  console.log(task3);
  console.log(task4);
  console.log(task5);

  console.log("🎉 All tasks completed in parallel!");
}

runParallelTasks();

//88. Write a function that retries a failing async function.