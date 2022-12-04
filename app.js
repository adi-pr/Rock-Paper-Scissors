// Gets Random Item
function randomItem(items) {
    return items[Math.floor(Math.random() * items.length)]
}

// Gets computer choice
function getComputerChoice() {
    const choices = ["ROCK", "PAPER", "SCISSORS"]
    return randomItem(choices)
}

// Promt user for input
function playerSelection() {
    const input = prompt("Rock, Paper or Scissors")
    return input.toUpperCase()
}

// Game Logic
function playGame(computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        console.log("Tie Game")
    }
    if (computerChoice === "ROCK" && playerChoice === "PAPER") {
        console.log("You Win!")
    }

    if (computerChoice === "PAPER" && playerChoice === "SCISSORS") {
        console.log("You Win!")
    }
    if (computerChoice === "SCISSORS" && playerChoice === "ROCK") {
        console.log("You Win!")
    }
    if (computerChoice === "PAPER" && playerChoice === "ROCK") {
        console.log("You Lose!")
    }

    if (computerChoice === "SCISSORS" && playerChoice === "PAPER") {
        console.log("You Lose!")
    }
    if (computerChoice === "ROCK" && playerChoice === "SCISSORS") {
        console.log("You Lose!")
    }
}

// Stores Selections 
const computerChoice = getComputerChoice()
const playerChoice = playerSelection()

// Outputs Game Result
console.log(`Computer Choice: ${computerChoice}`)
console.log(`Your Choice: ${playerChoice}`)
playGame(computerChoice, playerChoice)