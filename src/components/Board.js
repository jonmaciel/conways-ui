import React from "react";

const Board = ({ cells }) => {
  const numCols = Math.max(...cells.map((cell) => cell.x)) + 1;

  return (
    <div
      className="board"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${numCols}, 20px)`,
        gap: "1px",
      }}
    >
      {cells.map((cell, index) => (
        <div
          key={index}
          className={`cell ${cell.alive ? "alive" : "dead"}`}
          style={{
            width: "20px",
            height: "20px",
            backgroundColor: cell.alive ? "black" : "white",
            border: "1px solid gray",
          }}
        ></div>
      ))}
    </div>
  );
};

export default Board;
