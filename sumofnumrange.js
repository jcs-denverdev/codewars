// Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

// Note: a and b are not ordered!

// Your function should only return a number, not the explanation about how you get that number.

//Parameters: functions accepts two integers, a and b, which can be + or -
//Returns: given two ints, find the sum of the range of integers between the two int params, inclusive
//Examples: (a, b) --> output (explanation)
    // (1, 0) --> 1 (1 + 0 = 1)
    // (1, 2) --> 3 (1 + 2 = 3)
    // (0, 1) --> 1 (0 + 1 = 1)
    // (1, 1) --> 1 (1 since both are same)
    // (-1, 0) --> -1 (-1 + 0 = -1)
    // (-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)
//Pseudocode:
// how do find the range between a and b
// a and b are not ordered, so first need to find if numbers are same or if one is greater
// reduce() to find sum?

function getSum(a, b) {

    if (a === b) {
        return a
    }
    let sum = 0;
    let arr = [];
    arr.push(a);
    arr.push(b);
    
    arr.sort((a,b) => a - b)
    for (let i = arr[1]; i >= arr[0]; i--) {
        sum += i;
    }
    return sum
    
}

console.log(getSum(1, 3))