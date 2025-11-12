// You get an array of numbers, return the sum of all of the positives ones.

const test = [4, -4, 5];

function positiveSum(arr) {

    // let sum = 0;
    // for (let i = 0; i < arr.length; i++) {
        
    //     if (arr[i] > 0) {
    //         sum = arr.reduce((acc, curr) => acc+curr)
    //     } else {
    //         break;
    //     }
    // }
    // return sum
    const allPositive = arr.filter((num) => num > 0);
    const sum = allPositive.reduce(
        (acc, curr) => acc + curr, 0)
    console.log(sum)

}

positiveSum(test)