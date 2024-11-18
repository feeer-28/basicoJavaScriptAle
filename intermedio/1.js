const ok = document.querySelector('#ok');
const input = document.querySelector('#texto');
const result = document.querySelector('#result');

ok.addEventListener('click', invertirArreglo);

function invertirArreglo(){
    const valor = input.value ;
    const invertido = valor.split('').reverse().join('');
    result.innerHTML = invertido;
}

