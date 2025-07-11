import DarkModeToggle from "../components/DarkModeToggle";
import { Link } from "react-router-dom";

export default function Register() {
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
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full p-3 rounded-md outline-none"
            style={{
              backgroundColor: "var(--sidebar-bg)",
              color: "var(--text-primary)",
            }}
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
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
            Register
          </button>
        </form>

        <p className="text-center mt-4 text-sm" style={{ color: "var(--text-secondary)" }}>
          Already have an account?{" "}
          <Link to="/login" className="underline text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
