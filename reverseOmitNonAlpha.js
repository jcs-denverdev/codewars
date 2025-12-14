// Task
// Given a string str, reverse it and omit all non-alphabetic characters.

// Input/Output
// [input] string str
// A string consists of lowercase latin letters, digits and symbols.

// [output] a string

//Params
// a single string
//Returns
// the string in reverse, omitting all non-alphabetic characters
//Examples
    // For str = "krishan", the output should be "nahsirk".
    // For str = "ultr53o?n", the output should be "nortlu".
//Pseudocode
// make an array of the alphabet
// convert str to array, reverse() and filter() methods should just work
// 

function reverseLetter(str) {

    const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

    return str.split('')
              .reverse()
              .filter((l) => letters.includes(l))
              .join('')
}

console.log(reverseLetter("?ul0tr4a"))