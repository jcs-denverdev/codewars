// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.
// Return your answer as a number.

//PREP
//Params
// an array containing numbers and numbers as strings
//Returns
// sum of all values as if all nums
//Examples
// [9, 3, '7', '3'], 22;
// ['5', '0', 9, 3, 2, 1, '9', 6, 7], 42; 
// ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'], 41

//Pseudocode
// built-in Number() method to convert string to number
// reduce() method to add values within a given array
// where do i put Number()?


function sumMix(x) {

    return x.reduce((acc, curr) => acc + Number(curr), 0)

}

console.log(sumMix([9, 3, '7', '3']))