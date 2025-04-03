function calcular(){
    var nome = document.getElementById("nome")
    var feminino = document.getElementById("feminino")
    var masculino = document.getElementById("masculino")
    var altura = document.getElementById("altura")
    var resp = document.getElementById("resp")
    nAltura = Number(document.getElementById("altura").value)

    if(nome.value == "" || (masculino.checked == false && feminino.checked == false)){
        alert("Informe seu nome e/ou seu sexo");
        nome.focus()
        return
    }

    if(nAltura == 0 || isNaN(nAltura)){
        alert("Informe sua altura corretamente");
        altura.focus()
        return
    }

    if(masculino.checked){
        var peso = 22*nAltura**2;
    } else {
        var peso = 21*nAltura**2;
    }

    resp.textContent = `${nome.value} sua altura ideal é ${peso.toFixed(3)}Kg`
}

var btnCalcular = document.getElementById("btnCalcular")
btnCalcular.addEventListener("click", calcular)

function limparCampos() {
    location.reload()

    document.getElementById("nome").focus();
}
var btnLimpar = document.getElementById("btnLimpar");
btnLimpar.addEventListener("click", limparCampos);