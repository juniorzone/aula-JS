let limite, multaPorPessoa, E, P;
limite = 100;
multaPorPessoa = 10;

P = prompt("Quantos Pessoas ?");
E = P - limite;

if(E > 0){
    M = E * multaPorPessoa;
    preco = P * 45;
    document.write("valor: R$ " + preco);
    document.write("<br>Total Pessoas: " + P);
    document.write("<br>Pessoa Excesso:" + E);
    document.write("<br>Multa: R$ " + M);
}
 else if(E < 0){
    M = E * multaPorPessoa;
    preco = P * 35;
    document.write("valor: R$ " + preco);
    document.write("<br>Total Pessoas: " + P);
    document.write("<br>Pessoa Excesso:" + E);
    document.write("<br>Multa: R$ " + M);
}

