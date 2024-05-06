CREATE DATABASE backherois;

CREATE TABLE herois (
id SERIAL PRIMARY KEY,
name VARCHAR(100) NOT NULL,
power VARCHAR(100) NOT NULL,
level INT NOT NULL,
hp INT NOT NULL,
);

CREATE TABLE batalhas (
id SERIAL PRIMARY KEY,
heroes1_id INT,
heroes2_id INT,
winner_id INT,
FOREIGN KEY (heroes1_id) REFERENCES herois(id),
FOREIGN KEY (heroes2_id) REFERENCES herois(id),
FOREIGN KEY (winner_id) REFERENCES herois(id)
);


INSERT INTO herois (name, power, level, hp) VALUES ('', '', '', '');