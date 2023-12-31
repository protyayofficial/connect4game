import PropTypes from 'prop-types';
import Cell from './Cell';
import Marble from './Marble'; // Import the Marble component

const Board = ({ boardState, activeColumn, currentPlayer, handleMouseMove, handleDrop }) => {
  return (
    <div className="flex flex-col items-center mt-12">
      {/* Active Marble Row */}
      <div className="flex mb-3">
        {boardState[0].map((_, columnIndex) => (
          <div
            key={columnIndex}
            className={`cell w-16 h-16 rounded-full flex items-center justify-center ${
              activeColumn === columnIndex ? 'bg-gray-300' : 'bg-transparent'
            }`}
            style={{ padding: '3px' }} // Adjust the padding to align with the marbles
          >
            {columnIndex === activeColumn && (
              <Marble player={currentPlayer} />
            )}
          </div>
        ))}
      </div>

      {/* Board */}
      <div
        className="board bg-blue-700 rounded-lg p-4"
        onMouseMove={handleMouseMove}
        onClick={(currentPlayer === 'player1' || currentPlayer === 'player2') ? handleDrop : null}
      >
        {boardState.map((row, rowIndex) => (
          <div key={rowIndex} className="flex">
            {row.map((cell, columnIndex) => (
              <Cell
                key={columnIndex}
                cellValue={cell}
                handleDrop={(currentPlayer === 'player1' || currentPlayer === 'player2') ? () => handleDrop(columnIndex) : null} 
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

Board.propTypes = {
  boardState: PropTypes.array.isRequired,
  activeColumn: PropTypes.number,
  currentPlayer: PropTypes.string.isRequired,
  handleMouseMove: PropTypes.func.isRequired,
  handleDrop: PropTypes.func.isRequired,
};

export default Board;
