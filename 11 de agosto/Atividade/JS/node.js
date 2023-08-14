/* 1º exercicio */
document.write('1º<br>')
let a = 1, b = 2, c = 3
document.write('Numeros: ' + a + " " + b + " " + c)


/* 2º exercicio */
document.write('<br>2º<br>')
let num1 = prompt('Digite o primeiro número:'),
num2 = prompt('Digite o segundo número:'),
num3 = prompt('Digite o terceiro número:')
document.write('Primeiro número: ' + num1 + '<br>Segundo número: ' + num2 + '<br>Terceiro número: ' + num3)

/* 3º exercicio */
console.log('3º')
let nome = prompt('Digite seu nome:')
let idade =  prompt('Digite sua idade:')
console.log('Olá, meu nome é ' + nome + ' e eu tenho ' + idade + ' anos')

/* 4º exercicio */
document.write('<br>4º<br>')
let n1 = parseInt(prompt('Digite o primeiro número:'))
let n2 = parseInt(prompt('Digite o segundo número:'))
let soma = n1 + n2
let subt = n1 - n2
let mult = n1 * n2
let divi = n1/n2
document.write(
    'Subtração: ' + subt +
    '<br>Soma: ' + soma +
    '<br>Multiplicação: ' + mult +
    '<br>Divisão: ' + divi
    )