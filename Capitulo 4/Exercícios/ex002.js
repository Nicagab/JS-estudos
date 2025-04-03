function calcular(){
    var inChinchila = document.getElementById("inChinchila")
    var inAnos = document.getElementById("inAnos")
    var chinchila = Number(inChinchila.value)
    var anos = Number(inAnos.value)
    var resp = document.getElementById("resp")

    if (chinchila < 2 || isNaN(chinchila)) {
        alert("Número de chinchilas inválido!")
        inChinchila.focus()
        return
    }

    if (anos == 0 || isNaN(anos)) {
        alert("Número de anos inválido!")
        inAnos.focus()
        return
    }

    for (let i = 1; i <= anos; i++) {
        if(i==1) {
            resposta = `${i}º Ano: ${chinchila} chinchilas \n`
        } else {
        chinchila = chinchila * 3
        resposta = resposta + `${i}º Ano: ${chinchila} chinchilas \n`}
    }
    resp.textContent = resposta
}

var btnCalcular = document.getElementById("btnCalcular")
btnCalcular.addEventListener("click", calcular)