// Description:
// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

//Params
// you are given an array of numbers
//Returns
// return the average of the numbers rounded down
//Examples
// 
//Pseudocode
// sum numbers and divide by count
// math.floor()

function getAverage(marks){

    return marks.length === 0 ? 0 : 
        Math.floor(marks.reduce((accumulator, currentVal) => accumulator + currentVal, 0)/marks.length)

}

console.log(getAverage([80,84,87, 91]))