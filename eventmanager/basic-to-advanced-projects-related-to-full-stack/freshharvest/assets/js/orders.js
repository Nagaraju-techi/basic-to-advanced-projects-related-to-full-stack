// Demo order data (simulate backend)
const orders = [
  {
    id: "FH123",
    status: "Out for Delivery",
    expected: "Today by 8 PM"
  },
  {
    id: "FH456",
    status: "Order Packed",
    expected: "Tomorrow"
  },
  {
    id: "FH789",
    status: "Delivered",
    expected: "Delivered Successfully"
  }
];

function trackOrder() {
  const input = document.getElementById("orderId").value.trim();
  const resultDiv = document.getElementById("orderResult");

  const order = orders.find(o => o.id === input);

  if (order) {
    resultDiv.innerHTML = `
      <h3>Order Status</h3>
      <p><strong>Status:</strong> ${order.status}</p>
      <p><strong>Expected:</strong> ${order.expected}</p>
    `;
  } else {
    resultDiv.innerHTML = `<p style="color:red;">❌ Order not found</p>`;
  }
}
