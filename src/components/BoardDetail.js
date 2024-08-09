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
      <Link to="/">{"<"} Back</Link>
      <h2>Generation: {board.last_generation.generation_number}</h2>
      <h2>Cells:</h2>
      <Board cells={board.last_generation.cells} />
      <hr />
      {board.game_over ? (
        <p>Game Over</p>
      ) : (
        <button onClick={handleNextGeneration}>Próxima Geração</button>
      )}
    </div>
  );
};

export default BoardDetail;
