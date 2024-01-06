const feedbackForm = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';

feedbackForm.addEventListener('input', saveInputValue);

feedbackForm.addEventListener('submit', submitForm);

function saveInputValue(event) {
  if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
    const emailValue = feedbackForm.querySelector('[name="email"]').value;
    const messageValue = feedbackForm.querySelector('[name="message"]').value;

    if (emailValue.trim() !== '' || messageValue.trim() !== '') {
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

  const { email, message } = JSON.parse(localStorage.getItem(storageKey));

  if (email.trim() !== '' && message.trim() !== '') {
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
