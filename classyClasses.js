// Task
// Your task is to complete this Class, the Person class has been created. You must fill in the Constructor method to accept a name as string and an age as number, complete the get Info property and getInfo method/Info getter which should return johns age is 34

//Params
//  a name and an age constructor
// getInfo property, getInfo method

//Returns
// `${name}'s age is ${age}

//Examples
    // Person('john', 34) ==> John's age is 34

//Pseudocode
// set name and age constructor parameters
// this.name = name
// this.age = age
// info() = {}

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    info() {

    }
}

let john = new Person('john', 34);