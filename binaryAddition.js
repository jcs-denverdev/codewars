// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.


//Params
// two numbers are given to the function as parameters a and b
//Returns
// sum of parameter numbers represented in binary
// Examples:(Input1, Input2 --> Output (explanation)))
    // 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
    // 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
//Pseudocode
// start by finding the sum a+b
// 

function addBinary (a,b) {

    // return parseInt(a.join(''), 2)
    let sum = a + b

    return sum.toString(2)

}

console.log(addBinary(2,1))