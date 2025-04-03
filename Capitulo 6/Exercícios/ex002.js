function gerar(){
    var inNome = document.getElementById("inNome")
    var nome = inNome.value

    if(nome == ""){
        alert("Digite um nome!")
        inNome.focus()
        return
    }

    var partes = nome.split(" ")
    var citacao = partes.pop() + ", "

    for (let i = 0; i< partes.length; i++) {
        citacao += partes[i].charAt(0) + ". "
    }

    document.getElementById("outCitacao").textContent = citacao.toUpperCase()
}
var btnGerar = document.getElementById("btnGerar")
btnGerar.addEventListener("click", gerar)