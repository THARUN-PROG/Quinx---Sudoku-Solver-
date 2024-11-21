import React from 'react';
import './grid.css'; 

const Grid = ({ grid, onChange }) => {
  return (
    <div className="sudoku-grid">
      {grid.map((row, rowIndex) =>
        row.map((value, colIndex) => (
          <input
            key={`${rowIndex}-${colIndex}`}
            type="text"
            value={value || ''}
            onChange={(e) => onChange(rowIndex, colIndex, e.target.value)}
            maxLength="1"
            className="cell"
          />
        ))
      )}
    </div>
  );
};

export default Grid;
