create database tiendaang;
use tiendaang;

create table productos(
    id int primary key auto_increment,
    nombre varchar(100),
    precio double,
    cantidad int,
    descripcion varchar(300),
    imagen varchar(300),
    fecha timestamp default current_timestamp
);