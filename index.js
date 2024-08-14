function getComputerChoice(x = Math.round(Math.random() * 2)) {
    if (x === 0) {
        return "rock";
    }
    else if (x === 1) {
        return "paper";
    }
    else if (x === 2) {
        return "scissors";
    } else {
        console.log("No match found!");
    }
}
getComputerChoice();



function getHumanChoice() {
    let x = window.prompt("choose a word between rock, paper and scissors");
    x = x.trim().toLowerCase();
    if (x != "rock" && x != "paper" && x != "scissors") {
        window.alert("Invalid entry, try again!");
        getHumanChoice();
    } else {
        return x;
    }

} getHumanChoice();

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {

    if (humanChoice == "rock" && computerChoice == "paper") {
        console.log("You lose!, paper beats rock");
        computerScore += 1;
    }

    else if (humanChoice == "rock" && computerChoice == "scissors") {
        console.log("You win!, rock beats scissors");
        humanScore += 1;
    }

    else if (humanChoice == "paper" && computerChoice == "rock") {
        console.log("You win!, paper beats rock");
        humanScore += 1;
    }

    else if (humanChoice == "paper" && computerChoice == "scissors") {
        console.log("You lose!, scissors beats paper");
        computerScore += 1;
    }

    else if (humanChoice == "scissors" && computerChoice == "paper") {
        console.log("You win!, scissors beats paper");
        humanScore += 1;
    }

    else if (humanChoice == "scissors" && computerChoice == "rock") {
        console.log("You lose!, rock beats scissors");
        computerScore += 1;
    }
    else {
        console.log("Draw game!, play again")
    }

    console.log(`You score: ${humanScore}`);
    console.log(`Computer score: ${computerScore}`);



}

function playGame() {
    for (let i = 1; i < 4; i++) {
        console.log("Round" + i);
        const humanSelection = getHumanChoice();
        const computerSelectio = getComputerChoice();
        playRound(humanSelection, computerSelectio);
    }

    if (humanScore > computerScore) {
        console.log("Final result: You win!");
    }
    else if (computerScore > humanScore) {
        console.log("Final result: You lose!");
    }
    else {
        console.log("Tie game!");
    }

}
playGame();






























