// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.
// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.

//Params
// given a non-empty string
//Returns
// return the middle char or chars, depending on odd vs even number of total chars in said string
//Examples:
    // "test" --> "es"
    // "testing" --> "t"
    // "middle" --> "dd"
    // "A" --> "A"
//Pseudocode
// if length % 2 == 0, even length, need two chars
// if length % 2 != 0, length is odd, need middle char
// 

function getMiddle (s) {

    let len = s.length;

    if (len % 2 == 0) {
        return s[len/2]
    } else {
        return s[len/2]
    }

}

console.log(getMiddle("middle"))