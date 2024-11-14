// Get form elements
const form = document.querySelector("form");
const nameInput = form.querySelector('input[type="text"]');
const emailInput = form.querySelector('input[type="email"]');
const passwordInput = form.querySelector('input[type="password"]');
const confirmPasswordInput = form.querySelectorAll('input[type="password"]')[1];
const policyCheckbox = form.querySelector(".policy input");

// Function to validate form inputs
form.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission

  // Basic validation checks
  if (!nameInput.value.trim()) {
    alert("Please enter your name.");
    return;
  }

  if (!emailInput.value.trim()) {
    alert("Please enter a valid email.");
    return;
  }

  if (passwordInput.value.length < 6) {
    alert("Password must be at least 6 characters.");
    return;
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    alert("Passwords do not match.");
    return;
  }

  if (!policyCheckbox.checked) {
    alert("Please accept the terms and conditions.");
    return;
  }

  alert("Registration successful!");
  form.reset(); // Clear form after successful submission
});
