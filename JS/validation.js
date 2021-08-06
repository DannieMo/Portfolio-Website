const email = document.getElementById('email');
const alertMsg = document.querySelector('.alert_msg');
const button = document.querySelector('button');

email.addEventListener('focus', () => {
  email.style.outline = 'none';
});

button.addEventListener('click', (e) => {
  e.preventDefault();
  if (email.value !== email.value.toLowerCase()) {
    alertMsg.style.display = 'block';
    alertMsg.style.color = 'rgba(255, 97, 99, 1)';
    alertMsg.textContent = 'Please make sure the email is all lower case';
    email.style.outline = 'solid rgba(255, 97, 99, 1)';
    alertMsg.classList.toggle('fade');
    setTimeout(() => {
      alertMsg.classList.toggle('fade');
      alertMsg.style.display = 'none';
    }, 7000);
  } else {
    form.submit();
  }
});
