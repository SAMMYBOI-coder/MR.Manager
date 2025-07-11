import { useState } from "react";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ name: "", date: "" });

  const handleAddEvent = () => {
    if (!newEvent.name.trim()) return;
    setEvents([
      {
        ...newEvent,
        id: Date.now(),
        editing: false,
      },
      ...events,
    ]);
    setNewEvent({ name: "", date: "" });
  };

  const toggleEdit = (id) => {
    setEvents(
      events.map((event) =>
        event.id === id ? { ...event, editing: !event.editing } : event
      )
    );
  };

  const updateEvent = (id, field, value) => {
    setEvents(
      events.map((event) =>
        event.id === id ? { ...event, [field]: value } : event
      )
    );
  };

  return (
    <div className="min-h-screen px-6 py-8 bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <h1 className="text-3xl font-bold mb-6">📅 Events</h1>

      <div className="bg-[var(--card-bg)] rounded-xl p-6 shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">➕ Add New Event</h2>
        <input
          type="text"
          placeholder="Event Name"
          value={newEvent.name}
          onChange={(e) => setNewEvent({ ...newEvent, name: e.target.value })}
          className="w-full mb-3 p-2 rounded-md border border-gray-300"
        />
        <input
          type="date"
          value={newEvent.date}
          onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
          className="w-full mb-3 p-2 rounded-md border border-gray-300"
        />
        <button
          onClick={handleAddEvent}
          className="bg-[var(--button-bg)] text-[var(--text-primary)] px-4 py-2 rounded-lg font-medium hover:opacity-90"
        >
          Add Event
        </button>
      </div>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-[var(--card-bg)] text-[var(--card-text)] p-5 rounded-xl shadow"
          >
            {event.editing ? (
              <>
                <input
                  type="text"
                  value={event.name}
                  onChange={(e) => updateEvent(event.id, "name", e.target.value)}
                  className="w-full mb-2 p-2 rounded-md border border-gray-300"
                />
                <input
                  type="date"
                  value={event.date}
                  onChange={(e) => updateEvent(event.id, "date", e.target.value)}
                  className="w-full mb-2 p-2 rounded-md border border-gray-300"
                />
              </>
            ) : (
              <>
                <h2 className="text-lg font-semibold">{event.name}</h2>
                <p className="text-sm opacity-70">📆 {event.date}</p>
              </>
            )}
            <div className="text-xs mt-4 flex justify-end opacity-70">
              <button
                onClick={() => toggleEdit(event.id)}
                className="hover:underline"
              >
                {event.editing ? "✅ Done" : "✏️ Edit"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}