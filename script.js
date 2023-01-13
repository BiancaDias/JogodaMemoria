let cartas = 1;

while((cartas < 4 || cartas >14) || (cartas%2!=0)){
    cartas = prompt("Insira o número de cartas que deseja para jogar");
}

const baralho = [];

const imagens = ['bobrossparrot.gif','bobrossparrot.gif','explodyparrot.gif','explodyparrot.gif','fiestaparrot.gif','fiestaparrot.gif','metalparrot.gif','metalparrot.gif','revertitparrot.gif','revertitparrot.gif','tripletsparrot.gif','tripletsparrot.gif','unicornparrot.gif','unicornparrot.gif'];
criaCartas()


function virar(carta){
    const cartaVirada = document.querySelector('.temporaria');
    carta.classList.add('temporaria');
    console.log(cartaVirada);
    const frente = carta.firstChild;
    const verso = carta.lastChild;
    
    frente.classList.add('efeito-front-face');
    verso.classList.add('efeito-back-face');

    if(cartaVirada !== null){ //se já tem carta desvirada
        console.log(carta);
            console.log(cartaVirada);
        if(cartaVirada.innerHTML == carta.innerHTML){
            cartaVirada.classList.remove('temporaria');
            carta.classList.remove('temporaria');
        }
        else{
            setTimeout(desvirar, 1000, carta);
            setTimeout(desvirar, 1000, cartaVirada);
        }
    }
        
}

function desvirar(carta){
        let frente = carta.firstChild;
        let verso = carta.lastChild;
        frente.classList.remove('efeito-front-face');
        verso.classList.remove('efeito-back-face');
        carta.classList.remove('temporaria');
}    


function comparador() { 
	return Math.random() - 0.5; 
}

function criaCartas(){
    let tabuleiro = document.querySelector('.tabuleiro');
    for(let i=0; i<cartas;i++){
        baralho.push( `<div data-test="card" onclick="virar(this)" class="card"><div class="front-face face"><img data-test="face-down-image" src = "projeto__parrots__imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/back.png"></div><div class="back-face face">
        <img data-test="face-up-image" src="projeto__parrots__imagens/Arquivos Úteis - Projeto 04 - Parrot Card Game/${imagens[i]}"></div></div>`);
    }

    baralho.sort(comparador);

    for(let i=0;i<cartas; i++){
        tabuleiro.innerHTML += baralho[i];
    }
}