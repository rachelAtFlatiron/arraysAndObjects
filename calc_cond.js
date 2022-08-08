/*
    write a calculator function using conditionals
    op = +, -, *, /
    calc(op, a, b)
    calc(+, 3, 5) => 8
    calc(-, 10, 5) => 5
    calc(*, 2, 8) => 16
    calc(/, 10, 2) => 5
    calc(&, 5, 5) => Not a valid operation
*/
function calc(op, a, b) {
    //if else statements
    if(op === '+') {
        return a + b;
    } else if(op === '-') {
        return a - b;
    } else if(op === '*') {
        return a * b;
    } else if (op === '/') {
        return a / b;
    } else {
        return 'Not a valid operation'
    }
}
console.log(calc('+', 5, 5));


