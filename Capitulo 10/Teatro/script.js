const POLTRONAS = 240;

var reservadas = []

function montarPalco(){
var ocupadas = []

if(localStorage.getItem("teatroOcupadas")){
    ocupadas = localStorage.getItem("teatroOcupadas").split(";")
}

var divPalco = document.getElementById("divPalco")

for(var i = 1; i <= POLTRONAS; i++){
    var figure = document.createElement("figure")
    var imgStatus = document.createElement("img")

    if(ocupadas.indexOf(i.toString())>=0){
        imgStatus.src = "indisponível.png"
    } else {
        imgStatus.src = "poltrona.png"
    }
    imgStatus.className = "poltrona"

    var figureCap = document.createElement("figCaption")

    var zeros = ""

    if(i<10){
        zeros = "00"
    } else if(i<100){
        zeros = "0"
    }

    var num = document.createTextNode("[" + zeros + i + "]")

    figureCap.appendChild(num)
    figure.appendChild(imgStatus)
    figure.appendChild(figureCap)

    if(i%24 == 12){
        figure.style.marginRight = "60px"
    }

    divPalco.appendChild(figure)

    if(i%24 == 0){
        var br = document.createElement("br")
        divPalco.appendChild(br)
    }
}
}
montarPalco()

function reservar(){
    var poltrona = Number(inPoltrona.value)

    if(poltrona<=0 || isNaN(poltrona) || poltrona > POLTRONAS){
        alert("Informe um número de poltrona válido")
        inPoltrona.focus()
        return
    }

    var ocupadas = []

    if(localStorage.getItem("teatroOcupadas")){
        ocupadas = localStorage.getItem("teatroOcupadas").split(";")
    }

    if(ocupadas.indexOf(poltrona.toString())>=0){
            alert(`À poltrona ${poltrona} está ocupada!`)
            inPoltrona.value = ""
            inPoltrona.focus()
            return
    }

    var divPalco = document.getElementById("divPalco")

    var imgPoltrona = divPalco.getElementsByTagName("img")[poltrona-1]

    imgPoltrona.src = "reservada.png"

    reservadas.push(poltrona)

    inPoltrona.value = ""
    inPoltrona.focus()
}
var btnReservar = document.getElementById("btnReservar")
btnReservar.addEventListener("click", reservar)

var inPoltrona = document.getElementById("inPoltrona")
inPoltrona.addEventListener("keypress", function(tecla){
    if(tecla.keyCode == 13){
        reservar()
    }
})

function confirmar(){
    if(reservadas.length==0){
        alert("Não há poltronas reservadas")
        inPoltrona.focus()
        return
    }

    var divPalco = document.getElementById("divPalco")

    var ocupadas = []

    if(localStorage.getItem("teatroOcupadas")){
        ocupadas = localStorage.getItem("teatroOcupadas") + ";"
    }

    for(var i = 0; i < reservadas.length; i++){
        ocupadas += reservadas[i] + ";"

        var imgPoltrona = divPalco.getElementsByTagName("img")[reservadas[i]-1]

        imgPoltrona.src = "indisponível.png"
    }

    reservadas = []

    localStorage.setItem("teatroOcupadas", ocupadas.substr(0, ocupadas.length-1))
}
var btnConfirmar = document.getElementById("btnConfirmar")
btnConfirmar.addEventListener("click", confirmar)