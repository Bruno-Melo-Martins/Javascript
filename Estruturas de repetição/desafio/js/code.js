var lista_frutas = ['banana', 'uva', 'maçã', 'laranja', 'pera', 'salada mista'];

var indice = 0;

while(indice <= 5){
    document.getElementById('quest').innerHTML+=(lista_frutas[indice]+'<br>');
    indice++;
}
