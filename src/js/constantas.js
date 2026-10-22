// export const START_POSITION = [
//     ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
//     ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
//     ['.', '.', '.', '.', '.', '.', '.', '.'],
//     ['.', '.', '.', '.', '.', '.', '.', '.'],
//     ['.', '.', '.', '.', '.', '.', '.', '.'],
//     ['.', '.', '.', '.', '.', '.', '.', '.'],
//     ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
//     ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
// ];
export const START_POSITION = [
    ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', 'R', '.', '.', 'B', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', '.', '.', '.', '.', '.', '.', '.'],
    ['.', 'N', 'B', 'Q', 'K', '.', 'N', 'R']
];
export const PIECES_SRC = {
  r: './src/image/black_rook.png',
  n: './src/image/black_knight.png',
  b: './src/image/black_bishop.png',
  q: './src/image/black_queen.png',
  k: './src/image/black_king.png',
  p: './src/image/black_pawn.png',

  R: './src/image/white_rook.png',
  N: './src/image/white_knight.png',
  B: './src/image/white_bishop.png',
  Q: './src/image/white_queen.png',
  K: './src/image/white_king.png',
  P: './src/image/white_pawn.png',
};