import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getBoard, nextGeneration } from "../api_helper";
import { Link } from "react-router-dom";
import Board from "./Board";

const BoardDetail = () => {
  const { id } = useParams();
  const [board, setBoard] = useState(null);
  console.log(board);

  useEffect(() => {
    const fetchBoardDetails = async () => {
      try {
        const boardData = await getBoard(id);

        setBoard(boardData.board);
      } catch (error) {
        console.error(error);
      }
    };
    fetchBoardDetails();
  }, [id]);

  const handleNextGeneration = async () => {
    try {
      const nextGenData = await nextGeneration(id);

      setBoard(nextGenData.board);
    } catch (error) {
      console.error(error);
    }
  };

  if (!board) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Board ID: {board.id}</h1>
      <h3>Generation: {board.last_generation.generation_number}</h3>
      <Board cells={board.last_generation.cells} />
      <hr />
      {board.game_over ? (
        <p className="game-over">Game Over!</p>
      ) : (
        <button className="button" onClick={handleNextGeneration}>
          Próxima Geração
        </button>
      )}
      <div>
        <Link to="/">{"< "}Board List</Link>
      </div>
    </div>
  );
};

export default BoardDetail;
