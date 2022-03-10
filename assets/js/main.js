var numeroUsuario = prompt("Ingrese un número entre 1 y 20 para realizar la operación matemática.")
if (numeroUsuario > 20) {

}

// Función con la que se verifica si el rango es correcto.
let ciclo = function () {
    // Rango con el que se trabajarán las tablas.
    let numero = +prompt("Ingresa un número entre 1 y 20 para realizar las operaciones matemáticas: ");
    // Ciclo que define si el rango es correcto o no. De no serlo el mensaje se repite.
    while (numero > 20 || numero < 1) {
        numero = +prompt("Número fuera del rango entre 1 al 20. Vuelve a ingresarlo: ");
    }
    // Retorna el valor final de numero a la funcion definida dentro de la variable ciclo
    return numero;
}

// Asigna el ressultado de la funcion a la variable rango
let rango = ciclo();
// Imprime el resultado en un ciclo desde 1 que ingrementa uno en uno hasta cumplir lo solicitado
for (let i = 1; i <= rango; i++) {
    console.log(`${i} x ${rango} = ${i * rango}`);
}
// Ciclo exterior que sirve para definir el limite del ciiclo interior, así como para  imprimir los factoriales de 1 en 1
for (let j = 1; j <= rango; j++) {
    let factorial = 1
    // Crea el ciclo anidado para los factoriales. Este finaliza e inicia uno nuevo hasta que se cumpla el ciclo exterior.
    for (let k = 1; k <= j; k++) {
        factorial = factorial * k
    }
// Imprime el resultado del ciclo anidado hasta que se cumpla el ciclo exterior.
    console.log(`Factorial de ${j} es: ${factorial}`);
}


