const form = document.querySelector('form');
const form = document.querySelector('form');
const email = document.getElementById('email');
const alertMsg = document.querySelector('.alert_msg');

email.addEventListener('focus', () => {
  email.style.outline = 'none';
});

alertMsg.textContent = 'Please make sure the email is all lower case';
alertMsg.style.color = 'rgba(255, 97, 99, 1)';

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    alertMsg.style.display = 'inline-block';
    email.style.outline = 'solid rgba(255, 97, 99, 1)';
    e.preventDefault();
    alertMsg.classList.toggle('fade');
  } else {
    alertMsg.style.display = 'none';
  }
  setTimeout(() => {
    alertMsg.classList.toggle('fade');
  }, 5000);
  setTimeout(() => {
    alertMsg.style.display = 'none';
  }, 7000);
});
