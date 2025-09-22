/*import xyz, {add,sub} from "./math"

console.log(add(2,3));
console.log(sub(50,27));
console.log(xyz(2,3)); //xyz is default of add */

/*import xyz, {adding,subtracting} from "./math"

console.log(adding(2,3));
console.log(subtracting(50,27));
console.log(xyz(2,3)); //xyz is default of add */

/*import xyz, {adding as add,subtracting as sub} from "./math"

console.log(add(2,3));
console.log(sub(50,27));
console.log(xyz(2,3)); //xyz is default of add */

/*import * as ourMath from "./math"

console.log(ourMath.adding(2,3));
console.log(ourMath.subtracting(50,27));
//console.log(math.xyz(2,3)); //xyz is default of add  */

/*import * as ourMath from "./math"
import * as theirMath from "./add"

console.log(ourMath.adding(2,3));
console.log(ourMath.subtracting(50,27));
console.log(theirMath.add(2,3)); */

/*import * as ourMath from "./math"
import * as theirMath from "./add"
//import * as legacy from "./legacy"
import "./legacy"

console.log(ourMath.adding(2,3));
console.log(ourMath.subtracting(50,27));
console.log(theirMath.add(2,3)); */

import "./legacy"

declare namespace global{
  var MY_FRAMEWORK_NUMBER:number;
}

global.MY_FRAMEWORK_NUMBER = 100;
console.log(global.MY_FRAMEWORK_NUMBER);




