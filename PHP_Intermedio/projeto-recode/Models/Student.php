<?php

    require "Connection.php";

    class Student
    {
        public $id;
        public $name;
        public $telephone;

        public static function getAll()
        {
            // Recuperar os registros da tabela estudante
            $connection = Connection :: getDb();

            $sql = $connection->query("SELECT * FROM students");
            return $sql->fetchAll(PDO::FETCH_ASSOC);
        }
    }


?>