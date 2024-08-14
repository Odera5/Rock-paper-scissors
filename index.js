function getComputerChoice(x = Math.round(Math.random() * 2)) {
    if (x === 0) {
        console.log("rock");
    }
    else if (x === 1) {
        console.log("paper");
    }
    else if (x === 2) {
        console.log("scissors");
    } else {
        console.log("No match found!");
    }
}
getComputerChoice();



function getHumanChoice(x = window.prompt("Choose a word between rock, paper and scissors")) {

    if (x == "rock") {
        console.log("rock");
    }
    else if (x == "paper") {
        console.log("paper");
    }
    else if (x == "scissors") {
        console.log("scissors");
    }
    else {
        console.log("No match found");
    }
}
getHumanChoice();

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice == "rock" && computerChoice == "scissors") {

        console.log(" You win, rock beats scissors");
        humanScore += 1;
    }

    else if (humanChoice == "rock" && computerChoice == "paper") {

        console.log("You lose, paper beats rock");
        computerScore += 1;
    }

    else if (humanChoice == "rock" && computerChoice == "rock") {

        console.log("Draw game!");
    }

    else if (humanChoice == "paper" && computerChoice == "rock") {

        console.log("You win, paper beats rock");
        humanScore += 1;
    }

    else if (humanChoice == "paper" && computerChoice == "scissors") {

        console.log("You lose, scissors beats paper");
        computerScore += 1;
    }

    else if (humanChoice == "paper" && computerChoice == "paper") {

        console.log("Draw game!");

    }

    else if (humanChoice == "scissors" && computerChoice == "rock") {

        console.log("You lose, rock beats scissors");
        computerScore += 1;
    }

    else if (humanChoice == "scissors" && computerChoice == "paper") {

        console.log("You win, scissors beats paper");
        humanScore += 1;
    }

    else if (humanChoice == "scissors" && computerChoice == "scissors") {

        console.log("Draw game!");

    }


    console.log("Your score: ${humanScore}");
    console.log("Computer score: ${computerScore}");
}



const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();



playRound(humanSelection, computerSelection);











































