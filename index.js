const elementosServico = document.querySelectorAll('.Servico')

elementosServico.forEach(function (Servico) {
  Servico.addEventListener('click', function () {
    Servico.classList.toggle('ativa')
  })
})