console.log ( "oi oi oi")

var inputSalario = document.querySelector("#ganho-mes") //selecionei salario
var inputHoras = document.querySelector("#horas-dia") // selecionei as horas

function calcularValorHora (){ // criar função

    var salario = inputSalario.valueAsNumber // valor do salario
    var horas  = inputHoras.valueAsNumber // valor das horas 

    var horasMes = horas * 22 // multiplicação horasxdia util
    var valorHora = salario / horasMes  // salario / horas
    
    var valorDuasCasas = valorHora.toFixed(2) // configurar duas casas
    var resultado = document.querySelector("#resposta") 
    resultado.textContent = "R$"+valorDuasCasas   

    

}
