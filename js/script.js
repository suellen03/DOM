//Área do Retângulo
function area(){
    let base = parseFloat(document.getElementById('base').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let resultado = parseFloat(base * altura);

    document.getElementById('arearet').innerHTML = "A área do retângulo é = " + resultado
}
//Área do Círculo
function areacirculo(){
    let raio = parseFloat(document.getElementById('raio').value);
    const pi = 3.14
    let resultadocir = parseFloat(raio * raio * pi);

    document.getElementById('areacir').innerHTML = "A área do círculo é = " + resultadocir
}
//Área triângulo
function areatriangulo(){
    let base = parseFloat(document.getElementById('basetri').value)
    let altura = parseFloat(document.getElementById('alturatri').value)
    let resultadotri = parseFloat(base * altura)/2

    document.getElementById('areatri').innerHTML = "A área do triângulo é = " + resultadotri

}

//Hipotenusa
function hipotenusa(){
    let cateto1 = parseFloat(document.getElementById('cateto').value)
    let cateto2 = parseFloat(document.getElementById('catetoa').value)
    let reshipotenusa = Math.sqrt(parseFloat(cateto1 * cateto1) + parseFloat(cateto2 * cateto2)).toFixed(2)

    document.getElementById('hipot').innerHTML = "Hipotenusa = " + reshipotenusa

}

//Conversão do Dólar
function conversaodolar(){
    let cotacao = parseFloat(document.getElementById('cotacaodolar').value)
    let reais = parseFloat(document.getElementById('valorreais').value)
    let dolar = parseFloat(reais) / parseFloat(cotacao).toFixed(2)
    
    if (cotacao == 0) {
        document.getElementById('dolar').innerHTML = 'Não existe divisão por 0'
    } else {
        document.getElementById('dolar').innerHTML = "$" + dolar  
    }
}
//Conversão °C para °F
function temperatura(){
    let celsius = parseFloat(document.getElementById('tempcelsius').value)
    let tempf = parseFloat(celsius * 1.8 + 32).toFixed(1)
    
    document.getElementById('fahrenheit').innerHTML = tempf + "°F"
}

//Média Aritimética
function media(){
    let nota1 = parseFloat(document.getElementById('nota1').value)
    let nota2 = parseFloat(document.getElementById('nota2').value)
    let nota3 = parseFloat(document.getElementById('nota3').value)
    let mediaa = parseFloat((nota1 + nota2 + nota3) / 3).toFixed(1)

    if (mediaa >= 6) {
        document.getElementById('media1').innerHTML = "Aprovado com média: " + mediaa 
    } else {
        document.getElementById('media1').innerHTML = "Reprovado com média: " + mediaa 
    }
}

//Baskara
function baskara(){
    let a = parseFloat(document.getElementById('a').value)
    let b = parseFloat(document.getElementById('b').value)
    let c = parseFloat(document.getElementById('c').value)
    let delta = parseFloat((b ** 2) - 4 * a * c)

    let raiz1 = parseFloat((-b + (Math.sqrt(delta))) / (2*a))
    let raiz2 = parseFloat((-b - (Math.sqrt(delta)))/ (2*a))

    if (delta < 0) {
        document.getElementById('x').innerHTML = "Não existem raízes reais"
    } else {
        document.getElementById('x1').innerHTML = "x' = " + raiz1 
        document.getElementById('x2').innerHTML = "x'' = " + raiz2 
    }
    

}

//Km/h para m/s
function conversaoVelocidade() {

    let kmhora = parseFloat(document.getElementById('kmh').value)
    let mSegundo = parseFloat(kmhora / 3.6)
    
    document.getElementById('resms').innerHTML = mSegundo + " m/s"
}


function somar(){
    let n1 = parseFloat(document.getElementById('n1').value)
    let n2 = parseFloat(document.getElementById('n2').value)
    let soma = parseFloat(n1 + n2)
    document.getElementById('operacaomat').innerHTML = soma
} 
function subtrair(){
    let n1 = parseFloat(document.getElementById('n1').value)
    let n2 = parseFloat(document.getElementById('n2').value)
    let subtracao = parseFloat(n1 - n2)
    document.getElementById('operacaomat').innerHTML = subtracao
} 
function multiplicar(){
    let n1 = parseFloat(document.getElementById('n1').value)
    let n2 = parseFloat(document.getElementById('n2').value)
    let multiplica = parseFloat(n1 * n2)
    document.getElementById('operacaomat').innerHTML = multiplica
} 
function dividir(){
    let n1 = parseFloat(document.getElementById('n1').value)
    let n2 = parseFloat(document.getElementById('n2').value)
    let dividi = parseFloat(n1 / n2)
    
    if (n2 == 0) {
        document.getElementById('operacaomat').innerHTML = "Não existe divisão por 0"
    } else {
        document.getElementById('operacaomat').innerHTML = dividi
    }
} 