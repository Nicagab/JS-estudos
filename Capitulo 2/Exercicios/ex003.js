function promoção(){
    var nome = document.getElementById("nome").value
    var preçoU = Number(document.getElementById("preçoU").value)
    var respNome = document.getElementById("respNome")
    var respPreço = document.getElementById("respPreço")

    var desconto = preçoU/2
    var total = preçoU*2+desconto

    respNome.textContent = nome + " - Promoção leve 3 por apenas R$" + total.toFixed(2)
    respPreço.textContent = "Nessa promoção a 3 unidade sai por apenas R$" + desconto.toFixed(2)
}
var btnCalcular = document.getElementById("btnCalcular")
btnCalcular.addEventListener("click", promoção)