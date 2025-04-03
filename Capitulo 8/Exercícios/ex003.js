function adicionar(){
    var inServico = document.getElementById("inServico")
    var servico = inServico.value;

    if(servico == ""){
        alert("Insira um servico válido!")
        inServico.focus()
        return
    }

    if(localStorage.getItem("servico")){
        var lServico = localStorage.getItem("servico") + ";" + servico
        localStorage.setItem("servico", lServico)
    } else {
        localStorage.setItem("servico", servico)
    }

    var servicos = localStorage.getItem("servico").split(";")

    document.getElementById("outServicos").textContent = "Serviços pendentes:" + servicos.length

    var execucao = servicos[0]

    document.getElementById("outExecucao").textContent = execucao

    inServico.value = ""
    inServico.focus()
}
var btnAdicionar = document.getElementById("btnAdicionar")
btnAdicionar.addEventListener("click", adicionar)

function executar(){

    if (!localStorage.getItem("servico")){
        alert("Não há nenhum serviço a ser executado!")
    } else {
        var servicos = localStorage.getItem("servico").split(";")

        servicos.shift()

        document.getElementById("outExecucao").textContent = servicos[0]

        if(servicos.length == 0){
            localStorage.removeItem("servico")
        } else {

        var lista = ""

        for(var i = 0; i<servicos.length-1;i++){
            lista += servicos[i] + ";"
        }

        lista += servicos[servicos.length-1]

        localStorage.setItem("servico", lista)
        }

        document.getElementById("outServicos").textContent = "Serviços pendentes:" + servicos.length
    }
}
var btnExecutar = document.getElementById("btnExecutar")
btnExecutar.addEventListener("click", executar)