function trocarClube(){
    var imgClube = document.getElementById("imgClube")
    var divTitulo = document.getElementById("divTitulo")
    var clubes = ["Brasil", "Pelotas", "Farroupilha"]

    var selecao;

    for (let i = 0; i < (clubes.length+1); i++) {
        if(inputsRadio[i].checked){
            var selecao = i;
            break;
        }
    }

    if(selecao<=2){
        divTitulo.className = "row cores"+clubes[selecao]
        imgClube.src = "../img/"+clubes[selecao]+ ".png"
        imgClube.className = "exibe";
        imgClube.alt = "Símbolo do"+clubes[selecao]
        localStorage.setItem("clube", clubes[selecao])
    } else {
        divTitulo.className = "row"
        imgClube.className = "oculta"
        imgClube.alt = "";
        localStorage.removeItem("clube")
    }
    
}
var inputsRadio = document.getElementsByTagName("input");

for (var i = 0; i < inputsRadio.length; i++) {
inputsRadio[i].addEventListener("change", trocarClube);
}

function verificarClube(){
    if(localStorage.getItem("clube")){
    var clube = localStorage.getItem("clube")

    if(clube == "Brasil"){
        inputsRadio[0].checked = true
    } else if (clube == "Pelotas"){
        inputsRadio[1].checked = true
    } else  {
        inputsRadio[2].checked = true
    }
    trocarClube()
}
}
verificarClube()

function contagem(){

    var hContagem = document.getElementById("hContagem")

    if(localStorage.getItem("visita")){
        var visita = Number(localStorage.getItem("visita"))+1
        localStorage.setItem("visita", visita)
    } else {
        var visita = 1
        localStorage.setItem("visita", visita)
    }

    if(visita == 1){
        hContagem.textContent = "Muito Bem-Vindo! Esta é a sua primeira visita ao nosso site."
    } else {
        hContagem.textContent = `Que bom que você voltou! Esta é a sua visita de número ${visita} ao nosso site.`
    }
}
contagem()