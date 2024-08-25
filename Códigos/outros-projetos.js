/*Outros Projetos*/


document.addEventListener('DOMContentLoaded', function() {
    var buttons = document.querySelectorAll('[class^="botao-linha-transporte"]');
    var cards = document.querySelectorAll('[class^="aba-conteudo"]');

    buttons.forEach((button, index) => {
        button.addEventListener('click', function(event) {
            event.stopPropagation();


            cards.forEach((card, cardIndex) => {
                if (cardIndex !== index) {
                    card.classList.remove('ativo');
                }
            });


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

/*Modo Dark*/

let trilho = document.getElementById('trilho')
let cores = document.querySelector(':root')

trilho.addEventListener('click', ()=>{

    trilho.classList.toggle('dark')
    cores.classList.toggle('dark')

})


/*Menu*/

const menuNav = document.getElementById('botoes-mobile')

menuNav.addEventListener('click', animarMenu)

function animarMenu(){
    menuNav.classList.toggle('abrir')
}

/* conteudo principal */


/*carrossel Outros Projetos*/


function setupCarrossel(carrosselIndex) {
    let count = 1;
    document.getElementById(`radio1-${carrosselIndex}`).checked = true;

    setInterval(function() {
        nextImage(carrosselIndex);
    }, 5000);

    function nextImage(index) {
        count++;
        if (count > 2) { 
            count = 1;
        }

        document.getElementById(`radio${count}-${index}`).checked = true;
    }
}


setupCarrossel(1);
setupCarrossel(2);
setupCarrossel(3);


/*Efeito Home*/



window.sr = ScrollReveal({ reset: true });

sr.reveal('.terceira-parte-conteudo', {
    rotate: { x: 0, y: 0, z: 0},
    duration: 3000
});

sr.reveal('.segunda-parte-conteudo', {
    rotate: { x: 0, y: 0, z: 0},
    duration: 3000
});
