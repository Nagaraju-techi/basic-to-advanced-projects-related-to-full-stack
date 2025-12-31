// Get selected event ID
const eventId = localStorage.getItem("selectedEventId");

// Load events
const events = JSON.parse(localStorage.getItem("events")) || [];

// Find selected event
const selectedEvent = events.find(event => event.id == eventId);

// Display event title
document.getElementById("event-title").textContent = selectedEvent.title;

// Booking logic
document.getElementById("bookBtn").addEventListener("click", () => {

  const bookings =
    JSON.parse(localStorage.getItem("myBookings")) || [];

  bookings.push({
    eventId: selectedEvent.id,
    title: selectedEvent.title,
    date: selectedEvent.date,
    image:selectedEvent.image
  });

  localStorage.setItem("myBookings", JSON.stringify(bookings));

  alert("Booking successful!");
  window.location.href = "mybookings.html";
});
