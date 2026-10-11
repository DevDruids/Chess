import { pieces, START_POSITION } from "./constantas.js";

const chessboard = document.querySelector('.game-field');
const position = START_POSITION;
let step = "w";

function drawChessboard() {
  chessboard.innerHTML = '';

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {

      const square = document.createElement('div');
      square.classList.add('square');

      square.dataset.row = row;
      square.dataset.col = col;
      const piece = position[row][col];
      square.dataset.piece = piece;

      if ((row + col) % 2 === 0) {
        square.style.backgroundColor = '#fff';
      } else {
        square.style.backgroundColor = '#000';
      }

      if (piece !== '.') {
        const img = document.createElement('img');
        img.src = pieces[piece];
        square.append(img);
      }

      square.addEventListener('click', () => {
        const selectedSquare = chessboard.querySelector('.square.selected');
        const pieceColor = piece === piece.toUpperCase() ? 'w' : 'b';

        if (selectedSquare) {
          const fromRow = selectedSquare.dataset.row;
          const fromCol = selectedSquare.dataset.col;
          const movingPiece = position[fromRow][fromCol];

          if (fromRow === row && fromCol === col) {
            square.classList.remove('selected');
          }

          if (piece !== '.' && pieceColor === step) {
            selectedSquare.classList.remove('selected');
            square.classList.add('selected');
            return;
          }

          position[row][col] = movingPiece;
          position[fromRow][fromCol] = '.';

          step = step === 'w' ? 'b' : 'w';

          drawChessboard();
        }

        if (piece !== '.' && pieceColor === step) {
          square.classList.add('selected');
        }
      });

      chessboard.append(square);
    }
  }
}

drawChessboard();