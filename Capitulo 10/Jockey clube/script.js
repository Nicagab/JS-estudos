const CAVALOS = ["Marujo", "Tordilho", "Belga", "Twister", "Jade", "Lucky"]
var apostas = []

function apostar(){
    var inAposta = document.getElementById("inAposta")
    var outApostas = document.getElementById("outApostas")
    var aposta = Number(inAposta.value)
    var cavalo = Number(inCavalo.value)

    if(isNaN(cavalo) || isNaN(aposta) || aposta == 0 || !validarCavalo(cavalo)){
        alert("Aposta inválida!")
        inCavalo.focus()
        return
    }

    apostas.push({cavalo: cavalo, aposta: aposta})
    var lista = "Apostas realizadas \n ------------------------- \n"

    for(var i = 0; i < apostas.length; i++){
        lista += `Nº${apostas[i].cavalo} ${obterCavalo(apostas[i].cavalo)}`
        lista += ` - R$: ${apostas[i].aposta.toFixed(2)} \n`
    }
    outApostas.textContent = lista

    inCavalo.value = ""
    inAposta.value = ""
    inCavalo.focus()
}
var btnApostar = document.getElementById("btnApostar")
btnApostar.addEventListener("click", apostar)

function validarCavalo(num){
    var tam = CAVALOS.length

    if(num >= 1 && num <= tam){
        return true;
    } else {
        return false;
    }
}

function mostrarCavalo(){
    var outCavalo = document.getElementById("outCavalo")

    if(inCavalo.value == ""){
        outCavalo.textContent = ""
        return
    }

    var cavalo = Number(inCavalo.value)

    if(isNaN(cavalo) || !validarCavalo(cavalo)){
        outCavalo.textContent = "Cavalo inválido!"
        return
    }

    var nomeCavalo = obterCavalo(cavalo)
    var numApostas = contarApostas(cavalo)
    var total = totalizarApostas(cavalo)

    outCavalo.textContent = nomeCavalo + " (Apostas: " + numApostas;
    outCavalo.textContent += " - R$:" + total.toFixed(2) + ")"
}

var inCavalo = document.getElementById("inCavalo")
inCavalo.addEventListener("blur", mostrarCavalo)

function obterCavalo(num){
    var posicao = num-1
    return CAVALOS[posicao];
}

function contarApostas(numCavalo){
    var contador = 0

    for(var i = 0;i < apostas.length; i++){
        if(apostas[i].cavalo == numCavalo){
            contador++
        }
    }
    return contador;
}


function totalizarApostas(numCavalo){
    var total = 0
    for(var i = 0; i < apostas.length; i++){
        if(apostas[i].cavalo == numCavalo){
            total += apostas[i].aposta
        }
    }
    return total;
}

inCavalo.addEventListener("focus", function(){
    inCavalo.value = ""
    document.getElementById("outCavalo").textContent = ""
})

function ganhador(){
    var ganhador = Number(prompt("Nº Cavalo Ganhador: "))

    if(isNaN(ganhador) || !validarCavalo(ganhador)){
        alert("Cavalo inválido!")
        return
    }

    var outApostas = document.getElementById("outApostas")

    var resumo = `Resultado Final do Páreo\n
                  --------------------------\n
                  Nº Total de apostas: ${apostas.length} \n
                  Total geral R$: ${totalizarGeral().toFixed(2)}\n\n
                  Ganhador Nº ${ganhador} - ${obterCavalo(ganhador)}\n
                  --------------------------\n
                  Nº Apostas: ${contarApostas(ganhador)}\n
                  Total apostado R$: ${totalizarApostas(ganhador).toFixed(2)}`

    outApostas.textContent = resumo

    btnApostar.disabled = true;
    btnGanhador.disabled = true;
    btnNovo.focus()
}

var btnGanhador = document.getElementById("btnGanhador")
btnGanhador.addEventListener("click", ganhador)

function totalizarGeral(){
    var total = 0

    for(var i = 0; i < apostas.length; i++){
        total += apostas[i].aposta
    }
    return total;
}

var btnNovo = document.getElementById("btnNovo")
btnNovo.addEventListener("click", function(){
    location.reload()
})