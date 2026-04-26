// Our football team has finished the championship.
// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

// For example: ["3:1", "2:2", "0:1", ...]

// Points are awarded for each match as follows:
// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.

// Notes:

// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4

//PREP
//Params
// you are given an array of strings, within those strings are your team's points and the other team's points, separated by a :
//Returns
// a win receives 5 points
// a loss results in 0 points. does the opponent receive 5 points?
// a tie results in 1 point

//Examples
    // ["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"] ==> 30;
    // ["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"] ==> 10;
    // ["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"] ==> 0;
    // ["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"] ==> 15;

//Pseudocode
// there needs to be a conditional statement to compare your team's score to the other team's score, likely looping through the array and grabbing the index's index

function points(games) {

    

}

console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]))