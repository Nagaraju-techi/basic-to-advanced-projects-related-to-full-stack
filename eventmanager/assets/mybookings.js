document.addEventListener("DOMContentLoaded", () => {

  // 1️⃣ Read booking history
  let bookings = JSON.parse(localStorage.getItem("myBookings")) || [];

  const container = document.getElementById("booking-container");

  // 2️⃣ No bookings case
  if (bookings.length === 0) {
    container.innerHTML = "<p>No bookings found</p>";
    return;
  }

  // 3️⃣ Render bookings
  bookings.forEach((booking, index) => {

    const card = document.createElement("div");
    card.className = "booking-card";

    card.innerHTML = `
        <img src="${booking.image}" alt="${booking.title}" class="booking-img">

      <div class="booking-info">
        <h3>${booking.title}</h3>
        <p>Date: ${booking.date}</p>

        <button onclick="deleteBooking(${index})"
                class="delete-btn">
          Cancel Booking
        </button>
      </div>
    `;

    container.appendChild(card);
  });

  // 4️⃣ Delete booking function
  window.deleteBooking = function (index) {

    // Remove selected booking
    bookings.splice(index, 1);

    // Save updated bookings
    localStorage.setItem("myBookings", JSON.stringify(bookings));

    alert("Booking cancelled successfully");

    // Refresh UI
    location.reload();
  };
});
