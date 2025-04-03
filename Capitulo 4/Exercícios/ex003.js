function verifica() {
    var inNum = document.getElementById("inNum")
    var num = Number(inNum.value)
    var resp1 = document.getElementById("resp1")
    var resp2 = document.getElementById("resp2")

    var divs = 0
    var resposta = ""

    if (num == 0 || isNaN(num)){
        alert("Digite um número válido")
        inNum.focus()
        return
    }

    for (let i = num-1; i > 0; i--) {
        if(num%i == 0){
            divs = divs + i
            resposta = resposta + `,${i}`
        }
        if (num==divs){
            resp1.textContent = `Divisores do ${num}: ${resposta} (soma = ${divs})`
            resp2.textContent = num + " É um número perfeito"
        } else {
            resp1.textContent = `Divisores do ${num}: ${resposta} (soma = ${divs})`
            resp2.textContent = num + " Não é um número perfeito"
        }
    }
}
var btnVerificar = document.getElementById("btnVerificar")
btnVerificar.addEventListener("click", verifica)