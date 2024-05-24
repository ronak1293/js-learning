

///  immediatly invoked function expressions  iffee
//  we have to immediatly execute function for protection against globel pollution(globel variabls can change)

(function hello(){    //named iffee
    console.log(`hello`)
})();     //semicolon for function execution ending

((name) => {
    console.log(`hello ${name}`)
})("ronak");
