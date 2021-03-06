const body = document.querySelector('body')

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

    if (alvo == circuloSelecao[0].classList[0]) {
        alvo = e.target.parentElement.classList[0]
    }
    const elemento = document.getElementsByClassName(`${alvo}`)

    criaCogumelo(elemento)
}

const criaCogumelo = (elemento) => {
    const imgCogumelo = document.createElement('div')
    imgCogumelo.classList.add('cogumelo')

    alterarCogumelo(imgCogumelo)

    for (let i = 0; i < 6; i++) {
        let conteudoCirculo = elemento[0].children[i]

        if (conteudoCirculo.children.length === 1) {
            conteudoCirculo = elemento[0].children[i - 1]
            conteudoCirculo.appendChild(imgCogumelo)

            condicaoVitoria(elemento)
            break
        } else if (i === 5) {
            conteudoCirculo.appendChild(imgCogumelo)

            condicaoVitoria(elemento)
        }
    }
}

const alterarCogumelo = (imgCogumelo) => {
    if (cogumelo === 1) {
        imgCogumelo.style.backgroundImage = "url('img/green_cogu.png')";
    }
    if (cogumelo === 2) {
        imgCogumelo.style.backgroundImage = "url('img/red_cogu.png')";
    }
}

const condicaoVitoria = (elemento) => {

    condicaoVitoriaVertical(elemento)

    condicaoVitoriaHorizontal(elemento)

    // condicaoVitoriaDiagonal(elemento)

    condicaoEmpate()
}

const condicaoVitoriaVertical = (coluna) => {
    
    let vCogumelo = [0, 0, 0, 0, 0, 0]

    for(let i = 5; i >= 0; i--) {
        if(coluna[0].children[i].children[0] !== undefined){
            vCogumelo[i] = coluna[0].children[i].children[0].style.backgroundImage
        }
    }

    if(vCogumelo[0] === vCogumelo[1] && vCogumelo[1] === vCogumelo[2] && vCogumelo[2] === vCogumelo[3] && vCogumelo[3] !== 0) {
        vitoria()
    } else if(vCogumelo[1] === vCogumelo[2] && vCogumelo[2] === vCogumelo[3] && vCogumelo[3] === vCogumelo[4] && vCogumelo[4] !== 0) {
        vitoria()
    } else if(vCogumelo[2] === vCogumelo[3] && vCogumelo[3] === vCogumelo[4] && vCogumelo[4] === vCogumelo[5] && vCogumelo[5] !== 0) {
        vitoria()
    }
}

const condicaoVitoriaHorizontal = (elemento) => {

    let vCogumelo = [
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0],
    ]

    const arrColunas = document.querySelectorAll('.colunas')
    
    for(let coluna = 0; coluna < 7; coluna++) {

        let numeroColuna = arrColunas[coluna]

        for(let circulo = 5; circulo >= 0; circulo--) {
            if(numeroColuna.children[circulo].children[0] !== undefined){
                vCogumelo[circulo][coluna] = numeroColuna.children[circulo].children[0].style.backgroundImage
            }
        }

    }

    for(let linha = 0; linha < 6; linha ++) {
        let verificaLinha = vCogumelo[linha]

        if(verificaLinha[0] === verificaLinha[1] && verificaLinha[1] === verificaLinha[2] && verificaLinha[2] === verificaLinha[3] && verificaLinha[3] !== 0) {
            vitoria()
        } else if(verificaLinha[1] === verificaLinha[2] && verificaLinha[2] === verificaLinha[3] && verificaLinha[3] === verificaLinha[4] && verificaLinha[4] !== 0) {
            vitoria()
        } else if(verificaLinha[2] === verificaLinha[3] && verificaLinha[3] === verificaLinha[4] && verificaLinha[4] === verificaLinha[5] && verificaLinha[5] !== 0) {
            vitoria()
        } else if(verificaLinha[3] === verificaLinha[4] && verificaLinha[4] === verificaLinha[5] && verificaLinha[5] === verificaLinha[6] && verificaLinha[6] !== 0) {
            vitoria()
        }
    }
}

// for(let coluna = 0; coluna < 7; coluna++) {
//     let numeroCirculo = elemento[0].children[circulo]

//     let numeroColuna = arrColunas[coluna]
//     console.log(numeroColuna.children[coluna])

//     for(let circulo = 5; circulo >= 0; circulo--) {
//         if(numeroCirculo.children[0] !== undefined){
//             vCogumelo[coluna][circulo] = numeroCirculo.children[0].style.backgroundImage
//             console.log(vCogumelo)
//         }
//     }

// let Contador = 0
// const condicaoVitoriaDiagonal = (elemento) => {

//     let vCogumelo = [
//         [0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0],
//         [0, 0, 0, 0, 0, 0, 0],
//     ]

//     for(let i = 5; i >= 0; i--){

//         if(elemento[0].children[i].children[0] !== undefined || elemento[0].nextElementSibling.children[i - 1] !== undefined){
//             console.log('oi')
//             // console.log(elemento[0].children[i].children[0].style.backgroundImage)
//             console.log(elemento[0].nextElementSibling.children[i - 1].children[0].style.backgroundImage)
//             if(elemento[0].children[i].children[0].style.backgroundImage === elemento[0].nextElementSibling.children[i - 1].children[0].style.backgroundImage) {
//                 Contador++
//                 console.log(Contador)
//             }

//             // console.log(elemento[0].nextElementSibling.children[i + 1].children[0])
//         }

//     }
// }

const condicaoEmpate = () => {

    let status = true

    for(let coluna = 0; coluna < 7; coluna++){
        let numeroColuna = container.children[coluna]

        for(let circulo = 0; circulo < 6; circulo++){
            if(numeroColuna.children[circulo].children.length === 0) {
                status = false
            }
        }
    }

    if(status === true) {
        empate()
    }
}

const vitoria = () => {
    // const inputButton = document.createElement('input')
    // inputButton.type = 'button'
    // inputButton.value = 'Fim!'
    // inputButton.onclick = 'reset()'
    // divVitoria.appendChild(inputButton)

    const divVitoria = document.createElement('div')
    divVitoria.className = 'vitoria'
    divVitoria.textContent = ("Voc?? venceu!")
    body.appendChild(divVitoria)
}

const empate = () => {
    // const inputButton = document.createElement('input')
    // inputButton.type = 'button'
    // inputButton.value = 'Fim!'
    // inputButton.onclick = 'reset()'
    // divEmpate.appendChild(inputButton)

    const divEmpate = document.createElement('div')
    divEmpate.className = 'empate'
    divEmpate.textContent = ('Empatou')
    body.appendChild(divEmpate)
}

// const reset = () => {

// }

addContainer();