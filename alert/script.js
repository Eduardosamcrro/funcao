function alertarErro(){
    alert("EU AMO JAVASCRIPT");
}
function somar(a, b){
    var total = a + b;
    alert("Valor da soma : " + total);
}
function desconto(a, b){
    var totalDesconto = a - b;
    return totalDesconto;
}
var resultadoTotalDesc= desconto(99, 66)
document.write('Valor final com desconto: ' + resultadoTotalDesc + "<br>")

const soma = (numero1, numero2) => numero1 + numero2;
document.write("valor da soma: " + soma(86, 55) + "<br>");

const total = (numero1, numero2) => {
    return numero1 + numero2;
}
document.write('Valor da soma: ' + soma(3000, 6000)+"<Br>" );