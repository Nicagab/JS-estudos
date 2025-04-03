var numeros = []

function adicionar (){

    var inNum = document.getElementById("inNum")
    var num = Number(inNum.value)

    if (num == 0 || isNaN(num)){
        alert("Adicione um número válido")
        inNum.focus()
        return
    }

    numeros.push(num)

    document.getElementById("outNum").textContent = "Números: " + numeros.join(', ')

    inNum.value = ""
    inNum.focus()
    document.getElementById("outOrdem").textContent = ""
     
}

var btnAdicionar = document.getElementById("btnAdicionar")
btnAdicionar.addEventListener("click", adicionar)

function verificar(){

    var copia = numeros.slice()

    copia.sort(function (a,b) {return a-b})

    var lista = numeros.join(", ")
    var listaC = copia.join(", ")

    if (lista == listaC){
        document.getElementById("outOrdem").textContent = `Os números estão em ordem crescente`
    } else {
        document.getElementById("outOrdem").textContent = `Atenção os números não estão em ordem crescente!`
    }
}
var btnVerificar = document.getElementById("btnVerificar")
btnVerificar.addEventListener("click", verificar)