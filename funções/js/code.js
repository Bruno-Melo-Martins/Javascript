/*
Funções são comandos específicos
para realizar tarefas, por exepmlo
calcular area de um quadrado
*/
/*Para criar uma função em javascript
se usa a seguinte estrutura
*/
/*
function <nomedafunção>(<variaveis da função>){
    
}
*/

function areadeumquadrado(lado){
    area = lado * lado
    return area
}

document.write('A área é: '+areadeumquadrado(6))

function somadedoisnumeros(num1, num2){
    soma = num1 + num2
    return soma
}

document.write('<br>A soma é: '+somadedoisnumeros(3, 6))

function mediadetresnumeros(n1,n2,n3){
    media = (n1,n2,n3)/3
    return Math.round(media)
}

document.write('<br>A média é: '+mediadetresnumeros(50,76,100))

/*UMA função que se digitado um numero impar ele digita:
'Olá, você é griffinoria'
UMA função que se digitado um numero par ele digita:
'Olá, você é somserina'
UMA função que se digitado o numero ele digita:
'Olá, você é lufa-lufa'
UMA função que se digitado um numero maior que 10 ele digita:
'Olá, você é corvinal'*/

function tuacasa (casa){
    if(casa % 2 == 0){
        resultado = 'Olá, você é somserina'
    }else{
        resultado = 'Olá, você é griffinoria'
    }
    if(casa == 0){
        resultado = 'Olá, você é lufa-lufa'
    }
    if(casa > 10){
        resultado = 'Olá, você é corvinal'
    }
    return resultado
}

document.write('<br>'+tuacasa(prompt('Escolha um número')))