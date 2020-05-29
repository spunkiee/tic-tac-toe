const cells = document.querySelectorAll('.cell');
const newGame = document.querySelector(".new_game_button");
const winner = document.querySelector(".winner_dialog");

let turn = 1;

function changeValue(element) {
  if (!element.textContent) {
    if (turn % 2 === 0) {
      element.textContent = "O";
    } else if (turn % 2 === 1) {
      element.textContent = "X";
    }
    turn++;
  }
}

let victoryConditions = [
  [
    cells[0],
    cells[1],
    cells[2]
  ],
  [
    cells[3],
    cells[4],
    cells[5]
  ],
  [
    cells[6],
    cells[7],
    cells[8]
  ],
  [
    cells[0],
    cells[4],
    cells[8]
  ],
  [
    cells[2],
    cells[4],
    cells[6]
  ],
  [
    cells[0],
    cells[3],
    cells[6]
  ],
  [
    cells[1],
    cells[4],
    cells[7]
  ],
  [
    cells[2],
    cells[5],
    cells[8]
  ]
];

function checkVictory() {
  let victoryX = victoryConditions.map(option =>
    option.every(element => element.textContent === "X")
  );
  let victoryO = victoryConditions.map(option =>
    option.every(element => element.textContent === "O")
  );
  
  if (victoryX.includes(true)) {
    announceVictory("X");
  } else if (victoryO.includes(true)) {
    announceVictory("O");
  } else if (turn === 10) {
    announceVictory("None");
  }
}
const announceVictory = victor => {
  if (victor === "X") {
    winner.textContent = "X Wins! Cheers!";
    turn = NaN;
  } else if (victor === "O") {
    winner.textContent = "O Wins! Hurrey!";
    turn = NaN;
  } else if (victor === "None") {
    winner.textContent = "It's a Tie!";
    turn = NaN;
  }
}
function restart() {
  cells.forEach(function(element) {
    element.textContent = "";
  });
  winner.textContent = "";
  turn = 1;
}

cells.forEach(cell => cell.addEventListener('click', function (e) {
  changeValue(cell);
  checkVictory();
}))

newGame.addEventListener("click", restart);