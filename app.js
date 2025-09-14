//Array que almacenará los nombres ingresados.
let listaDeAmigos = [];

//Agrega los amigos escritos por el usuario al array amigos[];
function agregarAmigo() {
    //Agrego en una variable, el valor de lo que este escrito en el recuadro para trabajar con ello.
    let nuevoAmigo = conseguirID("amigo").value;
    console.log(`Este es el nombre que se agregara al arreglo: ${nuevoAmigo}`);
    //Envio un alert si el campo esta vacío al presionar el botón
    if(nuevoAmigo == ""){
        alert("Por favor, inserte un nombre.");
    } else {
        //Agrega el valor a mi array listaDeAmigos[]
        listaDeAmigos.push(nuevoAmigo);
        //Deja vacío el campo para volver a escribir.
        conseguirID("amigo").value = "";
        console.log(listaDeAmigos);
        //Llamada a la función que agrega los nombres en la pantalla.
        actualizarListaDeAmigos();
    }
}



//Actualiza el arreglo listaDeAmigos[]; y los muestra en el HTML
function actualizarListaDeAmigos(){
    //llamo al id de donde mostrare la lista en la página.
    let mostrarLista = conseguirID("listaAmigos");

    // limpio el espacio para que cada que agregue un nuevo nombre no se muestren los anteriores.
    mostrarLista.innerHTML = "";

    //Itera la listaDeAmigos y crea elementos de lista <li>
    for(let i = 0; i < listaDeAmigos.length; i++){
        //Crea un elemento "li" que todavía no se inserta en el DOM.
        let elementoDeLista = document.createElement("li");

        //Le da a cada elemento "li" un texto que desplegara.
        elementoDeLista.innerHTML = listaDeAmigos[i];

        //Insterto los <li> en el <ul> con id "lista amigos" del DOM
        mostrarLista.appendChild(elementoDeLista);
    }
}

//Elige un amigo aleatorio de entre los que estan incluidos en el array listaDeAmigos[];
function sortearAmigo(){
    let sorteo;
    let nombreSorteado;
    
    if(listaDeAmigos.length == 0){
        //Mensaje por si presionan el boton de sortear amigo pero aún no añaden datos.
        alert("Por favor, primero inserte un nombre.");
    } else {
        //Genera un número aleatorio basado en la longitud del arreglo listaDeAmigos[]; que sera nuestro indice
        sorteo = Math.floor(Math.random()*listaDeAmigos.length);

        //Se elige un nombre aleatorio a partir del índice que toco.
        nombreSorteado = listaDeAmigos[sorteo];
        console.log(nombreSorteado);

        //borra los nombres para dar espacio al resultado del sorteo.
        //conseguirID("listaAmigos").innerHTML = "";

        //muestra el resultado del sorteo.
        conseguirID("resultado").innerHTML = `El amigo secreto sorteado es: ${nombreSorteado}`;
    }
}


//Función para llamar un id
function conseguirID(id){
    return document.getElementById(id);
}