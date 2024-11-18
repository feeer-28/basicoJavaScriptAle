const ok = document.querySelector('#ok');
const input = document.querySelector('#texto');
const result = document.querySelector('#result');

ok.addEventListener('click', buscarPersona);

const buscarPersona = () => {
    const personas = [
        { nombre: 'Ana', edad: 25 },
        { nombre: 'Carlos', edad: 30 },
        { nombre: 'sara', edad: 22 }
    ];
    const personaEncontrada = personas.find(persona => persona.nombre.toLowerCase() === input.value.toLowerCase());
    if (personaEncontrada){
        result. innerHTML = Nombre: ${personaEncontrada.nombre}, Edad: ${personaEncontrada. edad};
    }else {
    result.InnerHTML = 'persona no encontrada';
    }
}
