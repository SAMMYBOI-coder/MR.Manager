// src/components/EventForm.jsx
export default function EventForm({ event, onChange, onSubmit, isEditing }) {
  return (
    <div className="bg-[var(--card-bg)] rounded-xl p-6 shadow-md mb-8">
      <h2 className="text-xl font-semibold mb-4">
        {isEditing ? 'Edit Event' : 'Add New Event'}
      </h2>
      <input
        type="text"
        placeholder="Event Name"
        value={event.name}
        onChange={(e) => onChange({ ...event, name: e.target.value })}
        className="w-full mb-3 p-2 rounded-md border border-gray-300"
      />
      <input
        type="date"
        value={event.date}
        onChange={(e) => onChange({ ...event, date: e.target.value })}
        className="w-full mb-3 p-2 rounded-md border border-gray-300"
      />
      <button
        onClick={onSubmit}
        className="bg-[var(--button-bg)] text-[var(--text-primary)] px-4 py-2 rounded-lg font-medium hover:opacity-90"
      >
        {isEditing ? 'Update Event' : 'Add Event'}
      </button>
    </div>
  );
}
