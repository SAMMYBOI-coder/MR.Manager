import { motion } from "framer-motion";

const actions = [
  { icon: "📄", label: "New Note", desc: "Create a quick note" },
  { icon: "📅", label: "Plan Event", desc: "Schedule new event" },
  { icon: "📝", label: "Add Todo", desc: "Create task list" },
  { icon: "💡", label: "Quick Idea", desc: "Capture inspiration" },
];

export default function QuickActions() {
  return (
    <div className="quick-actions-container">
      <h3 className="text-lg font-semibold mb-3 text-primary">Quick Actions</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {actions.map((action, i) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={i}
            className="bg-card-action rounded-xl text-center p-4 cursor-pointer"
          >
            <div className="text-xl text-accent">{action.icon}</div> {/* Icon color */}
            <div className="font-semibold text-primary">{action.label}</div> {/* Bold label */}
            <div className="text-xs text-secondary">{action.desc}</div> {/* Description */}
          </motion.div>
        ))}
      </div>
    </div>
  );
}