//=================================
// Server.js - BACK-END COMPLETO
//=================================

// PARTE 1: Importar as ferramentas
const express = require('express'); // bibliloteca para criar o servidor
const path = require('path'); // ajuda a montar caminhos de pastas
const { DatabaseSync } = require('node:sqlite'); // banco SQLIFE (já vem dentro do node!)

// PARTE 2: Criar o servidor e abrir o banco 
const app = express(); //Criar o servidor
const banco = new DatabaseSync(path.join(__dirname, 'tarefas.db'));
// abre o banco(se não existir, cria o arquivo). --------> ____dirname = pasta deste arquivo 

// Cria a tabela "tarefas" se ela ainda não existir 
banco.exec(`
    create TABLE IF NOT EXISTS  tarefas (
        id           integer primary key autoincrement,
        titulo        text not null,
        concluida     integer default 0 
    )
`);
 
// Parte 3: Configurar o servidor (os famosos middlewares)
// app.use: "Todo pedido que chegar, passe primeiro por aqui."

app.use(express.json()); // faz o servidor entender JSON
app.use(express.static(path.join(__dirname, '..', 'public'))); 
//entrega da pasta "public"

// ---------------------------------------
// PARTE 4: ROTAS (A API)
// ---------------------------------------
// ROTA: a combinação do método + endereço
// API: é o conjunto dessas rotas
// 
//toda rota recebe 2 coisas (sempre na ordem abaixo):
// requisição = o PEDIDO que chegou 
// resposta = o que vamos devolver para o frount. 
//
// Operação / Método HTTP / Endereço / Comando SQL
// ------------------------------------------------
// CREAT   /  POST       / TAREFAS  / INSERT
// READ    /  GET       / TAREFAS   / SELECT
// Update  / PUT       / /TREFAS/:ID / INSERT
// DELETE / DELETE    / /TAREFAS/ID: / DELETE


// =======  Criar ========
// POST /TAREFAS -----> SALVAR UMA TAREFA NOVA NO BANCO DE DADOS (SQLLITE)
app.post('/tarefas', (requisição, resposta)=> {
    const titulo = requisição.body.titulo; //texto enviado pela página 
    
    // se o titulo estiver, vazio, avisa que deu erro (440) e para aqui
    if (!titulo) {
        return resposta.status(400).json({erro: 'Digite uma título'}); 
    }
    // insert: adcionar uma linha na tabela. Lembre-se os "?" são trocados pelo valor do título
    banco.prepare('insert into tarefas (titulo) values(?)') .run(titulo);
    resposta.json({ok: true}); // responde que deu certo.
});

// PASSO A PASSA DO QUE ACONTCE NO CREATE
// 1) O usuário diita no campo e clica m "Adicionar" no navegador
// 2) O front manda um POST para/ tarefas com {"titulo:":"..."}
// 3) Chega aqui no server. O exprese solhe sta rota porque o metodo POST e o endereço é / tarefas
// 4) "Requisição.body.titulo" é o texto que o font mandou, lembrando  só funciona por causa do express.json() que está em cima!
// 5) Valição: se vier vazio, respondemos com status 400(="pedido errado") em um JSON de erro, NUNCA confie no front, sempre valide aqui. 
// 6) Insert em tarefas
// 7) resposta

// ========= LER =============
// GET/ tarefas -> devolve todas as tarefas 
app.get('/tarefas', (requisição, resposta) => {
  // SELECT : busca todas as linhas da tabela (as mais novas primeiro)
  const tarefas = banco.prepare('select * from tarefas order by id desc'). all();
  resposta.json(tarefas)
});

// =========== ATUALIZAR ====================
// put /tarefas/5 --> muda  tarefa de id 5 (marca como feita ou pendente)
app.put('/tarefas/:id', (requisição, resposta) => {
  const id = requisição.params.id;
  const concluida = requisição.body.concluida
  
  //update; alterar a linha que tem o ID 
  banco.prepare('UPDATE tarefas SET concluida = ? where id = ?').run(concluida, id);
  resposta.json({ ok:true});
});

// ================ Atualizar  =======================
// delete/ tarefas/5 ----> apaga a tarefa  de id 5 
app.delete('/tarefas/:id', (requisição, resposta) => {
    const id = requisição.params.id;

    //  Delete: remove a linha que tem esse 
    banco.prepare('delete from tarefas where id = ?').run(id);

    resposta.json({ ok:true});
})

// ============================
// Parte 5: ligar o servidor 
// ============================

app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
})

