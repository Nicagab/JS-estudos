function revender(){
    var modelo = document.getElementById("modelo").value;
    var preço = Number(document.getElementById("preço").value);
    var respModelo = document.getElementById("respModelo")
    var respPreço = document.getElementById("entrada")
    var respParcelas = document.getElementById("parcelas")

    var entrada = preço/2;
    var parcelas = (preço/2)/12;
    
    respModelo.textContent = "Modelo: " + modelo
    respPreço.textContent = "R$" + entrada.toFixed(2)
    respParcelas.textContent = "+12X R$" + parcelas.toFixed(2)}

    var btnAvaliar = document.getElementById("avaliar")
    btnAvaliar.addEventListener("click", revender)

