var btnExibir = document.getElementById("btnExibir");
btnExibir.addEventListener("click", function(){
    var inPreco = document.getElementById("inPreco")
    var preco = Number(inPreco.value)
    var outParcelas = document.getElementById("outParcelas")

    if(preco==0){
        alert("Digite o preço corretamente!")
        inPreco.focus()
        return
    }

    var lista = ""

    for (let i = 10; i > 0; i--) {

        lista += `${i}x de R$: ${(preco/i).toFixed(2)} \n`
    }

    outParcelas.textContent = "Opções de pagamento: \n" + lista
})