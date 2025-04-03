var itens = []

function trocarItem(){
    var inPizza = document.getElementById("inPizza")
    var inBebida = document.getElementById("inBebida")

    if(rbPizza.checked){
        inBebida.className = "oculta"
        inPizza.className = "exibe"
    } else {
        inBebida.className = "exibe"
        inPizza.className = "oculta"
    }
}
var rbBebida = document.getElementById("rbBebida")
rbBebida.addEventListener("click", trocarItem)

var rbPizza = document.getElementById("rbPizza")
rbPizza.addEventListener("click", trocarItem)

function mostrarSabores(){
    if(rbPizza.checked){
        var pizza = inPizza.value
        var num = (pizza == "media") ? 2 : (pizza == "grande") ? 3 : 4;

        inDetalhes.placeholder = `Até ${num} sabores` 
    }
}

inDetalhes.addEventListener("focus", mostrarSabores)

inDetalhes.addEventListener("blur", function(){
    inDetalhes.placeholder = ""
})

inDetalhes.addEventListener("keypress", function(tecla){
    if(tecla.keyCode==13){
        adicionar()
    }
})

function adicionar(){
    var pizza = inPizza.value
    var bebida = inBebida.value
    var detalhes = inDetalhes.value
    var outPedido = document.getElementById("outPedido")

    if(detalhes == ""){
    alert("Digite os detalhes do pedido!")
    inDetalhes.focus()
    return
}

    if(rbPizza.checked){
        var num =inPizza.selectedIndex
        var produto = inPizza.options[num].text
    } else {
        var num = inBebida.selectedIndex
        var produto = inBebida.options[num].text
    }
    
    itens.push(`${produto} ( ${detalhes} )`)
    outPedido.textContent = itens.join("\n")
    limparCampos()
}
var btnAdicionar = document.getElementById("btnAdicionar")
btnAdicionar.addEventListener("click", adicionar)

function limparCampos(){
    rbPizza.checked = true;
    inBebida.className = "oculta"
    inPizza.className = "exibe"
    inPizza.selectedIndex = 0
    inDetalhes.value = ""
    rbPizza.focus()
}