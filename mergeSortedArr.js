// You are given two sorted arrays that contain only integers. These arrays may be sorted in either ascending or descending order. Your task is to merge them into a single array, ensuring that:

// The resulting array is sorted in ascending order.
// sort((a,b) => a-b)
// Any duplicate values are removed, so each integer appears only once.
// If both input arrays are empty, return an empty array.
// No input validation is needed, as both arrays are guaranteed to contain zero or more integers.

//Parameters
// two sorted arrays containing only integers
//Returns
// merge two arrays into one
// new array should be sorted in ascending order
// duplicates removed
// if given arrays are empty, return an empty array
// Examples (input -> output)
    // * [1, 3, 5, 7, 9], [10, 8, 6, 4, 2] -> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    // * [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12] -> [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
//Pseudocode
// first, merge the arrays using arr1.concat(arr2)
// then check for duplicates using filter and indexOf
// finally, sort the array 

function mergeArrays(arr1, arr2) {

    let merged = arr1.concat(arr2)
    let uniqueInts = merged.filter((item, index) => merged.indexOf(item) == index)
    return uniqueInts.sort((a,b) => a-b)

}

console.log(mergeArrays([1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12]))