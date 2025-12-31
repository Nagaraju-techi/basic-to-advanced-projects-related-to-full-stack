document.addEventListener("DOMContentLoaded", () => {

  const products = [
    {
      name: "Organic Tomatoes",
      desc: "Fresh vine-ripened tomatoes",
      price: 4.99,
      rating: 4.8,
      img: "https://images.unsplash.com/photo-1567306226416-28f0efdc88ce"
    },
    {
      name: "Fresh Carrots",
      desc: "Crunchy sweet carrots",
      price: 3.49,
      rating: 4.7,
      img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37"
    },
    {
      name: 'Organes',
      desc: 'Fresh oranges, perfect for healthy meals',
      price: 5.99,
      rating: 4.6,
      img: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      name: 'Organic Bananas',
      desc: 'Naturally sweet bananas packed with energy and nutrients',
      price: 1.99,
      rating: 4.8,
      img: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e'
    },
    {
      name: 'Fresh Grapes',
      desc: 'Juicy seedless grapes with a refreshing sweet taste',
      price: 5.49,
      rating: 4.7,
      img: 'https://images.unsplash.com/photo-1519996529931-28324d5a630e'
    },
    {
      name: 'Fresh Lettuce',
      desc: 'Crisp green lettuce leaves perfect for healthy salads',
      price: 2.99,
      rating: 4.6,
      img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f'
    },
    {
      name: "Organic Spinach",
      desc: "Iron-rich green spinach",
      price: 3.29,
      rating: 4.6,
      img: "https://images.unsplash.com/photo-1598515213692-5f252f75d785"
    },
    {
      name: "Fresh Strawberries",
      desc: "Sweet organic strawberries",
      price: 6.99,
      rating: 4.9,
      img: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6"
    }
  ];

  const productList = document.getElementById("productList");

  function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const count = cart.reduce((sum, item) => sum + item.qty, 0);
    document.getElementById("cartCount").textContent = count;
  }

  function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find(item => item.name === product.name);

    if (existing) {
      existing.qty++;
    } else {
      cart.push({ ...product, qty: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
  }

  products.forEach(p => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${p.img}">
      <div class="card-body">
        <h3>${p.name}</h3>
        <p>${p.desc}</p>
        <div class="bottom">
          <span>$${p.price}</span>
          <button>Add 🛒</button>
        </div>
      </div>
    `;

    card.querySelector("button").onclick = () => addToCart(p);
    productList.appendChild(card);
  });

  updateCartCount();
});
