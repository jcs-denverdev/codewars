// Given a string and an array of indices, rearrange the characters of the string so that each character is placed at the position specified by the corresponding index in the array.

// Notes
// The string and the array will be of equal length.
// The string will contain valid characters (A-Z, a-z, or 0-9);
// the array will contain valid indices.

//Parameters: a string and an array or equal length
//Returns: a new string with the original letters scrambled in the order specified by the array of indeces
//Example
    // input: "abcd", [0, 3, 1, 2]
    // output: "acdb"
    
    // Explanation
        // The character 'a' is placed at index 0.
        // The character 'b' is placed at index 3.
        // The character 'c' is placed at index 1.
        // The character 'd' is placed at index 2.
//Pseudocode:
// Convert the str to an array str.split('')
// try splice(), can be used to remove, add, or replace elements in an array
// str.splice(index, howMany, element1, element2, elements you want inserted from position index)

function scramble(str, arr) {

    let r = []
    for (let i = 0; i < arr.length; i++) {
        r[arr[i]] = str[i]
    }
    return r.join('')
    
}

console.log(scramble("abcd", [0,3,1,2]))

// Array.prototype.move = function (from, to) {
//     this.splice(to, 0, this.splice(from, 1)[0]);
// }
// let ar = [1,2,3,4,5]
// ar.move(0,3);
// console.log(ar)