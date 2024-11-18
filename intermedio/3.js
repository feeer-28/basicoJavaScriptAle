const transformarMayusculas = () => {
    const nombres = ['Ana', 'Carlos', 'Beatriz'];  
    const nombresMayus = nombres.map(nombre => nombre.toUpperCase());
    console.log(nombresMayus);
}

transformarMayusculas();