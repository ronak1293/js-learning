console.log(addone(5))
console.log(x);
var x=5;
function addone(num)   //we can access function before declarations in js because of hositing (before code execution memory is assigned to var and functions atored)
{
    return num+1
}
// addtwo(5)
// const addtwo=function(num){
//     return num+2
// }

console.log(addone)   //function refrence (defintion) 

function add(a)
{
    return function(b){     //function without name =>annonymous function
        return a+b
    }
}

let res=add(2)
console.log(res(5));    //in js if it returns the function ,it retains previuos valu that is a =>closure
//lexical scope
function addtwo(a){
    return {
        func1:function func1(b){
            return a+b
        },
        func2:function func2(c){
            return a+c
        }
    }
}
let res2=addtwo(7)
console.log(res2.func1(10));