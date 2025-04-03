var candidatos = []

function adicionar (){
    var inNome = document.getElementById("inNome")
    var inAcertos = document.getElementById("inAcertos")
    var nome = inNome.value
    var acertos = Number(inAcertos.value)

    if(nome == ""){
        alert("Insira um nome válido!")
        inNome.focus()
        return
    }

    if(acertos == 0 || isNaN(acertos)){
        alert("Insira uma quantidade de acertos válida!")
        inAcertos.focus()
        return
    }

    candidatos.push({nome:nome, acertos:acertos})

    inNome.value = ""
    inAcertos.value = ""

    listar()
}
var btnAdicionar = document.getElementById("btnAdicionar")
btnAdicionar.addEventListener("click", adicionar)

function listar(){
    
    if(candidatos.length == 0){
        alert("Não há candidatos a serem listados!")
        inNome.focus()
        return;
    }

    var lista = ""

    for (let i = 0; i < candidatos.length; i++) {
        lista += `${candidatos[i].nome} - ${candidatos[i].acertos} acertos \n`
    }

    document.getElementById("outLista").textContent = lista

}

var btnListar = document.getElementById("btnListar")
btnListar.addEventListener("click", listar)

function aprovar(){
    if(candidatos.length == 0){
        alert("Não há candidatos a serem aprovados!")
        inNome.focus()
        return
    }

    var corte = prompt("Digite o número de acertos necessários para a aprovação")

    var aprovados = ""

    for (let i = 0; i < candidatos.length; i++) {
        if(candidatos[i].acertos >= corte) {
            aprovados += `${candidatos[i].nome} - ${candidatos[i].acertos} acertos \n`
        }
    }

    document.getElementById("outLista").textContent = aprovados
}
var btnAprovar = document.getElementById("btnAprovar")
btnAprovar.addEventListener("click", aprovar)