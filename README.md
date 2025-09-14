<h1>CHALLENGE - Amigo Secreto</h1>

<h2>Descripción de su proyecto</h2>
En este desafío, desarrollare una aplicación que permita a los usuarios ingresar nombres de amigos en una lista para luego realizar un sorteo aleatorio y determinar quién es el "amigo secreto".

El usuario podrá agregar nombres mediante un campo de texto y un botón "Añadir". Los nombres ingresados se mostrarán en una lista visible en la página, y al finalizar, un botón "Sortear Amigo" seleccionará uno de los nombres de forma aleatoria, mostrando el resultado en pantalla.

<h2>Funcionalidades</h2>
1) Agregar nombres. Estos se añadirán en una arreglo, en orden, cada vez que el usuario persioné el botón de Añadir.

2) Validar entrada. Proporcionara una alerta cuando el usuario intente añadir algo sin escribirlo primero.
 
3) Visualizar la lista. Cada nombre ingresado se mostrará en pantalla.

4) Sorteo Aleatorio. El sorteo se hará de forma aleatoria y también se mostrará en pantalla.

<h2>Proceso</h2>
- Seguí las ordenes de Trello e hice uso del conocimiento adquirido en los cursos anteriores para darle lógica y orden a este programa.

1) Lo primero, fue revisar el contenido descargado. Vi que ya estaban dos funciones en el HTML esperando ser declaradas en el JS así que comencé con la primera función.
2) Función agregarAmigo(). Función que añadiría en el arreglo cada entrada de texto al presionar el botón añadir.
3) Función actualizarListaDeAmigos(). Función que muestra en la página la lista de nombres que el usuario a añadido.
4) Añadí dentro de agregarAmigo() la función actualizarListaDeAmigos() para que también se ejecutara cada que se presionara el botón Añadir.
5) Función sortearAmigo(). Función que genera un número aleatorio que usa como índice para sortear uno de los nombres en el arreglo. También muestra en pantalla el resultado.
6) Agregue Función conseguirID(). Para hacer más compacto el código, ya que repetía muchas veces esa misma línea de código que contiene.
