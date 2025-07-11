// ✅ Notes.jsx
import { useState } from "react";

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  const handleAddNote = () => {
    if (!newTitle.trim()) return;
    const newNote = {
      id: Date.now(),
      title: newTitle,
      content: newContent,
      date: new Date().toLocaleDateString(),
      editing: false,
    };
    setNotes([newNote, ...notes]);
    setNewTitle("");
    setNewContent("");
  };

  const toggleEdit = (id) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, editing: !note.editing } : note
      )
    );
  };

  const updateNote = (id, field, value) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, [field]: value } : note
      )
    );
  };

  return (
    <div className="min-h-screen px-6 py-8 bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <h1 className="text-3xl font-bold mb-6">🗒️ My Notes</h1>

      <div className="bg-[var(--card-bg)] rounded-xl p-6 shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">➕ Add New Note</h2>
        <input
          type="text"
          placeholder="Note Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="w-full mb-3 p-2 rounded-md border border-gray-300 bg-[var(--bg-primary)] text-[var(--text-primary)]"
        />
        <textarea
          placeholder="Note Content"
          rows={4}
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          className="w-full mb-3 p-2 rounded-md border border-gray-300 bg-[var(--bg-primary)] text-[var(--text-primary)]"
        ></textarea>
        <button
          onClick={handleAddNote}
          className="bg-[var(--button-bg)] text-[var(--text-primary)] px-4 py-2 rounded-lg font-medium hover:opacity-90"
        >
          Add Note
        </button>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {notes.map((note) => (
          <div
            key={note.id}
            className="bg-[var(--card-bg)] text-[var(--card-text)] p-5 rounded-xl shadow transition"
          >
            {note.editing ? (
              <>
                <input
                  type="text"
                  value={note.title}
                  onChange={(e) =>
                    updateNote(note.id, "title", e.target.value)
                  }
                  className="w-full mb-2 p-2 rounded-md border border-gray-300 bg-[var(--bg-primary)] text-[var(--text-primary)]"
                />
                <textarea
                  rows={4}
                  value={note.content}
                  onChange={(e) =>
                    updateNote(note.id, "content", e.target.value)
                  }
                  className="w-full mb-2 p-2 rounded-md border border-gray-300 bg-[var(--bg-primary)] text-[var(--text-primary)]"
                />
              </>
            ) : (
              <>
                <h2 className="text-lg font-semibold mb-1">{note.title}</h2>
                <p className="text-sm">{note.content}</p>
              </>
            )}

            <div className="text-xs mt-4 flex justify-between opacity-70">
              <span>🕒 {note.date}</span>
              <button
                onClick={() => toggleEdit(note.id)}
                className="hover:underline"
              >
                {note.editing ? "✅ Done" : "✏️ Edit"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
