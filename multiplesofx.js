// Create a function with two arguments that will return an array of the first n multiples of x.

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array or list ( depending on language ).

// Examples
// x = 1, n = 10 --> [1,2,3,4,5,6,7,8,9,10]
// x = 2, n = 5  --> [2,4,6,8,10]
// x = 3, n = 3 --> [3, 6, 9]
// x = 4, n = 5 --> [4, 8, 12, 16, 20]

function multiples (x, n) {

    let results = [];

    for (let i = x; i <= x*n; i++) {
        // if (i % 3 === 0) { only works for multple of 3
        if (i % x === 0) {
            results.push(i);
        }
    }
    return results

}

console.log(multiples(1, 10))

// codewars top solution
// const countBy = (x, n) => Array.from( {length: n}, (v, k) => (k + 1) * x)
// console.log(countBy(4, 5))