// Description:
// Trolls are attacking your comment section! A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.
// Note: for this kata y isn't considered a vowel.

//Parameters: your function should take a string as a parameter. do you need to check if the user has given a different data type? Or an empty string?
//Returns: return the given string with vowels removed, not including 'y'
//Examples: "This website is for losers LOL!", "Ths wbst s fr lsrs LL!".
    //"No offense but,\nYour writing is among the worst I've ever read", "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
//Pseudocode: 
// loop through string
// if string includes "a,e,i,o,u", filter out

function disemvowel(str) {

    let vowels = ['a','e','i','o','u','A','E','I','O','U'];
    let a = str.split('');
    
    let result = a.filter((letter) => !vowels.includes(letter)).join('')
    return result
    a.includes(vowels) // returns true or false

}

console.log(disemvowel("This website is for losers LOL!"))