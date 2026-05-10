const hotels = [
  {
    name: "Taj Heritage",
    time: "9:00 AM - 11:00 PM",
    services: "Veg • Non-Veg • AC",
    rating: 4.5,
    delivery: "30 mins",
    price: 300,
    image: "assets/images/hotel1.webp"
  },
  {
    name: "Royal Palace",
    time: "10:00 AM - 10:30 PM",
    services: "Veg • Family Dining",
    rating: 4.2,
    delivery: "25 mins",
    price: 250,
    image: "assets/images/hotel2.jpg"
  },
  {
    name: "Food Court Deluxe",
    time: "8:00 AM - 12:00 AM",
    services: "Fast Food • Cafe",
    rating: 4.0,
    delivery: "20 mins",
    price: 150,
    image: "assets/images/hotel3.jpg"
  }
  
];

const hotelList = document.getElementById("hotel-list");

function displayHotels(data) {
  hotelList.innerHTML = ""; // 🔥 important (clear old data)

  data.forEach((hotel) => {
    hotelList.innerHTML += `
      <div class="bg-white rounded-lg shadow hover:shadow-xl hover:-translate-y-1 transition duration-300">
        <img src="${hotel.image}" class="rounded-t-lg w-full h-48 object-cover" />

        <div class="p-4">
          <h3 class="text-xl font-semibold">${hotel.name}</h3>

          <p class="text-gray-600 text-sm mt-1">🕘 ${hotel.time}</p>
          <p class="text-gray-500 text-sm mt-1">🍽️ ${hotel.services}</p>

          <div class="flex justify-between text-sm mt-2">
            <span>⭐ ${hotel.rating}</span>
            <span>🚚 ${hotel.delivery}</span>
            <span>💰 ₹${hotel.price}</span>
          </div>

          <a href="hotel.html?id=${hotel.name}" 
            class="block text-center mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
            View Menu
          </a>
        </div>
      </div>
    `;
  });
}

// 🔥 Initial render
displayHotels(hotels);


// 🔍 Search Feature
const searchInput = document.getElementById("search");

searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  const filteredHotels = hotels.filter((hotel) =>
    hotel.name.toLowerCase().includes(value)
  );

  displayHotels(filteredHotels);
});


// 💰 Price Filter
const priceFilter = document.getElementById("price-filter");

if (priceFilter) {
  priceFilter.addEventListener("change", () => {
    const value = priceFilter.value;

    let filtered = hotels;

    if (value) {
      filtered = hotels.filter(hotel => hotel.price <= value);
    }

    displayHotels(filtered);
  });
}


// 🛒 Cart Badge
function updateCartCount() {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let totalQuantity = 0;

  cart.forEach(item => {
    totalQuantity += item.quantity;
  });

  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    cartCount.textContent = totalQuantity;
  }
}

updateCartCount();