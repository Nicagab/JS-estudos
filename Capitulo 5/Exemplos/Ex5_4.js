var crianças = []

function adicionar() {
    var inNome = document.getElementById("inNome")
    var inIdade = document.getElementById("inIdade")
    var nome = inNome.value
    var idade = Number(inIdade.value)

    if (nome == "") {
        alert("Digite um nome válido!")
        inNome.focus()
        return
    }
    if (idade == 0 || isNaN(idade)) {
        alert("Insira uma idade válida!")
        inIdade.focus()
        return
    }

    crianças.push({ nome: nome, idade: idade })

    inNome.value = ""
    inIdade.value = ""
    inNome.focus()

    listar()
}

var btnAdicionar = document.getElementById("btnAdicionar")
btnAdicionar.addEventListener("click", adicionar)

function listar() {

    var outLista = document.getElementById("outLista")

    if (crianças.lenght == 0) {
        alert("Não há crianças a serem listadas!")
        return
    }

    var lista = ""

    for (let i = 0; i < crianças.length; i++) {
        lista += `${crianças[i].nome} - ${crianças[i].idade} anos \n`
    }

    outLista.textContent = lista
}

var btnListar = document.getElementById("btnListar")
btnListar.addEventListener("click", listar)

function resumir() {
    if (crianças.length == 0) {
        alert("Não há crianças na lista");
        return;
    }
    
    var copia = crianças.slice();
    
    copia.sort(function (a, b) { return a.idade - b.idade });
    var resumo = ""; 
    var aux = copia[0].idade; 
    var nomes = []; 
    
    for (var i = 0; i < copia.length; i++) {
        
        if (copia[i].idade == aux) {
            nomes.push(copia[i].nome);
        } else {
            
            resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
            resumo += (nomes.length / copia.length * 100).toFixed(2) + "%\n";
            resumo += "(" + nomes.join(", ") + ")\n\n";
            aux = copia[i].idade; 
            nomes = []; 
            nomes.push(copia[i].nome); 
        }
    }
    
    resumo += aux + " ano(s): " + nomes.length + " criança(s) - ";
    resumo += (nomes.length / copia.length * 100).toFixed(2) + "%\n";
    resumo += "(" + nomes.join(", ") + ")\n\n";
    
    document.getElementById("outLista").textContent = resumo;
}

var btnResumir = document.getElementById("btnResumir")
btnResumir.addEventListener("click", resumir)
