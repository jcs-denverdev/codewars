// Complete the solution so that the function will break up camel casing, using a space between words.

//Params
// a string that may or may not be in camelCase
//Returns
// a single string containing the same string broken at the middle capital letter
// if the given string is not in camelCase, return the string as-is
// if the given string parameter is empty, return the empty string as-is
//Examples
// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""
//Pseudocode
// first establish the logic to deal with parameters containing no characters or uppercase letters
// else, let's try splitting the string into an array to deal with it there

function solution(string) {

    let strCopy = string.split('');

    if (string == string.toLowerCase() || string == "") {
        return string
    }

    // if a character code at index i is between 65 and 90 inclusive, 
    for (let i = 0; i < string.length; i++) {
        if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
            
            strCopy.splice(i,0," ");
        }
    }
    return strCopy.join('')


}

console.log(solution("youreaButtt"))