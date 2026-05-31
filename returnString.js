// Description:
// Create a function that accepts a parameter representing a name and returns the message: "Hello, <name> how are you doing today?".

// [Make sure you type the exact thing I wrote or the program may not execute properly]

//Params
// given a string
//Returns
// return "Hello, <name> how are you doing today?"
//Examples
    // "Hello, Colin how are you doing today?"
//Pseudocode
//name needs to be a prompt
// 'Hello ${name}'

function greet(name) {

    name = prompt("Type your name")
    return `Hello, ${name} how are you doing today?`

}