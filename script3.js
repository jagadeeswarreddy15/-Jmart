
const orderForm = document.getElementById("order-form");

function updateOrderSummary() {
  const summary = document.getElementById("order-summary");
  const totalElement = document.getElementById("order-total");

  if (!summary || !totalElement) return;

  summary.replaceChildren();

  if (cart.length === 0) {
    summary.textContent = "Your cart is empty.";
  } else {
    cart.forEach((item) => {
      const row = document.createElement("p");
      row.textContent =
        `${item.name} × ${item.quantity} = ₹${item.price * item.quantity}`;
      summary.appendChild(row);
    });
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  totalElement.textContent = total;
}

// Update the order summary whenever the cart changes.
const originalUpdateCart = updateCart;

updateCart = function () {
  originalUpdateCart();
  updateOrderSummary();
};

updateOrderSummary();

// PLACE ORDER
if (orderForm) {
  orderForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const message = document.getElementById("order-message");

    if (cart.length === 0) {
      message.textContent = "Please add products to your cart first.";
      return;
    }

    const order = {
      customerName: document.getElementById("customer-name").value.trim(),
      phone: document.getElementById("customer-phone").value.trim(),
      address: document.getElementById("customer-address").value.trim(),
      city: document.getElementById("customer-city").value.trim(),
      pincode: document.getElementById("customer-pincode").value.trim(),
      items: cart.map((item) => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity
      })),
      total: cart.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
      )
    };

    message.textContent =
      `Order details validated for ${order.customerName}. ` +
      `Total: ₹${order.total}. ` +
      "Demo only: connect a backend to save and confirm your order.";
  });
}
