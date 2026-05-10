const successOrderInfo = document.getElementById("success-order-info");

const lastOrder = JSON.parse(localStorage.getItem("lastOrder"));

if (lastOrder) {
  let itemsHtml = "";

  lastOrder.items.forEach((item) => {
    itemsHtml += `<p>${item.name} × ${item.quantity} = ₹${item.price * item.quantity}</p>`;
  });

  successOrderInfo.innerHTML = `
    <p><strong>Name:</strong> ${lastOrder.customerName}</p>
    <p><strong>Address:</strong> ${lastOrder.address}</p>
    <p><strong>Date:</strong> ${lastOrder.date}</p>
    <hr class="my-2">
    ${itemsHtml}
    <hr class="my-2">
    <p><strong>Total:</strong> ₹${lastOrder.total}</p>
  `;
} else {
  successOrderInfo.innerHTML = `<p>No recent order found.</p>`;
}