    //in Type Guard

    let obj1 : {id:number;name:string} = {id:123,name:"karthik"};
    let obj2 : {name:string;roll:number} = {name:"Joe",roll:908};
    let obj3 : {id:number;marks:{ english:number;math:number;}} = {
        id:345,
        marks:{
            english:87,
            math:90
        }
    }

    console.log('name' in obj1);
    console.log('id' in obj2);
    console.log('english' in obj3.marks);

    //instance of

    class Parent{
        id: number
        constructor(id:number){
            this.id = id;
        }
    }

    class Child extends Parent{
        name: string;

        constructor(id:number,name:string){
            super(id);
            this.name=name;
        }
    }

    let child = new Child(123,"karthik");
    console.log("---------");
    console.log(child instanceof Child);
    console.log(child instanceof Parent);
    console.log(child.id);