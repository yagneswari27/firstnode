var a=10;
var b=20;
var c=a+b;
console.log(" result:"+c);

let greeting=(name)=>{
console.log(`Hello ${name}`);
};
greeting("yagni")
greeting("omkar")
//const add2=require('./calculate');
//console.log(add2(5,6));
const calculator=require('./calculate');
const {add1,sub}=calculator;
console.log(add1(2,3));
console.log(sub(9,2));