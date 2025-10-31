// Create a function that returns the name of the winner in a fight between two fighters.
// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.
// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.
// Both health and damagePerAttack will be integers larger than 0. You can mutate the Fighter objects.
// Your function also receives a third argument, a string, with the name of the fighter that attacks first.

//Parameters: two fighters and the name of the fighter that attacks first
//Returns: name of the winning fighter
//Examples
    // declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew"
    //   Lew attacks Harry; Harry now has 3 health.
    //   Harry attacks Lew; Lew now has 6 health.
    //   Lew attacks Harry; Harry now has 1 health.
    //   Harry attacks Lew; Lew now has 2 health.
    //   Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.

class Fighter {
    #name;
    get name() {
        return this.#name;
    }
    #damagePerAttack;
    get damagePerAttack() {
        return this.#damagePerAttack;
    }
    constructor(name, health, damagePerAttack) {
      this.#name = name;
      this.#damagePerAttack = damagePerAttack;
      this.health = health;
    }
}

//Pseudocode
// first we should find out who is attacking whom
// if the first attacker == fighter1.name, fighter1.name attacks fighter2.name
    // they take turns attacking until one of them dies
// if the first attacker == fighter2.name, fighter2.name attacks fighter1.name
    // they take turns attacking until one of them dies


function declareWinner(fighter1, fighter2, firstAttacker) {

    if (firstAttacker === fighter1.name) { // Lew is attacking Harry

        // fighters take turns, how does that happen? Do we need a loop?
        do {
            console.log(`${fighter1.name} attacks ${fighter2.name}; ${fighter2.name} now has ${fighter2.health} health.`);
            console.log(`${fighter2.name} attacks ${fighter1.name}; ${fighter1.name} now has ${fighter1.health} health.`);
            fighter2.health -= fighter1.damagePerAttack
            fighter1.health -= fighter2.damagePerAttack
            
        } while (fighter2.health > 0)
        
        return `${firstAttacker} attacks ${fighter2.name}; ${fighter2.name} now has ${fighter2.health} health and is dead. ${fighter1.name} wins.`


    } else { // fighter2 is first attacker

        do {
            console.log(`${fighter2.name} attacks ${fighter1.name}; ${fighter1.name} now has ${fighter1.health} health.`);
            console.log(`${fighter1.name} attacks ${fighter2.name}; ${fighter2.name} now has ${fighter2.health} health.`);
            fighter2.health -= fighter1.damagePerAttack
            fighter1.health -= fighter2.damagePerAttack
            
        } while (fighter1.health > 0)
        
        return `${firstAttacker} attacks ${fighter1.name}; ${fighter1.name} now has ${fighter1.health} health and is dead. ${fighter2.name} wins.`

    }
    

}

console.log(declareWinner(new Fighter("Lew", 10, 2), new Fighter("Harry", 5, 4), "Lew"))