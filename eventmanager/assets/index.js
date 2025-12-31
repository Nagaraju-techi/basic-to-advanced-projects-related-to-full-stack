
const events = [
  {
    id: 1,
    title: "Summer Music Festival",
    category: "Music",
    location: "New York",
    date: "2024-07-15",
    price: 1500,
    image: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Tech Conference 2024",
    category: "Technology",
    location: "San Fransisco",
    date: "2024-08-20",
    price: 2500,
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "Food Festival 2025",
    category: "Eating",
    location: "Australia",
    date: "2024-09-21",
    price: 30000,
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
  },
  {
  id: 4,
  title: "International Art Expo",
  category: "Art",
  location: "Paris",
  date: "2024-10-10",
  price: 2000,
  image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?auto=format&fit=crop&w=800&q=80"
},
{
  id: 5,
  title: "Startup Pitch Day",
  category: "Business",
  location: "Bangalore",
  date: "2024-11-05",
  price: 1000,
  image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80"
},
{
  id: 6,
  title: "Marathon Run 2024",
  category: "Sports",
  location: "Mumbai",
  date: "2024-12-01",
  price: 500,
  image: "https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=800&q=80"
},
{
  id: 7,
  title: "AI & ML Summit",
  category: "Technology",
  location: "Hyderabad",
  date: "2025-01-18",
  price: 3500,
  image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
},
{
  id: 8,
  title: "Classical Music Night",
  category: "Music",
  location: "Vienna",
  date: "2025-02-14",
  price: 1800,
  image: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?auto=format&fit=crop&w=800&q=80"
}

];

function renderEvents(eventList) {
  const container = document.getElementById("events-container");
  container.innerHTML = "";

  eventList.forEach(event => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img 
    src="${event.image}" 
    alt="${event.title}" 
    class="event-img"
    onerror="this.src='https://via.placeholder.com/300x200?text=Event+Image'"
    >
      <h3>${event.title}</h3>
      <p>${event.location} • ${event.date}</p>
      <button onclick="viewDetails(${event.id})">View Details</button>
    `;

    container.appendChild(card);
  });
}

function viewDetails(eventId) {
  localStorage.setItem("selectedEventId", eventId);
  localStorage.setItem("events", JSON.stringify(events));
  window.location.href = "details.html";
}

function filterEvents() {
  const category = document.getElementById("categoryFilter").value;

  const filtered = events.filter(event =>
    category === "All" || event.category === category
  );

  renderEvents(filtered);
}

renderEvents(events);
