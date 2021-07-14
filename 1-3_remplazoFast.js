/* Nuestra misión, ahora, es crear una función llamada reemplazoFastFast que va a recibir los siguientes tres parámetros:

1. Un texto.

2. La palabra que vamos a buscar para reemplazar.

3. La palabra que vamos a usar para reemplazar.

La función deberá devolver el texto con la palabra reemplazada. */


function reemplazoFastFast(texto,original,sustituto){
    return texto.replace(original,sustituto);
}

console.log (reemplazoFastFast("Cristiano es el mejor del mundo","Cristiano","Messi"));