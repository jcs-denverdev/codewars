// The museum of incredibly dull things wants to get rid of some exhibits. Miriam, the interior architect, comes up with a plan to remove the most boring exhibits. She gives them a rating, and then removes the one with the lowest rating.
// However, just as she finished rating all exhibits, she's off to an important fair, so she asks you to write a program that tells her the ratings of the exhibits after removing the lowest one. Fair enough.

// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with the lowest index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

//Params
// an array of numbers
//Returns
// without mutating the original array, return the same array without the smallest value.
// if there are multiple elements with the same lowest value, remove the one with the lowest index.
// if you get an empty array, return an empty array
// Examples
    // Input: [1,2,3,4,5], output = [2,3,4,5]
    // Input: [5,3,2,1,4], output = [5,3,2,4]
    // Input: [2,2,1,2,1], output = [2,2,2,1]
//Pseudocode
// first, account for the empty array
// sorting the array will result in showing all lowest values at the start of the returned array, so we wouldn't be able to only remove the one at the lowest index

function removeSmallest (numbers) {

    return numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)))
    // couldn't find solution myself

}

console.log(removeSmallest([2,2,1,2,1]))