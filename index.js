let user
 user = prompt('Hi, what is your username? ')
console.log(`Hi ${user}`)

let min = 1
let max
max = 5
let range = `${min} to ${max}`
let computerGuess = 3
let userGuess
userGuess = prompt(`your range is ${range} choose a number: `)

let points = 0 
if (userGuess == computerGuess) {
  points++
  console.log(`you got ${points} points`)
} else {
  console.log(`Game over you got ${points} points`)
}