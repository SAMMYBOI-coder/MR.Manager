import { useState } from "react";

export default function TodoModal({ onClose, onTodoAdded }) {
  const [task, setTask] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({ task }),
      });
      const data = await res.json();
      onTodoAdded(data);
      onClose();
    } catch (err) {
      console.error("Error adding todo:", err);
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit} className="modal-content">
        <h2 className="text-xl font-bold mb-4">Add Todo</h2>
        <input
          type="text"
          placeholder="Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="input"
          required
        />
        <div className="modal-actions">
          <button type="submit" className="btn btn-primary">Save</button>
          <button onClick={onClose} className="btn">Cancel</button>
        </div>
      </form>
    </div>
  );
}
