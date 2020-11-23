<?php
    require "ClassCarros.php";
    $carros = ClassCarros::exibeCarros();
    foreach($carros as $carro){
        echo $carro['marca'];
        echo $carro['modelo'];
        echo $carro['ano'];
    }


?>
