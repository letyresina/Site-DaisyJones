const paraScrollar = document.getElementById('paraScrollar');
const secaoAlvo = document.getElementById('conteudo-home');

paraScrollar.addEventListener('click', function() {
    secaoAlvo.scrollIntoView({ behavior: 'smooth' });
});

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)
  });
}

const musicas = document.querySelector('.musicas-scroll');
typeWrite(musicas, "<br>");
