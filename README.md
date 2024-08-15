# TestReact.js

Para realizar esta prueba, he elegido VS Code como editor de texto por la cantidad de extensiones de desarrollo relacionadas con javascript y react.

## GitHub
El repositorio de GitHub  tiene 2 ramas. Una para el desarrollo y otra de release. Esta última es la que tiene que tener los cambios ya probados y listos para poner en producción. Esta rama diré que es la troncal y de la que todas las demás ramas tienen que salir antes de empezar cualquier desarrollo.

Además de la rama de desarrollo deben colgar tantas ramas paralelas como desarrollos se estén llevando simultaneamente. En este caso, solo habrá 1 así que no harán falta más ramas paralelas. Aunque pudieran aparecer subramas para cada desarrollo individual.

## Toma de contacto
Tutorial (2 años de antiguedad) YT: https://www.youtube.com/playlist?list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk

Para tomar contacto con react y la instalación del mismo en VS Code he seguido el siguiente tutorial: https://learn.microsoft.com/es-es/windows/dev-environment/javascript/react-beginners-tutorial

En primer lugar he instalado nvm y Node.js en mi equipo sin mayor dificultad.

Una vez finalizado el tutorial, he utilizado la documentación oficial de react (https://react.dev/) para llevar a cabo este proyecto.

## Desarrollo

El primer problema que he tenido ha sido pasarle parámetros a un componente de react, problema solventado leyendo la documentación oficial: https://react.dev/learn/passing-props-to-a-component

Leyendo la documentación recuerdo unas prácticas curriculares que supervisé, que se trataban de migrar una app web a Vue.js por lo que recuerdo estoy familiarizado con el concepto de "COMPONENTE" que básicamente entendí y entiendo como un objeto.

El segundo problema ha sido generar la vista de 4 columnas y N filas, como no he encontrado por la documentación nada sobre listas ni divisiones que me permita fijar el número de elementos, he creado un componente Matriz que tiene tantas filas como sea necesario y X elementos por fila (parámetro del componente para facilitar los cambios en el futuro). Este objeto a parte de generar esa matriz, recorre cada fila generando un <div> horizontal y cada columna añadiendo el producto correspondiente a otro <div> que tiene un margen de 10 píxels para que no quede todo junto y se vea feo.
NOTA IMPORTANTE A MEJORAR: Anidar bucles nunca es eficiente, pero no se me ocurre otra cosa.

Después he creado otro componente Producto, que es la estructura que tiene que mostrar el producto.

Para el enrutamiento se ha utilizado router-dom porque es el que sale en la documentación oficial de react.
Vídeo en el que me he basado para el routing: https://www.youtube.com/watch?v=P8MeyDbMEBE&ab_channel=JAB

Una vez hecho el routing, para la página de detalle he seguido este enlace para cargar la página si el id existe o no cargarla si no existe.
Enlace útil sobre renderizaciones condicionales: https://legacy.reactjs.org/docs/conditional-rendering.html

Una vez hecho todo esto, me he encontrado con el problema de que la cabecera no estaba fija. Finalmente he creado un layout para que la cabecera tenga su lugar.

La página es funcional, pero quedan pendientes:

- Ajustar el número de columnas de la matriz del índice al tamaño de pantalla (no he sabido hacerlo)
- Crear el cuadro de búsqueda. Se que tengo que aplicar la función filter() en vez de map() pero ya llevo 8h documentandome y desarrollando y la extensión del trabajo eran 5h.
- Mostrar breadcrumbs en la cabecera. Imagino como hacerlo pero no se como, he visto que hay bibliotecas en internet que te ayudan a hacerlos pero seguiria sin entender el funcionamiento interno.

## Testing (Formandome)

https://www.youtube.com/playlist?list=PLvq-jIkSeTUZ5XcUw8fJPTBKEHEKPMTKk
https://www.freecodecamp.org/espanol/news/como-probar-los-componentes-de-react-la-guia-completa/

Finalmente no me ha dado tiempo.