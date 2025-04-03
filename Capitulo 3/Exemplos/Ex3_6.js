function calcular() {
    var valor = Number(document.getElementById("valor").value)
    var valorF = document.getElementById("valor")
    var notascem = document.getElementById("notascem")
    var notasCinq = document.getElementById("notasCinq")
    var notasDez = document.getElementById("notasDez")

    if(valor == "0" || isNaN(valor)) {
        alert("Digite um valor válido")
        return
    } else if(valor%10 !=  0){
        alert("Sem troco disponível, notas disponíveis(R$100,R$50,R$10)")
        return
    }


    var notas100 = Math.floor(valor/100)
    resto = valor%100
    var notas50 = Math.floor(resto/50)
    resto = resto%50
    var notas10 = resto/10 

    if(notas100>0){
        notascem.textContent = `Notas de cem: ${notas100}`
    } else {
        notascem.textContent = ""
    }
    if(notas50>0){
        notasCinq.textContent =  `Notas de cinquenta: ${notas50}`
    } else {
        notasCinq.textContent = ""
    }
    if(notas10>0){
        notasDez.textContent = `Notas de dez: ${notas10}`
    } else {
        notasDez.textContent = ""
    }

}

var btnCalcular = document.getElementById("btnCalcular")
btnCalcular.addEventListener("click", calcular)