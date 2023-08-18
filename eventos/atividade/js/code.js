let valorvisor = ""

function adicione(value){
    valorvisor += value
    document.getElementById('visor').value = valorvisor
}

function calcular(){
    try{
        const result = eval(valorvisor)
        document.getElementById('visor').value = result
        valorvisor = result.toString()
    } catch (error){
        document.getElementById('visor').value = "Erro"
        valorvisor = "";
    }
}

function limpar(){
    valorvisor = ""
    document.getElementById('visor').value = valorvisor
}