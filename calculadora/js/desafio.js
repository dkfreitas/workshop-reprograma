
var inputValorHora = document.querySelector("#valor-hora") 
var inputHorasProjeto = document.querySelector("#horas-projeto") 

function calcular(){ 

    var valorHora = inputValorHora.valueAsNumber
    var qtsHoras  = inputHorasProjeto.valueAsNumber

    var totalHoras = valorHora * qtsHoras 
    
    var valorDuasCasas = totalHoras.toFixed(2)
    var resultado = document.querySelector("#resposta")
    resultado.textContent = "R$"+valorDuasCasas   
    console.log (valorDuasCasas)
}   