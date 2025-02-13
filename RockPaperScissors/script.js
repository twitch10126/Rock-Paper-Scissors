const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const results = document.getElementById("results");
const rulesWindow = document.getElementById("rules-window");
const rulesBtn = document.getElementById("rules-btn");
const closeBtn = document.getElementById("close-btn");
const playerScores = document.getElementById("player-score");
const computerScores = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;


function playGame(playerTurn) {

    const computerChoice = computerTurn();
    const result = determineWinner(playerTurn, computerChoice);
    results.textContent = `Rock, Paper, Scissors!. You picked... ${playerTurn}!. The computer chose... ${computerChoice}!. The result is.... ${result}.`;

    if (result === "Player Wins!"){
        playerScore++
    }else if (result === "Computer Wins"){
        computerScore++
    }else if (result === "Its a Draw!"){
        return;
    }

    playerScores.textContent = playerScore;
    computerScores.textContent = computerScore;

    if (playerScore === 3){

        results.textContent = "Player wins!";
        reset();

    }else if (computerScore === 3){

        results.textContent = "Computer Wins!";
        reset();

    }


}

function reset(){
    playerScore = 0;
    computerScore = 0;
    playerScores.textContent = playerScore;
    computerScores.textContent = computerScore;
}


function computerTurn() {
    const random = Math.ceil(Math.random() * 3);

    switch (random) {
        case 1:
            return "Rock";
            break;
        case 2:
            return "Paper";
            break;
        default:
            return "Scissors";
            break;
    };
};

function determineWinner(playerTurn, computerTurn) {
    if (
        (playerTurn === "Rock" && computerTurn === "Scissors") ||
        (playerTurn === "Paper" && computerTurn === "Rock") ||
        (playerTurn === "Scissors" && computerTurn === "Paper")

    ) {
        return "Player Wins!";
    }
    else if (computerTurn === playerTurn) {
        return "Its a Draw!";
    }
    else {
        return "Computer Wins";
    }
}



rock.addEventListener("click", () => {

    playGame("Rock")

});

paper.addEventListener("click", () => {

    playGame("Paper")
    
});

scissors.addEventListener("click", () => {

    playGame("Scissors")

});

rulesBtn.addEventListener("click", () => {

    rulesBtn.classList.add("hidden");
    rulesWindow.classList.remove("hidden"); 
    results.textContent = "";

});

closeBtn.addEventListener("click", () => {

    rulesWindow.classList.add("hidden");
    rulesBtn.classList.remove("hidden");

});



