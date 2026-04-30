// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.


//Params
// you are given an array/list of strings
//Returns
// sort the list alphabetically, case-sensitive, based on the ASCII values of the characters - return the first value, which must be a string and have "***" between each letter
//Examples
    // ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"] ==> 'b***i***t***c***o***i***n'
    // ["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"] ==> 'a***r***e'
//Pseudocode
// the sort() method sorts the elements of an array in place, defaults to ascending
// do I need to convert each string to lowercase?
// return item [0] with *** between each letter
// to place stars between each letter, loop through first item after sorting original array
// try map()
// 

function twoSort(s) {

    let firstVal = s.sort()[0].split('');

    // for (let i = 0; i < firstVal.length; i++) {
    //     firstVal.splice(i, "***")
    // }

    const mapped = firstVal.map((x) => x + "***")
    return mapped.join("")


}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]))