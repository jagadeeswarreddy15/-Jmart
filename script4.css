// J-Mart Checkout System

document.addEventListener("DOMContentLoaded", function () {
  const checkoutButton = document.getElementById("checkout-btn");
  const orderSection = document.getElementById("order-details");
  const checkoutForm = document.getElementById("checkout-form");
  const orderResult = document.getElementById("order-result");

  // Open checkout
  if (checkoutButton) {
    checkoutButton.addEventListener("click", function () {
      if (!Array.isArray(cart) || cart.length === 0) {
        alert("Your cart is empty. Please add products first.");
        return;
      }

      orderSection.scrollIntoView({
        behavior: "smooth"
      });

      document.getElementById("customer-name").focus({
        preventScroll: true
      });
    });
  }

  // Place order
  if (checkoutForm) {
    checkoutForm.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!Array.isArray(cart) || cart.length === 0) {
        alert("Your cart is empty.");
        return;
      }

      const name =
        document.getElementById("customer-name").value.trim();

      const phone =
        document.getElementById("customer-phone").value.trim();

      const address =
        document.getElementById("customer-address").value.trim();

      const city =
        document.getElementById("customer-city").value.trim();

      const pincode =
        document.getElementById("customer-pincode").value.trim();

      if (!checkoutForm.checkValidity()) {
        checkoutForm.reportValidity();
        return;
      }

      // Calculate total from cart items
      const total = cart.reduce(function (sum, item) {
        return sum + Number(item.price) * Number(item.quantity || 1);
      }, 0);

      // Demo order confirmation
      const orderNumber =
        "JMART-" + Date.now().toString().slice(-8);

      orderResult.replaceChildren();

      const heading = document.createElement("h3");
      heading.textContent = "Order Placed Successfully!";

      const orderId = document.createElement("p");
      orderId.textContent = "Order ID: " + orderNumber;

      const customer = document.createElement("p");
      customer.textContent = "Customer: " + name;

      const delivery = document.createElement("p");
      delivery.textContent =
        "Delivery: " + address + ", " + city + " - " + pincode;

      const amount = document.createElement("p");
      amount.textContent = "Order Total: ₹" + total.toFixed(2);

      const payment = document.createElement("p");
      payment.textContent =
        "Payment: Cash on Delivery (demo only)";

      orderResult.append(
        heading,
        orderId,
        customer,
        delivery,
        amount,
        payment
      );

      // Clear cart using the existing cart variable
      cart.length = 0;

      if (typeof renderCart === "function") {
        renderCart();
      }

      checkoutForm.reset();

      orderResult.scrollIntoView({
        behavior: "smooth"
      });
    });
  }
});
