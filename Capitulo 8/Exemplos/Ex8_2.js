function apostar() {
    var inNome = document.getElementById("inNome")
    var inPeso = document.getElementById("inPeso")

    var nome = inNome.value;
    var peso = Number(inPeso.value)

    if (nome == "" || peso == 0 || isNaN(peso)) {
        alert("Insira as informações corretamente!")
        inNome.focus()
        return
    }

    if (conferirPeso(peso)) {
        alert("Alguem já informou esse peso!")
        inPeso.focus()
        return
    }

    if (localStorage.getItem("melanciaNome")) {
        var melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome;
        var melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso;

        localStorage.setItem("melanciaNome", melanciaNome)
        localStorage.setItem("melanciaPeso", melanciaPeso)
    } else {
        localStorage.setItem("melanciaNome", nome)
        localStorage.setItem("melanciaPeso", peso)
    }

    mostrarApostas()

    inNome.value = ""
    inPeso.value = ""
    inNome.focus()
}

var btnApostar = document.getElementById("btnApostar")
btnApostar.addEventListener("click", apostar)

function conferirPeso(peso) {
    var existe = false;

    if (localStorage.getItem("melanciaPeso")) {
        var pesos = localStorage.getItem("melanciaPeso").split(";")

        if (pesos.indexOf(peso.toString()) >= 0) {
            existe = true
        }
    }
    return existe;
}

function mostrarApostas() {

    var outApostas = document.getElementById("outApostas");

    if (!localStorage.getItem("melanciaNome")) {

        outApostas.textContent = "";
        return;
    }

    var nomes = localStorage.getItem("melanciaNome").split(";");
    var pesos = localStorage.getItem("melanciaPeso").split(";");
    var linhas = "";
    for (var i = 0; i < nomes.length; i++) {
        linhas += nomes[i] + " - " + pesos[i] + "g \n";
    }
    outApostas.textContent = linhas;
}
mostrarApostas();

function vencedor() {

    if (!localStorage.getItem("melanciaNome")) {
        alert("Nenhuma aposta foi feita")
        inNome.focus()
        return
    }

    var pesoCorreto = Number(prompt("Qual o peso correto?"))

    if (isNaN(pesoCorreto) || pesoCorreto == 0) {
        return;
    }

    var nomes = localStorage.getItem("melanciaNome").split(";")
    var pesos = localStorage.getItem("melanciaPeso").split(";")

    var vencedorNome = nomes[0]
    var vencedorPeso = pesos[0]

    for (let i = 0; i < nomes.length; i++) {
        difVencedor = Math.abs(vencedorPeso - pesoCorreto)
        difAposta = Math.abs(Number(pesos[i]) - pesoCorreto)

        if (difAposta < difVencedor) {
            vencedorNome = nomes[i]
            vencedorPeso = pesos[i]
        }
    }

    var mensagem = "Resultado - Peso Correto: " + pesoCorreto + "g";
    mensagem += "\n----------------------------------------------";
    mensagem += "\nVencedor: " + vencedorNome;
    mensagem += "\nAposta: " + vencedorPeso + "g";
    alert(mensagem);
}
var btnVencedor = document.getElementById("btnVencedor")
btnVencedor.addEventListener("click", vencedor)

function limpar() {
    if (confirm("Confirma a exclusão de todas as apostas?")) {
        localStorage.removeItem("melanciaNome")
        localStorage.removeItem("melanciaPeso")
        mostrarApostas()
    }
}
var btnLimpar = document.getElementById("btnLimpar")
btnLimpar.addEventListener("click", limpar)