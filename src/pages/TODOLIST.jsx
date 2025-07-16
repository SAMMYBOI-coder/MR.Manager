import { useState, useEffect } from "react";
import { fetchTodos, addTodo, toggleTodoDone } from "../components/todos/api";
import TodoForm from "../components/todos/form";
import TodoItem from "../components/todos/item";

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  useEffect(() => {
    async function loadTodos() {
      try {
        const data = await fetchTodos();
        setTasks(data);
      } catch (err) {
        console.error("Error loading todos:", err);
      }
    }
    loadTodos();
  }, []);

  const handleAddTask = async () => {
    if (!taskText.trim()) return;
    try {
      const data = await addTodo({ task: taskText });
      setTasks([{ id: data.todoId, task: taskText, is_done: 0 }, ...tasks]);
      setTaskText("");
    } catch (err) {
      console.error("Error adding todo:", err);
    }
  };

  const handleToggleDone = async (id) => {
    try {
      await toggleTodoDone(id);
      setTasks((prev) =>
        prev.map((t) =>
          t.id === id ? { ...t, is_done: t.is_done ? 0 : 1 } : t
        )
      );
    } catch (err) {
      console.error("Error toggling todo:", err);
    }
  };

  return (
    <div className="min-h-screen px-6 py-8 bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <h1 className="text-3xl font-bold mb-6">✅ To-Do List</h1>

      <TodoForm taskText={taskText} onChange={setTaskText} onSubmit={handleAddTask} />

      <ul className="space-y-4">
        {tasks.map((task) => (
          <TodoItem key={task.id} task={task} onToggle={handleToggleDone} />
        ))}
      </ul>
    </div>
  );
}
