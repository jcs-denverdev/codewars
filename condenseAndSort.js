// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

//Params
// a two-dimensional array of integers (nested arrays)
//Returns
// flattened and sorted array of integers
//Example:
    // Given [[3, 2, 1], [4, 6, 5], [], [9, 7, 8]], your function should return [1, 2, 3, 4, 5, 6, 7, 8, 9].
//Pseudocode
// arrays have the sort() and concat() methods, which should be all we need here
// remember that (a, b) => a - b sorts numbers in ascending order
// single for-loop, we can console log to see each nested array

function flattenAndSort(array) {

    for (let i = 0; i < array.length; i++) {
        // for (let j = 0; j < array.length; j++) {
        //     console.log(array[i][j])
        // }
        console.log(array[i])
    }

}

console.log(flattenAndSort([[1, 3, 5], [100], [2, 4, 6]]))