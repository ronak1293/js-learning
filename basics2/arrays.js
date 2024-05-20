let a=['r',23,4.5]
console.log(a);
const myarr=new Array(1,2,34,2)
console.log(myarr.includes(2));
console.log(myarr.indexOf(2));

//difference between slice and splice=> it slices start to end-1 and don't change original array
//splice slices array from start to end and also changes the original array
// console.log(myarr.slice(1,3));
// console.log(myarr);
// console.log(myarr.splice(1,3));
// console.log(myarr);

console.log(myarr.push(8));
myarr.push(9)
myarr.pop()

myarr.unshift(0) //insert value at begining (has to shift all)
myarr.shift()  //delete from first
let newarr=myarr.join()
console.log(typeof newarr); //converts array to string
console.log(myarr);