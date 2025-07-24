import { useState } from "react";

export default function QuickIdeaModal({ onClose, onIdeaAdded }) {
  const [idea, setIdea] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/ideas", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({ idea }),
      });
      const data = await res.json();
      onIdeaAdded(data);
      onClose();
    } catch (err) {
      console.error("Error saving idea:", err);
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit} className="modal-content">
        <h2 className="text-xl font-bold mb-4">Quick Idea</h2>
        <textarea
          placeholder="Write your idea here..."
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
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
