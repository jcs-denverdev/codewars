// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// input [100,100,116,105,117,121]=>[100,100,116,"i","u",121] output Return the resulting array.

//Params
    // given an array of numbers
//Returns
    // if any numbers are character codes for lower case vowels, return an array of the same numbers where the lower case vowel char codes are replaced by their respective vowel
//Examples
    // [118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106] ==>
    // [118,"u",120,121,"u",98,122,"a",120,106,104,116,113,114,113,120,106]
    // [101,121,110,113,113,103,121,121,101,107,103] ==>
    // ["e",121,110,113,113,103,121,121,"e",107,103]
//Pseudocode
    // loop through the array
    // conditional statement if array[element] == any char code for a,e,i,o,u { array[element] == a,e,i,o,u }

function isVow(a){

    // let result = a.forEach(element => {

    //     a.charCodeAt(element);

    // });

    // return result

    let result = [];
    for (let i = 0; i < a.length; i++) {
        
        if (a[i] == 97) {
            a[i] = "a";
        }
        if (a[i] == 101) {
            a[i] = "e"
        }
        if (a[i] == 105) {
            a[i] = "i"
        }
        if (a[i] == 111) {
            a[i] = "o"
        }
        if (a[i] == 117) {
            a[i] = "u"
        }
        result.push(a[i]);
    }
    return result;















    
    // let result = a;
    // let vowels = ['a', 'e', 'i', 'o', 'u']

    // for (let i = 0; i < result.length; i++) {
    //     for (let j = 0; j < vowels.length; j++) {
    //         if (result[i] === vowels[j].charCodeAt()) {
    //             result[i] = String.fromCharCode(result[i]);
    //             break;
    //         }
    //     }
    // }
    // return result

    // const vowels = {
    //     "97": "a",
    //     "101": "e",
    //     "105": "i",
    //     "111": "o",
    //     "117": "u"
    // }

    // return a.map( num => vowels[num] ? vowels[num] : num)




}

console.log(isVow([118,117,120,121,117,98,122,97,120,106,104,116,113,114,113,120,106]))
console.log(isVow([101,121,110,113,113,103,121,121,101,107,103]))