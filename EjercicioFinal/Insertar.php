<?php
$VINumber = $_POST['VINUMBER'];
$Marca = $_POST['MARCA'];
$Modelo = $_POST['MODELO'];
$Motor = $_POST['MOTOR'];
$Fabricante = $_POST['FABRICANTE'];
$Pais = $_POST['PAIS'];
$Color = $_POST['COLOR'];
$Placaas = $_POST['PLACAAS'];
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
    $consultaSql = "insert into carros (VINumber,Marca,Modelo,Motor,Fabricante,Pais,Color,Placaas) 
                                values ('$VINumber','$Marca','$Modelo','$Motor','$Fabricante','$Pais','$Color','$Placaas')";
    $consulta = $con -> prepare($consultaSql);
    $consulta -> execute();
    $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
    $consulta->closeCursor();

}catch(PDOException $e){
    echo "Error al insertar";
    echo $e->getMessage();

}

echo json_encode($resultado);

?>