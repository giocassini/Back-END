// ===================================
// SELECIONANDO ELEMENTOS DO DOM 
// ===================================

// Selecionando por ID
// console.log(Document.getElementById("Título"));
// Para vizualizar na console 

let titulo = document.getElementById("titulo");
let subtitulo = document.getElementById("subtitulo");
let parágrafo = document.getElementById("paragrafo");
let imagem = document.getElementById("imageteste");


//SELECINANDO POR CLASSE
let caixas = document.getElementsByClassName("box");

//MOSTRAR NO CONSOLE.LOG
console.log(titulo);
console.log(caixas);
console.log(imagem);

// ===================================
// Função para alterar o conteúdo
// ===================================

let título = document.getElementById("titulo");
let subtítulo = document.getElementById("subtitulo");
let paragrafo = document.getElementById("paragrafo");

function alterar() {
    titulo.innerText = "Jarvis dominou tudo!";
    subtitulo.innerText = "Só que não!";
    paragrafo.innerText = "O texto do parágrafo foi modificado pelo JavaScript";
} 


