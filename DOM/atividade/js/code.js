function recebefoco(){
        document.getElementById('exp').style.backgroundColor= 'yellow'
}

function perdefoco(){
    var mensagem = (document.getElementById('exp').value)
    mensagem.trim()
    if(mensagem.lenght = 3 || mensagem.lenght > 3){
        document.getElementById('exp').style.backgroundColor='green'
    }else{
        document.getElementById('exp').style.backgroundColor='yellow'
    }

}
    