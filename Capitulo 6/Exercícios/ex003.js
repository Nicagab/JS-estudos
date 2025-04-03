function verificar(){
    var inFrase = document.getElementById("inFrase")
    var frase = inFrase.value

    if(frase == ""){
        alert("Digite uma frase!")
        inFrase.focus()
        return
    }

    var partes = frase.split(" ")
    var copia = ""
    var palindromo = ""

    for (let i = 0; i < partes.length; i++) {
        copia += partes[i]
    }

    for (let i = 0; i < copia.length+1; i++) {
        palindromo += copia.charAt(copia.length-i)
    }

    if(copia==palindromo){
        document.getElementById("outResp").textContent = `${frase.toUpperCase()} é um palíndromo`
    } else {
        document.getElementById("outResp").textContent = `${frase.toUpperCase()} não é um palíndromo`
    }
}
var btnVerificar = document.getElementById("btnVerificar")
btnVerificar.addEventListener("click", verificar)