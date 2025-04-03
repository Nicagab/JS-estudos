function promoção(){
    var preçoU = Number(document.getElementById("preçoU").value)
    var resp = document.getElementById("resp")

    desconto = Math.floor(preçoU)*2

    resp.textContent = "Leve 2 por apenas R$" + desconto.toFixed(2)}

    var btnCalcular = document.getElementById("btnCalcular")
    btnCalcular.addEventListener("click", promoção)