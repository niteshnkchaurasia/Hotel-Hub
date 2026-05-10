async function loadOrders() {
  try {
    const response = await fetch("http://localhost:5000/api/orders");
    const orders = await response.json();

    const container = document.getElementById("orders-container");

    if (orders.length === 0) {
      container.innerHTML = "<p>No orders found</p>";
      return;
    }

    container.innerHTML = "";

    orders.forEach(order => {
      let itemsHTML = "";

      order.items.forEach(item => {
        itemsHTML += `
          <li>${item.name} - ₹${item.price} × ${item.quantity}</li>
        `;
      });

      container.innerHTML += `
        <div class="bg-white p-4 rounded shadow mb-4">
          <h3 class="text-lg font-bold">${order.customerName}</h3>
          <p class="text-sm text-gray-600">${order.address}</p>
          <ul class="mt-2">${itemsHTML}</ul>
          <p class="mt-2 font-semibold">Total: ₹${order.total}</p>
          <p class="text-xs text-gray-400">${new Date(order.date).toLocaleString()}</p>
        </div>
      `;
    });

  } catch (error) {
    console.log(error);
  }
}

loadOrders();