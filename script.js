document.getElementById('signup-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page reload
  const emailInput = document.querySelector('#signup-form input[type="email"]');
  const email = emailInput.value;

  if (email) {
    alert(`Thank you for signing up, ${email}! Check your inbox for your 10% off coupon.`);
    emailInput.value = ''; // Clear the input
  }
});