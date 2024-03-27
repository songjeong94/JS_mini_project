// function sum() {
//     return arguments.reduce((total, el) => total + el)
// }

// function sum(...nums) {
//     return nums.reduce((total, el) => total + el)
// }

function reaceResults(gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}`)
    console.log(`SILVER MEDAL GOES TO: ${silver}`)
    console.log(`AND MEDAL GOES TO: ${everyoneElse}`)
}