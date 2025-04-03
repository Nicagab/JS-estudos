function calcular(){
    var inVelS = document.getElementById("velS")
    var inVelM = document.getElementById("velM")
    var velS = Number(document.getElementById("velS").value)
    var velM = Number(document.getElementById("velM").value)
    var resp = document.getElementById("resp")

    if(velS == "" || isNaN(velS)){
        alert("Digite sua velocidade corretamente")
        inVelS.focus()
        return
    }
    if(velM == "" || isNaN(velM)){
        alert("Digite a velocidade permitida corretamente")
        inVelM.focus()
        return
    }

    if(velS<=velM){
        resp.textContent = `Sem multa`
        return
    } else if (velS-velM <= (velM*0.2)){
        resp.textContent = `Multa leve`
        return
    } else {
        resp.textContent = `Multa grave`
        return
    }
}
var btnCalcular = document.getElementById("btnCalcular")
btnCalcular.addEventListener("click", calcular)