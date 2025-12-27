// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

// All of the strings in the array passed to your function will be different lengths, so you will not have to decide how to order multiple strings of the same length.

//Params
// an array of strings
//Returns
// a sorted array of the same strings, ordered from shortest length to longest length
//Examples
    // ["Telescopes", "Glasses", "Eyes", "Monocles"]
    // ["Eyes", "Glasses", "Monocles", "Telescopes"]
//Pseudocode
// sort((a,b) => a - b) sorts numbers in ascending order
// 

function sortByLength (array) {

    return array.sort((a,b) => 
        a.length - b.length
    )

}

console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]))