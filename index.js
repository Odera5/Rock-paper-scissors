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




function getHumanChoice() {
    /* let x = window.prompt("choose a word between rock, paper and scissors");
     x = x.trim().toLowerCase();
     if (x != "rock" && x != "paper" && x != "scissors") {
         window.alert("Invalid entry, try again!");
         getHumanChoice();
     } else {
         return x;
     }*/

    if (rockButton) {
        return "rock";
    }
    else if (paperButton) {
        return "paper"
    }
    else if (scissorsButton) {
        return "scissors"
    }
    else {
        console.log("invalid key")
    }

}

let humanScore = 0;
let computerScore = 0;



function playRound(humanChoice, computerChoice) {

    if (humanChoice == "rock" && computerChoice == "paper") {

        para.innerHTML = "You lose!, paper beats rock";
        computerScore += 1;
    }

    else if (humanChoice == "rock" && computerChoice == "scissors") {
        para.innerHTML = "You win!, rock beats scissors";
        humanScore += 1;
    }

    else if (humanChoice == "paper" && computerChoice == "rock") {

        para.innerHTML = "You win!, paper beats rock";
        humanScore += 1;
    }

    else if (humanChoice == "paper" && computerChoice == "scissors") {
        para.innerHTML = "You lose!, scissors beats paper";
        computerScore += 1;
    }

    else if (humanChoice == "scissors" && computerChoice == "paper") {
        para.innerHTML = "You win!, scissors beats paper";
        humanScore += 1;
    }

    else if (humanChoice == "scissors" && computerChoice == "rock") {
        para.innerHTML = "You lose!, rock beats scissors";
        computerScore += 1;
    }
    else {
        para.innerHTML = "Draw game!, play again";
    }

    //console.log(`You score: ${humanScore}`);
    //console.log(`Computer score: ${computerScore}`);


    //parap.innerHTML = `You score: ${humanScore}`;

    // parap.innerHTML = `Computer score: ${computerScore}`;


    if (humanScore) {
        parap.innerHTML = `You score: ${humanScore}, Computer score: ${computerScore}`;

    } else {
        parap.innerHTML = `Computer score: ${computerScore}, You score: ${humanScore}`;

    }


}

function playGame() {

    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);


    if (humanScore == 5) {
        //parapp.innerHTM = "Final result: You win!";
        parapp.textContent = "Gameover: You win!   Start Again";
        //console.log("Final result: You win!");
    }
    else if (computerScore == 5) {
        parapp.textContent = "GameOver: Computer Wins!   Start Again";
        // parapp.innerHTM = "Final result: You lose!";
        //console.log("Final result: Computer Wins!");
    }
    else if (humanScore && computerScore == 5) {
        // parapp.innerHTM = "Tie game!";
        //console.log("Tie game!");
    }



}

const rockButton = document.querySelector("#rck");
const paperButton = document.querySelector("#pap");
const scissorsButton = document.querySelector("#sci");
const stopButton = document.querySelector("#stop")
const para = document.querySelector("#para");
const parap = document.querySelector("#parap");
const parapp = document.querySelector("#parapp");


rockButton.addEventListener('click', playGame
)

paperButton.addEventListener('click', playGame
)

scissorsButton.addEventListener('click', playGame
)


function restartButton() {

    para.textContent = "Choose a Game";
    parap.textContent = "";
    parapp.textContent = "";
}

stopButton.addEventListener("click", restartButton)






















