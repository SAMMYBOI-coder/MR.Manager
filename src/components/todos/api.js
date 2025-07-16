import axios from "axios";

const API_URL = "http://localhost:5000/api/todos";

export async function fetchTodos() {
  const token = localStorage.getItem("authToken");
  const res = await axios.get(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}

export async function addTodo(todo) {
  const token = localStorage.getItem("authToken");
  const res = await axios.post(API_URL, todo, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
}

export async function toggleTodoDone(id) {
  const token = localStorage.getItem("authToken");
  await axios.put(`${API_URL}/${id}/toggle`, {}, {
    headers: { Authorization: `Bearer ${token}` },
  });
}
