var numContas = 0;
var valTotal = 0;

var resposta = "";

function Registrar() {
    inDescricao = document.getElementById("inDescricao")
    inValor = document.getElementById("inValor")
    descricao = inDescricao.value
    valor = Number(inValor.value)
    resp = document.getElementById("resp")
    total = document.getElementById("total")

    if (descricao == "") {
        alert("Adicione uma descrição a sua conta!")
        inDescricao.focus()
        return
    }
    if (valor == 0 || isNaN(valor)) {
        alert("Digite um valor válido!")
        inValor.focus()
        return
    }

    numContas++;
    valTotal = valTotal + valor

    resposta = resposta + descricao + " - R$: " + valor.toFixed(2) + "\n";

resp.textContent = resposta + "--------------------------------";
total.textContent = numContas + " Conta(s) - Total R$: " + valTotal.toFixed(2);

inDescricao.value = "";
inValor.value = "";
inDescricao.focus();

}
var btnRegistrar = document.getElementById("btnRegistrar")
btnRegistrar.addEventListener("click", Registrar)