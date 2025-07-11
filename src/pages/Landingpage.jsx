import { useState } from "react";
import { Link } from "react-router-dom";

export default function Landing() {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="flex flex-col items-center justify-center py-16 px-6">
        <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center">
          📝 Welcome to NoteMaster
        </h1>
        <p className="text-lg text-center mb-8 max-w-xl">
          Organize your thoughts, tasks, and events all in one place — fast, simple, and distraction-free.
        </p>

        {!showOptions ? (
          <button
            onClick={() => setShowOptions(true)}
            className="bg-[var(--button-bg)] text-[var(--text-primary)] px-8 py-3 rounded-lg text-lg font-medium hover:opacity-90 transition"
          >
            🚀 Get Started
          </button>
        ) : (
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/login">
              <button className="border border-[var(--button-bg)] text-[var(--button-bg)] px-6 py-3 rounded-lg font-semibold hover:bg-[var(--button-bg)] hover:text-[var(--text-primary)] transition">
                🔐 Login
              </button>
            </Link>
            <Link to="/register">
              <button className="bg-[var(--button-bg)] text-[var(--text-primary)] px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
                📝 Register
              </button>
            </Link>
          </div>
        )}
      </div>

      {/* ✅ Your original landing page sections go here */}
      <section className="px-6 py-10 text-center">
        <h2 className="text-2xl font-semibold mb-4">📚 Features</h2>
        <ul className="space-y-3 max-w-md mx-auto">
          <li>🗒️ Create and edit notes with ease</li>
          <li>📅 Keep track of important events</li>
          <li>✅ Stay productive with your to-do list</li>
          <li>🌗 Seamless dark/light mode support</li>
        </ul>
      </section>

      <footer className="text-center text-sm opacity-70 py-6">
        Made with ❤️ by Sam • © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
