// Write function removeExclamationMarks which removes all exclamation marks from a given string.

function removeExclamationMarks(s) {

    let a = s.split(''); // split string into array

    let noMarks = a.filter((char) => char != '!') // filter through array to create new "shallow array" without exclamation mark
    
    s = noMarks.join('') // join chars from filtered array

    return s; // return new s string

}

console.log(removeExclamationMarks("W!h!a!t a!r!e y!o!u d!o!i!n!g?!"))