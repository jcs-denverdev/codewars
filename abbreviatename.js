// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

//Parameters: function takes a name, presumably a string with two names separated by a space
//Returns: two capital letters, separated by a period
//Examples: 
    // Sam Harris => S.H
    // patrick feeney => P.F
//Pseudocode:
// check the name to make sure its a string
// split the string at the spaces

function abbrevName(name){

    let a = name.split(' ');

    a = a.map((letter) => letter[0]).join('.').toUpperCase()

    return a
    // return `${a[0][0].toUpperCase()}.${a[1][0].toUpperCase()}`
}

console.log(abbrevName("s harris booty"));