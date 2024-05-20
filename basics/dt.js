//primitive(not refrenced ,copy off a element )=>number,bigint,string,boolean,symbol(for making unique),null(type of returns object)
//non primitive(can be refrenced) =>object,array,function(returns function obj)
//js is dynamically typed language(type of variable assigned at run time)
let b=Symbol(4)
let c=Symbol(4)
console.log(b===c)

b=34256n
console.log(typeof(b));

b=[2,4,"3",null]
console.log(b);

let myobj={
    name:"ronak",
    roll:123
}
console.log(myobj);

const f=function(){
    console.log("4");
}
f();

//stack(primitive uses stack,every time new copy)
//heap(non primitive ,refrence for coping);

let user1={
    name:"ronak"
}
let user2=user1
user2.name="vish"
console.table([user1.name,user2.name]);

