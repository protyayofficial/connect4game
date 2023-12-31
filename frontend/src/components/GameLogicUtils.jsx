import checkWin from './CheckWin';

export const checkGameStatus = (boardState, rows, columns, winner, setWinner, setShowResult) => {
  let isBoardFull = true;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < columns; col++) {
      if (!boardState[row][col]) {
        isBoardFull = false;
        break;
      }
    }
    if (!isBoardFull) {
      break;
    }
  }

  if (isBoardFull && !winner) {
    setShowResult(true);
    setWinner('draw');
  } else {
    for (let row = 0; row < rows; row++) {
      for (let col = 0; col < columns; col++) {
        if (boardState[row][col] && checkWin(boardState, row, col, boardState[row][col])) {
          setWinner(boardState[row][col]);
          setShowResult(true);
          return;
        }
      }
    }
  }
};

export const handleDropToken = (boardState, rows, columns, currentPlayer, columnIndex, setBoardState, setCurrentPlayer, winner) => {
    if (winner) return;
  
    const updatedBoard = [...boardState];
    const column = updatedBoard.map((row) => row[columnIndex]);
  
    if (!column.includes(null)) {
      return;
    }
  
    for (let i = rows - 1; i >= 0; i--) {
      if (!updatedBoard[i][columnIndex]) {
        updatedBoard[i][columnIndex] = currentPlayer;
        break;
      }
    }
    setBoardState(updatedBoard);
    setCurrentPlayer(currentPlayer === 'player1' ? 'player2' : 'player1');
  };


  