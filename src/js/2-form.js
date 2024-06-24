
const formData = { email: "", message: "" };


const form = document.querySelector('.feedback-form');
const emailInput = form.elements['email'];
const messageInput = form.elements['message'];


document.addEventListener('DOMContentLoaded', () => {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const parsedData = JSON.parse(savedData);
    emailInput.value = parsedData.email || '';
    messageInput.value = parsedData.message || '';
    formData.email = parsedData.email || '';
    formData.message = parsedData.message || '';
  }
});


form.addEventListener('input', (event) => {
  formData[event.target.name] = event.target.value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});


form.addEventListener('submit', (event) => {
  event.preventDefault();

  
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  
  console.log('Form submitted:', formData);

  
  localStorage.removeItem('feedback-form-state');
  event.target.reset();
  formData.email = '';
  formData.message = '';
});
