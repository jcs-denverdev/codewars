// Write function bmi that calculates body mass index (bmi = weight / height).

// if bmi <= 18.5 return "Underweight"
// if bmi <= 25.0 return "Normal"
// if bmi <= 30.0 return "Overweight"
// if bmi > 30 return "Obese"

function bmi(weight, height) {

    let x = weight / (height**2)
    console.log(x)
    if (x <= 18.5) {
        return "Underweight"
    } else if (x <= 25) {
        return "Normal"
    } else if (x <= 30) {
        return "Overweight"
    } else if (x > 30) {
        return "Obese"
    }
    

}


console.log(bmi(50, 1.8));