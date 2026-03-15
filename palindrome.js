// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

//Parameters
// a string parameter, case insensitive
//Returns
// true if the string is a palindrome, false if not
//Examples
    // "abba" -> true
    // "madam" -> true
    // "hello" -> false
    // "mADaM" -> true
//Pseudocode

// .at(index) returns a new string consisting of the single utf-16 code unit located at the specified offset
// .charAt(index) returns a new string consisting of the single utf-16 code unit at the given index
// .substring(startIndex, endIndex) returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index supplied

function isPalindrome(x) {

// loop through string forwards and backwards, using separate for-loops
// within both loops, add the characters at each index to an object
// compare objects

    // let forwards = [];
    // let backwards = [];

    // for (let i = 0; i < x.length; i++) {
    //     forwards.push(x[i])
    // }

    // for (let j = x.length -1; j >= 0; j--) {
    //     backwards.push(x[j])
    // }

    // console.log(`${forwards} --> ${backwards}`)
    // return forwards == backwards



}

console.log(isPalindrome("abba"))