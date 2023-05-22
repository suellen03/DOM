//Área do Retângulo
function area(){
    let base = parseFloat(document.getElementById('base').value);
    let altura = parseFloat(document.getElementById('altura').value);
    let resultado = parseFloat(base * altura);

    document.getElementById('arearet').innerHTML = resultado
}
//Área do Círculo
function areacirculo(){
    let raio = parseFloat(document.getElementById('raio').value);
    const pi = 3.14
    let resultadocir = parseFloat(raio * raio * pi);

    document.getElementById('areacir').innerHTML = resultadocir
}