// script.js
const form = document.getElementById('contact-form');
const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function (e) {
  e.preventDefault(); // evita o envio padrão

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  // Validação
  if (!name || !email || !message) {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  if (!email.includes('@')) {
    alert('Email inválido.');
    return;
  }

  // Msg Sucesso
  successMessage.style.display = 'block';
  form.reset();
});
