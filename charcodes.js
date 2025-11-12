// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// input [100,100,116,105,117,121]=>[100,100,116,"i","u",121] output Return the resulting array.

test = [100,100,116,105,117,121]


function isVow(a){

    let result = a;
    let vowels = ['a', 'e', 'i', 'o', 'u']

    for (let i = 0; i < result.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (result[i] === vowels[j].charCodeAt()) {
                result[i] = String.fromCharCode(result[i]);
                break;
            }
        }
    }
    return result

    // const vowels = {
    //     "97": "a",
    //     "101": "e",
    //     "105": "i",
    //     "111": "o",
    //     "117": "u"
    // }

    // return a.map( num => vowels[num] ? vowels[num] : num)


}

console.log(isVow(test))