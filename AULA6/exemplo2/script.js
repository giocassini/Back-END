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

título.innerText = document.getElementById("titulo");
subtítulo.innerText = document.getElementById("subtitulo");
paragrafo.innerText = document.getElementById("paragrafo");

function alterar() {
    titulo.innerText = "Jarvis dominou tudo!"
    subtitulo.innerText = "Só que não!"
    paragrafo.innerText = "O texto do parágrafo foi modificado pelo JavaScript"
 
// Alterar elementos da classe
caixas[0].innerText = "Primeiro Parágrafo alterado"
caixas[1].innerText = "Segundo Parágrafo alterado"

// Alterando imagem
imagem.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGdom9zQvjZL8Z3yXCQEWLhL5-gZvPlpYN2Kl-nZ7-W6d9rs41Gjuw3KY&s=10";

} 



