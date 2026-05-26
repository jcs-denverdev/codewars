// Given an array of integers, return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

//Params
// an array of integers, which can be positive or negative

//Returns
// return an array based on parameter array, in which the first element is the COUNT of any positive numbers within it, and the second element is the SUM of any negative numbers. 0 is neither + nor -

//Examples
    // [1,2,3,-1,-2] --> [3,-3]
    // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15] --> [10, -65]

//Pseudocode
// loop through the input parameter array
// if element > 0, count++
// if element < 0, sum+element
// return [count, sum]

function countPositivesSumNegatives(input) {

    // declare count and sum variables and set to 0
    let count = 0;
    let sum = 0;

    // use a for loop to loop through array (input)
    for (let n = 0; n < input.length; n++) {
    // If the input is an empty array or is null, return an empty array.
        if (!input) {
            return []
        }
    // need a conditional to either increment count or sum based on positive or negative element value
        if (input[n] > 0) {
            count++;
        } else if (input[n] < 0) {
            sum+=input[n];
        } else if (input[n] === 0) {
            count;
            sum;
        }
    }
    return [count, sum]

}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))
console.log(countPositivesSumNegatives([]))