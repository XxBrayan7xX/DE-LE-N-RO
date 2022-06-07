<?php
$ID = $_POST['ID'];
$hostname='localhost';
$database='19100166';
$username='root';
$password='';
$port='3306';


try{
    $con = new PDO("mysql:host=$hostname;dbname=$database",$username,$passwword);
} catch(PDOException $e){
    echo $e->getMessage();
    exit();
}


try{
    
    $consultaSql = "delete from carros where ID=" .$ID;
    $consulta = $con -> prepare($consultaSql);
    $consulta -> execute();
    $resultado = $consulta->fetch(PDO::FETCH_ASSOC);
    $consulta->closeCursor();

}catch(PDOException $e){
    echo "Error al eliminar";
    echo $e->getMessage();

}

echo json_encode($resultado);

?>