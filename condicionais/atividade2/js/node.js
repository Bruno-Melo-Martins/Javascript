let codigo = prompt('Digite o código do produto')
switch (codigo){
    case '1':
        document.write('Alimento não-perecível')
        break
    case '2':
        document.write('Alimento perecível')
        break
    case '3':
        document.write('Vestuário')
        break
    case '4':
        document.write('Limpeza')
        break
    default:
        document.write('Código não cadastrado')
}