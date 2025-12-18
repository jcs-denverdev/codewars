// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 
// 1^2 + 2^2 + 2^2 = 9

//Params: an array of integers
//Returns: should square each element in the array, then add those altogether
//Examples
    // [2, 4, 5] -> [2**2 + 4**2 + 5**2] -> [4, 16, 25] -> 45
//Pseudocode
// .map() method should be good for squaring each number in the array
// .reduce adds nums and returns the sum

function squareSum(numbers){

    let squares = numbers.map((x) => x**2)
    return squares.reduce((a,c) => a + c, 0)
    // return numbers.map((x) => x**2).reduce((a,c) => a + c, 0)
}

console.log(squareSum([2,4,5]))