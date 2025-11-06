// Create a function that always returns True/true for every item in a given list. However, if an element is the word 'flick', switch to always returning the opposite boolean value.

// examples
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]
// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]
// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]

let testArray = ['codewars', 'flick', 'code', 'wars'];

const found = testArray.find((element) => element == 'flick');
console.log(found)

const indexOfFlick = testArray.indexOf("flick");
console.log(indexOfFlick)
// const flickSwitch = (arr) => {
//     arr.forEach(element => {
//         if (element == 'flick') {
//             element = 'true'
//         } else {
//             element = element
//         }
//     });
//     console.log(arr);
// }

// flickSwitch(testArray);