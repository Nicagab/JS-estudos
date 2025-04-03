const TAXA_MULTA = 2/100
const TAXA_JUROS = 0.33/100

function calcular(){
    var inDataVenc = document.getElementById("inDataVenc")
    var inConta = document.getElementById("inConta")
    var inMulta = document.getElementById("inMulta")
    var inJuros = document.getElementById("inJuros")
    var inTotal = document.getElementById("inTotal")

    var dataVenc = inDataVenc.value
    var conta = Number(inConta.value)  

    if(dataVenc == "" || conta == 0 || isNaN(conta)){
        alert("Informe corretamente os dados da conta!")
        inDataVenc.focus()
        return
    }

    var hoje = new Date()
    var venc = new Date()

    var partes = dataVenc.split("-")
    venc.setDate(Number(partes[2]))
    venc.setMonth(Number(partes[1])-1)
    venc.setFullYear(Number(partes[0]))

    var atraso = hoje - venc;

    var multa = 0
    var juros = 0

    if(atraso>0){
        var dias = Math.round(atraso/86400000)
        multa = conta * TAXA_MULTA
        juros = (conta * TAXA_JUROS) * dias
    }

    var total = conta + multa + juros
    inMulta.value = multa.toFixed(2)
    inJuros.value = juros.toFixed(2)
    inTotal.value = total.toFixed(2)
}
var btnCalcular = document.getElementById("btnCalcular")
btnCalcular.addEventListener("click", calcular)

function nova (){
    location.reload()
}
var btnNova = document.getElementById("btnNova")
btnNova.addEventListener("click", nova)