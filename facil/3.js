function sumarValores() {
    const valor1 = 
    parseInt(document.querySelector("#valor1").value);
    const valor2 = 
    parseInt(document.querySelector("#valor2").value);
    const valor3 = 
    parseInt(document.querySelector("#valor3").value);
    const valor4 = 
    parseInt(document.querySelector("#valor4").value);
    const suma = valor1+valor2+valor3+valor4;
    document.querySelector("#result").innerHTML = "la suma es: " + suma;
}
