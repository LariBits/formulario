document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contact-form');
  const successMessage = document.getElementById('success-message');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const mensagem = form.mensagem.value.trim();
    const tipoConsulta = form.querySelector('input[name="query-type"]:checked');

    if (!nome || !email || !mensagem) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if (!tipoConsulta) {
      alert('Por favor, selecione o tipo de consulta.');
      return;
    }

    if (!email.includes('@')) {
      alert('Email inválido.');
      return;
    }

    successMessage.style.display = 'block';

    form.reset();

    setTimeout(() => {
      successMessage.style.display = 'none';
    }, 4000); // a mensagem some após 4 segundos
  });
});
