const movesElement = document.getElementsByClassName("move");
const playerElement = document.getElementById("player");
const computerElement = document.getElementById("computer");

let computerMoves = ["✊", "🖐️", "✌️"];
let computerMove = "";
let playerMove = "";

// console.log(movesElement[0]);

for (let moveElement of movesElement) {
  moveElement.addEventListener("click", () => {
    displayPlayerMove(moveElement.innerText);
    displayComputerMove();
    computeScores();
  });
}

function displayPlayerMove(move) {
  playerMove = move;
  playerElement.innerText = "🤩:" + playerMove;
}

function displayComputerMove() {
  let randomIndex = Math.floor(Math.random() * 3);
  computerMove = computerMoves[randomIndex];
  computerElement.innerText = "🤪:" + computerMove;
}

function computeScores() {
  if (
    (playerMove === "✊" && computerMove === "✌️") ||
    (playerMove === "🖐️" && computerMove === "✊") ||
    (playerMove === "✌️" && computerMove === "🖐️")
  ) {
  }
}
