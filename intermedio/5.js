const reemplazarElemento = () => {
    let num = [1, 2, 3, 4, 5]; 
    const valorAReemplazar = 3;  
    const nuevoValor = 9;  
    num = num.map(num => num === valorAReemplazar ? nuevoValor : num);
    console.log(num);
}

reemplazarElemento();