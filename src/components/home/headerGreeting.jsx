export default function HeaderGreeting() {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-black text-white rounded-2xl p-6 flex justify-between items-center">
      <div>
        <h2 className="text-2xl font-bold">Good morning! ☀️</h2>
        <p className="text-sm">Ready to organize your thoughts and plan your day?</p>
      </div>
      <img src="/note_icon.png" alt="note icon" className="w-16 h-16 rounded-full bg-white p-2" />
    </div>
  );
}
