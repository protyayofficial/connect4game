import React, { useState, useEffect } from 'react';
import './AllGame.css';
import StartGameOverlay from './StartGameOverlay';
import Board from './Board';
import DisplayResult from './DisplayResult';
import { checkGameStatus } from './GameLogicUtils';
import UseGameControls from './UseGameControls';
import UseMouseMovement from './UseMouseMovement';

const PlayWithAIMode = () => {
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

  const makeAIMove = async () => {
    try {
      const response = await fetch('http://localhost:5000/get_ai_move', {
        method: 'POST',
        headers: {
          'Accept' : 'application/json',
          'Content-Type' : 'application/json',
        },
        mode: 'cors',
        body: JSON.stringify({ boardState}),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }

      const data = await response.json();
      const aiColumn = data.column

      console.log(aiColumn)
      if (aiColumn >= 0 && aiColumn < columns) {
        if (!winner) {
          const updatedBoard = [...boardState];
          const columnIndex = aiColumn;

          for (let i = rows - 1; i >= 0; i--) {
            if (!updatedBoard[i][columnIndex]) {
              updatedBoard[i][columnIndex] = currentPlayer;
              break;
            }
          }

          setBoardState(updatedBoard);
          setCurrentPlayer(currentPlayer === 'AI' ? 'player1' : 'AI');
        }
      }
    } catch (error) {
      // Handle errors
      console.error('Error:', error);
    }
  };

  
  const { handleMouseMove } = UseMouseMovement(columns, rows, setActiveColumn, setActiveRow);

  const handleDrop = (e) => {
    e.stopPropagation(); // Prevent event bubbling

    if (!winner) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const columnIndex = Math.floor(x / 68); // Each marble is 64x64px
      if (columnIndex >= 0 && columnIndex < columns) {
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
        setCurrentPlayer(currentPlayer === 'player1' ? 'AI' : 'player1');
        checkGameStatus(boardState, rows, columns, winner, setWinner, setShowResult); // Check for winner after AI move
        
      }
    }
  };

  useEffect(() => {
    checkGameStatus(boardState, rows, columns, winner, setWinner, setShowResult);
    if (currentPlayer === 'AI') {
      makeAIMove(); // Trigger AI move when it's AI's turn
      checkGameStatus(boardState, rows, columns, winner, setWinner, setShowResult); // Check for winner after AI move
    }
  }, [boardState, columns, currentPlayer, rows, winner]);

  console.log(boardState)

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
        } 
        handleExit={handleExit}
      />
    </div>
  );
};

export default PlayWithAIMode;
