var num = "";
var op = "";
var x = 1;


function calculo(){
    num = parseInt(document.getElementById('num').value);
    op = (document.getElementById('op').value);
    
    if(op == 1){
        for(x = 1; x <= 10; x++){
            operacao = num + x;
            document.getElementById('tabuada').innerHTML+=num+" + "+x+" = "+operacao+"<br>"
        }
    }
    if(op == 2){
        for(x = 1; x <= 10; x++){
            operacao = num - x;
            document.getElementById('tabuada').innerHTML+=num+" - "+x+" = "+operacao+"<br>"
        }
    }
    if(op == 3){
        for(x = 1; x <= 10; x++){
            operacao = num / x;
            document.getElementById('tabuada').innerHTML+=num+" / "+x+" = "+operacao+"<br>"
        }
    }
    if(op == 4){
        for(x = 1; x <= 10; x++){
            operacao = num * x;
            document.getElementById('tabuada').innerHTML+=num+" x "+x+" = "+operacao+"<br>"
        }
    }
}