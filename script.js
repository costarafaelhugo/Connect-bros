const container = document.getElementById('container');
const imgCogumelo = document.createElement('div');
imgCogumelo.classList.add('cogumelo');
container.appendChild(imgCogumelo);

const coluna = (numeroColuna) => {
    const colunas = document.createElement('div');
    colunas.classList.add(`coluna${numeroColuna}`, 'colunas');
    colunas.addEventListener('click', jogada);
    for (let i = 0; i < 6; i++) {
        let circulo = document.createElement('div');
        circulo.classList.add('circulos');
        colunas.appendChild(circulo);
    }
    container.appendChild(colunas);
}

const addContainer = () => {
    for (let i = 0; i < 7; i++) {
        coluna(i);
    }
}

const jogador1 = () => {}

const jogador2 = () => {}

let contador = 0;
let cogumelo = 0;
const jogada = () => {

    valorCogumelo()
    alterarCogumelo()

}

const valorCogumelo = () => {
    if (contador % 2 === 0) {
        cogumelo = 1;
        contador += 1;
        return cogumelo
    }
    if (contador % 2 !== 0) {
        cogumelo = 2;
        contador += 1;
        return cogumelo
    }
}

const alterarCogumelo = () => {
    if (cogumelo === 1) {
        imgCogumelo.style.backgroundImage = "url(img/red_cogu.png)";
    }
    if (cogumelo === 2) {
        imgCogumelo.style.backgroundImage = "url(img/grren_cogu.png)";
    }
}

addContainer();