/* Ejercicio PARES e IMPARES
 Crear una función expresada que al recibir un numero como parametro imprimima por consola
 “El número es par” si lo es o “El número es impar” si no lo es. En el caso que el numero fuese 0
 mostrar un mensaje de error. Se debe incluir un if ternario en script */

 let paresImpares = function(numero){

    if( numero !== 0){ //declaramos un condicional ternario dentro de un condicional if
        numero % 2 === 0? console.log('El numero es par'): console.log('El numero es impar'); //recordar usar console.log en ternarios
    } else {
        return 'error'; //declaramos return para la devolucion de error del if condicional
    }
 }

 console.log(paresImpares(3));