import "./styles.css";

var rows = 5;
let turn = "X";
var boxes = [];
let moves = 0;
const gameWon = [
  [0, 1, 2, 3, 4],
  [5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14],
  [15, 16, 17, 18, 19],
  [20, 21, 22, 23, 24],
  [0, 6, 12, 18, 24],
  [4, 8, 12, 16, 20],
  [0, 5, 10, 15, 20],
  [1, 6, 11, 16, 21],
  [2, 7, 12, 17, 22],
  [3, 8, 13, 18, 23],
  [4, 9, 14, 19, 24]
];

if (document.readyState !== "loading") {
  console.log("Document ready, executing");
  initializeCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("Document ready, executing after a wait");
    initializeCode();
  });
}

function initializeCode() {
  let table = document.getElementById("board");
  //var k = 0;
  //var rows = 5;
  for (var i = 0; i < rows; i++) {
    var row = document.createElement("tr");
    table.appendChild(row);
    for (var j = 0; j < rows; j++) {
      var cell = document.createElement("td");
      cell.className = "cell";
      row.appendChild(cell);
      //cell.setAttribute('data-index',(i)*4 +k +j);
      /*if (i === j) {
        cell.classList.add('lavistaja1');
      }
      if (j === rows - i - 1) {
        cell.classList.add('lavistaja2');
      }
      */

      cell.addEventListener("click", playTurn);
      boxes.push(cell);
    }
    //k = k+1;
  }
  boxes.forEach(function (mark, index) {
    //console.log(mark, index);
  });
}

function playTurn() {
  if (this.innerHTML === "X" || this.innerHTML === "O") {
    return;
  }
  this.innerHTML = turn;
  moves = moves + 1;
  let winner = null;
  //let data_index = this.getAttribute('data-index');
  gameWon.forEach((combo, index) => {
    //console.log("data-index: " + this.getAttribute('data-index'));
    /*console.log("combo: " + combo);
    console.log("index: " + index);
    console.log("boxes[combo]"+boxes[combo[0]].innerHTML);
    console.log("boxes[combo]"+boxes[combo[1]].innerHTML);
    console.log("boxes[combo]"+boxes[combo[2]].innerHTML);
    console.log("boxes[combo]"+boxes[combo[3]].innerHTML);
    console.log("boxes[combo]"+boxes[combo[4]].innerHTML);
    */
    if (
      boxes[combo[0]].innerHTML &&
      boxes[combo[0]].innerHTML === boxes[combo[1]].innerHTML &&
      boxes[combo[0]].innerHTML === boxes[combo[2]].innerHTML &&
      boxes[combo[0]].innerHTML === boxes[combo[3]].innerHTML &&
      boxes[combo[0]].innerHTML === boxes[combo[4]].innerHTML
    ) {
      winner = boxes[combo[0]].innerHTML;
      console.log("Player " + turn + " won!");
    }
  });
  if (winner === "X" || winner === "O") {
    alert("Player " + turn + " wins!");
    newGame();
    winner = null;
  } else if (moves === rows * rows) {
    alert("Tie!");
    newGame();
    winner = null;
  } else {
    if (turn === "X") {
      turn = "O";
    } else {
      turn = "X";
    }
  }
}

function newGame() {
  const myNode = document.getElementById("board");
  while (myNode.firstChild) {
    myNode.removeChild(myNode.lastChild);
  }
  turn = "X";
  boxes = [];
  moves = 0;
  initializeCode();
}
