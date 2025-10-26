// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// a can contain numbers or strings. x can be either.

// Return true if the array contains the value, false if not.

// Parameters: an array, which can contain nums or strs, and a value
// Returns: true if a contains x, false if not
// Examples: 
    // ([66, 101], 66) ==> true
    // ([101, 45, 75, 105, 99, 107], 107) ==> true
    // (['t', 'e', 's', 't'], 'e') ==> true
    // (['what', 'a', 'great', 'kata'], 'kat') ==> false
// Pseudocode: 
// loop through a
// if a includes x, return true

function check(a, x) {

    for (let i = 0; i < a.length; i++) {
        return a.includes(x)
    }

}

console.log(check([30, "ireland", "beer", "7"], 7))

