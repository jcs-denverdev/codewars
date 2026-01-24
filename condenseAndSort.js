// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

//Params
// a two-dimensional array of integers (nested arrays)
//Returns
// flattened and sorted array of integers
//Example:
    // Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
//Pseudocode
// arrays have the sort() method
// remember that (a, b) => a - b sorts numbers in ascending order.

function flattenAndSort(array) {

    return array.sort((a,b) => a - b)

}

console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]))