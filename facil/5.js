function buscarNum (){
    const numeros = [1,3,8,5,9]
    const buscar = 
    parseInt(document.querySelector("#num").value);
    if (numeros.includes(buscar)){
        document.querySelector("#result").innerHTML = "el numero esta en el arreglo: " + numeros;
    }
    else {
        document.querySelector("#result").innerHTML = "el numero no esta en el arreglo: " + numeros;
    }
}
    