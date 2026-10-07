// ======================================
// API DE CACHORROS
// ======================================

const url = 'https://dog.ceo/api/breeds/image/random';

// ======================================
// Pegando os elementos do HTML
// ======================================

const fotoCachorro = document.getElementById('fotoCachorro');
const btnNovaFoto = document.getElementById('btnNovaFoto');

// ======================================
// Função para buscar uma nova foto
// ======================================

async function buscarFoto() {

    // Fazer uma requisição para a API
    const resposta = await fetch(url);

    // Converter a resposta da API para JSON
    const dados = await resposta.json();

    // Mostrar no console o que a API retornou
    console.log(dados);

    // Alterar o endereço da imagem no HTML
    fotoCachorro.src = dados.message;
}

// ======================================
// BOTÃO
// ======================================

// Quando o usuário clicar no botão,
// vamos executar a função buscarFoto()
btnNovaFoto.addEventListener('click', buscarFoto);

// Buscar uma foto ao carregar a página
buscarFoto();

