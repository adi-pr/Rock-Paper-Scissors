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
}

const computerChoice = getComputerChoice()
const playerChoice = playerSelection()

playGame(computerChoice, playerChoice)

