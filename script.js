let cartas = 1;

while((cartas < 4 || cartas >14) || (cartas%2!=0)){
    cartas = prompt("Insira o número de cartas que deseja para jogar");
}

const array = document.querySelectorAll('.card');

const baralho = [];

for(let i =0; i<cartas; i++)
{
    baralho.push(array[i]);
}

baralho.sort(comparador);

console.log(baralho);

baralho.forEach(exibirNoTabuleiro);

function virar(carta){
    const frente = carta.firstChild;
    console.log(frente);
    frente.classList.toggle('efeito-front-face');
    const verso = carta.lastChild;
    verso.classList.toggle('efeito-back-face');
}

function comparador() { 
	return Math.random() - 0.5; 
}

function exibirNoTabuleiro(carta, posicao){
    carta.classList.remove('escondido');
}