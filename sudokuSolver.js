
export const isValidSudoku = (grid) => {
    const isValid = (values) => {
      const nums = values.filter((val) => val !== null);
      return nums.length === new Set(nums).size;
    };
  
    for (let i = 0; i < 9; i++) {
      const row = grid[i];
      const column = grid.map((row) => row[i]);
      const subgrid = [];
  
      for (let r = Math.floor(i / 3) * 3; r < Math.floor(i / 3) * 3 + 3; r++) {
        for (let c = (i % 3) * 3; c < (i % 3) * 3 + 3; c++) {
          subgrid.push(grid[r][c]);
        }
      }
  
      if (!isValid(row) || !isValid(column) || !isValid(subgrid)) {
        return false;
      }
    }
    return true;
  };
  
  
  export const solveSudoku = (grid) => {
    const findEmpty = () => {
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (grid[i][j] === null) return [i, j];
        }
      }
      return null;
    };
  
    const isSafe = (row, col, num) => {
      for (let x = 0; x < 9; x++) {
        if (grid[row][x] === num || grid[x][col] === num) return false;
      }
  
      const startRow = Math.floor(row / 3) * 3;
      const startCol = Math.floor(col / 3) * 3;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          if (grid[startRow + i][startCol + j] === num) return false;
        }
      }
  
      return true;
    };
  
    const solve = () => {
      const emptyPos = findEmpty();
      if (!emptyPos) return true;
  
      const [row, col] = emptyPos;
      for (let num = 1; num <= 9; num++) {
        if (isSafe(row, col, num)) {
          grid[row][col] = num;
          if (solve()) return true;
          grid[row][col] = null;
        }
      }
  
      return false;
    };
  
    if (solve()) return grid;
    return null;
  };
  