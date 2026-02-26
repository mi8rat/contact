const form = document.getElementById('contactForm');
const success = document.getElementById('successMsg');

function showError(id, show) {
  document.getElementById(id).style.display = show ? 'block' : 'none';
}

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const fname = document.getElementById('fname').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  showError('fnameErr', !fname);
  showError('emailErr', !emailRe.test(email));
  showError('msgErr', !message);

  if (!fname || !emailRe.test(email) || !message) return;

  // Simulate sending
  const btn = form.querySelector('button');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  setTimeout(() => {
    form.style.display = 'none';
    success.style.display = 'block';
  }, 900);
});

// Clear error messages as the user types
['fname', 'email', 'message'].forEach(id => {
  document.getElementById(id).addEventListener('input', () => {
    document.getElementById(id + 'Err').style.display = 'none';
  });
});
