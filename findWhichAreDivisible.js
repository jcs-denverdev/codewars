// Description:
// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.


//Params
// a numbers param and a divisor param
//Returns
// return all numbers which are divisible by divisor
//Examples
    // [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]
//Pseudocode
// loop through numbers array
// if (element % divisor == 0) {
//      return a new array with element(s) }

function divisibleBy(numbers, divisor){

    let areDivisible = [];

    for (let i = 0; i <= numbers.length; i++) {
        if (numbers[i] % divisor == 0) {
            areDivisible.push(numbers[i])
        }
    }
    return areDivisible

}

console.log(divisibleBy([1, 2, 3, 4, 5, 6], 2))