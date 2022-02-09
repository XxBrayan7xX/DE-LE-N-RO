# Modelo de caja
**Definición**
El modelo de caja es la manera en que se representan todos los elementos html en una página.   
Cada elemento genera una caja, el comportamiento de esa caja depende de su clasificación: si es de línea o de bloque.
## ¿Qué es el modelo de caja CSS?
El modelo de cajas CSS completo se aplica a cajas que presentan comportamiento el bloque; las cajas con comportamiento en linea
usan una parte del comportamiento definido del modelo de cajas. El modelo define como funcionanjuntas las diferentes *partes
de una caja: margen, borde, relleno y contenido*, para crear una caja que puedas ver en tu página. Hay un modelo de cajas estándar
y un modelo alternativo.
## Partes de una caja 
El tipo bloque en CSS tiene los siguientes elementos:  
   1. **El contenido de la caja(*content box*):** El área donde se muestra el contenido, cuyo tamaño puede cambiarse utilizando propiedades como
   "width" y "height".  
   2. **El relleno de la caja (*padding box*):** Es espacio en blanco alrededor del contenido, es posible controlar su tamaño usando la propiedad "padding"
   y otras propiedades relacionadas.  
   3. **El borde de la caja (*border box*):** Envuelve el contenido y el de relleno. Es posible controlar su estilo y tamaño utilizando la 
   propiedad "border" y otras propiedades relacionada.  
   4. **El margen de la caja (*margin box*):** Es la cacpa más externa. Envuelve el contenido, el relleno, y el borde como espacio en blanco entre la
   caja y los otros elementos. Es posible controlar su tamaño usando la propiedad  "margin" y otras propiedades relacionadas.