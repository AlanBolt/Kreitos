/*
objetivo quando clicarmos no botao temos que mostra a imagem de fundo correspondente

-passo 1 : da um jeiti de pega o elemento HTML dos botoes

passo 2 ; da um jeito de identifica o clique do usuario no botao

passo 3 ; desmarca o botao selecionado anterior

passo4 ; marca o botao clicando como se estivesse selecionado

passo 5 ; esconder a imagem de fundo  anterior

passo 6 ; fazer aparece a imagem  de fundo correspondente ao botao clicado
*/

//passo 1 : da um jeiti de pega o elemento HTML dos botoes
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

//passo 2 ; da um jeito de identifica o clique do usuario no botao
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        console.log|(indice);

        //passo 3 ; desmarca o botao selecionado anterior

            desativaBotaoselecionado();
        //passo4 ; marca o botao clicando como se estivesse selecionado

            selecionarBotaoCarrosel(botao);

        //  passo 5 ; esconder a imagem ativa de fundo  anterior

            esconderImagemAtiva();

         // passo 6 ; fazer aparece a imagem  de fundo correspondente ao botao clicado

            
            mostraImagemDeFundo(indice);

           

           
    })
})

function mostraImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrosel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativaBotaoselecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
