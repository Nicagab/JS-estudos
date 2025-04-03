function calcular(){
    var inValor = document.getElementById("inValor")
    var valor = Number(inValor.value)
    var inData = document.getElementById("inData")
    var data = inData.value

    if(data == ""){
        alert("Digite a data corretamente!")
        inData.focus()
        return
    }
    if( valor == 0 || isNaN(valor)){
        alert("Digite o valor corretamente!")
        inValor.focus()
    }

 
    var limite = new Date() 
    var dia = limite.getDate()
    limite.setDate(dia+90) 

    var desconto = valor-(valor*0.2)

    var dia = limite.getDate()
    var mes = limite.getMonth()+1
    var ano = limite.getFullYear()
    diaZero = dia < 10 ? "0" + dia : dia; 
    mesZero = mes < 10 ? "0" + mes : mes; 

   
    document.getElementById("outData").textContent = `Data limite para pagamento com desconto: ${diaZero}/${mesZero}/${ano}` 
    document.getElementById("outValor").textContent = `Valor com desconto: R$${desconto.toFixed(2)}`
}
var btnCalcular = document.getElementById("btnCalcular")
btnCalcular.addEventListener("click", calcular)