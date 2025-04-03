function adicionar(){
    var inProduto = document.getElementById("inProduto")
    var produto = inProduto.value;

    if(produto == ""){
        alert("Adicione um produto válido!")
        inProduto.focus()
        return
    }

    var lista = ""
    if(localStorage.getItem("lista")){
        lista = localStorage.getItem("lista") + ";" + produto
        localStorage.setItem("lista", lista)
    } else {
        localStorage.setItem("lista", produto)
    }

    listar()

    inProduto.value = ""
    inProduto.focus()
}
var btnAdicionar = document.getElementById("btnAdicionar")
btnAdicionar.addEventListener("click", adicionar)

function listar (){
    if(!localStorage.getItem("lista")){
        document.getElementById("outLista").textContent = ""
        return
    }

    var produtos = localStorage.getItem("lista").split(";")

    produtos.sort();
    var resp = ""

    for(var i = 0; i < produtos.length; i++){
        resp += produtos[i] + "\n"
    }

    document.getElementById("outLista").textContent = "Produtos adicionados \n ------------------------ \n"  + resp
}

function limpar(){
    if(!localStorage.getItem("lista")){
        alert("Não há nenhum item na lista")
    } else {
        if(confirm("Deseja excluir todos os itens de sua lista?")){
            localStorage.removeItem("lista")
        }
    }

    listar()
}
var btnLimpar = document.getElementById("btnLimpar")
btnLimpar.addEventListener("click", limpar)