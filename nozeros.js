// Numbers ending with zeros are boring.
// They might be fun in your world, but not here.

// Get rid of them. Only the ending ones.

// E:
// 1450   -> 145
// 960000 -> 96
// 1050   -> 105
// -1050  -> -105
// 0      -> 0
// Note: Zero should be left as it is.

// P: create a function that takes any integer and removes any zeros from the end of the number

function noBoringZeros(n) {
    // if the number is equal to 0, return 0
    if (n == 0) {
        return n
    }
    // create an array by splitting n
    let a = `${n}`.split('');
    // iterate through this array in reverse
    for (let i = a.length -1; i >= 0; i--) {
        // if element/digit is zero, pop it out
        if (a[i] == 0) {
            a.pop()
        } else {
            break
        }
    }
    // join array back to string/int and return it
    return Number(a.join(''))

}

console.log(noBoringZeros(105090))