/*Outros Projetos*/


document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('[class^="botao-linha-transporte"]');
    var cards = document.querySelectorAll('[class^="aba-conteudo"]');

    buttons.forEach((button, index) => {
        button.addEventListener('click', function(event) {
            event.stopPropagation();

            // Fecha todas as outras abas
            cards.forEach((card, cardIndex) => {
                if (cardIndex !== index) {
                    card.classList.remove('ativo');
                }
            });

            // Alterna a aba clicada
            cards[index].classList.toggle('ativo');
        });
    });

    document.addEventListener('click', function(event) {
        cards.forEach(card => {
            if (!card.contains(event.target) && !Array.from(buttons).includes(event.target)) {
                card.classList.remove('ativo');
            }
        });
    });
});

/* cabeçalho */

const menuNav = document.getElementById('botoes-mobile')

menuNav.addEventListener('click', animarMenu)

function animarMenu(){
    menuNav.classList.toggle('abrir')
}

/* conteudo principal */

let count=1
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 5000)

function nextImage(){
    count++;
    if(count>3){
        count=1;
    }

    document.getElementById("radio"+count).checked = true;
}






window.sr = ScrollReveal({ reset: true });

sr.reveal('.terceira-parte-conteudo', {
    rotate: { x: 0, y: 0, z: 0},
    duration: 3000
});

sr.reveal('.segunda-parte-conteudo', {
    rotate: { x: 0, y: 0, z: 0},
    duration: 3000
});

