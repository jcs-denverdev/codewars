// Description:
// Very simple, given a number, find its opposite (additive inverse).

//Params:
// given a number
//Returns:
// return the inverse of given number

// Examples:
    // 1: -1
    // 14: -14
    // -34: 34

//Pseudocode:
// if number > 0, subtract number * 2
// if number < 0, add number * 2
// stupid solution you don't know any math
// top solution was this: return -number;

function opposite(number) {

    return number > 0 ? number-number*2 : number+number*-2;

}

console.log(opposite(-12525220.3325))