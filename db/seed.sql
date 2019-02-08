create table users (
id serial primary key,
username varchar(20) not null unique,
password varchar(20) not null unique,
profile_pic text
);

create table posts(
id serial PRIMARY key,
title varchar(45),
img text,
content text,
author_id integer references users(id)
);

insert into users(username,password,profile_pic)
values(
'Jolly Roger','jollyroger','https://thumbs2.ebaystatic.com/d/l225/m/m7QQFMVx1-hKeO70Nm9QFiQ.jpg'
);

insert into posts(title,img,content,author_id)
values('Gold','https://dailytimes.com.pk/assets/uploads/2018/07/21/Gold.jpg','This is my pirate loot! Arrr!',1);