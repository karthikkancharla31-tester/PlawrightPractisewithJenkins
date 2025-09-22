class Box<T>{
 
    value:T 

    constructor(value:T){
        this.value = value;
    }

    get():T{
       return this.value;
    }

    set(value:T):void{
        this.value=value;
    }
}

let box1 = new Box<number>(10)

console.log(box1.get());
 
let box2  = new Box<string>("KARTHIK")

console.log(box2.get());



interface Repository<T>{

    add(item:T):void
    getAll():T[]

}

class MemoryRepository<T> implements Repository<T>{

    private items:T[]=[];

    add(item:T) :void{
            this.items.push(item)
    }

    getAll():T[]{
        return this.items
    }

}


const strinRepo = new MemoryRepository<string>();

strinRepo.add("Karthik");
strinRepo.add("Kancharla");
strinRepo.add("abc@gmail.com");

console.log(strinRepo.getAll());


const numRepo = new MemoryRepository<number>();

numRepo.add(123);
numRepo.add(456);
numRepo.add(789);

console.log(numRepo.getAll());

interface User{
    id: number
    name:string
}

const objRepo = new MemoryRepository<User>()

objRepo.add({id:123,name:"karthik"})
objRepo.add({id:124,name:"Jon"})
objRepo.add({id:125,name:"Suresh"})


console.log(objRepo.getAll());

