var parcelas = Number(prompt("Quantas Parcelas? "));
var lista = ""; 
var dia, mes, ano, diaZero, mesZero;
var data = new Date(); 
for (var i = 1; i <= parcelas; i++) {
data.setMonth(data.getMonth() + 1); 
dia = data.getDate();
mes = data.getMonth() + 1; 
ano = data.getFullYear();
diaZero = dia < 10 ? "0" + dia : dia; 
mesZero = mes < 10 ? "0" + mes : mes; 

lista += i + "ª Parcela: " + diaZero + "/" + mesZero + "/" + ano + "\n";
}
alert(lista); 