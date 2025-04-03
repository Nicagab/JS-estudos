var valor = prompt("Digite o valor do jantar:")//entrada

var gorjeta = Number(valor)*0.1;
var total = Number(valor)+gorjeta;//processamento

alert(`Valor do jantar: R$${valor}\n
       Taxa do garçom: R$${gorjeta}\n
       Total a pagar: R$${total}
`)