

function printDecoratorData(value:Function,context:ClassDecoratorContext){

    console.log('value: '+value);
    console.log('context: '+context);
    context.addInitializer(()=>{
        console.log('Initialized class '+context.name);
    })

}

@printDecoratorData
class Manager{

    task:string = 'Simple Task'
    project:string = 'Simple Project'

    constructor(){
        console.log('Initialize the Manager class')
    }
}