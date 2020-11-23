<?php
    class ClassConexao{
        #conexão com o banco de dados
        public function conectaDB()
        {
            try{
                $conn = new PDO("mysql: host=localhost; dbname=carro", "root", "");
            }catch(PDOException $Erro){
                return $Erro->getMessage;
            }
        }
    }

?>