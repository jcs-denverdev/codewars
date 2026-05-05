// We need a function that can transform a number (integer) into a string.
// What ways of achieving this do you know?

//PREP
//Params
// given a number (integer)
//Returns
// return that number as a string
// Examples (input --> output):
    // 123  --> "123"
    // 999  --> "999"
    // -100 --> "-100"

//Pseudocode
// the Number() constructor does the opposite, converting a valid string to a number
//let's look at mdn and see what methods exist so we can do this in one line
// .toString() seems to work

function numberToString(num) {

    return num.toString();

}

console.log(numberToString(67));