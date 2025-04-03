function calcular() {
    var hBrasil = document.getElementById("hBrasil")
    var hBrasilN = Number(document.getElementById("hBrasil").value)
    var resp = document.getElementById("resp")

    if(hBrasilN = "" | isNaN(hBrasilN)){
        alert("Coloque um horário válido")
        hBrasil.focus()
        return
    }

    var hPortugal = hBrasilN+4

    if (hPortugal>=24){
        hPortugal = hPortugal-24
    }

    resp.textContent = `Agora são ${hPortugal.toFixed(2)}h em Portugal`
}
var btnCalcular = document.getElementById("btnCalcular")
btnCalcular.addEventListener("click", calcular)