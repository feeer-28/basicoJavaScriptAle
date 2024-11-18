function leerTexto() {
    const texto = document.querySelector("#texto").value;
    const valor = texto.split(' ');
    document.querySelector("#result").innerHTML ="el texto tiene " + valor.length + " palabras"
}
