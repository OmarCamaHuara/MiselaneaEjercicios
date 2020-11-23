<?php
    require "ClassConexao.php";

    class ClassCarros
    {
        public $id_carro;
        public $marca;
        public $modelo;
        public $ano;

        #Exibiação dos carros em um json
        public static function exibeCarros()
        {
            $connection = ClassConexao :: conectaDB();

            $sql = $connection->query("SELECT * FROM carros");
            return $sql->fetchAll(PDO::FETCH_ASSOC);

        }
    }

?>