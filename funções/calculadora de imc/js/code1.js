function seuImc(){
    var nome = document.getElementById('nome').value
    var altura = parseInt(document.getElementById('altura').value)
    var peso = parseInt(document.getElementById('peso').value)

    altura = altura / 100
    imc = Math.round(peso / (altura * altura))

    if(imc < 16){
        classe = 'Baixo peso muito grave'
        }
        if(imc >= 16 && imc < 17){
        classe = 'Baixo peso grave'
        }
        if(imc >= 17 && imc < 18.50){
        classe = 'Baixo peso'
        }
        if(imc >= 18,50 && imc < 25){
        classe = 'Peso normal'
        }
        if(imc >= 25 && imc < 30){
        classe = 'Sobrepeso'
        }
        if(imc >= 30 && imc < 35){
        classe = 'Obesidade grau I'
        }
        if(imc >= 35 && imc < 40){
        classe = 'Obesidade grau II'
        }
        if(imc > 40){
        classe = 'Obesidade grau III'
        }

    document.getElementById('resultado').innerHTML=nome+' possui índice de massa corporal '+imc+' sendo classficado com: '+classe
}