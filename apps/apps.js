let things = {
  rock: {
    img: '/assets/photos/rock-dude.jpg'
  },
  paper: {
    img: '/assets/photos/paper-smiley.jpg'
  },
  scissors: {
    img: '/assets/photos/scissors-happy.png'
  }
}



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

// function displayCompImg() {
//   let result = src=""
//   let compChoice = random()
//   if (compChoice == options.choice1) { result = things.rock.img }
//   else if (compChoice == options.choice2) { result = things.paper.img }
//   else result = things.scissors.img
// }



function play(playerChoice) {
  let result = ''
  let compChoice = random()
  console.log(compChoice)
  document.getElementById('compresult').innerText = compChoice
  if (playerChoice == compChoice) { result = "Draw" }
  else if (playerChoice == options.choice1 && compChoice == options.choice2) { result = "Loser!" }
  else if (playerChoice == options.choice2 && compChoice == options.choice3) { result = "Loser!" }
  else if (playerChoice == options.choice3 && compChoice == options.choice1) { result = "Loser!" }
  else result = "WINNER!!!!"
  document.getElementById('rockbtn').innerText = result
}