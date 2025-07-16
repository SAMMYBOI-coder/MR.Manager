// src/components/Notes.jsx
import React, { useState, useEffect } from 'react';
import { fetchNotes, addNote, updateNote } from '../components/notes/api';
import NoteForm from '../components/notes/form';
import NoteItem from '../components/notes/item';

export default function Notes() {
  const [notes, setNotes] = useState([]);
  const [newTitle, setNewTitle] = useState('');
  const [newContent, setNewContent] = useState('');
  const [editingNote, setEditingNote] = useState(null);

  useEffect(() => {
    async function loadNotes() {
      try {
        const data = await fetchNotes();
        setNotes(data);
      } catch (error) {
        console.error('Error fetching notes:', error);
      }
    }
    loadNotes();
  }, []);

  const handleAddNote = async () => {
    if (!newTitle.trim()) return;

    try {
      const data = await addNote({ title: newTitle, content: newContent });
      setNotes([{ id: data.noteId, title: newTitle, content: newContent, date: new Date().toLocaleDateString(), editing: false }, ...notes]);
      setNewTitle('');
      setNewContent('');
    } catch (error) {
      console.error(error);
      alert('Error saving note: ' + error.message);
    }
  };

  const toggleEdit = (note) => {
    if (editingNote && editingNote.id === note.id) {
      setEditingNote(null);
      setNewTitle('');
      setNewContent('');
    } else {
      setEditingNote(note);
      setNewTitle(note.title);
      setNewContent(note.content);
    }
  };

  const handleUpdateNote = async () => {
    if (!editingNote) return;

    try {
      const data = await updateNote(editingNote.id, { title: newTitle, content: newContent });
      setNotes(notes.map(note => (note.id === data.id ? { ...note, title: newTitle, content: newContent } : note)));
      setEditingNote(null);
      setNewTitle('');
      setNewContent('');
    } catch (error) {
      console.error(error);
      alert('Error updating note: ' + error.message);
    }
  };

  return (
    <div className="min-h-screen px-6 py-8 bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <h1 className="text-3xl font-bold mb-6">🗒️ My Notes</h1>

      <NoteForm
        title={newTitle}
        content={newContent}
        onTitleChange={setNewTitle}
        onContentChange={setNewContent}
        onSubmit={editingNote ? handleUpdateNote : handleAddNote}
        isEditing={!!editingNote}
      />

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {notes.map(note => (
          <NoteItem
            key={note.id}
            note={note}
            isEditing={editingNote && editingNote.id === note.id}
            title={newTitle}
            content={newContent}
            onTitleChange={setNewTitle}
            onContentChange={setNewContent}
            onToggleEdit={toggleEdit}
          />
        ))}
      </div>
    </div>
  );
}
