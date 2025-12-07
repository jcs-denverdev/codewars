// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.

//Params: function takes a string as a parameter
//Returns: string representing the next traffic light color
//Examples: 
    // input -> green
    // output -> yellow
    // input -> red
    // output -> green
//Pseudocode:
// make an array of traffic light colors ['green','yellow','red']
// if current is green or yellow, add one
// if current is red, go back to first element

function updateLight(current) {

    const lights = ['green','yellow','red'];

    if (current.toLowerCase() == lights[0]) {
        current = lights[1]

    } else if (current.toLowerCase() == lights[1]) {
        current = lights[2];

    } else if (current.toLowerCase() == lights[2]) {
        current = lights[0]
    } else {
        return "Not a valid light"
    }
    return current

}

console.log(updateLight('Green'))