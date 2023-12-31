import PropTypes from 'prop-types';

const Marble = ({ player }) => {
  return (
    <div className={`token rounded-full ${player === 'human' || player === 'player1' ? 'bg-red-500' : 'bg-yellow-500'}`}></div>
  );
};

Marble.propTypes = {
  player: PropTypes.oneOf(['human', 'player1']).isRequired,
};

export default Marble;
