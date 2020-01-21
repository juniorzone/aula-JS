let nome, idade;

nome = prompt ("qual seu nome?")
idade = prompt ("qual sua idade?")
email = prompt ("qual seu e-mail?")

    // adicionar idade para maior
if(idade >= 18) {
    document.write("Seu nome é: <strong>" + nome + "</strong>");
    document.write("<br> Sua idade é: <em>" + idade + "</em> ");
    document.write("<br> Seu e-mail é:" + email );
}
    // adicionar idade para menor
else if(idade < 7){
    document.write("Sai daqui");
}
    // adicionar texto de requesitos
else{
    document.write("voce precisa de um responsável.");
}