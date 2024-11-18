const botonImprimir = document.querySelector('#imprimir');
const inputNumero = document.querySelector('#numero');
const resultado = document.querySelector('#resultado');

botonImprimir.addEventListener('click', imprimirNumeros);

function imprimirNumeros() {
    const numero = parseInt(inputNumero.value);

    if (isNaN(numero) || numero <= 0) {
        resultado.innerHTML = 'Por favor, ingrese un número válido';
        return;
    }

    let contenido = '';
    for (let i = 1; i <= numero; i++) {
        contenido += i + '<br>';
    }

    resultado.innerHTML = contenido;
}