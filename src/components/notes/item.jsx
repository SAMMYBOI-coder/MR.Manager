// src/components/NoteItem.jsx
import React from 'react';

export default function NoteItem({
  note,
  isEditing,
  title,
  content,
  onTitleChange,
  onContentChange,
  onToggleEdit,
}) {
  return (
    <div className="bg-[var(--card-bg)] text-[var(--card-text)] p-5 rounded-xl shadow transition">
      {isEditing ? (
        <>
          <input
            type="text"
            value={title}
            onChange={(e) => onTitleChange(e.target.value)}
            className="w-full mb-2 p-2 rounded-md border border-gray-300 bg-[var(--bg-primary)] text-[var(--text-primary)]"
          />
          <textarea
            rows={4}
            value={content}
            onChange={(e) => onContentChange(e.target.value)}
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
        <button onClick={() => onToggleEdit(note)} className="hover:underline">
          {isEditing ? '✅ Done' : '✏️ Edit'}
        </button>
      </div>
    </div>
  );
}
