CREATE DATABASE homem_deus;
USE homem_deus;



CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(50),
    email VARCHAR(50),
    senha VARCHAR(50)
);

CREATE TABLE quiz (
    id INT PRIMARY KEY AUTO_INCREMENT,
    titulo VARCHAR(100),
    descricao VARCHAR(255),
    total_perguntas INT
);

CREATE TABLE tentativa (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fk_usuario INT,
    fk_quiz INT,
    acertos INT,
    data_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (fk_usuario) REFERENCES usuario(id),
    FOREIGN KEY (fk_quiz) REFERENCES quiz(id)
);

INSERT INTO quiz (titulo, descricao, total_perguntas) VALUES
('Quiz O Homem-Deus', 'Teste seus conhecimentos sobre o livro', 11);

SELECT * FROM usuario;
SELECT * FROM quiz;
SELECT * FROM tentativa;