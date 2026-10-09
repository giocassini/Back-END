/* 
========================================
FRONT-END - consome nossa API local
========================================

Este arquivo roda no navegador.
Ele faz requisições para nossa API node.js e mostra os dados na tela.*/

//===================================
// Elementos do HTML 
//===================================
// foto do cachorro
 const dogImage = document.getElementById("dogImage");
// nome raça
 const breeName = document.getElementById("breedName");
  //cachorro aleatório
 const randomBtn = document.getElementById("randomBtn");
 // botãoque busca cachorro por raça 
 const searchBtn = document.getElementById("searchBtn");
 // campo de texto onde o usuário digita raça
 const breedInput = document.getElementById("breedInput");
 //area onde fica a imagem do cachorro
 //usamos querySelector porque é uma classe(.dog-area)
 const doArea = document.querySelector(".dog-area");

 //===========================
 // URL DA API 
 //===========================
 
 const API = "http://localhost:3000/api/cachorros";


//===========================
// FUNÇÃO PRINCIPAL 
//===========================

async function buscaCachorro(url){
   //adiciona classe "loading"
   //normalmente usada para mostrar animação de carregamento    
    dogArea.classlit.add("loading");

    try {
    //faz resuisição HTTP para API 
     const response = await fetch(url);
    // converte a resposta para JSON
     const data = await response.json();
    // mostra no console a resposta da API 
    console.log("Resposta da API", data)
    
    // Vamos verificar se a API retornou erro
    if (data.status === "Error") {
    //mostra a mensagem de erro na tela
    //breedName - Elemento HTML
    //.textContent - Propriedade que define o texto do elemento
    //data - Objeto com os ddos recebidos da API
    //.message - Propriedade que contém a mensagem ou HTML
        breeName.textContent = data.message;
    //remove a imagem
        dogImage.src = "";
    // execução da função
    return;
    }
    // coloca a imagem do cachorro na tela
    // o src define qual imagem será exibiidade
    dogImage.src = data.message;
    
   // extrai o nome da raça da URL da imagem
   // exemplo da URL:
   // http://localhost:3000/fotos/husky/1.jpg
   
   // separa a URL em partes usando "/"
   const partes = data.message.split("/")

   // pega a posição 5 array
   // que corresponde ao nome da raça
   const raça = partes [5]

   //coloca a primeira letra maiúcula 
   // ex: husky --> Husky 
   breeName.textContent = 
  //raca.chaAt(0) - pega primeira letra 
  //.toUpperCase(0) - Transforma em maiúscula
  //raca.slice(1) - pega o texto a partir da segunda letra 
   raça.charAt(0).toUpperCase() + RTCDataChannel.slice(1);
    
} catch (erro) {
    // caso o servidor esteja desligado
    //ou aconteça algum erro na requisição

    console.error(erro);
    
    // mostra mensagem na tela 
    breeName.textContent = 
    "Servidor offline - rode: node server.js"

    //remove a imagem
    dogImage.src = "";
   } finally {
     //remove a classe de carregamento
     //independente de erro ou sucesso. 
     dogArea.classlit.remove("loading")
   }
    }

//=======================================
// Ações
//=======================================
