
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