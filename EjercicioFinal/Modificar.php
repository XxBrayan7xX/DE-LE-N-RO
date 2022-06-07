<?php
$VINumber = $_POST['VINUMBER'];
$Marca = $_POST['MARCA'];
$Modelo = $_POST['MODELO'];
$Motor = $_POST['MOTOR'];
$Fabricante = $_POST['FABRICANTE'];
$Pais = $_POST['PAIS'];
$Color = $_POST['COLOR'];
$Placaas = $_POST['PLACAAS']
$hostname='localhost';
$database='19100166';
$username='root';
$password='';
$port='3306';


try{
    $con = new PDO("mysql:host=$hostname;dbname=$database;port=$port",$username,$password);
} catch(PDOException $e){
    echo $e->getMessage();
    exit();
}


try{
    
    $consultaSql = "update carros set VINumber=$VINumber, Marca=$Marca, Modelo=$Modelo,Motor=$Motor, Fabricante=-$Fabricante, Pais=$Pais, Color=$Color, Placaas=$Placaas;
    $consulta = $con -> prepare($consultaSql);
    $consulta -> execute();
    $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
    $consulta->closeCursor();

}catch(PDOException $e){
    echo "Error al editar";
    echo $e->getMessage();

}

echo json_encode($resultado);
?>