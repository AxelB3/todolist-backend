create database tareas;
use tareas;

create table tareas(
	id int auto_increment not null,
	titulo varchar(40),
    descripcion text,
    active boolean,
	primary key (id)
);


drop procedure if exists crear_tarea;
DELIMITER //

	CREATE PROCEDURE crear_tarea(
    IN titulo_value VARCHAR(40),
    IN descripcion_value TEXT
)
BEGIN
    INSERT INTO tareas (
        titulo,
        descripcion,
        active
	)
	
    VALUES (
	titulo_value,
	descripcion_value,
	true
	);
    
    SELECT * FROM tareas WHERE active = true;
END //
    
DELIMITER ;


call crear_tarea('Tarea 1', 'Tarea de ejemplo')
call crear_tarea('Enviar Mensaje', 'Recordatorio de enviar mensaje de pago')


drop procedure if exists actualizar_tarea;
DELIMITER //

	CREATE PROCEDURE actualizar_tarea(
    IN id_value INT,
    IN titulo_value VARCHAR(40),
    IN descripcion_value TEXT
)
BEGIN
	
	UPDATE tareas SET titulo = titulo_value, descripcion = descripcion_value where id = id_value;
    SELECT * FROM tareas WHERE active = true;
END //
    
DELIMITER ;

drop procedure if exists eliminar_tarea;
DELIMITER //

	CREATE PROCEDURE eliminar_tarea(
    IN id_value INT
)
BEGIN
	
	UPDATE tareas SET active = false where id = id_value;
    SELECT * FROM tareas WHERE active = true;
END //
    
DELIMITER ;