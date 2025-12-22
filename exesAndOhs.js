// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

//Params
// given a string containing any character
//Returns
// checking for x's and o's. if the string has the same amount of each letter, return true. otherwise, return false
// Examples input/output:
    // XO("ooxx") => true
    // XO("xooxx") => false
    // XO("ooxXm") => true
    // XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
    // XO("zzoo") => false
//Pseudocode
// first, check mdn for string methods. includes() is a string AND array method

function XO (str) {

    let xCount = 0;
    let oCount = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'x' || str[i] == 'X') {
            xCount++
        } else if (str[i] == 'o' || str[i] == 'O') {
            oCount++
        }
    }
    return xCount == oCount ? true : false

}

console.log(XO("xooox"))