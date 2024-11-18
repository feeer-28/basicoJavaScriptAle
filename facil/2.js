const oki = document.querySelector('#oki');
const result = document.querySelector('#result');
const input = document.querySelector('#num');

oki.addEventListener('click', contarPares);

function contarPares() {
    const numero = parseInt(input.value);
    
    if(isNaN(numero) || numero <=0){
        result.innerHTML = 'ingrese un valor valido'
        return;
    }
    let contenido='';
    for (let i = 0; i < numero; i++) {
        if (i % 2 === 0) {
            contenido += i + '<br>';
        }
    }
    result.innerHTML = contenido;
}
