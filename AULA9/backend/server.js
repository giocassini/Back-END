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
// =========================
// Rotas da API
// =========================

// ROTA 1 - Cachorro aleatório
app.get("./api/cachorro/aleatorio", (req, res) => {
// req - request(requisição) = é o pedido que chega ao servidor, por exemplo, o navegador pede uma foto de cachorro
// res - response(resposta) = é o que servidor envia de volta, por exemplo, o endereço da foto do cachorro

// pegar todas as fotos as raças
// object.values pega os valores do objeto
// flat transforma tudo em um único array
const todasAsFotos = Object.values(cachorros).flat();
})

//Sorteia uma foto aleatória 
const item = sortear(todasAsFotos)

// Responder parao cliente em formato JSON
res.json({
    // status da resposta 
    status: "success",
    // URL da imagem que foi sorteada
    message: `http://localhost:${PORT}/fotos/${item}`
});

// ROTA 2 - Cachorro por raça 
// exemplo de acesso:
// http://localhost:3000/api/cachorros/husky

app.get("/api/cachorros/:raça", (req, res) => {
    
    // pega o parametro da URL (ex:husky)
    const raça = req.params.raca.toLocaleLowerCase();
    // params = contém os parâmentros definidos na URL da rota
    //.raça = acessa o parâmetro chamado raça. 
    //.toLowerCase() = Transforma todas as letras em minúsculas
    if (!cachorros[raça]) {
       //cachorros[raça]: Procurar a raça dentro do objeto *Cachorros*
       //!: significa não: Nesse caso, verifique se a raça não existe ou se seu valor é falso
       // se não existir, retorna erro 404
    res.status(404).json({
    status: "error",
    message: `Raça "${raça}" não encontrada.`
});
     // encerra a execução da rota
     return;
    }

    //sorteia uma fotoda raca solicitada 
    const iten = sortear(cachorros[raça]);
    
    // retorna a resposta em Json
    res.json({
        status: "success", 
        message: `http://localhost:${PORT}/fotos/${item}`
    });
});

// ==================================
// INICIA O SERVIDOR
// ==================================

//inicia o servidor express
app.listen(PORT, () => {
    console.log(`🚀Servidor rodando em http://localhost:${PORT}`)
    console.log(`🚀Coloque as fotos manualmente em: data/fotos/`)
});