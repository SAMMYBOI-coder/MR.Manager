import { useState } from "react";
import { motion } from "framer-motion";

import NoteModal from "../../models/home/notes";
import EventModal from "../../models/home/events";
import TodoModal from "../../models/home/todo";
import QuickIdeaModal from "../../models/home/quickIdea";

const actions = [
  { icon: "📄", label: "New Note", desc: "Create a quick note", modal: "note" },
  { icon: "📅", label: "Plan Event", desc: "Schedule new event", modal: "event" },
  { icon: "📝", label: "Add Todo", desc: "Create task list", modal: "todo" },
  { icon: "💡", label: "Quick Idea", desc: "Capture inspiration", modal: "idea" },
];

export default function QuickActions() {
  const [openModal, setOpenModal] = useState(null);

  const handleClick = (type) => setOpenModal(type);
  const handleClose = () => setOpenModal(null);

  return (
    <div className="quick-actions-container">
      <h3 className="text-lg font-semibold mb-3 text-primary">Quick Actions</h3>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {actions.map((action, i) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={i}
            className="bg-card-action rounded-xl text-center p-4 cursor-pointer"
            onClick={() => handleClick(action.modal)}
          >
            <div className="text-xl text-accent">{action.icon}</div>
            <div className="font-semibold text-primary">{action.label}</div>
            <div className="text-xs text-secondary">{action.desc}</div>
          </motion.div>
        ))}
      </div>

      {/* Modals */}
      {openModal === "note" && <NoteModal onClose={handleClose} />}
      {openModal === "event" && <EventModal onClose={handleClose} />}
      {openModal === "todo" && <TodoModal onClose={handleClose} />}
      {openModal === "idea" && <QuickIdeaModal onClose={handleClose} />}
    </div>
  );
}
