// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

function multiplyByN (number) {

    // if (number % 2 === 0) {
    //     return number * 8
    // } else {
    //     return number * 9
    // }
    // try for single line

    return (number % 2 === 0) ? number * 8 : number * 9
    
}

console.log(multiplyByN(23469871634))