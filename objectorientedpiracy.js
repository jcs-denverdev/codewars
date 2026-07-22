// Description:
// Ahoy matey!
// You are a leader of a small pirate crew. And you have a plan. With the help of OOP you wish to make a pretty efficient system to identify ships with heavy booty on board!
// Unfortunately for you, people weigh a lot these days, so how do you know if a ship is full of gold and not people?
// You begin with writing a generic Ship class / struct:

    // class Ship {
    //   constructor(draft, crew) {
    //     this.draft = draft
    //     this.crew = crew
    //   }
    // }
// Every time your spies see a new ship enter the dock, they will create a new ship object based on their observations:

// draft - an estimate of the ship's weight based on how low it is in the water
// crew - the count of crew on board
    
    // const titanic = new Ship(15, 10);

// Task
// You have access to the ship "draft" and "crew". "Draft" is the total ship weight and "crew" is the number of humans on the ship.

// Each crew member adds 1.5 units to the ship draft. If after removing the weight of the crew, the draft is still more than 20, then the ship is worth looting. Any ship weighing that much must have a lot of booty!

// Add the method <isWorthIt> to decide if the ship is worthy to loot.


//Params
// draft - an estimate of the ship's total weight
// crew - the count of crew members

//Returns
// based on the crew members (wt = 1.5units) being removed from the ship, if the draft is > 20units, the new method should return true

//Examples
    // const emptyShip = new Ship(0,0) ==> false
    // const aWorthyship = new Ship(100,20) ==> true

//Pseudocode
// the method isWorthIt just needs to do some mathematics
// if (crew*1.5 > 20) return true


class Ship {
    constructor(draft, crew) {
        this.draft = draft
        this.crew = crew
    }

    // YOUR CODE HERE
    isWorthIt() {
        return this.draft - (this.crew * 1.5) > 20
    }
}

const aWorthyship = new Ship(100,20)
const emptyShip = new Ship(0,0)
const aBoat = new Ship(15,20)
const titanic = new Ship(15,10)

console.log(aBoat.isWorthIt())