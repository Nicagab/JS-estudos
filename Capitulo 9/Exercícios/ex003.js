var clubes = []

function adicionar(){
    var inClube = document.getElementById("inClube")
    var clube = inClube.value

    if(clube == ""){
        alert("Insira um clube!")
        inClube.focus()
        return
    }

    var divClubes = document.getElementById("divClubes")

    var h5 = document.createElement("h5")
    h5.textContent = clube
    h5.className = "aDireita"
    divClubes.appendChild(h5)

    clubes.push(clube)

    inClube.value = ""
    inClube.focus()

}

var btnAdicionar = document.getElementById("btnAdicionar")
btnAdicionar.addEventListener("click", adicionar)

function montar(){

    var h5 = document.getElementsByTagName("h5")
    numH5 = h5.length

    if(numH5 % 2 == 0){
        var tbClubes = document.getElementById("tbClubes")

        for(var i = numH5; i>0; i--){
            var linha = tbClubes.insertRow(-1)

            var col1 = linha.insertCell(0)
            var col2 = linha.insertCell(1)

            col1.textContent = clubes.shift()
            col2.textContent = clubes.shift()

            i--
        }

        btnAdicionar.disabled = true;
        btnMontar.disabled = true;
    } else {
        alert("O número de clubes precisa ser par!")
    }
}
var btnMontar = document.getElementById("btnMontar")
btnMontar.addEventListener("click", montar)

btnNovos = document.getElementById("btnNovos")
btnNovos.addEventListener("click", function (){
    location.reload()
})