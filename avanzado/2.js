const eliminarPersona = () => {
    let personas = [
        { nombre: 'Ana', edad: 25 },
        { nombre: 'Carlos', edad: 30 },
        { nombre: 'sara', edad: 22 }
    ];
    const nombreAEliminar = 'Ana';  
    personas = personas.filter(persona => persona.nombre !== nombreAEliminar);
    console.log(personas);
}

eliminarPersona();