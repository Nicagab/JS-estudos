function calcular(){
    var preço = Number(document.getElementById("preço").value)
    var gramas = Number(document.getElementById("gramas").value)
    var resp = document.getElementById("resp")

    var valor = preço*(gramas/1000)

    resp.textContent = "Valor a pagar: R$" + valor.toFixed(2)}

    var btnCalcular = document.getElementById("btnCalcular")
    btnCalcular.addEventListener("click",calcular)