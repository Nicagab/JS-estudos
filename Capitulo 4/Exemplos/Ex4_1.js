function tabuada(){
    var num = Number(document.getElementById("num").value)
    var inNum = document.getElementById("num")
    var resp = document.getElementById("resp")

    if(num==0 || isNaN(num)){
        alert("Número inválido")
        inNum.focus()
        return
    }
    var conteudo = ""
    for (let i = 1; i <= 10; i++) {
        var resultado = num*i
        conteudo = conteudo + `${num} X ${i} = ${resultado} \n`
    }

    resp.textContent = conteudo
}
var btnMostrar = document.getElementById("btnMostrar")
btnMostrar.addEventListener("click", tabuada)