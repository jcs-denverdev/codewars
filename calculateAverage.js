// Write a function which calculates the average of the numbers in a given array.

// Note: Empty arrays should return 0.

//Params
// you are given an array of numbers
//Returns
// return the average of the numbers within given array
//Examples
// [2, 5, 8] => (2+5+8)/3 => 5
//Pseudocode
// sum each number then divide by count

function findAverage (array) {

    return array.length > 0 ? array.reduce((acc, current) => acc + current, 0) / array.length : 0;

}

console.log(findAverage([]))