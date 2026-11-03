CREATE DATABASE admi_finanzas;
USE admi_finanzas;

CREATE TABLE categoria(
id_categoria INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
nombre VARCHAR(100) UNIQUE,
tipo ENUM('ingreso', 'gasto') NOT NULL
 );
 
 CREATE TABLE movimiento(
 id_movimiento INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
 monto DECIMAL(10,2) NOT NULL,
 fecha DATE NOT NULL,
 id_categoria INT NOT NULL,
 FOREIGN KEY(id_categoria) REFERENCES categoria (id_categoria)
 );
 -- ingreso de datos 
 INSERT INTO categoria (nombre, tipo) 
 VALUES
    ('Comida',         'gasto'),
    ('Transporte',     'gasto'),
    ('Servicios',      'gasto'),
    ('Salario',        'ingreso'),
    ('Otros ingresos', 'ingreso');

INSERT INTO movimiento (monto, fecha, id_categoria) 
VALUES
    (600000.00, '2026-10-01', 4),
    (255000.00, '2026-10-03', 1),
    ( 90000.00, '2026-10-05', 3),
    (123000.00, '2026-10-07', 2),
    (160000.00, '2026-10-10', 4);
    