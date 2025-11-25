// P.R.E.P - for every codewars!
// parameters, returns, examples, pseudo code

// Simple, given a string of words, return the length of the shortest word(s).
// String will never be empty and you do not need to account for different data types.

function findShort(s) {

    //P: singular parameter, s, represents a string of words that will be passed to this function. s will never be an empty string, and will always be a string
    //R: return the length of the shortest word
    //E: "Let's travel abroad shall we" --> shortest word is "we" --> length 2
    // "turns out random test cases are easier than writing out basic ones" --> shortest word is "out", "are" --> length 3
    
    //P: convert s to an array, splitting at each space
    let a = s.split(' ')

    // now there is an array of each word, so we can check each element length
    // store the shortest length, starting with first element, then we'll check each element following that with a for loop
    let shortest = a[0].length;

    // iterate through array
    for (let i = 0; i < a.length; i++) {
        // if the length of any element is less than the first element, reassign shortest
        if (a[i].length < shortest) {
            shortest = a[i].length
        }
    }
    return shortest

}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))