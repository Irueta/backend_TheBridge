
use BBK_The_Bridge;
-- Inserta usuarios nórdicos ficticios en la tabla 'usuarios'
select * from usuarios;
-- Usuario 1
INSERT INTO usuarios (email, nombre, password, primer_apellido, role, segundo_apellido)
VALUES ('thor@example.com', 'Thor', 'password1', 'Odinson', 3, 'Odinson');

-- Usuario 2
INSERT INTO usuarios (email, nombre, password, primer_apellido, role, segundo_apellido)
VALUES ('freyja@example.com', 'Freyja', 'password2', 'Jotunsdottir', 3, 'Odinson');

-- Usuario 3
INSERT INTO usuarios (email, nombre, password, primer_apellido, role, segundo_apellido)
VALUES ('bjorn@example.com', 'Bjorn', 'password3', 'Thorsen', 3, 'Odinson');

-- Usuario 4
INSERT INTO usuarios (email, nombre, password, primer_apellido, role, segundo_apellido)
VALUES ('astrid@example.com', 'Astrid', 'password4', 'Eiriksdottir', 2, 'Odinson');

-- Usuario 5
INSERT INTO usuarios (email, nombre, password, primer_apellido, role, segundo_apellido)
VALUES ('gunnar@example.com', 'Gunnar', 'password5', 'Olafsson', 2, 'Odinson');

INSERT INTO usuarios (email, nombre, password, primer_apellido, role, segundo_apellido)
VALUES ('admin@example.com', 'Admin', '1234', 'Admin', 1, 'Admin2');

/* INSERT INTO notas (id_curso, id_notas, id_usuario, nota) VALUES
(1, 1, 1, 8),
(2, 2, 2, 7),
(3, 3, 3, 9),
(4, 4, 4, 6),
(5, 5, 5, 7);


INSERT INTO cursos (fecha_curso, id_curso, id_profe, nombre_curso)
VALUES ('2020-06-15', '1', '4', 'Fullstack developer'),
('2023-06-15', '2', '4', 'Fullstack developer'),
('2023-10-15', '3', '4', 'Fullstack developer'),
('2022-06-15', '4', '5', 'Data science'),
('2023-06-15', '5', '5', 'Data science'),
('2023-09-15', '6', '5', 'Data science'); */