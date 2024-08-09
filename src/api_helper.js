const API_URL = "http://localhost:3000";

export const createBoard = async (file) => {
  const formData = new FormData();
  formData.append("file", file);

  const response = await fetch(`${API_URL}/boards`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to create board");
  }

  return response.json();
};

export const nextGeneration = async (boardId) => {
  const response = await fetch(`${API_URL}/boards/${boardId}/next_generation`, {
    method: "POST",
  });

  if (!response.ok) {
    throw new Error("Failed to get next generation");
  }

  return response.json();
};

export const getBoards = async () => {
  const response = await fetch(`${API_URL}/boards`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch boards");
  }

  return response.json();
};
export const getBoard = async (id) => {
  const response = await fetch(`${API_URL}/boards/${id}`, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch board");
  }

  return response.json();
};
