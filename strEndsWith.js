// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

//Params
// two string parameters
//Returns
// true if second argument is found at the end of the first arg
//Examples:
    // Inputs: "abc", "bc"
    // Output: true
    // Inputs: "abc", "d"
    // Output: false
//Pseudocode
// if str length is 0, return false
// if str.endsWith ending, return true

function solution (str, ending) {

    return str.endsWith(ending)

}

console.log(solution("abc", "bc"))