CREATE DATABASE venta;

CREATE TABLE fornecedores (
    idFornecedor INT PRIMARY KEY AUTO_INCREMENT,
    empresa TEXT NOT NULL,
    CNPJ_CPF BIGINT NOT NULL,
    endereco TEXT NOT NULL,
    telefone INT NOT NULL,
    email VARCHAR(255) NOT NULL
);

CREATE TABLE produtos(
    idProduto INT PRIMARY KEY AUTO_INCREMENT,
    idFornecedor INT NOT NULL,
    nome TEXT NOT NULL,
    qualidade INT NOT NULL,
    FOREIGN KEY (idFornecedor) REFERENCES fornecedores(idFornecedor)
);

DROP TABLE produtos;

CREATE TABLE clientes(
    idCliente INT AUTO_INCREMENT PRIMARY KEY,
    nome TEXT NOT NULL,
    telefone INT NOT NULL,
    dataNasc DATE NOT NULL,
    CPF BIGINT NOT NULL,
    endereco TEXT NOT NULL
);

DROP TABLE clientes;

CREATE TABLE vendas(
    idVentas INT PRIMARY KEY AUTO_INCREMENT,
    idCliente INT NOT NULL,
    idProduto INT NOT NULL,
    quantidade BIGINT NOT NULL,
    FOREIGN KEY (idCliente) REFERENCES clientes(idCliente),
    FOREIGN KEY (idProduto) REFERENCES produtos(idProduto)
);

DROP TABLE vendas;

INSERT INTO fornecedores(empresa, CNPJ_CPF, endereco, telefone, email)
VALUES ('Uber', 111111111, 'Rua 1, 001', 10101010, 'uber@gmail.com'),
('IBM', 222222222, 'Rua 2, 002', 20202020, 'ibm@gmail.com'),
('Intel', 333333333, 'Rua 3, 003', 30303030, 'intel@gmail.com'),
('Amazon', 444444444, 'Rua 4, 004', 40404040, 'amazon@gmail.com'),
('Samsung', 555555555, 'Rua 5, 005', 50505050, 'samsung@gmail.com');

SELECT *
FROM fornecedores;



INSERT INTO produtos (idFornecedor, nome, qualidade ) 
VALUES (2, 'microChip', 50),
(4, 'tv', 3),
(5, 'celular', 6),
(3, 'ram3', 120),
(5, 'notebook', 3);

SELECT *
FROM produtos;

INSERT INTO clientes(nome, telefone, dataNasc, CPF, endereco)
VALUES ('Carlos', 121212, '1991-11-03', 20202020, 'Rua A, 200'),
('Fidel', 131313, '1992-06-28', 30303030, 'Rua B, 300'),
('Omar', 141414, '1999-09-03', 40404040, 'Rua C, 400'),
('Nancy', 151515, '1995-05-30', 50505050, 'Rua D, 500'),
('Edik', 161616, '1985-02-02', 60606060, 'Rua E, 600');

SELECT *
FROM clientes;

INSERT INTO vendas (idCliente, idProduto, quantidade) 
VALUES (1, 10, 35),
(3, 6, 150),
(5, 7, 200),
(2, 10, 2),
(1, 8, 600),
(4, 6, 50)

SELECT *
FROM vendas;

SELECT p.nome, SUM(v.quantidade) AS quantidadeTotal
FROM produtos AS p
    JOIN vendas AS v
    ON p.idProduto = v.idProduto
GROUP BY p.nome
ORDER BY SUM(v.quantidade) DESC LIMIT 1;




SELECT
FROM 



