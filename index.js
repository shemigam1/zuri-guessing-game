let username;
username = prompt("Hi, what is your username? ");
console.log(`Hi ${username}`);

let range = [1, 2]
let lastRange = range[range.length -1] 
let points = 0
let stage = 1
console.log(`stage ${stage}, range is 1 to ${lastRange}, you've got ${points} points`)

// console.log(lastRange)


const game = function() {
  let userGuess = prompt('Guess a number: ')
  if(userGuess<1 || userGuess > lastRange){
    console.log('Enter a value within the range')
    game()
  }

  let computerGuess = Math.floor(Math.random() * range.length + 1);
  const ifCorrect = (replay) => {
    if (replay == true) {
      console.log(`stage ${stage}, range is 1 to ${lastRange}`)
    }else {
    lastRange++
    range.push(lastRange)
    console.log(range)
    points++
    stage++
    console.log(`stage ${stage}, range is 1 to ${lastRange}`)
    console.log(`Congratulations🏆🙌, you've got ${points} points`)
    }
    game()
    
  }
  
  const ifNotCorrect = () => {

      console.log(`sorry😭, game over, you got've ${points} points`)
  }
  

 const gameLogic = () => {
    if (userGuess == computerGuess){
  ifCorrect(false)
    
  } else {
  ifNotCorrect()
      let tryAgain = prompt('continue anyways? say yes or no ')
    if (tryAgain.toLowerCase() == 'yes') {
      ifCorrect(true)
      
    }else if (tryAgain.toLowerCase() == 'no') {
      console.log('GG. Good Game... try again later👍 press ctrl + c to exit ')
      
    }else {
      console.log('type valid input')
    }
    
  }
 }
  for(let i = 1; i<range.length; i++ ) {
    gameLogic()
    
    break
    
  }
}
game()