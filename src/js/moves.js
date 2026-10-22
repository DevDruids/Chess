export function getPossibleMoves(activeSquare) {
    const {row, col, piece} = activeSquare;
    const possibleMoves = [];
    
    switch (piece.toLowerCase()) {
        case 'r':
            for (let posCol = 0; posCol <= 7; posCol++) {
                console.log(posCol)
                if (posCol !== col) {
                        possibleMoves.push({
                        row: row,
                        col: posCol
                    })
                }
            }
            for (let posRow = 0; posRow <= 7; posRow++) {
                if (posRow !== row) {
                        possibleMoves.push({
                        row: posRow,
                        col: col
                    })
                }
            }
            break
        case 'b':
            let r = row - 1;
            let c = col - 1;

            while(r >= 0 && c >= 0){
                possibleMoves.push({
                    row: r,
                    col: c
                })

                r--;
                c--;
            }

            let r1 = row - 1;
            let c1 = col + 1;

            while(r1 >= 0 && c1 <= 7){
                possibleMoves.push({
                    row: r1,
                    col: c1
                })

                r1--;
                c1++;
            }

            let r2 = row + 1;
            let c2 = col - 1;

            while(r2 <= 7 && c2 >= 0){
                possibleMoves.push({
                    row: r2,
                    col: c2
                })

                r2++;
                c2--;
            }

            let r3 = row + 1;
            let c3 = col + 1;

            while(r3 <= 7 && c3 <= 7){
                possibleMoves.push({
                    row: r3,
                    col: c3
                })

                r3++;
                c3++;
            }

            
            
            break
    }

    return possibleMoves
}