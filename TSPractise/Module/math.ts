/*export function add(a:number,b:number){
    return a+b;
}

export function sub(a:number,b:number){
    return a-b;
}

export default add; */

/*function add(a:number,b:number){
    return a+b;
}

function sub(a:number,b:number){
    return a-b;
}

export{
    add,
    sub
};

export default add;*/


function add(a:number,b:number){
    return a+b;
}

function sub(a:number,b:number){
    return a-b;
}

export{
    add as adding,
    sub as subtracting
};

export default add;