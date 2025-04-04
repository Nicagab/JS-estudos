function adicionar(){
    var inTitulo = document.getElementById("inTitulo")
    var titulo = inTitulo.value;
    var inGenero = document.getElementById("inGenero")
    var genero = inGenero.value;

    if(titulo == ""){
        alert("Insira um título!")
        inTitulo.focus()
        return
    }
    if(genero == ""){
        alert("Insira um gênero!")
        inGenero.focus()
        return
    }

    var tbFilmes = document.getElementById("tbFilmes")

    inserirLinha(tbFilmes, titulo, genero);

    gravarFilme(titulo, genero)

    inTitulo.value = ""
    inGenero.value = ""
    inTitulo.focus()
}
var btnAdicionar = document.getElementById("btnAdicionar")
btnAdicionar.addEventListener("click", adicionar)

function inserirLinha(tabela, titulo, genero){

    var linha = tabela.insertRow(-1)

    var col1 = linha.insertCell(0)
    var col2 = linha.insertCell(1)
    var col3 = linha.insertCell(2)

    col1.textContent = titulo
    col2.textContent = genero
    col3.innerHTML = "<input type='checkbox'>"
}

function gravarFilme(titulo, genero){
    if (localStorage.getItem("filmesTitulo")){
        var filmesTitulo = localStorage.getItem("filmesTitulo") + ";" + titulo
        var filmesGenero = localStorage.getItem("filmesGenero") + ";" + genero

        localStorage.setItem("filmesTitulo", filmesTitulo)
        localStorage.setItem("filmesGenero", filmesGenero)
    } else {
        localStorage.setItem("filmesTitulo", titulo)
        localStorage.setItem("filmesGenero", genero)
    }
}

function recuperarFilmes(){
    if(localStorage.getItem("filmesTitulo")){
        var titulos = localStorage.getItem("filmesTitulo").split(";")
        var generos = localStorage.getItem("filmesGenero").split(";")

        var tbFilmes = document.getElementById("tbFilmes")

        for(var i = 0; i< titulos.length; i++){
            inserirLinha(tbFilmes, titulos[i], generos[i])
        }
    }
}
recuperarFilmes()

var ckTodos = document.getElementById("ckTodos")
ckTodos.addEventListener("change", function(){
    var tbFilmes = document.getElementById("tbFilmes")
    var ckExcluir = tbFilmes.getElementsByTagName("input")

    var status = ckTodos.checked

    for(var i = 0; i < ckExcluir.length; i++){
        ckExcluir[i].checked = status
    }
})

function excluir(){
var tbFilmes = document.getElementById("tbFilmes")
var ckExcluir = tbFilmes.getElementsByTagName("input")

var temSelecionada = false

for(var i = 0;i<ckExcluir.length;i++){
    if(ckExcluir[i].checked){
        temSelecionada = true
    }
}

if(!temSelecionada){
    alert("Não há itens selecionados para serem excluidos")
    return
}

if(confirm("Confirma a exclusão dos itens selecionados?")){
    localStorage.removeItem("filmesTitulo")
    localStorage.removeItem("filmesGenero")

    for(i=1;i<ckExcluir.length;i++){
        if(!ckExcluir[i].checked){
            var titulo =tbFilmes.rows[i].cells[0].textContent
            var genero = tbFilmes.rows[i].cells[1].textContent
            gravarFilme(titulo, genero)
        }
    }
    for(i=ckExcluir.length-1;i>0;i--){
        if(ckExcluir[i].checked){
            tbFilmes.deleteRow(i)
        }
    }
    ckExcluir[0].checked = false
}
}
var btnExcluir = document.getElementById("btnExcluir")
btnExcluir.addEventListener("click", excluir)