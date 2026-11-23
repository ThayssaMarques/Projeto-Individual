CREATE DATABASE homem_deus;
USE homem_deus;


CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    email VARCHAR(50),
    senha VARCHAR(50)
);

select * from usuario;

CREATE TABLE resultado_quiz (
    id INT PRIMARY KEY AUTO_INCREMENT,
    acertos INT,
    total_perguntas INT,
    data_hora DATETIME,
    fk_usuario INT,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id)
);

select * from resultado_quiz;