var conta = prompt("Digite o valor da conta:");
var clientes = prompt("Nº de clientes:")

var valorpc = Number(conta)/Number(clientes);

alert(`Valor da conta: R$${Number(conta).toFixed(2)}\n Nº de clientes: ${clientes}\n Valor por cliente: R$${valorpc.toFixed(2)}`);

