function playRound(humanChoice, computerChoice) {
    if (humanChoice === -1) {
        console.log("Invalid input")
        return -1;
    } else {
        let isTie = humanChoice === computerChoice;
        let humanWin = (humanChoice - computerChoice === 1) || (computerChoice - humanChoice === 2)
        if (isTie) {
            console.log("Tie")
            return -1;
        } else if (humanWin){
            console.log("You Win!")
            return 1;
        } else {
            console.log("You Lose!")
            return 0;
        }
    }
    // your code here!
}

function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    console.log(num);
    return num;
}

function getHumanChoice() {
    let input = prompt("Enter your move: ").toLowerCase()
    if (input === "rock") {
        return 0;
    } else if (input === "paper") {
        return 1;
    } else if (input === "scissors") {
        return 2;
    } else {
        return -1;
    }

}

function playGame() {
    let gameCount = 0;
    let winCount = 0;
    while (gameCount < 5) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        let roundResult = playRound(humanSelection, computerSelection);
        if (roundResult != -1) {
            gameCount += 1;
            winCount += roundResult;
        }
    }
    if (winCount >= 3) {
        console.log("You Win the Game!")
    } else {
        console.log("You Lose the Game!")
    }
}


playGame();
