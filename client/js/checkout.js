const form = document.getElementById("checkout-form");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const name = document.getElementById("name").value.trim();
  const address = document.getElementById("address").value.trim();

  errorMessage.classList.add("hidden");
  errorMessage.textContent = "";

  if (cart.length === 0) {
    errorMessage.textContent = "Your cart is empty!";
    errorMessage.classList.remove("hidden");
    return;
  }

  if (name === "" || address === "") {
    errorMessage.textContent = "Please fill all fields.";
    errorMessage.classList.remove("hidden");
    return;
  }

  let total = 0;
  cart.forEach((item) => {
    total += item.price * item.quantity;
  });

  let orders = JSON.parse(localStorage.getItem("orders")) || [];

  const orderData = {
    customerName: name,
    address: address,
    items: cart,
    total: total,
    date: new Date().toLocaleString()
  };

  orders.push(orderData);

  localStorage.setItem("orders", JSON.stringify(orders));
  localStorage.setItem("lastOrder", JSON.stringify(orderData));
  localStorage.removeItem("cart");

  window.location.href = "order-success.html";
});