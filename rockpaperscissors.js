// Rules of the "Rock, Paper, Scissors" game are:
// Rock beats Scissors,
// Scissors beat Paper,
// Paper beats Rock,
// Two identical moves are a draw.

// Let's play! You will be given valid moves of two Rock, Paper, Scissors players, and have to return which player won: "Player 1 won!" for player 1, and "Player 2 won!" for player 2. In case of a draw return Draw!.

//Parameters: player1's move and player2's move
//Returns: return which player won, based on rock paper scissors rules
//Examples:
    // "scissors", "paper"  --> "Player 1 won!"
    // "scissors", "rock"   --> "Player 2 won!"
    // "paper", "paper"     --> "Draw!"
//Pseudocode:
// convert p1 and p2 params to lowercase
// first check if p1 and p2 are valid
// then check if they are the same
// otherwise, make the conditional statement

const rps = (p1, p2) => {

    let options = ['rock', 'paper', 'scissors']
    p1 = p1.toLowerCase()
    p2 = p2.toLowerCase()

    // if (p1.includes(options))
    if (p1 === p2) {
        return 'Draw!'
    }
    if (p1 === 'rock') {
        if (p2 === 'paper') {
            return 'Player 2 won!'
        } else {
            return 'Player 1 won!'
        }
    }
    if (p1 === 'paper') {
        if (p2 === 'scissors') {
            return 'Player 2 won!'
        } else {
            return 'Player 1 won!'
        }
    }
    if (p1 === 'scissors') {
        if (p2 === 'rock') {
            return 'Player 2 won!'
        } else {
            return 'Player 1 won!'
        }
    }
};

console.log(rps('scissors', 'paper'))