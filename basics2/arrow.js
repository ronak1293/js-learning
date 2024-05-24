//this=>current context

console.log(this);   //will give window in browser
let user={
    name:"ronak",
    greet: function (){
        console.log(`${this.name} is sad`);
        console.log(this);
    }
}
user.greet()

function chai(){
    console.log(this);
}
chai()



let add=(a,b) =>{
    let name="ron"
    console.log(a+b);
    console.log(this.name);  //arrow functions inherit current context from parent
}
add(4,5)
let retobj=() => ({name:"ronak"})    //used in react if one line return
console.log(retobj())

