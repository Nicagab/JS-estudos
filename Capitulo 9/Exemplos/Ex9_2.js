function exibirMoedas() {
    var num1_00 = Math.ceil(Math.random() * 5)
    var num0_50 = Math.ceil(Math.random() * 5)
    var num0_25 = Math.ceil(Math.random() * 5)
    var num0_10 = Math.ceil(Math.random() * 5)

    var alt1_00 = "Moedas de um real"
    var alt0_50 = "Moedas de cinquenta centavos"
    var alt0_25 = "Moedas de vinte e cinco centavos"
    var alt0_10 = "Moedas de dez centavos"

    var divMoedas = document.getElementById("divMoedas")

    criarMoedas(num1_00, divMoedas, "1_00.webp", alt1_00, "moeda1_00")
    criarMoedas(num0_50, divMoedas, "0_50.png", alt0_50, "moeda0_50")
    criarMoedas(num0_25, divMoedas, "0_25.webp", alt0_25, "moeda0_25")
    criarMoedas(num0_10, divMoedas, "0_10.webp", alt0_10, "moeda0_10")
}
exibirMoedas()

function criarMoedas(num, pai, moeda, textoAlt, classe) {
    for (var i = 0; i <= num; i++) {
        var novaMoeda = document.createElement("img")
        novaMoeda.src = "../imgs/" + moeda
        novaMoeda.alt = textoAlt
        novaMoeda.className = classe
        pai.appendChild(novaMoeda);
    }
    var br = document.createElement("br")
    pai.appendChild(br)
}

function conferir(){
    var inResp = document.getElementById("inResp")
    var resp = Number(inResp.value)

    var totalMoedas = 0;
    var moedas = document.getElementsByTagName("img")

    for(var i = 0;i<moedas.length;i++){
        if(moedas[i].className == "moeda1_00"){
            totalMoedas += 1;
        } else if (moedas[i].className == "moeda0_50"){
            totalMoedas += 0.50
        } else if (moedas[i].className == "moeda0_25"){
            totalMoedas += 0.25
        } else if (moedas[i].className == "moeda0_10"){
            totalMoedas += 0.10
        }
    }

    var div = document.createElement("div")
    var h3 = document.createElement("h3")

    if(resp == totalMoedas.toFixed(2)){
        div.className = "alert alert-success"
        var msg = "Parabéns você acertou!"
    } else {
        div.className = "alert alert-danger"
        var msg = "Ops... A resposta correta era: " + totalMoedas.toFixed(2)
    }

    var texto = document.createTextNode(msg)
    h3.appendChild(texto)
    div.appendChild(h3)
    divMoedas.appendChild(div)

    btnConferir.disabled = true;
}
var btnConferir = document.getElementById("btnConferir")
btnConferir.addEventListener("click", conferir)

var btnRedefinir = document.getElementById("btnRedefinir")
btnRedefinir.addEventListener("click", function(){
    location.reload()
})