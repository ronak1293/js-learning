const gamenum=100
console.log(100);
//number obj have additionL properties
let num2=new Number(100.398)
console.log(num2.toString());
console.log(num2.toFixed(1).length); //string
console.log(num2.toPrecision(5));
num2=1000000
console.log(num2.toLocaleString('en-In'));
console.log(Number.MAX_VALUE);

//math

console.log(Math.abs(-4)); //ceil floor round min max
console.log(Math.floor(Math.random()*10)); //0-1 ,* by 10 so 0-10  +1 so 1-10
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min))+min);