const container = document.getElementById('container');

const coluna = (numeroColuna) => {  
    const colunas = document.createElement('div');
    colunas.classList.add(`coluna${numeroColuna}`, 'colunas');
    for(let i = 0; i < 6; i++) {
        let circulo = document.createElement('div');
        circulo.classList.add('circulos');
        colunas.appendChild(circulo);
    }
    container.appendChild(colunas);
}

const addContainer = () => {
    for(let i = 0; i < 7; i++) {
        coluna(i)
    }
}