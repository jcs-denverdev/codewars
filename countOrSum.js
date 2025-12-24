// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

//Params
// an array of integers, which can be positive or negative
//Returns
// return an array based on parameter array, in which the first element is the COUNT of any positive numbers within it, and the second element is the SUM of any negative numbers. 0 is neither + nor -
//Examples
// [1,2,3,-1,-2] --> [3,-3]
//Pseudocode
// loop through the input parameter array
// if element > 0, count++
// if element < 0, sum+element
// return [count, sum]

function countPositivesSumNegatives(input) {

    let count = 0;
    let sum = 0;

    if (input == [] || input == null) {
        return []
    }

    for (let i = 0; i < input.length; i++) {
        if (input[i] > 0) {
            count++
        } else if (input[i] < 0) {
            sum += input[i]
        }
    }

    return [count, sum]

}

console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]))