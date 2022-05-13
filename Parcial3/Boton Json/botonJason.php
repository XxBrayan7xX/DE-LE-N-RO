<?php

$registro['VINumber']  ='I123PO91TS1907';
$registro['Marca'] ='FORD';
$registro['Modelo']       ='Mustang';
$registro['Motor'] ='5.0L (Coyote)';
$registro['Fabricante'] ='FORD';
$registro['Pais']     ='USA';
$registro['Color']     ='Red';
$registro['Placas']       ='XML86';

$registroJson = json_encode($registro);
echo $registroJson;
?>