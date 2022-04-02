*Brayan Asahel De León Romero 19100166*  
# Proceso de captura y propagación  
Lo podemos entender mejor con un ejemplo.  
Este manejador está asignado a {div}, pero tambien se ejecuta si haces click en cualquier elemento anidado como {em} o {code}.  
## Propagación (bubbling):  
Cuando un evento ocurre en un elemento, este primero ejecuta los manejadores que tiene asignados,  
luego los manejadores de su padre, y asi hasta otros ancestros.  
Digamos que tenemos 3 elementos anidados FORM > DIV > P con un manejador cada uno de ellos:  
*{form onclick=...}FORM*  &nbsp;   
--*{div onclick=...}DIV*   
----*{p onclick=...{P{/p}*    
--*{/div}*  
*{/form}*  
Un clic en el elemento del interior {p} primero ejecuta onclick:  

1. En ese {p}.  
2. Luego en el {div} de arriba.  
3. Luego en el {form} de más arriba.  
4. Y así sucesivamente hasta el objeto document.  

Asi si hacemos click en {p} entonces veremos 3 alaertas: *p --> div --> form*.  
Este proceso se conoce como propagacion porque los eventos se propagan desde el elementos mas interior, a traves de los padres, como una burbuja en el agua.  
La mayoria de eventos se propagan, pero no todos (como el evento *focus*).  

### Detener propagacion  
Una propagacion de evento empieza desde el elemento objetivo hacia arriba. Normalmente este continua hasta {html} y luego hacia el  
objeto *document*, algunos eventos incluso alcanzan *window*, llamando a todos los manejadores en el camaino.  
Pero cualquier manejador podria decidir que el evento se a procesado por completo y detener su propagacion.
Para ello se utiliza el metodo *event.stopPropagation()*.  
Esto no es recomendale a menos qe se tenga una necesidad real, obvia y arquitectonicamente bien pensada. Ya que podria convertirse   
en un problema a la hora ade querer realizar otras acciones.


