alert("Digite 0 para sair");
// início da repetição
do {
var num = Number(prompt("Número: "));
if (num == 0 || isNaN(num)) {
var sair = confirm("Confirma saída?"); // solicita confirmação do usuário
if (sair) {
break; // sai da repetição
} else {
continue; // volta ao início do laço
}
}
// se par, mostra o dobro; ímpar, mostra o triplo
if (num % 2 == 0) {
alert("O dobro de " + num + " é: " + num * 2);
} else {
alert("O triplo de " + num + " é: " + num * 3);
}
} while (true); // // enquanto verdade (só sai do laço, pelo break)
alert("Bye, bye...");