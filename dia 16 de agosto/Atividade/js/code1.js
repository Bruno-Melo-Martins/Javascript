('Digite seu nome:')
('Digite sua altura (em centímetros):')
('Digite seu peso:')

function seuimc(nome, altura, peso){
    altura = altura /100
    imc = peso / (altura * altura)
    if(imc < 16){
        classe = 'Baixo peso muito grave'
    }else{
        if(imc == 16 || imc < 17){
            classe = 'Baixo peso grave'
        }else{
            if(imc == 17 || imc < 18,50){
                classe = 'Baixo peso'
            }else{
                if(imc == 18,50 || imc < 25){
                    classe = 'Peso normal'
                }else{
                    if(imc == 25 || imc < 30){
                        classe = 'Sobrepeso'
                    }else{
                        if(imc == 30 || imc < 35){
                            classe = 'Obesidade grau I'
                        }else{
                            if(imc == 35 || imc < 40){
                                classe = 'Obesidade grau II'
                            }else{
                                if(imc > 40){
                                    classe = 'Obesidade grau III'
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    document.write(nome + "possui  índice de massa corporal igual à " + imc + ", sendo classificado como: " + classe)
}