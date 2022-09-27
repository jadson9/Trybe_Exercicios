CREATE DATABASE IF NOT EXISTS zologico;
USE zologico;

CREATE TABLE animal (
	animal_id INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(20) NOT NULL,
    sexo VARCHAR(10),
    idade INT NOT NULL,
    especie_id INTEGER,
    localizacao_id INTEGER,
    CONSTRAINT FOREIGN KEY (especie_id) REFERENCES especie (especie_id),
    FOREIGN KEY (localizacao_id) REFERENCES localizacao (localizacao_id)
); 

CREATE TABLE especie (
	especie_id INT AUTO_INCREMENT PRIMARY KEY,
    especie VARCHAR(15)
);

CREATE TABLE localizacao (
	localizacao_id INT AUTO_INCREMENT PRIMARY KEY,
    localizacao VARCHAR(50)
);

CREATE TABLE cuidador (
	cuidador_id INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(15)
);

CREATE TABLE gerente (
	gerente_id INT AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(15)
);

CREATE TABLE cuidador_animal (
	cuidador_id INTEGER,
    animal_id INTEGER,
    CONSTRAINT PRIMARY KEY (cuidador_id, animal_id),
    FOREIGN KEY (cuidador_id) REFERENCES cuidador (cuidador_id),
    FOREIGN KEY (animal_id) REFERENCES animal (animal_id)
);

CREATE TABLE cuidador_gerente (
	cuidador_id INTEGER,
    gerente_id INTEGER,
    CONSTRAINT PRIMARY KEY (cuidador_id, gerente_id),
    FOREIGN KEY (cuidador_id) REFERENCES cuidador (cuidador_id),
    FOREIGN KEY (gerente_id) REFERENCES gerente (gerente_id)
);
