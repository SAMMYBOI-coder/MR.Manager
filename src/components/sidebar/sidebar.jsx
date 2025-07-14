import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/authprovider"; // Adjust this path to where your AuthProvider file is

export default function Sidebar() {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout(); // This clears token, updates global state, and navigates
  };

  return (
    <div className="sidebar w-64 bg-white border-r border-gray-200 p-6 space-y-6 min-h-screen">
      <div>
        <Link className="text-xl font-bold" to={isAuthenticated ? "/home" : "/"}>
          <h1>📝 Mr.Manager</h1>
        </Link>
      </div>

      <nav className="space-y-3 text-sm text-gray-700">
        <div><Link to="/home">🏠 Home</Link></div>
        <div><Link to="/notes">🗒️ Notes</Link></div>
        <div><Link to="/events">📅 Events</Link></div>
        <div><Link to="/todo-lists">✅ To-Do Lists</Link></div>
      </nav>

      {isAuthenticated && (
        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
        >
          Logout
        </button>
      )}
    </div>
  );
}
