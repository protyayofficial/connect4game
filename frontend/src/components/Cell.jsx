import Marble from './Marble';
import PropTypes from 'prop-types';

const Cell = ({ cellValue, handleDrop }) => {
  return (
    <div
      className="cell w-16 h-16 rounded-full flex items-center justify-center bg-white"
      onClick={handleDrop}
    >
      {cellValue && <Marble player={cellValue} />}
    </div>
  );
};

Cell.propTypes = {
    cellValue: PropTypes.array.isRequired,
    handleDrop: PropTypes.string.isRequired,
  };

export default Cell;
