import { useState } from "react";
import { Link } from "react-router-dom";
import DarkModeToggle from "../components/DarkModeToggle";
import { loginUser } from "../api";
import { useAuth } from "../components/auth/authprovider"; // adjust path as needed

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const { login } = useAuth(); // get login function from context

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await loginUser(email, password);
      const token = response.data.token;

      // Use login function from context to set auth and redirect
      login(token);
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ backgroundColor: "var(--bg-primary)", color: "var(--text-primary)" }}
    >
      <div className="absolute top-4 right-4">
        <DarkModeToggle />
      </div>

      <div
        className="w-full max-w-md p-8 rounded-xl shadow-xl"
        style={{
          backgroundColor: "var(--card-bg)",
          color: "var(--card-text)",
        }}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            autoComplete="email"
            className="w-full p-3 rounded-md outline-none"
            style={{
              backgroundColor: "var(--sidebar-bg)",
              color: "var(--text-primary)",
            }}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            className="w-full p-3 rounded-md outline-none"
            style={{
              backgroundColor: "var(--sidebar-bg)",
              color: "var(--text-primary)",
            }}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 rounded-md font-medium"
            style={{
              backgroundColor: "var(--button-bg)",
              color: "var(--text-primary)",
              opacity: loading ? 0.6 : 1,
            }}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <p
          className="text-center mt-4 text-sm"
          style={{ color: "var(--text-secondary)" }}
        >
          Don’t have an account?{" "}
          <Link to="/register" className="underline text-blue-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
}
