function calcular(){
    var num = Number(document.getElementById("num").value)
    var numF = document.getElementById("num")
    var resp = document.getElementById("resp")
    
    if (num == "" || isNaN(num)){
        alert("Digite corretamente um número")
        numF.focus()
        return
    }

    var raiz = Math.sqrt(num)

    if (raiz == Math.floor(raiz)){
        resp.textContent = `A raiz quadrada de ${num} é: ${raiz}`
    } else {
        resp.textContent = `Não existe raiz quadrada exata para ${num}`
    }
}
var btnCalcular = document.getElementById("btnCalcular")
btnCalcular.addEventListener("click", calcular)