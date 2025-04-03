function decrescer() {
    var inNum = document.getElementById("num")
    var num = Number(inNum.value)
    var resp = document.getElementById("resp") 

    if (num<=0 || isNaN(num)){
        alert("Insira um número válido")
        inNum.focus()
        return
    }

    var resposta = `Entre o ${num} e  1: `

    for (let i = num; i > 0;i--) {
        if (i == 1) {
            resposta = resposta + i + ".";
            } else {
            resposta = resposta + i + ", ";
            }    
    }
    resp.textContent = resposta
}

var decrescerBtn = document.getElementById("decrescerBtn")
decrescerBtn.addEventListener("click", decrescer)