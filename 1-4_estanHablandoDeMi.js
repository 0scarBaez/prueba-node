/* Para el siguiente ejercicio vamos a suponer que tenemos un texto que copiamos y queremos saber si el texto menciona una palabra en particular.
Para lograrlo, tendremos que crear una función llamada menciona, que recibirá dos parámetros:
un texto —que es donde vamos a buscar— y una palabra —que es la que vamos a averiguar si se menciona en el texto—. 
La misma función retorna true en el caso de encontrar la palabra. */


function menciona (texto,palabra){
    if (texto.indexOf (palabra) !=-1){
        return true;
    }
    else {
        return false;
    }
}

console.log(menciona("programar es divertido", "divertido"));