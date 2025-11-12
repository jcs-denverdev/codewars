// I have a cat and a dog.
// I got them at the same time as kitten/puppy. That was humanYears years ago.
// Return their respective ages now as [humanYears,catYears,dogYears]

// NOTES:
// humanYears >= 1
// humanYears are whole numbers only

// Cat Years
// 15 cat years for first year
// +9 cat years for second year
// +4 cat years for each year after that
// Dog Years
// 15 dog years for first year
// +9 dog years for second year
// +5 dog years for each year after that

function findPetYears (years) {

    let catYears = 0;
    let dogYears = 0;
    let age = [];

    if (years === 1) {
        catYears=15
        dogYears=15
    }
    if (years === 2) {
        catYears=24
        dogYears=24
    }
    if (years > 2) {
        catYears=24
        dogYears=24
        
        for (let i = 2; i < years; i++) {
            catYears+=4
            dogYears+=5
        }
    }
    age.push(years, catYears, dogYears)
    
    return `I adopted a cat and a dog ${age[0]} years ago. Now the cat is ${age[1]}, and the dog is ${age[2]} in human years.`
}

console.log(findPetYears(4))