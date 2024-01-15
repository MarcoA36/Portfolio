<?php
include("conexion_bd.php");

$consulta = mysqli_query($conexion_bd,"SELECT * FROM pregunta");
$arrayPreguntas = [];
while ($res = mysqli_fetch_array($consulta, MYSQLI_NUM)){
    // $arrayPreguntas[] = $data;
    $arrayPreguntas[] = array('id' => $res[0], 'pregunta' => $res[1], 'correcta' => $res[2], 'opcion2' => $res[3], 'opcion3' => $res[4], 'opcion4' => $res[5]);
};
echo json_encode($arrayPreguntas);





?>