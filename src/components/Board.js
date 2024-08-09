import React from "react";

const Board = ({ cells }) => {
  const minY = Math.min(...cells.map((cell) => cell.y));
  const maxY = Math.max(...cells.map((cell) => cell.y));
  const minX = Math.min(...cells.map((cell) => cell.x));
  const maxX = Math.max(...cells.map((cell) => cell.x));

  const numCols = maxX - minX + 1;
  const numRows = maxY - minY + 1;

  return (
    <div
      className="board"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${numCols}, 20px)`,
        gap: "1px",
      }}
    >
      {Array.from({ length: numRows }).map((_, rowIndex) =>
        Array.from({ length: numCols }).map((_, colIndex) => {
          const cellX = colIndex + minX;
          const cellY = rowIndex + minY;
          const cell = cells.find((c) => c.x === cellX && c.y === cellY) || {
            alive: false,
          };

          return (
            <div
              key={`${cellX}-${cellY}`}
              className={`cell ${cell.alive ? "alive" : "dead"}`}
              style={{
                width: "20px",
                height: "20px",
                backgroundColor: cell.alive ? "black" : "white",
                border: "1px solid gray",
              }}
            />
          );
        })
      )}
    </div>
  );
};

export default Board;
