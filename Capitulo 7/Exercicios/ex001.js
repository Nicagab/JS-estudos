function retornarTracos(nome){
    var partes = nome.split(" ")
    var tracos = ""

    for (let i = 0; i < partes.length; i++){
        var numLetras = partes[i].length
        var tracoscopy = ""

        while (tracoscopy.length<numLetras){
            tracoscopy += "-"
        }

        tracoscopy += " "

        tracos += tracoscopy
    }

    return tracos;
}

function categorizarAluno(){
    var inNome = document.getElementById("inNome")
    var nome = inNome.value;
    var inIdade = document.getElementById("inIdade")
    var idade = Number(inIdade.value)
    var categoria = ""

    if(nome == "" || idade == 0 || isNaN(idade)){
        alert("Insira corretamente o nome e a idade!")
        return
    }

    if(idade <= 12){
        categoria = "Infantil"
    } else if (idade <= 18){
        categoria = "Juvenil"
    } else {
        categoria = "Adulto"
    }

    var outResp = document.getElementById("outResp")
    outResp.textContent = ` ${nome} \n ${retornarTracos(nome)} \n ${categoria}`
}

var btnCategorizar = document.getElementById("btnCategorizar")
btnCategorizar.addEventListener("click", categorizarAluno)