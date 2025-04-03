var carros = []

function adicionar(){
    var inModelo = document.getElementById("inModelo")
    var inPreço = document.getElementById("inPreço")
    var modelo = inModelo.value
    var preço = Number(inPreço.value)

    if(modelo == ""){
        alert("Digite um modelo válido!")
        inModelo.focus()
        return;
    }
    if(preço == 0 || isNaN(preço)){
        alert("Digite um preço válido!")
        inPreço.focus()
        return;
    }

    carros.push({modelo: modelo, preço: preço})

    inModelo.value = ""
    inPreço.value = ""
    inModelo.focus()

    listar()
}
var btnAdicionar = document.getElementById("btnAdicionar")
btnAdicionar.addEventListener("click", adicionar)

function listar(){
    if (carros.length == 0){
        alert("Não há carros na lista!")
        return;
    }

    var lista = ""

    for (let i = 0; i < carros.length; i++) {
        lista += carros[i].modelo + " - R$: " + carros[i].preço.toFixed(2) + "\n"
    }

    document.getElementById("outLista").textContent = lista;
}
var btnListar = document.getElementById("btnListar")
btnListar.addEventListener("click", listar)

function filtrar (){
     var maximo = Number(prompt("Qual valor máximo desejado?"))
     if (maximo == 0 || isNaN(maximo)){
        alert("Valor inválido!")
        return
     }

     var lista = ""

     for (let i = 0; i < carros.length; i++) {
        if (carros[i].preço <= maximo) {
        lista += carros[i].modelo + " - R$: " + carros[i].preço.toFixed(2) + "\n"}
    }

    if( lista == "") {
        alert("Não há carros nessa faixa de preço")
        return
    } else {

    document.getElementById("outLista").textContent = `Carros abaixo de R$: ${maximo} \n ------------------ \n ${lista}`
}
}
var btnFiltrar = document.getElementById("btnFiltrar")
btnFiltrar.addEventListener("click", filtrar)