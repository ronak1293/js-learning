function loggedin(username="default")
{
    if(!username){
        return `please enter a value`
    }
    return `${username} just logged in `
}

console.log(loggedin())   //no argument goes undefined(false)

function bucketPrice(num1,num2,...arr)  //rest operator bundles all and put in an array if we don't know how many arguments
{
    console.log(arr);
}

bucketPrice(11,22,43,23,13,45)

function withobj(getobj)
{
    console.log(`name is ${getobj.name} and price is ${getobj.price}`)   //if obj dont have price then it give undefined but typescript checks it before use(strict)
}

withobj({name:"ronak"})
withobj([24,24])