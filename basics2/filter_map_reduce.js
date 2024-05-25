let myarr=[1,2,3,4,5,6,7,8,9]
let newarr=myarr.forEach((item)=>{  //foreach dont return anything
    return item;
})
console.log(newarr);
myarr=[
    {
        name:"ronak",
        age:"19"
    },
    {
    name:"vishesh",
    age:"10"
    }
]
newarr=myarr.filter((item)=> (item))
newarr=myarr.filter((item)=> (item.age>11))
console.log(newarr);

myarr=[1,2,3,4,5,6,7,8,9]
newarr=myarr.map((item) => item+10)  //map returns all items but filter returns only true values or that satisfy a condition
console.log(newarr);

//chaining
//last output is input
newarr=myarr.map((item)=> item*10).map((item)=> item+1)
            .filter((item)=> item>=40)
console.log(newarr);


//***************reduce ***********/

//for finding sum of cart in js

const sum=myarr.reduce((acc,currval)=>{
    return acc+currval                  //acc updates to acc+currval every iteration and initially it is zero
},0)
console.log(sum);