// Get hotel name from URL
const params = new URLSearchParams(window.location.search);
const hotelName = params.get("id");

// Set title
const hotelTitle = document.getElementById("hotel-title");
hotelTitle.textContent = hotelName + " Menu";

// Menu container
const menuList = document.getElementById("menu-list");

// Menus with images
const menus = {
  "Taj Heritage": [
    { name: "Pizza", price: 200, image: "assets/images/pizza.jpg" },
    { name: "Burger", price: 120, image: "assets/images/burger.jpg" },
    { name: "Pasta", price: 180, image: "assets/images/pasta.jpg" }
  ],

  "Royal Palace": [
    { name: "Paneer Butter Masala", price: 250, image: "assets/images/paneer.jpg" },
    { name: "Veg Thali", price: 180, image: "assets/images/thali.jpg" },
    { name: "Naan", price: 40, image: "assets/images/naan.jpg" }
  ],

  "Food Court Deluxe": [
    { name: "Veg Biryani", price: 120, image: "assets/images/veg biryani.jpg" },
    { name: "Haidrabadi Biryani", price: 200, image: "assets/images/haidrabadi biryani.jpg" },
    { name: "Moradabadi Biryani", price: 180, image: "assets/images/moradabadi biryani.jpg" }
  ]
};

// Display Menu
function displayMenu() {
  const menu = menus[hotelName];

  if (!menu) {
    menuList.innerHTML = "<p>No menu found</p>";
    return;
  }

  menuList.innerHTML = ""; // clear first

  menu.forEach(item => {
    menuList.innerHTML += `
      <div class="bg-white p-5 rounded-lg shadow flex items-center gap-5 mb-4 hover:shadow-lg transition">

        <img src="${item.image}" 
             class="w-32 h-24 object-cover rounded-lg" 
             alt="${item.name}" />

        <div class="flex-1">
          <h3 class="text-xl font-semibold">${item.name}</h3>
          <p class="text-gray-600 mt-1">₹${item.price}</p>

          <button
            onclick="addToCart('${item.name}', ${item.price})"
            class="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Add to Cart
          </button>
        </div>

      </div>
    `;
  });
}

// Add to cart
function addToCart(name, price) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  let existingItem = cart.find(item => item.name === name);

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      name: name,
      price: price,
      quantity: 1
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Item added to cart 🛒");
}

// Run
displayMenu();