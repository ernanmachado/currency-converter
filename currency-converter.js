//Revisão
//variaveis var int - float - string
//alert - parseInt - parseFloat - prompt
//operações soma - multiplicação
//comentário
var moeda = prompt("Escolha 1 para Dolar e 2 para Euro")

if (moeda == 1){
  var valorEmRealTextod = prompt("Escolha o valor em Reais para converter em Dolar")
  var valorEmRealNumerod = parseFloat(valorEmRealTextod)
  var valorEmDolar = valorEmRealNumerod * 0.181576
  var valorEmDolarFixado = valorEmDolar.toFixed(2)
  alert(valorEmDolarFixado + " Dolares");  
}
else {
  var valorEmRealTextoe = prompt("Escolha o valor em Reais para converter em Euro")
  var valorEmRealNumeroe = parseFloat(valorEmRealTextoe)
  var valorEmEuro = valorEmRealNumeroe * 0.152086
  var valorEmEuroFixado = valorEmEuro.toFixed(2)
  alert(valorEmEuroFixado + " Euros");
}



//var valorEmDolar = valorEmRealNumero * 0.181576
//var valorEmEuro = valorEmRealNumero * 0.152086
