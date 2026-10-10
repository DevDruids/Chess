import { pieces, START_POSITION } from "./constantas.js";

const chessboard = document.querySelector('.game-field');
const position = START_POSITION;
let step = "w";

function drawChessboard() {
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {

      const square = document.createElement('div');
      square.classList.add('square');

      square.addEventListener('click', () => {
        const pieceColor = piece === piece.toUpperCase() ? 'w' : 'b';

        if (pieceColor === step) {
          document.querySelectorAll('.square.selected').forEach(el => el.classList.remove('selected'));
          square.classList.toggle('selected');
        }
      })

      square.dataset.row = row;
      square.dataset.col = col;

      if ((row + col) % 2 === 0) {
        square.style.backgroundColor = '#fff';
      } else {
        square.style.backgroundColor = '#000';
      }

      const piece = position[row][col];

      square.dataset.piece = piece;

      if (piece !== '.') {
        const img = document.createElement('img');
        img.src = pieces[piece];
        square.append(img);
      }

      square.onclick = () => {
        console.log(square.dataset.row, square.dataset.col, square.dataset.piece)
      }

      chessboard.append(square);
    }
  }
}

drawChessboard()