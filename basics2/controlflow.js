if(false==0) console.log("ronak"),console.log("rewar")    //boolean are considered as int, we can write multiple lines by comma (without{}) dont do this

// truthy values  
// [],{},function(){},' '

// falsy 

// 0,null undefined,nan,"",0n,-0,false


name ="ronak"
switch(name){
case "ronak":
    console.log("ronak");
    break;                      ///switch runs all below code execpt defult if condition true,so use break
                                    //fast
case "rewar":
    console.log("rewar");
    break;
default:
    console.log("deafult");
}

//null coelsecny operator (??) used for not assign null and undefined values returned

const a=null??undefined??10
console.log(a);

//ternary operator(?:) is a simple if else consined in one line

console.log(a>9?"greater then 9":"less than 9");


//check empty obj
let my={}
if(Object.keys(my).length==0) console.log("empty");

//we can access out of nound index in js as c/c++ (problem)=>gives undefined value
