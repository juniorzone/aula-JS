let numeroJogador, numeroComputador;

// Adicionar numeros randomicos de 1 a 10 "floor quebra o 1,33"
numeroComputador = Math.floor(Math.random(0,1) * 10);
console.log(numeroComputador);
numeroJogador = prompt("Tente advinhar o número de 0 a 9");

if(numeroComputador == numeroJogador){
    document.write("Voce ganhou!");
    document.write("<br>");
    document.write("<img src='imagens/feliz.png'>"); //adicionar imagens
    
}
else{
    document.write("Voce perdeu!");
    document.write("<br>");
    document.write("<img src='imagens/triste.png'>");
}