// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example
// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]


function removeEverySecond (arr) {

    return arr.filter(function(element, index) {
        return index % 2 === 0;
    })

}

console.log(removeEverySecond(["Keep", "Remove", "Keep", "Remove", "Keep"]))