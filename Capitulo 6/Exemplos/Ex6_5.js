function gerar(){
    var inFunc = document.getElementById("inFunc")
    var func = inFunc.value 

    if(func == "" || func.indexOf(" ") == -1){
        alert("Digite seu nome completo!")
        inFunc.focus()
        return
    }

    var nomes = func.split(" ")
    var email = ""

    for (let i = 0; i < nomes.length-1; i++) {
        email += nomes[i].charAt(0)
    }

    email += nomes[nomes.length-1] + "@empresa.com.br"

    document.getElementById("outEmail").textContent = email.toLowerCase();

    inFunc.value = ""
    inFunc.focus()
}
var btnGerar = document.getElementById("btnGerar")
btnGerar.addEventListener("click", gerar)