function exibirConvenio(){
    var pConvenio = document.getElementById("pConvenio")

    if(rbConvenio.checked){
        pConvenio.className = "exibir"
    } else {
        pConvenio.className = "oculta"
    }
}
var rbConvenio = document.getElementById("rbConvenio")
rbConvenio.addEventListener("click", exibirConvenio)

var rbNConvenio = document.getElementById("rbNConvenio")
rbNConvenio.addEventListener("click", exibirConvenio)

function calcularDesconto(){
    var inValor = document.getElementById("inValor")
    valor = Number(inValor.value)
    var total = 0

    if(valor == 0 ||isNaN(valor)){
        alert("Insira corretamente o valor!")
        inValor.focus()
        return
    }

    if(pConvenio.className == "oculta"){
        var desconto = 10/100
    } else {
        var inConvenio = document.getElementById("inConvenio")
        var num = inConvenio.selectedIndex
        var convenio = inConvenio.options[num].value

        if(convenio == "Amigo dos animais"){
            var desconto = 20/100
        } else {
            var desconto = 50/100
        }
    }

    total = valor - (valor*desconto)

    document.getElementById("outDesconto").textContent = `Desconto: ${desconto*100}%`
    document.getElementById("outTotal").textContent = `A pagar: R$${total.toFixed(2)}`
}

var btnCalcularDesconto = document.getElementById("btnCalcularDesconto")
btnCalcularDesconto.addEventListener("click", calcularDesconto)