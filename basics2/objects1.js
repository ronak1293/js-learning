//js objests are first class objects=>functions can be assigned to a variable,whole can be given as argument
//in c we can create this property using function pointers

//objs can be made by two ways:-
//constructrs->singlton(one instance)
//object literals=>multiple instances
//symbol is used in js objects for unique key value that can't be overwrite and these keys are hidden

let mysym=Symbol("ron")
let myobj={
    name: "ronak",
    roll: "102",
    email: "2022ee@mni.in"     ,
    "last login" :      "jeoige" ,
    [mysym]:"value"       //without bracket it is as string and with bracket it acts as symbol           
     //keys always string
}
console.log(myobj.roll);  //in this we can't access last login because of space so we use bracket notation=>also use this for dynamic key value a='last login'   accesss as [a] 
console.log(myobj['last login']);  

console.log(myobj[mysym]);  //square for symbol

// Object.freeze(myobj)  //can't update myobj values
myobj.name="ewfew"
console.log(myobj);

myobj.greet=function(){
    console.log(`hi welcome ${this.name}`)
}
console.log(myobj.greet);
console.log(myobj.greet()); //undefined =>no return value