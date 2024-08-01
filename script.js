var NomeGlobal
var msgGlobal
function conferirMensagemWhatsApp(){

    var nome =document.getElementById("nome").value
    var mensagem = document.getElementById("mensagem").value

    nomeGlobal = nome;
    msgGlobal  = mensagem;

    console.log(nomeGlobal , msgGlobal,"alow")
    document.getElementById("confNome").textContent = nome;
    document.getElementById("confmsg").textContent = mensagem;
}
function enviar(){
    var numeroTelefone = "5541997538494"
    
    var link = "https://wa.me" + numeroTelefone + "?text=Nome:" + nomeGlobal + " - " + msgGlobal;
    "https://wa.me/5541997538494?text=NomeGlobal"
    window.open(link," blank")
}