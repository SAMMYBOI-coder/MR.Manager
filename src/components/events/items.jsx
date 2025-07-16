// src/components/EventItem.jsx
export default function EventItem({ event, isEditing, onEditToggle, onChange }) {
  return (
    <div className="bg-[var(--card-bg)] text-[var(--card-text)] p-5 rounded-xl shadow">
      {isEditing ? (
        <>
          <input
            type="text"
            value={event.name}
            onChange={(e) => onChange({ ...event, name: e.target.value })}
            className="w-full mb-2 p-2 rounded-md border border-gray-300"
          />
          <input
            type="date"
            value={event.date}
            onChange={(e) => onChange({ ...event, date: e.target.value })}
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
        <button onClick={() => onEditToggle(event.id)} className="hover:underline">
          {isEditing ? '✅ Done' : '✏️ Edit'}
        </button>
      </div>
    </div>
  );
}
