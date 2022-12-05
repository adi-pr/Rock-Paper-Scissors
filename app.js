// Gets Random Item
function randomItem(items) {
    return items[Math.floor(Math.random() * items.length)]
}

// Gets computer choice
function getComputerChoice() {
    const choices = ["ROCK", "PAPER", "SCISSORS"]
    return randomItem(choices)
}

// Prompt user for input
function getPlayerSelection() {
    const input = prompt("Rock, Paper or Scissors")
    return input.toUpperCase()
}

// Game Logic
function playGame(computerChoice, playerChoice) {

    const  win = "You Win!"
    const  lose = "You Lose!"
    const  tie = "Tie Game!"

    if (computerChoice === playerChoice) {
        return tie
    }
    if (computerChoice === "ROCK" && playerChoice === "PAPER") {
        return win
    }

    if (computerChoice === "PAPER" && playerChoice === "SCISSORS") {
        return win
    }
    if (computerChoice === "SCISSORS" && playerChoice === "ROCK") {
        return win
    }
    if (computerChoice === "PAPER" && playerChoice === "ROCK") {
        return lose
    }

    if (computerChoice === "SCISSORS" && playerChoice === "PAPER") {
        return lose
    }
    if (computerChoice === "ROCK" && playerChoice === "SCISSORS") {
        return lose
    }
}

function game(playerChoice) {
        const computerChoice = getComputerChoice()
    
        console.log(`Computer Choice: ${computerChoice}, Your Choice: ${playerChoice}`)
        return playGame(computerChoice, playerChoice)
}

// Button Logic
const buttons = document.querySelectorAll('button')
const container = document.querySelector('#container')
const content = document.createElement('div')
const playerWins = document.createElement('div')
const computerWins = document.createElement('div')

buttons.forEach((button) => {
    
    // Vars
    const playerChoice = button.id.toUpperCase()
    let wins = 0;
    let compWins = 0;
    
    button.addEventListener('click', () => {
        result = game(playerChoice)
        content.textContent = result
        
        if (result === "You Win!") {
            wins++
        }
        else if (result === "You Lose!") {
            compWins++
        } else {
            return
        }

        if (wins === 5) {
            alert("You Won!")
            wins = 0
            compWins = 0
        }
        if (compWins === 5) {
            alert("You Lost!")
            wins = 0
            compWins = 0
        }


        content.classList.add('content')
        playerWins.classList.add('player-wins')
        computerWins.classList.add('computer-wins')

        playerWins.textContent = wins
        computerWins.textContent = compWins

        container.appendChild(content)
        container.appendChild(playerWins)
        container.appendChild(computerWins)
    });
});
