// =======================
// NOSSA API DE CACHORROS 
// =======================
//
// Agora as fotos NÃO são mais baixadas automaticamente!.
// Elas DEVEM existir manualmente na pasta
// Data/Fotos
// =======================

// ROTAS:
// GET /api/cachorros/aleatorio
// GET /api/cachorros/: raca

// Importar o framwork Express para criar o servidor 
const Express = require("express");
// Importar o CORS para permitir requisições de outros dominios (ex: frontend)
const CORS = require("cors");
// Importa o módulo de arquivos do NODE
const fs = require("fs") 
// Importa utilidades para trrabalhar com caminhos de arquivos 
const path = require("path");
// Imorta o arquivo JSON que contém as raças e fotos
const cachorros = require("./data/dogs.json");
const { match } = require("assert");
// cria aplicação Express 
const app = express();
// definir a porta onde o servidor irá rodar
const PORT = 3000; 
// Habilitar o uso do CORS na aplicação
app.use(cors());

//=============================
// SERVIR ARQUIVOS ESTÁTICOS
//=============================

// Nós falmos para o Express
// "Tudo  que estiver na pasta data/fotos pode ser acessado pela URL/FOTOS"
// Exemplo: 
// hhtp://localhost:3000/fotos/husky/1.jpg

app.use(
    "/fotos",
    express.static(
        path.join(__dirname, "data/fotos") // caminho real da pasta do servidor
    )
)

//=============================
// Função Auxiliar
//=============================

// Função que recebe um arry e retorna um item aleatório dele
function sortear(arry) {
    // gera um número aleatório entre 0 e o tamanho do array
    // array.length - conta quantos itens existem na lista
    // math.random() - Sorteia um número decimal entre 0 e 1
    // math.random() * array.length - multiplica o número sorteado pela quantidade de itens
    // math.floor() - tira a parte decimal, arredonda para baixo.
    const i = math.floor(math.random() * arrayBuffer.length)
    // Guarda a posição na váriavel i 
    // retorna o item sorteado 
    return arry[i];
}