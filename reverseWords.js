// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

//Params
// a single string
//Returns
// reverse each word in the string, rather than reversing the entire string as a whole
// Examples
    // "This is an example!" ==> "sihT si na !elpmaxe"
    // "double  spaces"      ==> "elbuod  secaps"
//Pseudocode


function reverseWords(str) {

    // Reverse entire string as a whole, spaces removed
    // str.split('') = ['This', 'is', 'an', 'example!']
    //    .reverse() = ['example!', 'an', 'is', 'This']
    //    .join('') = example!anisThis

    let arry = str.split(' ')
    let newrry = []
    for (let i = 0; i < arry.length; i++) {
        newrry.push(arry[i].split('').reverse().join('')) // = 'sihT'
    }
    return newrry.join(' ')

    // top solution used map with its inherent function ability, rather than using a for loop, like i did
    // return str.split(' ')
    //           .map(function(word) { return word.split('')
    //                                            .reverse()
    //                                            .join('');
    //         }).join(' ');

}

console.log(reverseWords("This is an example!"))