function calcular_imc() {

    var altura, masa, imc, tipo;

    altura = document.getElementById("altura").value;
    altura = altura.toString().replace(',', '.');

    if (altura == "" || altura <= 0) {
        altura = window.prompt("Indique su altura (cm)?", "0");
        altura = parseInt(altura);
        document.getElementById("altura").value = altura;
    }

    masa = document.getElementById("masa").value;
    masa = masa.toString().replace(',', '.');

    if (masa == "" || masa <= 0) {
        masa = window.prompt("Indique su peso (kg)?", "0");
        masa = parseInt(masa);
        document.getElementById("masa").value = masa
    }

    //Cálculos
    imc = (masa / (altura * altura));
    imc = imc * 10000;



    //Tipo de IMC

    if (imc < 16) {
        tipo = "Delgadez Severa";
    }
    else if (imc < 17) {
        tipo = "Delgadez Moderada";
    }
    else if (imc < 18.5) {
        tipo = "Delgadez Aceptable";
    }
    else if (imc < 25) {
        tipo = "Peso Normal";
    }
    else if (imc < 30) {
        tipo = "Sobrepeso";
    }
    else if (imc < 35) {
        tipo = "Obeso: Tipo I";
    }
    else if (imc < 40) {
        tipo = "Obeso: Tipo II";
    }
    else if (imc >= 40) {
        tipo = "Obeso: Tipo III";
    }

    document.getElementById("IMC").value = imc.toFixed(2);
    document.getElementById("tipo_imc").value = tipo;
    document.getElementById("mensaje_imc").innerHTML = "El valor calculado es: " + imc.toFixed(2);
    document.getElementById("mensaje_imc2").innerHTML = "Se trata de un: " + tipo;
}
