// src/components/NoteForm.jsx
import React from 'react';

export default function NoteForm({
  title,
  content,
  onTitleChange,
  onContentChange,
  onSubmit,
  isEditing,
}) {
  return (
    <div className="bg-[var(--card-bg)] rounded-xl p-6 shadow-md mb-8">
      <h2 className="text-xl font-semibold mb-4">
        {isEditing ? 'Edit Note' : 'Add New Note'}
      </h2>
      <input
        type="text"
        placeholder="Note Title"
        value={title}
        onChange={(e) => onTitleChange(e.target.value)}
        className="w-full mb-3 p-2 rounded-md border border-gray-300 bg-[var(--bg-primary)] text-[var(--text-primary)]"
      />
      <textarea
        placeholder="Note Content"
        rows={4}
        value={content}
        onChange={(e) => onContentChange(e.target.value)}
        className="w-full mb-3 p-2 rounded-md border border-gray-300 bg-[var(--bg-primary)] text-[var(--text-primary)]"
      ></textarea>
      <button
        onClick={onSubmit}
        className="bg-[var(--button-bg)] text-[var(--text-primary)] px-4 py-2 rounded-lg font-medium hover:opacity-90"
      >
        {isEditing ? 'Update Note' : 'Add Note'}
      </button>
    </div>
  );
}
