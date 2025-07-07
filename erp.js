const form = document.getElementById('registrationForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const tickets = document.getElementById('tickets').value.trim();

  if (name === '' || email === '' || tickets === '' || tickets <= 0) {
    alert('Please fill in all fields with valid information.');
    return;
  }

  alert(`Thank you, ${name}! You have registered ${tickets} ticket(s). A confirmation email will be sent to ${email}.`);

  form.reset();
});
