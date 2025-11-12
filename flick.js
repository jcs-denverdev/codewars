// Create a function that always returns True/true for every item in a given list. However, if an element is the word 'flick', switch to always returning the opposite boolean value.

// examples
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]
// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]
// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]

let testArray = ['codewars', 'flick', 'code', 'wars'];

function flickSwitch(arr){
    let returning = true;

    return arr.map((word) => {
        return (word === "flick") ? returning = !returning : returning;
    })
}
console.log(flickSwitch(testArray))