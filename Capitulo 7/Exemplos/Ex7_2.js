function calcularMedia() {
    if (arguments == 0) {
        alert("Informe, no mínimo, uma nota!")
        return
    }

    var soma = 0
    var numNotas = arguments.length

    for (let i = 0; i < arguments.length; i++) {
        soma += arguments[i]
    }

    var media = soma / numNotas

    alert("Média das notas: " + media.toFixed(1))
}

calcularMedia(5, 6, 8);
calcularMedia(2, 10);
calcularMedia(7.5, 10, 8, 9.5);
calcularMedia();