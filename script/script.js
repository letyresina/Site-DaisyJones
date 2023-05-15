// Scroll
const paraScrollar = document.getElementById('paraScrollar');
const secaoAlvo = document.getElementById('conteudo-home');

paraScrollar.addEventListener('click', function() {
    secaoAlvo.scrollIntoView({ behavior: 'smooth', duration:1.8});
});

// Animação de máquina de escrever

function typeWrite(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = ' ';
    textoArray.forEach(function(letra, i){   
      
    setTimeout(function(){
        elemento.innerHTML += letra;
    }, 75 * i)
  });
}

const titulo = document.querySelector('.tituloScroll');
typeWrite(titulo);

//Função para abrir página de integrantes
function abrirIntegrantes(){
    window.open("integrantes.html")
}
