const feedbackForm = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';

feedbackForm.addEventListener('input', saveInputValue);

feedbackForm.addEventListener('submit', submitForm);

function saveInputValue(event) {
  if (
    event.target.nodeName === 'INPUT' ||
    event.target.nodeName === 'TEXTAREA'
  ) {
    const emailValue = feedbackForm
      .querySelector('[name="email"]')
      .value.trim();
    const messageValue = feedbackForm
      .querySelector('[name="message"]')
      .value.trim();
    if (emailValue || messageValue) {
      localStorage.setItem(
        storageKey,
        JSON.stringify({ email: emailValue, message: messageValue })
      );
    } else {
      localStorage.removeItem(storageKey);
    }
  }
}

function submitForm(event) {
  event.preventDefault();

  const emailInput = feedbackForm.querySelector('[name="email"]');
  const messageInput = feedbackForm.querySelector('[name="message"]');
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (email !== '' && message !== '') {
    console.log({ email, message });
    localStorage.removeItem(storageKey);
    feedbackForm.reset();
  }
}

function loadFormData() {
  const savedForm = localStorage.getItem(storageKey);
  if (savedForm !== null) {
    const parsedForm = JSON.parse(savedForm);

    feedbackForm.querySelector('[name="email"]').value =
      parsedForm?.email || '';
    feedbackForm.querySelector('[name="message"]').value =
      parsedForm?.message || '';
  }
}

loadFormData();
