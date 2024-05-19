let a=""
let b=Number(a)
console.log(b);
console.log(typeof NaN);
let c=null
c=undefined
b=Number(c)
console.log(b);
//null=>0 ""=>0
// true=>1
// 33abc=>NaN,undefined=>nan
a=null
b=Boolean(a)
console.log(b);
// ""=>false,"ru"=>true
// null=>false,undefined=>false
b=String(a)
console.log(b);