function converter() {
    var nome = document.getElementById("nome").value;
    var tempo = Number(document.getElementById("tempo").value);
    var respNome = document.getElementById("respNome")
    var respTempo = document.getElementById("respTempo")

    var horas = Math.floor(tempo/60)
    var min = tempo % 60;

    respNome.textContent = nome;
    respTempo.textContent = horas + " hora(s) " + min + " minuto(s)"
}
var btnConverter = document.getElementById("Converter")
btnConverter.addEventListener("click", converter)