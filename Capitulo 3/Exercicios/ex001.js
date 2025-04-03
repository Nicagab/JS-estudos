function mostrar(){
    var num = Number(document.getElementById("num").value)
    var inNum = document.getElementById("num")
    var resp = document.getElementById("resp")

    if (num == "" || isNaN(num)) {
        alert("Digite um número válido")
        inNum.focus()
        return
    }

    if(num%2==0){
        resp.textContent = `${num} é par`
        return
    } else {
        resp.textContent = `${num} é impar`
        return
    }
}
var btnMostrar = document.getElementById("btnMostrar")
btnMostrar.addEventListener("click", mostrar)