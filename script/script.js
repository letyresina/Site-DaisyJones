const paraScrollar = document.getElementById('paraScrollar');
const secaoAlvo = document.getElementById('conteudo-home');

paraScrollar.addEventListener('click', function() {
    secaoAlvo.scrollIntoView({ behavior: 'smooth' });
});
