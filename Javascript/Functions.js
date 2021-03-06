//no type declaration for params in js

//classic function
function pw1(x) {
    x * x
}

//anonymous function saved to constant
const pw2 = function(x){
    x * x
}

//arrow / lambda function saved into constant
const pw3 = (x) => x * x

//multi-statement arrow function into constant
const pw4 = (x) => {
    temp = x * x
    return temp
}

let a = 4;
let b = pw1(a) + pw2(a) + pw3(a) + pw4(a)

//functions can also be saved into variables with "let"
//good practice: use "const" when possible
//helps avoid function being overridden