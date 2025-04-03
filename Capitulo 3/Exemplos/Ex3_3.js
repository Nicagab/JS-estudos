function calcular(){
    var bairro = document.getElementById("bairro").value
    var resp = document.getElementById("resp") 
    var taxa;

    switch (bairro) {
        case "Santana":
            taxa = 5;
            break;
        case "Cachoeirinha":
            taxa = 10
            break;
        default:
            taxa = 15;
            break;
    }
    resp.textContent = `A taxa para entrega é de R$${taxa}`
}
var btnCalcular = document.getElementById("btnCalcular")
btnCalcular.addEventListener("click", calcular)