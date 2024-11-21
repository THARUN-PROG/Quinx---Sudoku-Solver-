# Quinx---Sudoku-Solver-

Step 1: Project Setup

Use npx create-next-app sudoku-solver

Step 2: Installing Dependencies

npm install styled-components

Step 3: Create the components, utils, pages and styles folder and create files into it.


Step 3: Run the Application

npm start

Step 4: Open the browser and navigate to http://localhost:3000.


---------------------------------Logic------------------------------------------------

For Sudoku Solver I used backtracking algorithm to solve it.

The Sudoku puzzle is represented as a 9x9 grid (2D array).
Empty cells are initialized with a value like 0 or null.

I have provided 3 functions
isValid Function
findEmptyCell Function
Backtracking Algorithm

The application works as below
The algorithm starts by finding the first empty cell in the grid.
It attempts to place numbers from 1 to 9 in the empty cell, checking each time if the placement is valid.
If a number is valid, it proceeds recursively to solve the next cell.
If no valid number is found for a cell, the algorithm backtracks (i.e., removes the last placed number) and tries the next option.
This process continues until the grid is fully solved or determined to be unsolvable.


When the user clicks the "Solve" button, 
The grid data from the input fields is passed to the solveSudoku function.
The result is updated in the state to display the solved grid.
