function calcular (){
    var inModelo = document.getElementById("inModelo")
    var inAnoFab = document.getElementById("inAnoFab")
    var inPreco = document.getElementById("inPreco")
    var outClassificacao = document.getElementById("outClassificacao")
    var outPreco = document.getElementById("outPreco")
    var modelo = inModelo.value;
    var anoFab = Number(inAnoFab.value);
    var preco = Number(inPreco.value); 

    if (modelo == "" || anoFab == 0 || isNaN(anoFab) || preco == 0 || isNaN(preco)) {
        alert("Informe todos os dados corretamente!")
        inModelo.focus()
        return
    }

    var classificacao = classificar(anoFab)
    var precoVenda = calcularVenda(preco, classificacao)

    outClassificacao.textContent = `${modelo} - ${classificacao}`
    outPreco.textContent = `Preço de venda R$: ${precoVenda.toFixed(2)} ` 
}
var btnCalcular = document.getElementById("btnCalcular")
btnCalcular.addEventListener("click", calcular)

function classificar(anoFab){
    var anoAtual = new Date().getFullYear()
    var classif;

    if (anoFab == anoAtual){
        classif = "Novo"
    } else if(anoFab == anoAtual-1 || anoFab == anoAtual-2){
        classif = "Seminovo"
    } else {
        classif = "Usado"
    }

    return classif;
}

function calcularVenda(valor, status){
    var prVenda = (status == "Novo") ? valor*1.08 : valor*1.10;
    return prVenda;
}