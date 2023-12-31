import { useState, useEffect } from 'react';
import './AllGame.css';
import StartGameOverlay from './StartGameOverlay';
import Board from './Board';
import DisplayResult from './DisplayResult';
import { checkGameStatus, handleDropToken } from './GameLogicUtils';
import UseGameControls from './UseGameControls';
import UseMouseMovement from './UseMouseMovement';

const TwoPlayerMode = () => {
  const initialRows = 6;
  const initialColumns = 7;
  const [showResult, setShowResult] = useState(false);
  const [boardState, setBoardState] = useState(() =>
    Array(initialRows)
      .fill(null)
      .map(() => Array(initialColumns).fill(null))
  );
  const [currentPlayer, setCurrentPlayer] = useState('player1');
  const [winner, setWinner] = useState(null);
  const [activeColumn, setActiveColumn] = useState(null);
  const [, setActiveRow] = useState(null);

  const {
    gameStarted,
    rows,
    columns,
    handleStartGame,
    handleExit,
    handlePlayAgain,
  } = UseGameControls(initialRows, initialColumns);

  const { handleMouseMove } = UseMouseMovement(columns, rows, setActiveColumn, setActiveRow);

  const handleDrop = (e) => {
    e.stopPropagation(); // Prevent event bubbling

    if (!winner) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const columnIndex = Math.floor(x / 68); // Each marble is 64x64px
      if (columnIndex >= 0 && columnIndex < columns) {
        handleDropToken(boardState, rows, columns, currentPlayer, columnIndex, setBoardState, setCurrentPlayer, winner, setShowResult, setWinner);
      }
    }
  };

  useEffect(() => {
    checkGameStatus(boardState, rows, columns, winner, setWinner, setShowResult);
  }, [boardState, columns, rows, winner]);

  return (
    <div className="flex flex-col items-center">
      {!gameStarted ? (
        <StartGameOverlay
          handleStartGame={handleStartGame}
          handleExit={handleExit}
        />
      ) : (
        <Board
          boardState={boardState}
          activeColumn={activeColumn}
          currentPlayer={currentPlayer}
          handleMouseMove={handleMouseMove}
          handleDrop={handleDrop}
        />
      )}
      <DisplayResult
        showResult={showResult}
        winner={winner}
        handlePlayAgain={() =>
          handlePlayAgain(setBoardState, setCurrentPlayer, setWinner, setShowResult)
        } // Ensure you're passing the correct arguments here
        handleExit={handleExit}
      />
    </div>
  );
};

export default TwoPlayerMode;
