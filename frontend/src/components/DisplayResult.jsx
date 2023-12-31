import PropTypes from 'prop-types';

const DisplayResult = ({ showResult, winner, handlePlayAgain, handleExit }) => {
  return (
    showResult && (
      <div className="overlay">
        <div className="box">
          <p className="text-xl font-semibold">
            {winner === 'draw' ? 'Draw!' : `${winner === 'player1' ? 'Player Red' : 'Player Yellow'} wins!`}
          </p>
          <div className="options">
            <button onClick={handlePlayAgain} className="button">
              Play Again
            </button>
            <button onClick={handleExit} className="button">
              Exit
            </button>
          </div>
        </div>
      </div>
    )
  );
};

DisplayResult.propTypes = {
    showResult: PropTypes.func.isRequired,
    winner: PropTypes.func.isRequired,
    handlePlayAgain: PropTypes.func.isRequired,
    handleExit: PropTypes.func.isRequired,
  };

export default DisplayResult;
