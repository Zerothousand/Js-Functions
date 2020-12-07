console.log("hey hi heya ho")

console.log("%c 1. SUM SUM SUM!!! add(2, 4)", 'background: #222; color: #bada55')
function add(a, b) {
    return a +b
}
console.log( add(2, 4) )

console.log("%c 2. Multiplication!!  multiply(2,9) ", 'background: #222; color: #bada55')
function multiply(a, b) {
    index = 0;
    result = 0;

    while (index < b) {
       result = add(a, result)
        // console.log(result)
        index++
    }
    return result
}
console.log(multiply(2,9))

console.log("%c 3. Exponentiation!  exponent(2, 8)", 'background: #222; color: #bada55')
function exponent(x, n) {
    index = 0;
    result = 1;
    while (index < n) {
        result = multiply(x, result)
        // console.log(result)
        index++
    }
    return result
}
console.log(exponent(2, 8))

console.log("%c 4. Factorial!!", 'background: #222; color: #bada55')
function factorial(n) {
    index = 1;
    result = 1;
    while (index <= n) {
        result = multiply(index, result)
        // console.log(result)
        index++
    }
    return result;
}

console.log(factorial(5))