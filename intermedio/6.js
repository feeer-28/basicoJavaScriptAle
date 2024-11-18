const calcularPromedio = () => {
    const num = [10, 20, 30, 40, 50];  
    const suma = num.reduce((acumulado, num) => acumulado + num, 0);
    const promedio = suma / num.length;
    console.log(promedio);
}

calcularPromedio();