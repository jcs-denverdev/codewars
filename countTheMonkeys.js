// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

//Params
// a number of monkeys n

//Returns
// populate an array with all numbers up to and including given number, excluding number

//Examples
    // 10 --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    //  1 --> [1]
//Pseudocode
// will need a for loop and an empty array to push into
// initialization at 1, not 0

function monkeyCount (n) {
    let arr = [];

    for (let i = 1; i <= n; i++) {
        arr.push(i)
    }

    return arr
}

console.log(monkeyCount(5))
console.log(monkeyCount(8))