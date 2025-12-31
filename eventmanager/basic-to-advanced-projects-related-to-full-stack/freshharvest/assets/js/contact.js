document.getElementById("queryForm").addEventListener("submit", e => {
  e.preventDefault();

  const queries = JSON.parse(localStorage.getItem("queries")) || [];

  const query = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    type: document.getElementById("type").value,
    message: document.getElementById("message").value,
    date: new Date().toLocaleString()
  };

  queries.push(query);
  localStorage.setItem("queries", JSON.stringify(queries));

  document.getElementById("successMsg").textContent =
    "✅ Your query has been submitted successfully!";

  e.target.reset();
});
