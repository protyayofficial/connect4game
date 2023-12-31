import PropTypes from 'prop-types';

const StartGameOverlay = ({ handleStartGame, handleExit }) => {
  return (
    <div className="overlay">
      <div className="box">
        <p className="text-xl font-semibold">
          Welcome to the game! Red player starts. Hover over any column on the board to place your marble and make a move
        </p>
        <div className="options">
          <button onClick={handleStartGame} className="button">
            Start Game
          </button>
          <button onClick={handleExit} className="button">
            Exit
          </button>
        </div>
      </div>
    </div>
  );
};

StartGameOverlay.propTypes = {
  handleStartGame: PropTypes.func.isRequired,
  handleExit: PropTypes.func.isRequired,
};

export default StartGameOverlay;
