const agregarPersona = () => {
    let personas = [
        { nombre: 'Ana', edad: 25 },
        { nombre: 'Carlos', edad: 30 }
    ];
    const nuevaPersona = { nombre: 'sara', edad: 22 };  
    personas.push(nuevaPersona);
    console.log(personas);
}

agregarPersona();