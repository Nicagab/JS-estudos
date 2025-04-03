function adicionar (){

    var inTarefa = document.getElementById("inTarefa")
    tarefa = inTarefa.value;

    if(tarefa == ""){
        alert("Insira uma tarefa!")
        inTarefa.focus()
        return
    }

    var divQuadro = document.getElementById("divQuadro")
    var h5 = document.createElement("h5")
    var texto = document.createTextNode(tarefa)
    h5.appendChild(texto)
    divQuadro.appendChild(h5)

    inTarefa.value = ""
    inTarefa.focus();
}
var btnAdicionar = document.getElementById("btnAdicionar")
btnAdicionar.addEventListener("click", adicionar)

function selecionar(){
    var h5 = document.getElementsByTagName("h5")
    var numH5 = h5.length;

    if(numH5 == 0){
        alert("Não há tarefas para selecionar")
        inTarefa.focus()
        return
    }

    var aux = -1

    for(var i = 0; i < numH5; i++){
        if(h5[i].className == "tarefaSelecionada"){
            h5[i].className = "tarefaNormal"
            aux = i
            break;
        }
    }

    if(aux == numH5-1){
        aux = -1
    }

    h5[aux + 1].className = "tarefaSelecionada"
}
var btnSelecionar = document.getElementById("btnSelecionar")
btnSelecionar.addEventListener("click", selecionar)

function retirar(){
    var divQuadro = document.getElementById("divQuadro")
    var h5 = document.getElementsByTagName("h5")
    var numH5 = h5.length;

    var aux = -1

    for(var i = 0; i< numH5; i++){
        if(h5[i].className == "tarefaSelecionada"){
            aux = i
            break
        }
    }

    if(aux == -1){
        alert("Selecione uma tarefa")
        return
    }

    if(confirm(`Confirma a exclusão de: ${h5[aux].textContent}?`)){
        divQuadro.removeChild(h5[aux])
    }
}
var btnRetirar = document.getElementById("btnRetirar")
btnRetirar.addEventListener("click", retirar)

function gravar(){
    var h5 = document.getElementsByTagName("h5")
    var numH5 = h5.length;

    if(numH5 == 0){
        alert("Não há tarefas para gravar!")
        return
    }

    var lista = ""

    for(var i = 0; i < numH5; i++){
        lista += h5[i].textContent + ";"
    }

    localStorage.setItem("tarefasDia", lista.substr(0, lista.length - 1));

    if(localStorage.getItem("tarefasDia")){
        alert("Ok! Tarefas salvas")
    }
}
var btnGravar = document.getElementById("btnGravar")
btnGravar.addEventListener("click", gravar)

function recuperarTarefas(){
    if(localStorage.getItem("tarefasDia")){
        var tarefas = localStorage.getItem("tarefasDia").split(";")

        var divQuadro = document.getElementById("divQuadro")
        for(var i = 0; i < tarefas.length;i++){
            var h5 = document.createElement("h5")
            var texto = document.createTextNode(tarefas[i])
            h5.appendChild(texto)
            divQuadro.appendChild(h5)
        }
    } 
}

recuperarTarefas()