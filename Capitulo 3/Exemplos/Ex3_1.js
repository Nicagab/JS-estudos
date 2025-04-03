function Calcular(){
    var nome = document.getElementById("nome").value;
    var nota1 = Number(document.getElementById("nota1").value)
    var nota2 = Number(document.getElementById("nota2").value)
    
    var resp = document.getElementById("resp")

    var media = (nota1+nota2)/2

    if(media<5){
        resp.textContent = nome + "sua nota é inferior a média necessária, você foi reprovado(a)"
    } else {
        resp.textContent = `Parabéns ${nome}, você foi aprovado(a)`
    }
}
var btnCalcular = document.getElementById("btnCalcular")
btnCalcular.addEventListener("click", Calcular)