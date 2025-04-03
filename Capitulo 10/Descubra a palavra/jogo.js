var palavraSorteada;
var dicaSorteada;

var inLetra = document.getElementById("inLetra")
var btnJogar = document.getElementById("btnJogar")
var btnVer = document.getElementById("btnVer")

function montarJogo(){
        var outPalavra = document.getElementById("outPalavra")

        var palavras = localStorage.getItem("jogoPalavra").split(";")
        var dicas = localStorage.getItem("jogoDica").split(";")

        var tam = palavras.length
        var numAleatorio = Math.floor(Math.random()*tam)

        palavraSorteada = palavras[numAleatorio].toUpperCase()
        dicaSorteada = dicas[numAleatorio]

        var novaPalavra = ""

        for(var i = 0; i < palavraSorteada.length; i++){
            if(palavraSorteada.charAt(0) == palavraSorteada.charAt(i)){
                novaPalavra += palavraSorteada.charAt(0)
            } else {
                novaPalavra += "_"
            }
        }

        outPalavra.textContent = novaPalavra
}

if(localStorage.getItem("jogoPalavra")){
    montarJogo()
} else {
    alert("Cadastre palavras para poder jogar!")
    inLetra.disabled = true;
    btnJogar.disabled = true;
    btnVer.disabled = true
}

function verDica(){
    var outErros = document.getElementById("outErros")
    var outDica = document.getElementById("outDica")
    var outChances = document.getElementById("outChances")
    var erros = outErros.textContent

    if(erros.indexOf("*")>=0){
        alert("Você já solicitou a dica")
        inLetra.focus()
        return
    }

    outDica.textContent = " * " + dicaSorteada
    outErros.textContent = erros + "*"
    var chances = Number(outChances.textContent)-1
    outChances.textContent = chances

    trocarStatus(chances)

    verificarFim()

    inLetra.focus()
}

btnVer.addEventListener("click", verDica)

function trocarStatus(num){
    if(num>0){
        var imgStatus = document.getElementById("imgStatus")
        imgStatus.src = `status${num}.png`
    }
}

function jogar(){
    var outErros = document.getElementById("outErros")
    var outDica = document.getElementById("outDica")
    var outChances = document.getElementById("outChances")

    var letra = inLetra.value.toUpperCase()

    if(letra== "" || letra.length!=1){
        alert("Informe uma única letra")
        inLetra.focus()
        return
    }

    var erros = outErros.textContent
    var palavra = outPalavra.textContent

    if(erros.indexOf(letra)>=0 || palavra.indexOf(letra)>=0){
        alert("Você já apostou essa letra!")
        inLetra.focus()
        return
    }

    if(palavraSorteada.indexOf(letra)>=0){
        var novaPalavra = ""

        for(var i = 0; i < palavraSorteada.length; i++){
            if(palavraSorteada.charAt(i)==letra){
                novaPalavra += letra
            } else {
                novaPalavra += palavra.charAt(i)
            }
        }

        outPalavra.textContent = novaPalavra
    } else {
        erros += letra
        outErros.textContent = erros
        var chances = Number(outChances.textContent)-1
        outChances.textContent = chances

        trocarStatus(chances)
    }

    verificarFim()

    inLetra.value = ""
    inLetra.focus()
}
btnJogar.addEventListener("click", jogar)

inLetra.addEventListener("keypress", function(tecla){
    if(tecla.keyCode==13){
        jogar()
    }
})

function verificarFim(){
    var outChances = document.getElementById("outChances")
    var outMsgFinal = document.getElementById("outMsgFinal")

    var chances = Number(outChances.textContent)

    if(chances==0){
        outMsgFinal.className = "display-3 fonteVermelho"
        outMsgFinal.textContent = "Ah... é " + palavraSorteada + ". Você Perdeu"
        concluirJogo()
    } else if(outPalavra.textContent == palavraSorteada){
        outMsgFinal.className = "display-3 fonteAzul"
        outMsgFinal.textContent = "Parabéns!! Você ganhou."
        concluirJogo()
    }
}

function concluirJogo(){
    var outDica = document.getElementById("outDica")
    outDica.textContent = "* Clique no botão 'Iniciar Jogo' para jogar novamente"
    inLetra.disabled = true;
    btnJogar.disabled = true;
    btnVer.disabled = true;
}