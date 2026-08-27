// I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

//Params
// two arrays
//Returns
// the sum of each element of the array plus the sum of each element of the second array
//Examples
    // [-1, -2, -3], [-4, -5, -6] ==> -21
    // [0, 0, 0], [4, 5, 6] ==> 15
//Pseudocode
// reduce() method on both arrays

function arrayPlusArray(arr1, arr2) {

    let arr1Sum = arr1.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );
    let arr2Sum = arr2.reduce(
        (accumulator, currentValue) => accumulator + currentValue,
        0
    );
    return arr1Sum + arr2Sum;

}

console.log(arrayPlusArray([-1, -2, -3], [-4, -5, -6]))