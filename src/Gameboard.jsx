import React, { useState } from 'react';
import Cell from './Cell';

const GameBoard = () => {
  const boardSize = 10;
  const [board, setBoard] = useState(
    Array(boardSize)
      .fill(null)
      .map(() => Array(boardSize).fill(null))
  );

  const handleCellClick = (row, col) => {
    const newBoard = board.map((r, i) =>
      r.map((cell, j) => {
        if (i === row && j === col) {
          return Math.random() > 0.5 ? 'hit' : 'miss';
        }
        return cell;
      })
    );
    setBoard(newBoard);
  };

  return (
    <div className="game-board">
      {board.map((row, rowIndex) => (
        <div key={rowIndex} className="board-row">
          {row.map((cell, colIndex) => (
            <Cell
              key={colIndex}
              status={cell}
              onClick={() => handleCellClick(rowIndex, colIndex)}
            />
          ))}
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
