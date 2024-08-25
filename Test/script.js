'use strict';

// > , <
// >=, <=
// == 
// === 
// !=

console.log( 1 > 2 );//false
console.log( 0 < 1 );//true
console.log(1 > 1);//false
console.log( 1 >= 1);//true
console.log( 2 != 1);// true

let result = 1 == '1';
console.log(result)//true

console.log('A' > 'Z')//false
console.log('a' > 'A')// true

console.log('plan' > 'plane')//false

console.log(0 == false)//true
console.log(1 == true)//true


console.log('2' == 1)//true


let a = 0;
console.log('a: ',Boolean(a));

let b = '0'
console.log('b: ',Boolean(b));

console.log(a == b);//true
console.log("" == false)//true

console.log(0 === false)//false
console.log("1" == 1)//true
console.log("1" === 1)//false


//null undefined

let x = undefined;
console.log(x);

let y = false;
console.log(y)
console.log(null == undefined);
console.log(null === undefined);

//undefined  - значение не определено 
// null - отсутсвие значение 

console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0);//true

//>
//>=

console.log(1 != 1);//false
console.log(1 != "1"); //false
console.log(2 != 3)//true

console.log(3%2 == 1)//true
