const container = document.getElementById('container');

const body = document.querySelector('body');
const imgCogumelo = document.createElement('div');
imgCogumelo.classList.add('cogumelo');
body.appendChild(imgCogumelo);

const colunaSelecao = document.querySelector('.colunas')
const circuloSelecao = document.querySelector('.circulos')

const coluna = (numeroColuna) => {  
    const colunas = document.createElement('div');
    colunas.classList.add(`coluna${numeroColuna}`, 'colunas');
    colunas.addEventListener('click',jogada);
    for(let i = 0; i < 6; i++) {
        let circulo = document.createElement('div');
        circulo.classList.add('circulos');
        colunas.appendChild(circulo);
    }
    container.appendChild(colunas);
}

const addContainer = () => {
    for(let i = 0; i < 7; i++) {
        coluna(i);
    }
}

let contador = 0;
let cogumelo = 0;
const jogada = (e) => {
    let alvo = e.target.classList[0];

    // if(alvo === circuloSelecao  ) {
        // a = 'oi'
    // }

    console.log(alvo)

    valorCogumelo()

    alterarCogumelo()
}

const valorCogumelo = () => {
    if(contador % 2 === 0) {
        cogumelo = 1;
        contador += 1;
        return cogumelo
    }
    if(contador % 2 !== 0) {
        cogumelo = 2;
        contador += 1;
        return cogumelo
    }    
}

const alterarCogumelo = () => {
    if(cogumelo === 1) {
        imgCogumelo.style.backgroundImage = "url('img/green_cogu.png')";
    }
    if(cogumelo === 2) {
        imgCogumelo.style.backgroundImage = "url('img/red_cogu.png')";
    }
}

addContainer();