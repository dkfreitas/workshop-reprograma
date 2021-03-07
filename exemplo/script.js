console.log("Salve, quebrada")

var entrada = document.querySelector("input")
var saida = document.querySelector("#respostaAno")
  

function cliquei(){

  var ano = entrada.value
  console.log(ano) 
  saida.textContent = ano
}
