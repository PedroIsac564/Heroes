CREATE DATABASE backendherois;

CREATE TABLE herois (
id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
power VARCHAR(100) NOT NULL,
level INT NOT NULL,
hp INT NOT NULL
);

CREATE TABLE batalhas (
id SERIAL PRIMARY KEY,
heroes1_id INT,
heroes2_id INT,
winner_id INT,
FOREIGN KEY (heroes1_id) REFERENCES herois(id),
FOREIGN KEY (heroes2_id) REFERENCES herois(id),
FOREIGN KEY (winner_id) REFERENCES herois(id),
);


INSERT INTO herois (name, power, level, hp) VALUES
('Superman', 'Super Força', 10, 100),
('Batman', 'Inteligência', 8, 80),
('Mulher-Maravilha', 'Super Força, Voo', 9, 90),
('Flash', 'Super Velocidade', 9, 85),
('Aquaman', 'Comunicação com animais marinhos', 7, 75),
('Lanterna Verde', 'Anel do Poder', 8, 85),
('Ciborgue', 'Tecnopatia', 7, 70),
('Arqueiro Verde', 'Arquearia, Habilidades de Combate', 8, 85),
('Shazam', 'Super Força, Velocidade, Invulnerabilidade', 9, 95),
('Coringa', 'Mente Criminosa, Habilidades de Combate', 8, 80),
('Mulher-Gato', 'Agilidade, Habilidades Acrobáticas', 7, 75),
('Asa Noturna', 'Habilidades de Combate, Acrobacias', 8, 85),
('Ravena', 'Magia, Manipulação de Emoções', 9, 90),
('Cyborgirl', 'Tecnopatia, Resistência Cibernética', 8, 85),
('Batgirl', 'Inteligência, Habilidades de Combate', 8, 85),
('Homem de Ferro', 'Tecnologia Avançada', 9, 95),
('Capitão América', 'Super Soldado', 8, 90),
('Thor', 'Deus do Trovão', 10, 100),
('Hulk', 'Super Força', 9, 95),
('Viúva Negra', 'Espionagem', 8, 85),
('Gavião Arqueiro', 'Arquearia', 7, 80),
('Feiticeira Escarlate', 'Manipulação da Realidade', 9, 90),
('Visão', 'Inteligência Artificial, Força Sobre-Humana', 9, 95),
('Máquina de Combate', 'Armadura de Combate', 8, 85),
('Falcão', 'Voo, Combate Aéreo', 7, 80),
('Homem-Aranha', 'Agilidade, Sentido-Aranha', 8, 85),
('Pantera Negra', 'Força, Agilidade, Tecnologia Avançada', 9, 95),
('Doutor Estranho', 'Magia, Manipulação Dimensional', 10, 100),
('Capitã Marvel', 'Super Força, Voo, Resistência', 10, 100);