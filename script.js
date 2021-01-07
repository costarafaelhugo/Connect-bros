const container = document.getElementById('container')

const colunaSelecao = document.getElementsByClassName('colunas')
const circuloSelecao = document.getElementsByClassName('circulos')

const criaColuna = (numeroColuna) => {  
    const colunas = document.createElement('div')
    colunas.classList.add(`coluna${numeroColuna}`, 'colunas')
    colunas.addEventListener('click', jogada)
    for (let i = 0; i < 6; i++) {
        let circulo = document.createElement('div')
        circulo.classList.add('circulos', `circulos${i}`)
        colunas.appendChild(circulo)
    }
    container.appendChild(colunas)
}

const addContainer = () => {
    for (let i = 0; i < 7; i++) {
        criaColuna(i)
    }
}

let contador = 1;
let cogumelo = 0;
const jogada = (e) => {

    valorCogumelo()
    
    selecionaColuna(e)
}

const valorCogumelo = () => {
    contador += 1;
    if (contador % 2 === 0) {
        cogumelo = 1;
        return cogumelo
    }
    cogumelo = 2;
    return cogumelo
}

const selecionaColuna = (e) => {
    let alvo = e.target.classList[0];

    if(alvo == circuloSelecao[0].classList[0]) {
        alvo = e.target.parentElement.classList[0]
    }
    const elemento = document.getElementsByClassName(`${alvo}`)

    criaCogumelo(elemento)
}

const criaCogumelo = (elemento) => {
    const imgCogumelo = document.createElement('div')
    imgCogumelo.classList.add('cogumelo')

    alterarCogumelo(imgCogumelo)

    for(let i = 0; i < 6; i++) {
        let conteudoCirculo = elemento[0].children[i]

        if(conteudoCirculo.children.length === 1) {
            conteudoCirculo = elemento[0].children[i - 1]
            conteudoCirculo.appendChild(imgCogumelo)
            condicaoVitoria(elemento)
            break
        } else if(i === 5) {
            conteudoCirculo.appendChild(imgCogumelo)
        }
    }
}

const alterarCogumelo = (imgCogumelo) => {
    if(cogumelo === 1) {
        imgCogumelo.style.backgroundImage = "url('img/green_cogu.png')"
    }
    if(cogumelo === 2) {
        imgCogumelo.style.backgroundImage = "url('img/red_cogu.png')"
    }
}

const condicaoVitoria = (elemento) => {

    condicaoVitoriaVertical(elemento)

    condicaoVitoriaDiagonal()

}

const condicaoVitoriaVertical = (coluna) => {
    
    let vCogumelo = [0, 0, 0, 0, 0, 0]

    for(let i = 5; i >= 0; i--){
        if(coluna[0].children[i].children[0] !== undefined)
        vCogumelo[i] = coluna[0].children[i].children[0].style.backgroundImage
    }

    if(vCogumelo[0] === vCogumelo[1] && vCogumelo[1] === vCogumelo[2] && vCogumelo[2] === vCogumelo[3] && vCogumelo[3] !== 0) {
        console.log('vc venceu')
    }
    if(vCogumelo[1] === vCogumelo[2] && vCogumelo[2] === vCogumelo[3] && vCogumelo[3] === vCogumelo[4] && vCogumelo[4] !== 0) {
        console.log('vc venceu')
    }
    if(vCogumelo[2] === vCogumelo[3] && vCogumelo[3] === vCogumelo[4] && vCogumelo[4] === vCogumelo[5] && vCogumelo[5] !== 0) {
        console.log('vc venceu')
    }
}

constc condicaoVitoriaDiagonal = () => {

}

addContainer();