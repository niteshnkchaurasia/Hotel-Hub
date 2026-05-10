const cartItemsContainer = document.getElementById("cart-items");
const totalPriceEl = document.getElementById("cart-total");
const emptyCartMessage = document.getElementById("empty-cart-message");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function renderCart() {
  cartItemsContainer.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    emptyCartMessage.classList.remove("hidden");
    totalPriceEl.innerText = "Total: ₹0";
    return;
  }

  emptyCartMessage.classList.add("hidden");

  cart.forEach((item, index) => {
    total += item.price * item.quantity;

    cartItemsContainer.innerHTML += `
      <div class="bg-white p-4 rounded-lg shadow flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div>
          <h3 class="text-xl font-semibold">${item.name}</h3>
          <p class="text-gray-600 mt-1">Price: ₹${item.price}</p>
          <p class="text-gray-600">Subtotal: ₹${item.price * item.quantity}</p>
        </div>

        <div class="flex items-center gap-3">
          <button
            onclick="decreaseQuantity(${index})"
            class="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
          >
            -
          </button>

          <span class="font-semibold">${item.quantity}</span>

          <button
            onclick="increaseQuantity(${index})"
            class="bg-gray-200 px-3 py-1 rounded hover:bg-gray-300"
          >
            +
          </button>

          <button
            onclick="removeItem(${index})"
            class="ml-2 text-red-500 hover:text-red-700"
          >
            Remove
          </button>
        </div>
      </div>
    `;
  });

  totalPriceEl.innerText = "Total: ₹" + total;
}

function increaseQuantity(index) {
  cart[index].quantity += 1;
  saveCart();
  renderCart();
}

function decreaseQuantity(index) {
  cart[index].quantity -= 1;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  saveCart();
  renderCart();
}

function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
  renderCart();
}

renderCart();