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
const cachorros = require("./data/dogs.json")
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
