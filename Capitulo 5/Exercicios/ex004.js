var noticias = []

function adicionar (){
    var inNoticia = document.getElementById("inNoticia")
    var noticia = inNoticia.value

    if(noticia == ""){
        alert("Insira uma notícia válida")
        inNoticia.focus()
        return
    }

    noticias.push(noticia)

    inNoticia.value = ""
    inNoticia.focus()

    document.getElementById("outQtde").textContent = `Notícias cadastradas: ${noticias.length}`
}
var btnAdicionar = document.getElementById("btnAdicionar")
btnAdicionar.addEventListener("click", adicionar)

function listar(){
    if(noticias.length == 0){
        alert("Não há notícias a serem listadas")
        inNoticia.focus()
        return
    }

    var lista = ""
    var num = prompt("Digite a quantidade de notícias que deseja:")
    var copia = noticias.slice()

    for (let i = num; i > 0; i--) {
        lista += `${copia.length}ª) ${copia.pop()} \n`
    }

    document.getElementById("outLista").textContent = lista
}
var btnListar = document.getElementById("btnListar")
btnListar.addEventListener("click", listar)