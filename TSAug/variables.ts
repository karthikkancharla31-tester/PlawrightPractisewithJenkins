var name1:string = "Karthik";
var score1:number = 35;
var score2:number =45.67;
var sum = score1 + score2;

console.log("Name: " + name1);
console.log("Score1: " + score1);
console.log("Score2: " + score2);
console.log("Sum: " + sum);


// type Assertion

/*var str1:string = "123";
var str2:number = number as str1;
console.log(typeof(str2));*/

/*var str = '1' 
var str3:number = <number> <any> str   //str is now of type number 
console.log(typeof(str3)) */

/*var str:any = '123';
var str4:number = str as number;
console.log(typeof(str4)); */

var num:number =12; //global variable

class Numbers{
    num:number =13; // class variable
    static num:number = 14; // static variable

    storeNum(num:number):void{
         //local variable
        console.log(num);
    }

}

console.log("Global_Num: "+num);

console.log("static variable: "+Numbers.num);

var obj = new Numbers();
console.log("Class variable: "+obj.num);
console.log("local variable: "+obj.storeNum(15));