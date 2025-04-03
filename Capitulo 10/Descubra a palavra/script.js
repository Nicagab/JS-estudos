function cadastrar(){
    var inPalavra = document.getElementById("inPalavra")
    var inDica = document.getElementById("inDica")

    var palavra = inPalavra.value
    var dica = inDica.value

    if(palavra == "" || dica == "" || palavra.indexOf(" ")>=0){
        alert("Insira a palavra e a dica corretamente!")
        inPalavra.focus()
        return
    }

    if(localStorage.getItem("jogoPalavra")){
        localStorage.setItem("jogoPalavra", localStorage.getItem("jogoPalavra") + ";" + palavra)
        localStorage.setItem("jogoDica", localStorage.getItem("jogoDica") + ";" + dica)
    } else {
        localStorage.setItem("jogoPalavra", palavra)
        localStorage.setItem("jogoDica", dica)
    }

    if(localStorage.getItem("jogoPalavra")){
        alert("Palavra: " + palavra + " cadastrada com sucesso!")
    }

    inPalavra.value = ""
    inDica.value = ""
    inPalavra.focus()
}
var btnCadastrar = document.getElementById("btnCadastrar")
btnCadastrar.addEventListener("click", cadastrar)