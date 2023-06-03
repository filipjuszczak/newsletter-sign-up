const formContainer = document.querySelector('.form-container');
const successContainer = document.querySelector('.success');

const form = document.querySelector('.form');
const input = document.querySelector('#email');
const errorEl = document.querySelector('.error');
const submitBtn = document.querySelector('.submit');
const emailEl = document.querySelector('.email-span');

function checkEmailValid(email) {
  var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const email = formData.get('email');

  if (email.length === 0 || !checkEmailValid(email)) {
    errorEl.classList.remove('hidden');
    input.classList.add('border-tomato');
    input.classList.add('invalid');
  } else {
    formContainer.classList.add('invisible');
    formContainer.classList.add('hidden');
    errorEl.classList.add('hidden');
    input.classList.remove('border-tomato');
    input.classList.remove('invalid');
    successContainer.classList.remove('hidden');
    emailEl.innerHTML = email;
  }
});
