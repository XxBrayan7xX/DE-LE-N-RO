# Modelo de caja
**Definici�n**
El modelo de caja es la manera en que se representan todos los elementos html en una p�gina.   
Cada elemento genera una caja, el comportamiento de esa caja depende de su clasificaci�n: si es de l�nea o de bloque.
## �Qu� es el modelo de caja CSS?
El modelo de cajas CSS completo se aplica a cajas que presentan comportamiento el bloque; las cajas con comportamiento en linea
usan una parte del comportamiento definido del modelo de cajas. El modelo define como funcionanjuntas las diferentes *partes
de una caja: margen, borde, relleno y contenido*, para crear una caja que puedas ver en tu p�gina. Hay un modelo de cajas est�ndar
y un modelo alternativo.
## Partes de una caja 
El tipo bloque en CSS tiene los siguientes elementos:  
   1. **El contenido de la caja(*content box*):** El �rea donde se muestra el contenido, cuyo tama�o puede cambiarse utilizando propiedades como
   "width" y "height".  
   2. **El relleno de la caja (*padding box*):** Es espacio en blanco alrededor del contenido, es posible controlar su tama�o usando la propiedad "padding"
   y otras propiedades relacionadas.  
   3. **El borde de la caja (*border box*):** Envuelve el contenido y el de relleno. Es posible controlar su estilo y tama�o utilizando la 
   propiedad "border" y otras propiedades relacionada.  
   4. **El margen de la caja (*margin box*):** Es la cacpa m�s externa. Envuelve el contenido, el relleno, y el borde como espacio en blanco entre la
   caja y los otros elementos. Es posible controlar su tama�o usando la propiedad  "margin" y otras propiedades relacionadas.