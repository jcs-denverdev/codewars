// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

//Params
// a non-negative integer
//Returns
// a string containing "1 sheep...2 sheep..." and so on, depending on the number given
//Examples
    // countSheep(3) --> "1 sheep...2 sheep...3 sheep..."
//Pseudocode
// declare a string literal

function countSheep (num) {

    let phrase = ""
    for (let i = 1; i <= num; i++) {
        phrase += `${i} sheep...`
    }
    return phrase

}

console.log(countSheep(5))