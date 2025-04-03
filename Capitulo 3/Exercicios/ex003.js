function calcular(){
    var valor = Number(document.getElementById("valor").value)
    var inValor = document.getElementById("valor")
    var tempo = document.getElementById("tempo")
    var troco = document.getElementById("troco")

    if(valor == 0 || isNaN(valor)){
        alert("Digite o valor corretamente")
        inValor.focus()
        return
    }

    if(valor < 1){
        alert("Valor insuficiente")
        inValor.focus()
        return
    }

    if(valor<1.75){
        tempo.textContent = "30 min"
        if(valor=1){
            troco.textContent = "sem troco"
            return
        }
        troco.textContent = "troco: R$"+ (valor-1).toFixed(2)
        
        return
    }

    if(valor<3) {
        tempo.textContent = "60 min"
        if(valor=1.75){
            troco.textContent = "sem troco"
            return
        }
        troco.textContent = "troco: R$"+ (valor-1.75).toFixed(2)
        return
    }

    if(valor>=3) {
        tempo.textContent = "120 min"
        if(valor=3){
            troco.textContent = "sem troco"
            return
        }
        troco.textContent = "troco: R$"+ (valor-3).toFixed(2)
        
        return
    }
}
var calculaBtn = document.getElementById("calculaBtn")
calculaBtn.addEventListener("click", calcular)