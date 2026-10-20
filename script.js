
"use strict";

// J-MART PRODUCT DATA
// Make sure your product images are inside the images folder.

const products = [
  { name: "Aashirvaad Iodized Salt", price: 30, image: "Aashirvaad_Iodized_Salt.webp" },
  { name: "Ariel Complete Plus", price: 120, image: "Ariel_Complete_Plus.jpg" },
  { name: "Bingo Cheese Nachos", price: 20, image: "Bingo_Cheese_Nachos.webp" },
  { name: "Bingo Hashtags Spicy Masala", price: 20, image: "Bingo_Hashtags_Spicy_Masala.webp" },
  { name: "Bingo Korean Style Hot & Spicy", price: 20, image: "Bingo_Korean_Style_Hot_Spicy.webp" },
  { name: "Bingo Mad Angles", price: 20, image: "Bingo_Mad_Angles.webp" },
  { name: "Bingo Original Style Chilli", price: 20, image: "Bingo_Original_Style_Chilli.webp" },
  { name: "Bingo Tedhe Medhe Masala Tadka", price: 20, image: "Bingo_Tedhe_Medhe_Masala_Tadka.webp" },
  { name: "Bingo Tedhe Medhe Mast Masala", price: 20, image: "Bingo_Tedhe_Medhe_Mast_Masala_Tadka.webp" },
  { name: "Bounty Chocolate", price: 50, image: "Bounty.webp" },
  { name: "Britannia Good Day Butter Cookies", price: 40, image: "Britannia_Good_Day_Butter_Cookies.webp" },
  { name: "Brooke Bond 3 Roses Natural Care", price: 150, image: "Brooke_Bond_3_Roses_Natural_Care.webp" },
  { name: "Brooke Bond Red Label", price: 150, image: "Brooke_Bond_Red_Label.webp" },
  { name: "Brooke Bond Taj Mahal Tea", price: 160, image: "Brooke_Bond_Taj_Mahal.webp" },
  { name: "Cadbury Dairy Milk", price: 50, image: "Cadbury_Dairy_Milk.webp" },
  { name: "Cadbury Dairy Milk Silk", price: 180, image: "Cadbury_Dairy_Milk_Silk.webp" },
  { name: "Cadbury Oreo Original", price: 30, image: "Cadbury_Oreo_Original.webp" },
  { name: "Campa Cola", price: 20, image: "Campa_Cola.webp" },
  { name: "Cinthol Lime Soap", price: 40, image: "Cinthol_Lime_Soap.webp" },
  { name: "Closeup Everfresh Toothpaste", price: 60, image: "Closeup_Everfresh_Toothpaste.jpg" },
  { name: "Coca-Cola", price: 40, image: "Coca_Cola.webp" },
  { name: "Colgate MaxFresh Toothpaste", price: 100, image: "Colgate_MaxFresh_Toothpaste.webp" },
  { name: "Colgate Strong Teeth Toothpaste", price: 60, image: "Colgate_Strong_Teeth_Toothpaste.jpg" },
  { name: "Colgate ZigZag Charcoal Toothbrush", price: 40, image: "Colgate_ZigZag_Charcoal_Toothbrush.webp" },
  { name: "Colgate ZigZag Deep Clean Toothbrush", price: 30, image: "Colgate_ZigZag_Deep_Clean_Toothbrush.webp" },
  { name: "Dabur Red Toothpaste", price: 60, image: "Dabur_Red_Toothpaste.webp" },
  { name: "Dark Fantasy Choco Chunks", price: 40, image: "Dark_Fantasy_Desserts_Choco_Chunks.jpg" },
  { name: "Dark Fantasy Choco Nut Dipped", price: 50, image: "Dark_Fantasy_Desserts_Choco_Nut_Dipped.jpg" },
  { name: "Dark Fantasy Chocolate Sandwich", price: 40, image: "Dark_Fantasy_Sandwich_Creme_Chocolate.jpg" },
  { name: "Dark Fantasy Vanilla Sandwich", price: 40, image: "Dark_Fantasy_Sandwich_Creme_Vanilla.webp" },
  { name: "Dove Cream Beauty Bar", price: 60, image: "Dove_Cream_Beauty_Bar.jpg" },
  { name: "Dove Intense Repair Shampoo", price: 120, image: "Dove_Intense_Repair_Shampoo.webp" },
  { name: "Fogg Paradise Body Spray", price: 250, image: "Fogg_Paradise_Body_Spray.webp" },
  { name: "Garlic", price: 40, image: "Garlic.jpg" },
  { name: "Groundnuts", price: 60, image: "Groundnuts.webp" },
  { name: "Hauser XO Pens", price: 50, image: "Hauser_XO_Pens.webp" },
  { name: "Head & Shoulders Classic Clean", price: 120, image: "Head_and_Shoulders_Classic_Clean.jpg" },
  { name: "Head & Shoulders Cool Menthol", price: 120, image: "Head_and_Shoulders_Cool_Menthol.webp" },
  { name: "KitKat 2 Finger", price: 20, image: "KitKat_2_Finger.webp" },
  { name: "KitKat 4 Finger", price: 40, image: "KitKat_4_Finger.jpg" },
  { name: "Lay's American Style Cream & Onion", price: 20, image: "Lays_American_Style_Cream_Onion.webp" },
  { name: "Lotte Choco Pie", price: 10, image: "Lotte_Choco_Pie.webp" },
  { name: "Minute Maid Pulpy Orange", price: 50, image: "Minute_Maid_Pulpy_Orange.webp" },
  { name: "Mysore Sandal Soap", price: 50, image: "Mysore_Sandal_Soap.webp" },
  { name: "Nature Power Papaya Aura Soap", price: 35, image: "Nature_Power_Papaya_Aura_Soap.webp" },
  { name: "Pantene Lively Clean Shampoo", price: 120, image: "Pantene_Lively_Clean.jpg" },
  { name: "Parle Hide & Seek Almonds", price: 40, image: "Parle_Hide_and_Seek_Almonds.webp" },
  { name: "Parle Hide & Seek Choco Chip", price: 40, image: "Parle_Hide_and_Seek_Choco_Chip.webp" },
  { name: "Parrys White Label Sugar", price: 50, image: "Parrys_White_Label_Sugar.webp" },
  { name: "Pears Original Glycerin Soap", price: 60, image: "Pears_Original_Glycerin_Soap.webp" },
  { name: "Quaker Oats", price: 100, image: "Quaker_Oats.webp" },
  { name: "Quest Hard Toothbrush", price: 30, image: "Quest_Hard_Toothbrush.webp" },
  { name: "Santoor Fresh Skin Soap", price: 35, image: "Santoor_Fresh_Skin_Soap.webp" },
  { name: "Santoor Sandal & Turmeric Soap", price: 35, image: "Santoor_Sandal_Turmeric_Soap.webp" },
  { name: "Sensodyne Fresh Gel Toothpaste", price: 120, image: "Sensodyne_Fresh_Gel_Toothpaste.webp" },
  { name: "Sensodyne Sensitive Toothbrush", price: 60, image: "Sensodyne_Sensitive_Toothbrush.webp" },
  { name: "Small Red Onions", price: 40, image: "Small_Red_Onions.webp" },
  { name: "Snickers Chocolate", price: 50, image: "Snickers.webp" },
  { name: "Sunfeast Dark Fantasy Choco Fills", price: 40, image: "Sunfeast_Dark_Fantasy_Choco_Fills.webp" },
  { name: "Sunfeast Dark Fantasy Yumfills Pie", price: 40, image: "Sunfeast_Dark_Fantasy_Yumfills_Pie.webp" },
  { name: "Sunsilk Stunning Black Shine", price: 120, image: "Sunsilk_Stunning_Black_Shine.webp" },
  { name: "Tata Salt", price: 30, image: "Tata_Salt.webp" },
  { name: "Tata Tea Chakra Gold Elaichi", price: 150, image: "Tata_Tea_Chakra_Gold_Elaichi.jpg" },
  { name: "Tata Tea Chakra Gold Gemini", price: 150, image: "Tata_Tea_Chakra_Gold_Gemini.webp" },
  { name: "Thums Up 750 ml", price: 40, image: "Thums_Up_750ml.webp" },
  { name: "Thums Up Large Bottle", price: 60, image: "Thums_Up_Large_Bottle.webp" },
  { name: "Toor Dal", price: 120, image: "Toor_Dal.webp" },
  { name: "Unibic Assorted Cookies", price: 40, image: "Unibic_Assorted_Cookies.webp" },
  { name: "Unibic Butter Cookies", price: 40, image: "Unibic_Butter_Cookies.jpg" },
  { name: "Unibic Choco Chip Cookies", price: 40, image: "Unibic_Choco_Chip_Cookies.jpg" },
  { name: "Unibic Fruit & Nut Cookies", price: 40, image: "Unibic_Fruit_Nut_Cookies.jpg" }
];

// SHOPPING CART
let cart = [];

const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search");
const cartCount = document.getElementById("cart-count");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

// DISPLAY PRODUCTS
function displayProducts(items) {
  if (!productList) return;

  productList.replaceChildren();

  if (items.length === 0) {
    const message = document.createElement("p");
    message.textContent = "No products found.";
    productList.appendChild(message);
    return;
  }

  items.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";

    const image = document.createElement("img");
    image.src = `images/${product.image}`;
    image.alt = product.name;
    image.loading = "lazy";

    image.onerror = function () {
      this.alt = `${product.name} image unavailable`;
      this.style.display = "none";
    };

    const name = document.createElement("h3");
    name.textContent = product.name;

    const price = document.createElement("p");
    price.className = "product-price";
    price.textContent = `₹${product.price}`;

    const button = document.createElement("button");
    button.type = "button";
    button.textContent = "Add to Cart";
    button.addEventListener("click", () => addToCart(product));

    card.append(image, name, price, button);
    productList.appendChild(card);
  });
}

// SEARCH PRODUCTS
if (searchInput) {
  searchInput.addEventListener("input", function () {
    const query = this.value.trim().toLowerCase();

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(query)
    );

    displayProducts(filtered);
  });
}

// ADD PRODUCT TO CART
function addToCart(product) {
  const existing = cart.find((item) => item.name === product.name);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCart();
}

// CHANGE PRODUCT QUANTITY
function changeQuantity(productName, change) {
  const item = cart.find((product) => product.name === productName);

  if (!item) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    cart = cart.filter((product) => product.name !== productName);
  }

  updateCart();
}

// UPDATE CART DISPLAY
function updateCart() {
  if (cartCount) {
    cartCount.textContent = cart.reduce(
      (total, item) => total + item.quantity, 0
    );
  }

  if (cartItems) {
    cartItems.replaceChildren();

    if (cart.length === 0) {
      cartItems.textContent = "Your cart is empty.";
    } else {
      cart.forEach((item) => {
        const row = document.createElement("div");
        row.className = "cart-row";

        const name = document.createElement("span");
        name.textContent =
          `${item.name} — ₹${item.price} × ${item.quantity} = ₹${item.price * item.quantity}`;

        const minus = document.createElement("button");
        minus.type = "button";
        minus.textContent = "−";
        minus.setAttribute("aria-label", `Remove one ${item.name}`);
        minus.addEventListener("click", () =>
          changeQuantity(item.name, -1)
        );

        const plus = document.createElement("button");
        plus.type = "button";
        plus.textContent = "+";
        plus.setAttribute("aria-label", `Add one ${item.name}`);
        plus.addEventListener("click", () =>
          changeQuantity(item.name, 1)
        );

        row.append(name, minus, plus);
        cartItems.appendChild(row);
      });
    }
  }

  if (cartTotal) {
    const total = cart.reduce(
      (sum, item) => sum + item.price * item.quantity, 0
    );

    cartTotal.textContent = total;
  }
}

// CLEAR CART
const clearCartButton = document.getElementById("clear-cart");

if (clearCartButton) {
  clearCartButton.addEventListener("click", () => {
    cart = [];
    updateCart();
  });
}

// BASIC FORM VALIDATION
// These forms do not create real accounts or authenticate users.
const loginForm = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");

if (loginForm) {
  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const message = document.getElementById("login-message");

    if (message) {
      message.textContent =
        "Login requires a secure authentication service.";
    }
  });
}

if (signupForm) {
  signupForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const message = document.getElementById("signup-message");

    if (message) {
      message.textContent =
        "Sign up requires a secure backend to create an account.";
    }
  });
}

// START WEBSITE
displayProducts(products);
updateCart();
                             
