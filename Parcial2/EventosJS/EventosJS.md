*Brayan Asahel De Le�n Romero 19100166*  
# Proceso de captura y propagaci�n  
Lo podemos entender mejor con un ejemplo.  
Este manejador est� asignado a {div}, pero tambien se ejecuta si haces click en cualquier elemento anidado como <em> o <code>.  
## Propagaci�n (bubbling):  
Cuando un evento ocurre en un elemento, este primero ejecuta los manejadores que tiene asignados,  
luego los manejadores de su padre, y asi hasta otros ancestros.  
Digamos que tenemos 3 elementos anidados FORM > DIV > P con un manejador cada uno de ellos:  
*{form onclick=...}FORM*      
  *{div onclick=...}DIV*   
     *{p onclick=...{P{/p}*    
  *{/div}*  
*{/form}*  



