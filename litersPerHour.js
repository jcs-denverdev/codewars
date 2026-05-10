// Nathan loves cycling.
// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded down.


//Params
// given the time in hours that Nathan has been cycling
//Returns
// return how many litres Nathan will drink, rounded down

//Examples:
    // time = 3 ----> litres = 1
    // time = 6.7---> litres = 3
    // time = 11.8--> litres = 5

//Pseudocode
// time * 0.5
// Math.floor since we are rounding down

function litres(time) {

    // for (let lit = 0.5; lit <= time; lit+=0.5) {
    //     return lit
    // }

    return Math.floor(time*0.5)
}

console.log(litres(6.7))