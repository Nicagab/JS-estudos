function calcular()  {
    var preço = Number(document.getElementById("preço").value)
    var valor = Number(document.getElementById("valor").value)
    var resp = document.getElementById("resp")

    var total = preço*(Math.ceil(valor/15))
    resp.textContent = "Total a pagar R$" + total.toFixed(2)}

    var btnCalcular = document.getElementById("btnCalcular")
    btnCalcular.addEventListener("click", calcular)