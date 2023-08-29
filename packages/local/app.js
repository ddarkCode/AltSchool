const {add, sub, mul} = require('./mathUtil')



function multiMathExp(func1, func2, func3) {
    return func1 + func2 + func3;
}

console.log(multiMathExp(add(5,5), sub(10,20), mul(2, 2)));