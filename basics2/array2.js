let myarr1=["ronak","rewar"]
let myarr2=["vishesh","rewar"]
// myarr1.push(myarr2) //pushes in original array not merge two arrays
// console.log(myarr1);
// let newarr=myarr1.concat(myarr2)  //it also pushes but returns new array
// console.log(newarr);

//for merging use spread operator(glass broken) ...

newarr=[...myarr1,...myarr2]
console.log(newarr);

let score1=100
let score2=200
let score3=300
console.log(Array.from("ronak")); //during web scraping use this to convert into array
console.log(Array.from({name:"ronak"}));  //has to specify to whoam to convert (key or value)
console.log(Array.of(score1,score2,score3));
console.log(Array.isArray("r"));