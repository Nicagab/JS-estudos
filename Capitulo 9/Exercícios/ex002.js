function exibir(){
    var inNome = document.getElementById("inNome")
    var nome = inNome.value

    if(nome == "" || nome.indexOf(" ") == -1){
        alert("Insira seu nome completo!")
        inNome.focus()
        return
    }

    var divNomes = document.getElementById("divNomes")
    var h3s = document.getElementsByTagName("h3")
    var numh3 = h3s.length

    var partes = nome.split(" ")

    if(numh3 == 0){
        for(var i = 0; i < partes.length; i++){
        var h3 = document.createElement("h3")
        h3.textContent = partes[i]
        h3.className = "_" + Math.floor(Math.random() * 10)
        divNomes.appendChild(h3)
    }
    } else {
        for(var i = 0; i < numh3; i++){
        divNomes.removeChild(h3s[0])
    }

    for(var i = 0; i < partes.length; i++){
        var h3 = document.createElement("h3")
        h3.textContent = partes[i]
        h3.className = "_" + Math.floor(Math.random() * 10)
        divNomes.appendChild(h3)
    }
    }
}
var btnExibir = document.getElementById("btnExibir")
btnExibir.addEventListener("click", exibir)