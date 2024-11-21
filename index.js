import React, { useState } from 'react';
import Grid from '../components/Grid';
import Buttons from '../components/Buttons';
import { isValidSudoku, solveSudoku } from '../utils/sudokuSolver';

const Home = () => {
  const [grid, setGrid] = useState(Array(9).fill(Array(9).fill(null)));
  const [error, setError] = useState('');

  const handleChange = (row, col, value) => {
    const updatedGrid = grid.map((r, i) =>
      r.map((v, j) => (i === row && j === col ? (value ? parseInt(value) : null) : v))
    );
    setGrid(updatedGrid);
  };

  const handleValidate = () => {
    if (isValidSudoku(grid)) {
      setError('Valid Sudoku!');
    } else {
      setError('Invalid Sudoku!');
    }
  };

  const handleSolve = () => {
    const solvedGrid = solveSudoku(JSON.parse(JSON.stringify(grid)));
    if (solvedGrid) {
      setGrid(solvedGrid);
      setError('Solved!');
    } else {
      setError('No solution exists.');
    }
  };

  return (
    <div>
      <h1>Sudoku Solver</h1>
      <Grid grid={grid} onChange={handleChange} />
      <Buttons onValidate={handleValidate} onSolve={handleSolve} />
      {error && <p>{error}</p>}
    </div>
  );
};

export default Home;
