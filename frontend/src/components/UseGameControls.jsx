import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UseGameControls = (initialRows, initialColumns) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [rows, ] = useState(initialRows);
  const [columns, ] = useState(initialColumns);
  const navigate = useNavigate();

  const handleStartGame = () => {
    setGameStarted(true);
  };

  const handleExit = () => {
    navigate('/');
  };

  const resetGame = (setBoardState, setCurrentPlayer, setWinner, setShowResult) => {
    setBoardState(() =>
      Array(rows)
        .fill(null)
        .map(() => Array(columns).fill(null))
    );
    setCurrentPlayer('player1');
    setWinner(null);
    setShowResult(false);
  };

  const handlePlayAgain = (setBoardState, setCurrentPlayer, setWinner, setShowResult) => {
    resetGame(setBoardState, setCurrentPlayer, setWinner, setShowResult);
  };

  return {
    gameStarted,
    rows,
    columns,
    handleStartGame,
    handleExit,
    handlePlayAgain,
  };
};

export default UseGameControls;
