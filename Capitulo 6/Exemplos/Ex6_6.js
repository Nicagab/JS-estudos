function verificar(){

    var erros = []
    var inSenha = document.getElementById("inSenha")
    var senha = inSenha.value

    if(senha.length<8 || senha.length>15){
        erros.push("possuir entre 8 a 15 caracteres")
    }

    if(senha == ""){
        alert("Insira uma senha!")
        inSenha.focus()
        return
    }

    if(senha.match(/[0-9]/g) == null){
        erros.push("possuir números (1)")
    }

    if(!senha.match(/[a-z]/g)){
        erros.push("possuir letras minúsculas (1)")
    }

    if(!senha.match(/[A-Z]/g) ||senha.match(/[A-Z]/g).length==1){
        erros.push("possuir letras maiúsculas (2)")
    }

    if(!senha.match(/[\W|_]/)){
        erros.push("possuir símbolos (1)")
    }

    if(erros.length==0){
        document.getElementById("outSenha").textContent = "OK! Senha Válida"
    } else {
        document.getElementById("outSenha").textContent = "Erro... A senha deve " + erros.join(", ")
    }
}
var btnVerificar = document.getElementById("btnVerificar")
btnVerificar.addEventListener("click", verificar)