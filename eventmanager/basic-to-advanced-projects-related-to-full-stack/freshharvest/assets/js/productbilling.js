document.addEventListener("DOMContentLoaded", () => {
  const tbody = document.querySelector("#cartTable tbody");
  const totalEl = document.getElementById("grandTotal");

  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  function renderCart() {
    tbody.innerHTML = "";
    let total = 0;

    cart.forEach((item, i) => {
      const rowTotal = item.price * item.qty;
      total += rowTotal;

      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td class="product">
          <img src="${item.img}">
          ${item.name}
        </td>
        <td>$${item.price}</td>
        <td>
          <button onclick="updateQty(${i},-1)">-</button>
          ${item.qty}
          <button onclick="updateQty(${i},1)">+</button>
        </td>
        <td>$${rowTotal.toFixed(2)}</td>
        <td><button onclick="removeItem(${i})">❌</button></td>
      `;

      tbody.appendChild(tr);
    });

    totalEl.textContent = `Grand Total: $${total.toFixed(2)}`;
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  window.updateQty = (i, d) => {
    cart[i].qty += d;
    if (cart[i].qty <= 0) cart.splice(i, 1);
    renderCart();
  };

  window.removeItem = i => {
    cart.splice(i, 1);
    renderCart();
  };

  renderCart();
});
