import React from 'react';

const Buttons = ({ onValidate, onSolve }) => {
  return (
    <div className="buttons">
      <button onClick={onValidate}>Validate</button>
      <button onClick={onSolve}>Solve</button>
    </div>
  );
};

export default Buttons;
