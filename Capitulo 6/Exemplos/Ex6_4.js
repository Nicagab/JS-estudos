function gerar(){

    var inNome = document.getElementById("inNome")
    var nome = inNome.value 

    if(nome == "" || nome.indexOf(" ") == -1){
        alert("Informe o nome completo do participante!")
        inNome.focus()
        return
    }

    var primeiro = nome.indexOf(" ")
    var ultimo = nome.lastIndexOf(" ")

    var cracha = nome.substr(0, primeiro) + nome.substr(ultimo)

    document.getElementById("outCracha").textContent = "Crachá:" + cracha

    inNome.value = ""
    inNome.focus()
} 
var btnGerar = document.getElementById("btnGerar")
btnGerar.addEventListener("click", gerar)