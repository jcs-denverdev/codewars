// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//PREP
//Params
// given a boolean value (true/false)
//Returns
// return "Yes" for true; "No" for false
//Examples
    // do we really need an example?
//Pseudocode
// should be pretty straightforward. conditional statement (ternary expression should do it)
// false return "Yes", uh oh

function boolToWord (bool) {

    return true ? "Yes" : "No";

}

console.log(boolToWord(false));