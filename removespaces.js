// Write a function that removes the spaces from the string, then return the resultant string.

//Parameters: you are given a string and you must remove any spaces
//Returns: return given string with spaces removed
//Examples (Input -> Output):
    // "8 j 8   mBliB8g  imjB8B8  jl  B" -> "8j8mBliB8gimjB8B8jlB"
    // "8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd" -> "88Bifk8hB8BB8BBBB888chl8BhBfd"
    // "8aaaaa dddd r     " -> "8aaaaaddddr"
//Pseudocode:
// there should be a trim method on the string object in javascript
// just call that and return it to see what happens
// welp that didn't work. if neither the beginning or end of str has any whitespace, a new string is still returned (essentially a copy of str)

function noSpace(x){

    return x.trim()

}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"))