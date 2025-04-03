function exibirSituacao(nota, media){
    if(nota>=media){
        alert("Você foi aprovado!")
    } else {
        alert("Você foi reprovado!")
    }
}

var prova1 = Number(prompt("Qual sua nota?"))

exibirSituacao(prova1, 7)