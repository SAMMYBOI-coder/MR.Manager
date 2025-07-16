import { jwtDecode } from 'jwt-decode';

export default function HeaderGreeting() {
  let expiryTime = null;

  const token = localStorage.getItem("authToken");
  console.log("Token from localStorage:", token);

  if (token) {
    try {
      const decoded = jwtDecode(token);
      const date = new Date(decoded.exp * 1000); // Convert to milliseconds
      expiryTime = date.toLocaleString();
      console.log("Decoded expiry time:", expiryTime);
    } catch (err) {
      console.error("Failed to decode token:", err);
    }
  }

  return (
    <div className="bg-gradient-to-r from-gray-800 to-black text-white rounded-2xl p-6 flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-bold flex flex-wrap items-center gap-2">
          Good morning! ☀️
          {expiryTime && (
            <span className="text-sm font-normal text-gray-300">
              (expires at <span className="font-mono">{expiryTime}</span>)
            </span>
          )}
        </h2>
        <p className="text-sm mt-1">
          Ready to organize your thoughts and plan your day?
        </p>
      </div>
      <img
        src="/note_icon.png"
        alt="note icon"
        className="w-16 h-16 rounded-full bg-white p-2"
      />
    </div>
  );
}
