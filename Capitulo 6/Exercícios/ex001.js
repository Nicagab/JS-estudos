function criptografar(){
    var inMsg = document.getElementById("inMsg")
    var msg = inMsg.value

    if(msg == ""){
        alert("Insira uma mensagem!")
        inMsg.focus()
        return
    }

    var inicio = ""
    var final = ""

    for (let i = 0; i < msg.length; i++) {
        if((i+1) % 2 == 0){
            inicio += msg.charAt(i)
        } else {
            final += msg.charAt(i)
        }
    }

    document.getElementById("outMsg").textContent = inicio+final
}
var btnCriptografar = document.getElementById("btnCriptografar")
btnCriptografar.addEventListener("click", criptografar)

function descriptografar(){
    var inMsg = document.getElementById("inMsg")
    var msg = inMsg.value

    if(msg == ""){
        alert("Insira uma mensagem!")
        inMsg.focus()
        return
    }

    var inicio = msg.substr(0, msg.length/2)
    var final = msg.substr(msg.length/2)
    var original = ""
    
    for (let i = 0; i < msg.length; i++) {
        original += final.charAt(i)
        original += inicio.charAt(i)
        
    }

    document.getElementById("outMsg").textContent = original
}
var btnDescriptografar = document.getElementById("btnDescriptografar")
btnDescriptografar.addEventListener("click", descriptografar)