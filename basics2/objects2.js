//const myobj=new Object()

let tinderuser={}
tinderuser.name="ronak"
tinderuser.isloggedin=true
// console.log(tinderuser['isloggedin']);
let obj2={
    name:"rewar",
    full_name:{
        anothername:{
            cv:"wr",
            df:"wc"
        }
    }
}
// console.log(obj2.full_name?.anothername);  // ?=>for if the name is not persent or persent  in api response

let obj3={
    1 :"vis"
}
let obj4={
    2:"mam"
}
// let obj5={obj3,obj4}  //wrong
// obj5={...obj3,...obj4}
obj5=Object.assign({},obj4,obj3)   //1st argument is target and all are merged into this ,if not used then all are merged in obj4
console.log(obj4);

db=[
    {1:1},{},{}
]

// console.log(db[0]['1']);

// console.log(Object.keys(tinderuser));  //arrays
// console.log(Object.values(tinderuser));
// console.log(Object.entries(tinderuser));


// console.log(tinderuser.hasOwnProperty('name'));



/// ******** object destructure used in **************


//earlier api responses as xml now as json(js object) but can be used in all languages

let course={
    name:"js in hindi",
    courseinstructer:"ronak"
}
console.log(course);
const {courseinstructer:inst}=course    //destructure
console.log({inst});

// {
//     "name":"ronak",
//     "roll":234            //json
// }
