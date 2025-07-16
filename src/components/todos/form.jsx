export default function TodoForm({ taskText, onChange, onSubmit }) {
  return (
    <div className="bg-[var(--card-bg)] rounded-xl p-6 shadow-md mb-8">
      <h2 className="text-xl font-semibold mb-4">➕ Add New Task</h2>
      <input
        type="text"
        placeholder="What do you need to do?"
        value={taskText}
        onChange={(e) => onChange(e.target.value)}
        className="w-full mb-3 p-2 rounded-md border border-gray-300"
      />
      <button
        onClick={onSubmit}
        className="bg-[var(--button-bg)] text-[var(--text-primary)] px-4 py-2 rounded-lg font-medium hover:opacity-90"
      >
        Add Task
      </button>
    </div>
  );
}
