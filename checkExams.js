// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

//Params
// two arrays of the same length - the answer key array and the student answers array
//Returns
// the student's score, which should be the result of comparing their answer to the correct answer, giving 4 points for a correct answer and -1 for each incorrect answer
//Examples
    //     Correct answer    |    Student's answer   |   Result         
    //  ["a", "a", "b", "b"]   ["a", "c", "b", "d"]  →     6
    //  ["a", "a", "c", "b"]   ["a", "a", "b", "" ]  →     7
    //  ["a", "a", "b", "c"]   ["a", "a", "b", "c"]  →     16
    //  ["b", "c", "b", "a"]   ["" , "a", "a", "c"]  →     0
//Pseudocode
// loop through the correct answers
// loop through student answers
// if the element in one array matches the element in the other, add 4 to result, otherwise subtract 1 from result

function checkExam(array1, array2) {

    let result = 0;

    // // first loop for the answer key array
    // for (let i = 0; i < array1.length; i++) {

    //     // second loop for the student's answers array
    //     for (let j = 0; j < array2.length; j++) {

    //         if (j === i) {
    //             result += 4
    //         } else if (j === "" || j === " ") {
    //             result += 0
    //         } else {
    //             result -= 1
    //         }
    //     }
    // }

    // without a nested for loop, check char at indices
    if (array1[0] === array2[0] || array1[1] === array2[1] || array1[2] === array2[2] || array1[3] === array2[3]) {
        result += 4
    } else if (array2[0] === "" || array2[1] === "" || array2[2] === "" || array2[3] === "") {
        result += 0
    } else {
        result -= 1
    }

    // check if student score has dropped below 0
    if (result < 0) {
        result = 0
    }

    // return student result
    return result

}

console.log(checkExam(["a", "a", "b", "c"],["a", "a", "b", "c"]))