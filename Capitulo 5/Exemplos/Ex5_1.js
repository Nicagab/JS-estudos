var pacientes = []

function adicionar() {

    var inNome = document.getElementById("inNome")
    nome = inNome.value
    var lista = ""
    var inLista = document.getElementById("inLista")

    if (nome == ""){
        alert("Insira um nome válido")
        inNome.focus()
        return
    }

    pacientes.push(nome)

    for (let i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + "." + pacientes[i] + `\n`
    }
    inLista.textContent = lista

    inNome.value = ""
    inNome.focus();
}
var btnAdicionar = document.getElementById("btnAdicionar")
btnAdicionar.addEventListener("click", adicionar)

function urgencia(){
    var inNome = document.getElementById("inNome")
    nome = inNome.value
    var lista = ""
    var inLista = document.getElementById("inLista")

    if (nome == ""){
        alert("Insira um nome válido")
        inNome.focus()
        return
    }

    pacientes.unshift(nome)

    for (let i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + "." + pacientes[i] + `\n`
    }
    inLista.textContent = lista

    inNome.value = ""
    inNome.focus();
}
var btnUrgencia = document.getElementById("btnUrgencia")
btnUrgencia.addEventListener("click", urgencia)

function atender (){
    var lista = ""
    var inLista = document.getElementById("inLista")
    var atendimento = document.getElementById("atendimento")

    atendimento.textContent = pacientes.shift()

    for (let i = 0; i < pacientes.length; i++) {
        lista += (i + 1) + "." + pacientes[i] + `\n`
    }
    inLista.textContent = lista

    inNome.value = ""
    inNome.focus();
}
var btnAtender = document.getElementById("btnAtender")
btnAtender.addEventListener("click", atender)