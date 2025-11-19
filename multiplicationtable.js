// Your goal is to return multiplication table for number that is always an integer from 1 to 10.

function multiTable(number) {

    let table = '';
    for (let i = 1; i <= 10; i++) {
        table += `${i} * ${number} = ${i*number}\n`
    }
    return table.slice(0, -1)
}

console.log(multiTable(3))