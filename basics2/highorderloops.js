//*************for of********** 

//[{},{}]

const arr=[3,74,21,4]

for (const num of arr) {
    console.log(num);
}
const greet="hello worls"
for(const c of greet)
    {
        console.log(c);
    }

//map => key value pairs store ,remembers the order
//unique key value pair

const map=new Map()
map.set('In',"india")
map.set('us',"unites states of ame")
map.set('In',"india")
map.set('us',"unites states of ame")

// console.log(map);

// for(const ele of map)
//     {
//         // console.log(ele);   // outputs array so can de structure
//     }

for (const [key,value] of map)
    {
        console.log(key,":-",value);
    }
//on objects
const myobj={
    'game1':"nfs",
    'game2':"pubg"
}

// for(const ele of myobj)
//     {
//         // console.log(ele);    //objects are not iterable(enumerable properties by for in accessble)
//     }

// for(const key in map)
//     {
//         console.log(key);   //for in doesnt works in maps becaus for of loops iterate over elements(key value pairs) but for in loops iterats over 
//         //enumberable properties as key and value but map stores key value internally as it is not enumerable(property)
//     }

for(const keys in myobj)
    {
        console.log(myobj[keys]);
    }

    const code=["c","cpp","java"]

    
    // code.forEach(function (ele){
    //     console.log(ele);   //higher order or callback function
    // })
    function printm(ele){
        console.log(ele);
    }
    code.forEach(printm)

    code.forEach((item,index,array)=>{
        console.log(item,index,array);     //inbuilt for array
    })
    const myar=[
        {
            name:"roanl"
        },
        {
            name:"rewar"
        }
    ]
    myar.forEach((val)=>{
        console.log(val.name);
    })
   