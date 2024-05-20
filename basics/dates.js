// let mydate=new Date()
// console.log(mydate.toLocaleString('default',{timeZone:'Asia/Kolkata'})); //1st is internationalization ,second object of your properties
// console.log(mydate.getMonth()); //in js months start from 0

// let newdate=new Date('2023-03-12')
// console.log(newdate.toDateString());
let nd1=new Date(2023,0,5,3,1)
console.log(nd1.toDateString());

let timestamp=Date.now()
console.log(Math.floor(timestamp/1000));   //in sec
console.log(nd1.getTime()); 