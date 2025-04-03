function calcular(){
    var ladoA = Number(document.getElementById("ladoA").value)
    var ladoB = Number(document.getElementById("ladoB").value)
    var ladoC = Number(document.getElementById("ladoC").value)
    var inLadoA = document.getElementById("ladoA")
    var inLadoB = document.getElementById("ladoB")
    var inLadoC = document.getElementById("ladoC")
    var resp = document.getElementById("resp")
    var tipo = document.getElementById("tipo")

    if (ladoA==0 || isNaN(ladoA)){
        alert("Valor inválido")
        inLadoA.focus()
        return
    }
    if (ladoB==0 || isNaN(ladoB)){
        alert("Valor inválido")
        inLadoB.focus()
        return
    }
    if (ladoC==0 || isNaN(ladoC)){
        alert("Valor inválido")
        inLadoC.focus()
        return
    }

    if(ladoA+ladoB<ladoC || ladoB+ladoC<ladoA || ladoA+ladoC<ladoB){
        resp.textContent = "Lados não podem formar um triângulo"
        tipo.textContent = ""
        return
    } else {
        resp.textContent = "Lados podem formar um triângulo"
    }

    if (ladoA==ladoB && ladoB==ladoC){
        tipo.textContent = "Tipo: Equilátero"
        return
    } else 
    if (ladoA==ladoB || ladoB==ladoC || ladoA==ladoC){
        tipo.textContent = "Tipo: Isósceles"
        return
    } else {
        tipo.textContent = "Tipo: Escaleno"
    }
}
var btnCalcular = document.getElementById("btnCalcular")
btnCalcular.addEventListener("click", calcular)