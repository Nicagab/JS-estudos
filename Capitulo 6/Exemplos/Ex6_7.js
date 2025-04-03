var hoje = new Date();
var amanha = new Date();
var dia = amanha.getDate();
amanha.setDate(dia + 1);
alert("Hoje: " + hoje + "\nAmanhã: " + amanha);

var hoje = new Date();
alert("Dia: " + hoje.toDateString() + "\nHora: " + hoje.toTimeString());
var anoAtual = new Date().getFullYear();
var idade = prompt("Quantos anos você comemora em " + anoAtual + "? ");
var anoNasc = anoAtual - idade;
alert("Ah... Então você nasceu em " + anoNasc);