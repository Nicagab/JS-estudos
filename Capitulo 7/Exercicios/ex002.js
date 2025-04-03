function validarNome(nome){
    var partes = nome.split(" ")

    if(partes.length==1){
        return false
    } else {
        return true
    }
}

function obterSobrenome(nome){
    var partes = nome.split(" ")
    var sobrenome = partes.pop()
    return sobrenome.toLowerCase();
}

function contarVogais(nome){
    vogais = 0
    for (let i = 0; i < nome.length; i++) {
        if(nome.charAt(i) == "a"){
            vogais++
        } else if (nome.charAt(i)=="e"){
            vogais++
        }
        else if (nome.charAt(i)=="i"){
            vogais++
        }
        else if (nome.charAt(i)=="o"){
            vogais++
        }
        else if (nome.charAt(i)=="u"){
            vogais++
        }
    }

    if(vogais<10){
        return `0${vogais}`
    }else {
        return vogais
    }
}

function gerarSenha(){
    var inNome = document.getElementById("inNome")
    var nome = inNome.value

    if(nome == "" || validarNome(nome)==false){
        alert("Insira seu nome completo!")
        inNome.focus()
        return
    }

    document.getElementById("outSenha").textContent = `${obterSobrenome(nome)}${contarVogais(nome)}`
}
var btnGerar = document.getElementById("btnGerar")
btnGerar.addEventListener("click", gerarSenha)