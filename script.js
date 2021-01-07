const container = document.getElementById('container');

const imgCogumelo = document.createElement('div');
imgCogumelo.classList.add('cogumelo');

const colunaSelecao = document.getElementsByClassName('colunas')
const circuloSelecao = document.getElementsByClassName('circulos')

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

let contador = 0;
let cogumelo = 0;
const jogada = (e) => {
    
    selecionaColuna(e)

    valorCogumelo()

    alterarCogumelo()
}

const selecionaColuna = (e) => {
    let alvo = e.target.classList[0];

    if(alvo == circuloSelecao[0].classList[0]) {
        alvo = e.target.parentElement.classList[0]
    }
    console.log(alvo)
    const elemento = document.getElementsByClassName(`${alvo}`)

    for(let i = 0; i < 6; i++) {
        let conteudoCirculo = elemento[0].children[i]

        let img = document.createElement('div')
        img = imgCogumelo
        // console.log(img)

        if(i === 5) {
            conteudoCirculo.appendChild(img);

        } else if(conteudoCirculo.children.length !== 0) {
            conteudoCirculo = elemento[0].children[i - 1]
            conteudoCirculo.appendChild(img);
            break
        } 
        // console.log(i)
    }
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
    if(cogumelo === 1) {
        imgCogumelo.style.backgroundImage = "url('img/green_cogu.png')";
    }
    if(cogumelo === 2) {
        imgCogumelo.style.backgroundImage = "url('img/red_cogu.png')";
    }
}

addContainer();