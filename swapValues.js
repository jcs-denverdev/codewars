// I would like to be able to pass an array with two elements to my swapValues function to swap the values. However it appears that the values aren't changing.
// Can you figure out what's wrong here?

// function swapValues() {
//     var args = Array.prototype.slice.call(arguments);
//     var temp = args[0];
//     args[0] = args[1];
//     args[1] = temp;
// }

//PREP
//Params
// say we are given an array with two elements in it
//Returns
// return the array with the values swapped
//Examples
    // [3, "h"] ==> ["h", 3]
    // [70, 12] ==> [12, 70]
//Pseudocode
// right off the bat, it looks like the function has no parameters, but the instructions say we want to pass an array with two elements to the function and swap them
// check reverse() method first..
// .. uhh yeah too easy

function swapValues(arr) {

    return arr.reverse()

}


console.log(swapValues([70, 12]));
console.log(swapValues([3, "h"]));