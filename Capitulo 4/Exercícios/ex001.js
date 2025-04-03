function mostrar(){
    var inFruta = document.getElementById("inFruta")
    var inNum = document.getElementById("inNum")
    var resp = document.getElementById("resp")

    var fruta = inFruta.value
    var num = Number(inNum.value)

    if (fruta == ""){
        alert("Digite a fruta corretamente!")
        inFruta.focus()
        return
    }

    if (num == 0 || isNaN(num)){
        alert("Digite o número corretamente!")
        inNum.focus()
        return
    }

    for (let i = 1; i <= num; i++) {
        if(i==num){
            resp.textContent = resp.textContent + fruta
        } else {
            resp.textContent = resp.textContent + fruta + " * "
        }
    }
}
var btnMostrar = document.getElementById("btnMostrar")
btnMostrar.addEventListener("click", mostrar)