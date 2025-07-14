import { useState } from "react";
import DarkModeToggle from "../components/DarkModeToggle";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api"; // ✅ import from your centralized API file

export default function Register() {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      await registerUser(fullName, email, password); // ✅ cleaner call
      setSuccess("Registration successful! Redirecting to login...");
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    } catch (err) {
      setError(err.response?.data?.message || "Registration failed");
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
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full p-3 rounded-md outline-none"
            style={{
              backgroundColor: "var(--sidebar-bg)",
              color: "var(--text-primary)",
            }}
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 rounded-md outline-none"
            style={{
              backgroundColor: "var(--sidebar-bg)",
              color: "var(--text-primary)",
            }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded-md outline-none"
            style={{
              backgroundColor: "var(--sidebar-bg)",
              color: "var(--text-primary)",
            }}
            required
            minLength={6}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-3 rounded-md outline-none"
            style={{
              backgroundColor: "var(--sidebar-bg)",
              color: "var(--text-primary)",
            }}
            required
            minLength={6}
          />
          {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
          {success && <p className="text-green-500 text-sm mt-1">{success}</p>}
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

        <p
          className="text-center mt-4 text-sm"
          style={{ color: "var(--text-secondary)" }}
        >
          Already have an account?{" "}
          <Link to="/login" className="underline text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
