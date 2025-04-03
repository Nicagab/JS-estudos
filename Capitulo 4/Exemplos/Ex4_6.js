function verificar(){
    var inNum = document.getElementById("inNum")
    var num = Number(inNum.value)
    var resp = document.getElementById("resp")

    if(num == 0 || isNaN(num)){
        alert("Digite um número válido!")
        inNum.focus();
        return
    }

    var numDivisores = 0;

    for (let i = 2; i <=num / 2; i++) {
        if (num % i == 0) {
            numDivisores = 1;
            break
        }
    }

    if (num > 1 && !numDivisores){
        resp.textContent = num + " é um número primo"
    } else {
        resp.textContent = num + " não é um número primo"
    }
}

var btnVerificar = document.getElementById("btnVerificar")
btnVerificar.addEventListener("click", verificar)