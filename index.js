function getComputerChoice(x = Math.round(Math.random() * 3)) {
    if (x === 1) {
        console.log("rock");
    }
    else if (x === 2) {
        console.log("paper");
    }
    else if (x === 3) {
        console.log("scissors");
    } else {
        console.log("No match found!");
    }
}
getComputerChoice();



function getHumanChoice(x = window.prompt("Choose a Number Between 1 and 3")) {

    if (x == 1) {
        console.log("rock");
    }
    else if (x == 2) {
        console.log("paper");
    }
    else if (x == 3) {
        console.log("scissors");
    }
    else {
        console.log("No match found");
    }
}
getHumanChoice();












































