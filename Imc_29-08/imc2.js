function calcular_imc(){
    event.preventDefault();

    var altura = document.imcForm.altura.value
    var peso = document.imcForm.peso.value

    var calculo = (peso/(altura*altura))

    if(calculo<18.5){
        resultado = "Você está magro com esse índice: " + calculo
    } 
    else if(calculo>=18.5 && calculo<24.9){
        resultado = "Você está normal com esse índice: " + calculo
    }
    else if(calculo>=25 && calculo<29.9){
        resultado = "Você está com sobre peso com esse índice: " + calculo
    }
    else if(calculo>= 30 && calculo<39.9){
        resultado = "Você está com obesidade com esse índice: " + calculo
    }
    else if(calculo>=40){
        resultado = "Você está com obesidade grave com esse índice: " + calculo
    }

    document.getElementById('resul').innerHTML = resultado;
}