// src/api.js
const API_BASE = 'http://localhost:5000/api/notes';

export async function fetchNotes() {
  const res = await fetch(API_BASE, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    },
  });
  if (!res.ok) throw new Error('Failed to fetch notes');
  return res.json();
}

export async function addNote(note) {
  const res = await fetch(API_BASE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    },
    body: JSON.stringify(note),
  });
  if (!res.ok) {
    const { message } = await res.json();
    throw new Error(message);
  }
  return res.json();
}

export async function updateNote(id, note) {
  const res = await fetch(`${API_BASE}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('authToken')}`,
    },
    body: JSON.stringify(note),
  });
  if (!res.ok) throw new Error('Failed to update note');
  return res.json();
}
