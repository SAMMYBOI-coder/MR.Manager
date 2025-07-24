import { useState } from "react";

export default function NoteModal({ onClose, onNoteAdded }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({ title, content }),
      });
      const data = await res.json();
      onNoteAdded(data);
      onClose();
    } catch (err) {
      console.error("Error adding note:", err);
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit} className="modal-content">
        <h2 className="text-xl font-bold mb-4">New Note</h2>
        <input
          type="text"
          placeholder="Note Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input"
          required
        />
        <textarea
          placeholder="Note Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="input"
          required
        ></textarea>
        <div className="modal-actions">
          <button type="submit" className="btn btn-primary">Save</button>
          <button onClick={onClose} className="btn">Cancel</button>
        </div>
      </form>
    </div>
  );
}
