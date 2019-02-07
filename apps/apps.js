
let options = {
  choice1: 'Rock',
  choice2: 'Paper',
  choice3: 'Scissors'
}


function random() {
  let choices = Object.keys(options)
  let choiceIndex = Math.floor(Math.random() * 3)
  let choice = choices[choiceIndex]
  return options[choice];
}




function play(playerChoice) {
  let result = ''
  let compChoice = random()
  console.log(compChoice)
  if (playerChoice == compChoice) { result = "Draw" }
  else if (playerChoice == options.choice1 && compChoice == options.choice2) { result = "Loser!" }
  else if (playerChoice == options.choice2 && compChoice == options.choice3) { result = "Loser!" }
  else if (playerChoice == options.choice3 && compChoice == options.choice1) { result = "Loser!" }
  else result = "WINNER!!!!"

  document.getElementById('rockbtn').innerText = result
}

// //Display winner to screen
// function display(winner) {
//   let displayResult = ''
//   if (winner == 'user') {
//     displayResult = 'WIN'
//   } else if (winner == 'computer') {
//     displayResult = 'LOSE'
//   } else {
//     displayResult = 'DRAW'
//   }






