import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { createBoard, getBoards } from "../api_helper";

const BoardList = () => {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    const fetchBoards = async () => {
      try {
        const boardList = await getBoards();
        setBoards(boardList);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBoards();
  }, []);

  const handleImport = async (file) => {
    try {
      await createBoard(file);
      const boardList = await getBoards();

      setBoards(boardList);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="board-list">
      <h1>Boards</h1>

      <p>Upload a .csv file to create a new board</p>
      <input
        type="file"
        accept=".csv"
        onChange={(e) => {
          const file = e.target.files[0];

          if (file) {
            handleImport(file);
          }
        }}
      />
      <hr />
      <ul>
        {boards.map((board) => (
          <li key={board.id}>
            <Link to={`/boards/${board.id}`}>Board ID: {board.id}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BoardList;
