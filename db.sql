-- drop database solarsystem;
-- create database solarsystem;
use solarsystem;
-- create table users(id_users bigint auto_increment primary key, nameuser varchar(50) not null, login varchar(30) not null, u_password varchar(30) not null, active boolean);
-- create table comments(id_comments bigint auto_increment primary key, text_comments text, created_at datetime default now(), id_users bigint not null,
-- foreign key (id_users) references users(id_users) on delete restrict);
-- create table planet(id_planet bigint auto_increment primary key, name_planet varchar(20) not null unique, description text);
-- alter table users add unique (login);
insert into users set nameuser="qwe", login="qwe", u_password="123";
select * from users;