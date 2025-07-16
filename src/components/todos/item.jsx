export default function TodoItem({ task, onToggle }) {
  return (
    <li
      className="flex items-center justify-between bg-[var(--card-bg)] text-[var(--card-text)] px-4 py-3 rounded-xl shadow"
    >
      <span
        className={`text-base ${
          task.is_done ? "line-through opacity-60" : ""
        }`}
      >
        {task.task}
      </span>
      <button
        onClick={() => onToggle(task.id)}
        className="text-sm hover:underline"
      >
        {task.is_done ? "↩️ Undo" : "✅ Done"}
      </button>
    </li>
  );
}
