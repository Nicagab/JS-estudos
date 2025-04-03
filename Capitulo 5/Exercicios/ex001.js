var clubes = []

function adicionar(){

    var inNome = document.getElementById("inNome")
    var nome = inNome.value

    if(nome == ""){
        alert("Insira um nome válido!")
        inNome.focus()
        return
    }

    clubes.push(nome)

    

    inNome.value = ""
    inNome.focus()
    
    listar()
}
var btnAdicionar = document.getElementById("btnAdicionar")
btnAdicionar.addEventListener("click", adicionar)

function listar(){
    if (clubes.length == 0){
        alert("Não há clubes a serem listados!")
        inNome.focus()
        return
    }

    var lista = ""

    for (let i = 0; i < clubes.length; i++) {
        
        lista += `${i + 1}. ${clubes[i]} \n`
    }

    document.getElementById("outLista").textContent = lista
}

var btnListar = document.getElementById("btnListar")
btnListar.addEventListener("click", listar)

function montar(){
    if(clubes.length == 0 || clubes.length%2 != 0){
        alert("Não há clubes o suficiente para montar a tabela")
        inNome.focus()
        return
    }

    var copia = clubes.slice()

    tabela = ""

    for (let i = 0; i < clubes.length; i++) {
        if (copia.length%2 == 0){
            tabela += copia.shift() + " X "
        } else {
            tabela += copia.pop() + "\n"
        }
    }

    document.getElementById("outLista").textContent = tabela
}
var btnMontar = document.getElementById("btnMontar")
btnMontar.addEventListener("click", montar)