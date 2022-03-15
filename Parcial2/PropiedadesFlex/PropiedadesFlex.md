#Propiedades Flex  
**Para que sirven?**  
La propiedad de display flex, ayuda a colocar las cajas como si fueran celdas de tablas, con un comportamiento predecible y adaptable.   
Mozilla a estas cajas flexibles las llama el Dise�o del Santo Grial, flex soluciona problemas de control del dise�o y se adpata facilmente a los diferentes dispositivos.  

**PADRES (CONTAINER)**  
|         **Propiedad**         |          <font color = blue>**Que hace**</font>                   |             **Valor**           |
|-------------------------------|-------------------------------------------------------------------|---------------------------------|
|                               |Permite cambiar la direcci�n de c�mo los �tems son desplegados.    |row, row-reverse, colum, initial |                
|      **_flex-direction_**     |La propiedad CSS flex-direction especifica c�mo colocar los objetos|column-reverse, inherit,unset    |
|                               |La propiedad CSS flex-direction especifica c�mo colocar los objetos|column-reverse, inherit,unset    |
|                               |flexibles en el contenedor flexible definiendo el eje principal y  |                                 |
|                               |la direcci�n (normal o al rev�s).                                  |                                 |
|-------------------------------|-------------------------------------------------------------------|---------------------------------|
|                               |La propiedad flex-wrap de CSS  especifica si los elementos "hijos" |nowrap                           |
|                               |son obligados a permanecer en una misma l�nea o pueden fluir en    |wrap                             |
|        **_flex-wrap_**        |varias l�neas. Si la cobertura (wrap) est� permitida, esta         |wrap-reverse                     |
|                               |propiedad tambi�n te permite controlar la direcci�n en la cual     |inherit                          |
|                               |ser�n apilados los elementos.                                      |                                 |
|-------------------------------|___________________________________________________________________|
|                               |                                                                   |inherit, initial, unset,         |                        
|                               |                                                                   |nowrap, wrap, wrap-reverse,      |
|                               |Se pueden combinar las propiedades flex-direction y flex-wrap en   |row, row-reverse,                |
|        **_flex-flow_**        |la abreviatura flex-flow . El primer valor especificado es         |column, colum-reverse,           |
|                               |flex-direction y el segundo valor es flex-wrap.                    |column wrap, row nowrap,         |       
|                               |                                                                   |column-rverse wrap-reverse       |
|-------------------------------|-------------------------------------------------------------------|---------------------------------|




**HIJOS (ITEMS)**  
|         **Propiedad**         |                              **Que hace**                         |             **Valor**           |
|-------------------------------|-------------------------------------------------------------------|---------------------------------|
|                               |Con flex-basis se define el tama�o de un �tem en t�rminos del      | (10)em, (3)px, auto, content    |        
|       **_flex-basis_**        |espacio que deja como espacio disponible. Los valores negativos    | fill, max-content, min- content |             
|                               |no son validos.                                                    | fit-content, content, inherit   |
|                               |                                                                   | initial, unset.                 |
|-------------------------------|-------------------------------------------------------------------|---------------------------------| 
|                               |Con la propiedad flex-grow definida como un entero positivo,       |             3                   |
|                               |los �tems flex pueden crecer en el eje principal a partir de       |            0.6                  |
|                               |flex-basis. Esto har� que el �tem se ajuste y tome todo el espacio |           inherit               |
|                               |disponible del eje, o una proporci�n del espacio disponible si otro|           initial               |
|    **_flex-grow_**            |�tem tambi�n puede crecer.                                         |            unset                |
|                               |Si otorgamos al primer �tem un valor flex-grow de 2 y a los otros  |                                 |
|                               |un valor de 1, entonces 2 partes ser�n dadas al primer �tem y      |                                 |
|                               |1 parte para cada uno de los restantes.                            |                                 |
|-------------------------------|-------------------------------------------------------------------|---------------------------------| 
|                               |La propiedad CSS flex-shrink especifica el factor de contracci�n   |             2                   |
|                               |de un flex item. Los flex items se encoger�n para llenar el        |            0.6                  |
|     **_flex-shrink_**         |contenedor de acuerdo a su n�mero flex-shrink , cuando el tama�o   |          inherit                |
|                               |por defecto de los flex items sea mayor al de su contenedor        |          initial                |
|                               |flex container.                                                    |           unset                 |
|                               |                                                                   |                                 |
|-------------------------------|-------------------------------------------------------------------|---------------------------------|

