const rows = 6
const columns = 7

const checkWin = (board, row, col, player) => {
    // Check horizontally
    for (let c = 0; c <= columns - 4; c++) {
      if (
        board[row][c] === player &&
        board[row][c + 1] === player &&
        board[row][c + 2] === player &&
        board[row][c + 3] === player
      ) {
        return true;
      }
    }

    // Check vertically
    for (let r = 0; r <= rows - 4; r++) {
      if (
        board[r][col] === player &&
        board[r + 1][col] === player &&
        board[r + 2][col] === player &&
        board[r + 3][col] === player
      ) {
        return true;
      }
    }

    // Check diagonally (positive slope)
    for (let r = 0; r <= rows - 4; r++) {
      for (let c = 0; c <= columns - 4; c++) {
        if (
          board[r][c] === player &&
          board[r + 1][c + 1] === player &&
          board[r + 2][c + 2] === player &&
          board[r + 3][c + 3] === player
        ) {
          return true;
        }
      }
    }

    // Check diagonally (negative slope)
    for (let r = 3; r < rows; r++) {
      for (let c = 0; c <= columns - 4; c++) {
        if (
          board[r][c] === player &&
          board[r - 1][c + 1] === player &&
          board[r - 2][c + 2] === player &&
          board[r - 3][c + 3] === player
        ) {
          return true;
        }
      }
    }

    return false;
  };

export default checkWin;