const feedbackForm = document.querySelector('.feedback-form');
const storageKey = 'feedback-form-state';

feedbackForm.addEventListener('input', saveInputValue);

function saveInputValue(event) {
  if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
    const emailValue = feedbackForm.querySelector('[name="email"]').value;
    const messageValue = feedbackForm.querySelector('[name="message"]').value;

    localStorage.setItem(
      storageKey,
      JSON.stringify({ email: emailValue, message: messageValue })
    );
  }
}

const loadForm = () => {
  const savedForm = localStorage.getItem(storageKey);
  const parsedForm = JSON.parse(savedForm);
  feedbackForm.querySelector('[name="email"]').value = parsedForm?.email || '';
  feedbackForm.querySelector('[name="message"]').value =
    parsedForm?.message || '';
};

loadForm();

feedbackForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const { email, message } = JSON.parse(localStorage.getItem(storageKey));

  if (email && message) {
    console.log({ email, message });
    localStorage.removeItem(storageKey);
    feedbackForm.reset();
  }
});
