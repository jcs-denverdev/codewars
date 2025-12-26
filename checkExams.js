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


function checkExam(array1, array2) {



}

console.log(checkExam())