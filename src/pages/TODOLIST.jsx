import { useState } from "react";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  const handleAddTask = () => {
    if (!taskText.trim()) return;
    setTasks([{ id: Date.now(), text: taskText, done: false }, ...tasks]);
    setTaskText("");
  };

  const toggleDone = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task
      )
    );
  };

  return (
    <div className="min-h-screen px-6 py-8 bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <h1 className="text-3xl font-bold mb-6">✅ To-Do List</h1>

      <div className="bg-[var(--card-bg)] rounded-xl p-6 shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">➕ Add New Task</h2>
        <input
          type="text"
          placeholder="What do you need to do?"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
          className="w-full mb-3 p-2 rounded-md border border-gray-300"
        />
        <button
          onClick={handleAddTask}
          className="bg-[var(--button-bg)] text-[var(--text-primary)] px-4 py-2 rounded-lg font-medium hover:opacity-90"
        >
          Add Task
        </button>
      </div>

      <ul className="space-y-4">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between bg-[var(--card-bg)] text-[var(--card-text)] px-4 py-3 rounded-xl shadow"
          >
            <span
              className={`text-base ${task.done ? "line-through opacity-60" : ""}`}
            >
              {task.text}
            </span>
            <button
              onClick={() => toggleDone(task.id)}
              className="text-sm hover:underline"
            >
              {task.done ? "↩️ Undo" : "✅ Done"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}