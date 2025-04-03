var anuncio = prompt("Anúncio: ")
var tam = anuncio.length
var numPalavras = 0

for (let i = 0; i < tam; i++) {
    if(anuncio.charAt(i) == " "){
        numPalavras++
    }
}

alert(`Anúncio: ${anuncio} \n Nº de palavras: ${(numPalavras + 1)}`)