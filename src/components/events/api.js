const API_BASE = "http://localhost:5000/api/events";

export async function fetchEvents() {
  const res = await fetch(API_BASE, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
  });

  if (!res.ok) throw new Error("Failed to fetch events");
  return await res.json();
}

export async function addEvent(eventData) {
  const res = await fetch(API_BASE, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("authToken")}`,
    },
    body: JSON.stringify(eventData),
  });

  if (!res.ok) throw new Error("Failed to add event");
  return await res.json();
}
