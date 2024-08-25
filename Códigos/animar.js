
/* cabeçalho */

/*Modo Dark*/

let trilho = document.getElementById('trilho')
let cores = document.querySelector(':root')

trilho.addEventListener('click', ()=>{

    trilho.classList.toggle('dark')
    cores.classList.toggle('dark')

})


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

