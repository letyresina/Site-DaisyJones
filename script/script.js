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
function abrirBanda(){
    window.open("banda.html")
}

function abrirIntegrantes(){
  window.open("integrantes.html")
}

// Carrossel de resenha
document.addEventListener('DOMContentLoaded', function() {
    var slides = document.querySelectorAll('.carousel-slide');
    var currentSlide = 0;
    var slideInterval = setInterval(nextSlide, 3000);
    var next = document.querySelector('.next');
    var prev = document.querySelector('.prev');
    var playing = true;
    var pauseButton = document.querySelector('#pause');
    var playButton = document.querySelector('#play');
  
    function nextSlide() {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add('active');
    }
  
    function prevSlide() {
      slides[currentSlide].classList.remove('active');
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      slides[currentSlide].classList.add('active');
    }
  
    next.addEventListener('click', function() {
      nextSlide();
      if (playing) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 3000);
      }
    });
  
    prev.addEventListener('click', function() {
      prevSlide();
      if (playing) {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 3000);
      }
    });
    
  });
  
function enviaResenha(){

  let nomeUsuario = document.getElementById('nomeUsuario').value;
  let emailUsuario = document.getElementById('emailUsuario').value;
  let adaptacaoLivro = document.getElementById('adaptacaoLivro').value;
  let resenha = document.getElementById('resenha').value

  if(nomeUsuario =="" || emailUsuario =="" || adaptacaoLivro=="" || resenha==""){
    alert('Preencha todos campos antes de prosseguir')
  }else{
    alert('Obrigada por enviar sua resenha!')
  }
}