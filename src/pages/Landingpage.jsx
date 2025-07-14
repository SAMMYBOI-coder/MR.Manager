import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Landing() {
  const [showOptions, setShowOptions] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is authenticated (simple check for token presence)
    const token = localStorage.getItem("authToken");
    if (token) {
      // If logged in, redirect to /home immediately
      navigate("/home");
    }
  }, [navigate]);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div className="flex flex-col items-center justify-center py-16 px-6">
        {/* Logo/Header text links dynamically based on auth */}
        <Link to={localStorage.getItem("authToken") ? "/home" : "/"}>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-center cursor-pointer">
            📝 Welcome to Mr.Manager
          </h1>
        </Link>

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

      {/* Features Section */}
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
        Made with ❤️ by Sanjay • © {new Date().getFullYear()}
      </footer>
    </div>
  );
}
