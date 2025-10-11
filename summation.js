// Write a program that finds the summation of every number from 1 to num (both inclusive). The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

function summation (num) {

    // let a = `${num}`.split('');
    // return a
    // a was an array of strings and idk how to change that
    // a.reduce((a,c) => a+c, 0)
    
    // simple empty array and for loop to push each number to it
    let a = [];
    for (let i = 1; i <= num; i++) {
        a.push(i)
    }
    // once all nums are in the array (not as strings), we can reduce it
    return a.reduce((a,c) => a+c,0)

}

console.log(summation(10))