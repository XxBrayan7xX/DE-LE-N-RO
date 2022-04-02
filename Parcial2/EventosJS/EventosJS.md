*Brayan Asahel De Le�n Romero 19100166*  
# Proceso de captura y propagaci�n  
Lo podemos entender mejor con un ejemplo.  
Este manejador est� asignado a {div}, pero tambien se ejecuta si haces click en cualquier elemento anidado como {em} o {code}.  
## Propagaci�n (bubbling):  
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
3. Luego en el {form} de m�s arriba.  
4. Y as� sucesivamente hasta el objeto document.  
Asi si hacemos click en {p} entonces veremos 3 alaertas: *p --> div --> form*.  
Este proceso se conoce como propagacion porque los eventos se propagan desde el elementos mas interior, a traves de los padres, como una burbuja en el agua.  
La mayoria de eventos se propagan, pero no todos (como el evento *focus*)


