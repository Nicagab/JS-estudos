function exibir(){
    var inIdade = document.getElementById("inIdade")
    var idade = inIdade.value

    if(Number(idade) < 1 || Number(idade) > 120 || isNaN(Number(idade))){
        alert("Insira uma idade entre 1 e 120 anos!")
        inIdade.focus()
        return
    }

    var velas = ""

    for(var i = 0; i< idade.length; i++){
        velas += idade.charAt(i) + ";"
    }
    var divVelas = document.getElementById("divVelas")

    criarVela(divVelas, velas, "vela")

    btnExibir.disabled = true
    inIdade.value = ""
    }
    var btnExibir = document.getElementById("btnExibir")
    btnExibir.addEventListener("click", exibir)

    function criarVela(div, velas, classe){
        var nums = velas.split(";")

        for(var i = 0; i < nums.length-1; i++){
            var vela = document.createElement("img")
            vela.src = "../imgs/" + nums[i] + ".png"
            vela.alt = nums[i]
            vela.className = classe
            div.appendChild(vela)
        }
    }

    var btnNovas = document.getElementById("btnNovas")
    btnNovas.addEventListener("click", function(){
        location.reload();
    })