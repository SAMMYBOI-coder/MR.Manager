import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Plus, CheckCircle, Circle } from "lucide-react";

export default function Tasks() {
  const [tasks, setTasks] = useState([
    { text: "Review meeting notes", done: true, color: "red" },
    { text: "Call dentist for appointment", done: false, color: "yellow" },
    { text: "Buy groceries", done: false, color: "green" },
    { text: "Finish project proposal", done: false, color: "red" },
  ]);

  return (
    <Card className="tasks-card force-visible-text"> {/* ONLY ADDED force-visible-text */}
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-primary">Today's Tasks</h3>
          <Button size="icon" variant="ghost">
            <Plus size={16} />
          </Button>
        </div>
        <ul className="space-y-2">
          {tasks.map((task, i) => (
            <li key={i} className="flex items-center gap-2 text-sm text-primary">
              {task.done ? (
                <CheckCircle className="text-tertiary" size={18} />
              ) : (
                <Circle className="text-tertiary" size={18} />
              )}
              <span className={task.done ? "line-through text-tertiary" : ""}>
                {task.text}
              </span>
              <span
                className={`ml-auto w-2 h-2 rounded-full ${task.color === "red"
                    ? "bg-red-500"
                    : task.color === "yellow"
                      ? "bg-yellow-500"
                      : "bg-green-500"
                  }`}
              ></span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}