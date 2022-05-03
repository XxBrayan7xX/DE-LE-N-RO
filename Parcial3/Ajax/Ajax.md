# AJAX  
## �Que es?
Asynchronous JavaScript and XML se refiere a un grupo de tecnologias    
que se utilizan para desarrollar aplicaciones web. Al combinar estas   
tecnologias, las p�ginas web parece que son m�s receptivas puesto que   
los paquetes peque�os de datos se intercambian con el servidor y las   
p�ginas web no se vuelven a cargar cada vez que un usuario de la aplicacion  
web interact�e con una p�gina web si la interrupci�n que implica volver
a cargar la p�gina web.  
La interacci�n del sitio web ocurrw r�pidamente solo con partes de la   
p�gina de recarga y renovaci�n.

### Tecnologias que lo componen  
- **XHTML y CSS** (hojas de estilo en cascada) para el dise�o que acompa�a
la informaci�n.  
- **DOM** (Document Object Model) accedido con el lenguaje de scripting por  
parte del usuario, especialmente implementaciones **ECMAScript** como **JavaScript  
y JScript**, para mostar e interactuar din�micamente con la informaci�n presentada.  
- El objeto **XMLHttpRequest** para manipular los datos de forma as�ncorna con  
el servidor web.
- **XML, HTML, XSLT** para el intercambio y la maniulaci�n de datos.  
- Se visualiza Java Script para enlazar solicitudes e informaci�n de datos.  
*Ajax* incorpora estas tecnolog�as para crear un nuevo enfoque al desarrollo   
de aplicaciones web. Ajax define un m�todo de iniciar un cliente con la comunicaci�n  
del servidor sin recargas de p�ginas. Proporciona una forma de permitir actualizaciones  
de p�gina parciales. Desde una perspectiva de usuario de p�gina web, significa que la  
mejora de la interacci�n con una aplicaci�n web, que proporciona al usuario m�s control  
de su entorno, es similar a la de una aplicaci�n de escritorio.  

## Su funcionamiento  
En una aplicaci�n web tradicional, las solicitudes HTTP, que se inician mediante la   
interacci�n del usuario con la interfaz web, se realizan a un servidor web. El servidor  
web procesa la solicitud y devuelve una p�gina HTML al cliente. Durante el transporte   
HTTP, el usuario no puede interactuar con la aplicaci�n web.  
En una aplicaci�n web Ajax, no se interrumpe el usuario en interacciones con la aplicaci�n  
web. El motor de Ajax o el int�rprete JavaScript permite que el usuario interact�e con   
la aplicaci�n web independientemente del transporte HTTP procedente del servidor o que   
tenga el servidor como destino representando la interfaz y gestionando las comunicaciones  
con el servidor en nombre del usuario.  

### Limitaciones de Ajax  
Representan algunas de las desventajas principales:  
- *Soporte de navegador:* No todos los navegadores admiten JavaScript o el objeto  
XMLHttpRequest. Incluso entre navegadores que no ofrecen soporte a JavaScript y   
XMLHttpRequest, estos objetos se pueden tratar de forma diferente. Se deben tener   
en cuenta todas las implementaciones del navegador de Ajax.
- *Seguridad y privacidad de usuario:* No se resuelven todos los puntos de vista. Es   
necesario tener en cuenta los problemas relacionados con la seguridad y la privacidad   
de usuario a la hora de desarrollar una aplicaci�n Ajax.
- *Accesibilidad:* Puesto que no todos los navegadores disponen de soporte para JavaScript  
o el objeto XMLHttpRequest, debe asegurarse de proporcionar una manera de hacer que la   
aplicaci�n web sea accesible para todos los usuarios.
- *Marcador y navegaci�n:* Puesto que Ajax se utiliza para cargar bits de contenido de   
forma as�ncrona en una p�gina existente, es posible que parte de la informaci�n de la  
p�gina no corresponda a una p�gina reci�n cargada. Puede que el historial del navegador 
y los marcadores no se comporten de forma correcta porque el URL no se ha modificado  
aunque ciertas partes de la p�gina se hayan cambiado.  
- *Motor de b�squeda:* No es posible realizar b�squedas en aplicaciones Ajax; sin embargo, 
s� se pueden utilizar las caracter�sticas y elementos de Ajax de una aplicaci�n en la que   
se puedan realizar b�squelas.