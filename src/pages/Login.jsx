import DarkModeToggle from "../components/DarkModeToggle";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}
    >
      <div className="absolute top-4 right-4">
        <DarkModeToggle />
      </div>

      <div className="w-full max-w-md p-8 rounded-xl shadow-xl"
        style={{
          backgroundColor: "var(--card-bg)",
          color: "var(--card-text)",
        }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <form className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 rounded-md outline-none"
            style={{
              backgroundColor: "var(--sidebar-bg)",
              color: "var(--text-primary)",
            }}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-md outline-none"
            style={{
              backgroundColor: "var(--sidebar-bg)",
              color: "var(--text-primary)",
            }}
          />
          <button
            type="submit"
            className="w-full p-3 rounded-md font-medium"
            style={{
              backgroundColor: "var(--button-bg)",
              color: "var(--text-primary)",
            }}
          >
            Login
          </button>
        </form>

        <p className="text-center mt-4 text-sm" style={{ color: "var(--text-secondary)" }}>
          Don’t have an account?{" "}
          <Link to="/register" className="underline text-blue-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
