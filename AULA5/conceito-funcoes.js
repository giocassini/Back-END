// FUNÇÕES EM JAVASCRIPT

// O que é uma função?
// Uma função é um bloco de código reutilizável, cria para executar uma tarefa específica.

// Analogia SIMPLES!
// Você vai colocar valores (parâmetros)
// ela processa
// Devolve um resultado (return)

//--------------------------------
// Estrutura básica de uma função
//--------------------------------

function nomeDafuncao(parametro1, parametro2) {
    //código que será executado
return resultado;
}

// function ---> palavra-chave
// nomedafunção ---> nome da função
// parâmetros ---> valores que a função recebe
// return ---> valor que a função devolve

// 5 EXEMPLOS 

// 1 - SOMAR DOIS NÚMEROS 

function SOMAR(a, b) {
    return a + b; 
}

console.log(SOMAR(2,3))

// 2 - CONVERTER REAL PARA DÓLAR 
function REALparaDÓLAR(valorreal, cotacao){
    return valorreal / cotacao;
}

console.log(REALparaDÓLAR(10, 5.20).toFixed(2))

// .toFixed - exibe quantas casas pode ser exibidas 

// 3 - CONVERTER DÓLAR PARA REAL

function DÓLARparaREAL(valordolar, cotacao){
    return valordolar * cotacao;
}
console.log(DÓLARparaREAL(5.20, 5));


// 4 - AUMENTO DE SALÁRIO (você merece 25% de aumento)

function aumentosalário(salarioatual, porcentagem){
    return salarioatual * (1+ porcentagem); 
}

console.log(aumentosalário(2000, 0.25));

// 5 - VERIFIQUE SE É PAR OU IMPAR?
function parouimpar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "impar";
    }
}
console.log(parouimpar(8));

     
