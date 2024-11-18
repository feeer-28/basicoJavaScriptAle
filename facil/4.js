function hallarMayor (){
    const num1 = 
    parseInt(document.querySelector("#num1").value);
    const num2 = 
    parseInt(document.querySelector("#num2").value);
    const num3 = 
    parseInt(document.querySelector("#num3").value);
    const num4 = 
    parseInt(document.querySelector("#num4").value);
    const encontrar = Math.max(num1,num2,num3,num4);
    document.querySelector("#result").innerHTML = "el mayor es: " + encontrar;

}