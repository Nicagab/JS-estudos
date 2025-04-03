var erros = []
const CHANCES = 6;
var sorteado = Math.floor(Math.random()*100)+1

var btnApostar = document.getElementById("btnApostar")

function apostar (){
    var inNum = document.getElementById("inNum")
    var num = Number(inNum.value)

    if (num == 0 || num>100 || isNaN(num)){
        alert("Digite um número válido!")
        inNum.focus()
    }

    var inErros = document.getElementById("inErros")
    var inChances = document.getElementById("inChances")
    var inDica = document.getElementById("inDica")

    if (num == sorteado){
        btnApostar.disabled = true
        btnJogar.className = "exibir"
        inDica.textContent = `Parabéns! número sorteado: ${sorteado}`
    } else {
        if (erros.indexOf(num) >= 0){
            alert("Você já apostou esse número!")
            inNum.focus()
            return
        } else {
            erros.push(num)
            var numErros = erros.length
            var numChances = CHANCES - numErros

            inErros.textContent = numErros + "(" + erros.join(", ")+")"
            inChances.textContent = numChances

            if(numChances == 0){
                alert("Suas chances acabaram!")
                btnApostar.disabled = true
                btnJogar.className = "exibir"
                inDica.textContent = `O número sorteado era ${sorteado}`
            } else {
                var dica = num < sorteado ? "maior" : "menor"
                inDica.textContent = `Dica: tente um número ${dica} que ${num}`
            }
        }

    }

    inNum.value = ""
    inNum.focus()
}
btnApostar.addEventListener("click", apostar)

function jogarNovamente() {
    location.reload(); // recarrega a página
}
var btnJogar = document.getElementById("btnJogar");
btnJogar.addEventListener("click", jogarNovamente);