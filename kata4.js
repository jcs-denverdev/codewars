function gooseFilter (birds) {
    var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
// return an array containing all of the strings in the input array except those that match strings in geese

    const result = birds.filter(goose => !geese.includes(goose));
    return result;

};

let myArray = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]

console.log(gooseFilter(myArray))