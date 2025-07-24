import { useState } from "react";

export default function EventModal({ onClose, onEventAdded }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const res = await fetch("http://localhost:5000/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({ title, date, description }),
      });
      const data = await res.json();
      onEventAdded(data);
      onClose();
    } catch (err) {
      console.error("Error adding event:", err);
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit} className="modal-content">
        <h2 className="text-xl font-bold mb-4">Plan New Event</h2>
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input"
          required
        />
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="input"
          required
        />
        <textarea
          placeholder="Event Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="input"
        ></textarea>
        <div className="modal-actions">
          <button type="submit" className="btn btn-primary">Save</button>
          <button onClick={onClose} className="btn">Cancel</button>
        </div>
      </form>
    </div>
  );
}
