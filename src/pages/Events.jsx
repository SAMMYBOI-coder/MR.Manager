import { useState, useEffect } from "react";
import { fetchEvents, addEvent } from "../components/events/api";
import EventForm from "../components/events/form";
import EventItem from "../components/events/items";

export default function Events() {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({ name: "", date: "" });
  const [editingEventId, setEditingEventId] = useState(null);

  useEffect(() => {
    async function loadEvents() {
      try {
        const data = await fetchEvents();
        console.log("✅ Events fetched from DB:", data);

        const formattedEvents = data.map((e) => ({
          id: e.id,
          name: e.title,         // Match backend field
          date: e.event_date,    // Match backend field
          editing: false,
        }));

        setEvents(formattedEvents);
      } catch (err) {
        console.error("❌ Error loading events:", err);
      }
    }

    loadEvents();
  }, []);

  const handleAddEvent = async () => {
    if (!newEvent.name.trim() || !newEvent.date.trim()) return;

    try {
      const res = await addEvent({
        title: newEvent.name,
        event_date: newEvent.date,
        description: "", // Optional
      });

      const newAddedEvent = {
        id: res.eventId,
        name: newEvent.name,
        date: newEvent.date,
        editing: false,
      };

      setEvents([newAddedEvent, ...events]);
      setNewEvent({ name: "", date: "" });
    } catch (error) {
      console.error("❌ Error adding event:", error);
      alert("Failed to add event: " + error.message);
    }
  };

  const toggleEdit = (id) => {
    setEvents(
      events.map((event) =>
        event.id === id
          ? { ...event, editing: !event.editing }
          : { ...event, editing: false }
      )
    );
    setEditingEventId(editingEventId === id ? null : id);
    if (editingEventId === id) setNewEvent({ name: "", date: "" });
  };

  const updateEventField = (updatedEvent) => {
    setEvents(
      events.map((event) =>
        event.id === updatedEvent.id ? updatedEvent : event
      )
    );
  };

  return (
    <div className="min-h-screen px-6 py-8 bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <h1 className="text-3xl font-bold mb-6">📅 Events</h1>

      <EventForm
        event={newEvent}
        onChange={setNewEvent}
        onSubmit={handleAddEvent}
        isEditing={false}
      />

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {events.map((event) => (
          <EventItem
            key={event.id}
            event={event}
            isEditing={event.editing}
            onEditToggle={toggleEdit}
            onChange={updateEventField}
          />
        ))}
      </div>
    </div>
  );
}
