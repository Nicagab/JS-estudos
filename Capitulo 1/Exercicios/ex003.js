var valor = prompt("Digite o valor da compra:");
var avista = Number(valor)-(Number(valor)*0.1)
var parcelamento = Number(valor)/3

alert(`Valor a ser pago: ${Number(valor).toFixed(2)}\nValor a vista: ${avista.toFixed(2)}\nOu por 3x: R$${Number(parcelamento).toFixed(2)}`)