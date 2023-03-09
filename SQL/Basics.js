

local Instance => schema => file=> new Query:

create database MyfirstDB :(refresh if not shown ) 
      
use MyfirstDB :

    create table users (
        id bigint not null auto_increment,
        Email varchar(255) not null ,
        Password varchar(255) not null,
        CreatedAt datetime default now(),

        primary key (id)
    );

    create table MyfirstDB.products(
        id bigint not null auto_increment,
        productName varchar(255) not null,
        category varchar(255) not null,
        price bigint not null,
        createdAt datetime default now(),

        primary key (id)
    );

    create table MyfirstDB.orders(
        id bigint not null auto_increment,
        usersId bigint not null ,
        productId bigint not null,
        quantity bigint not null,
        payment bit default 0,
        createdAt datetime default now(),  
        primary key(id)
    )


use MyfirstDB;

insert into users(Email, Password) values
(" rakesh@gmail.com","123"),
(" rahul@gmail.com","567"),
(" king@gmail.com","345"),
(" raj@yahoo.com","897"),
(" hero@outlook.com","567$$@");

-- delete from MyfirstDB.users where id=3
-- drop keyword to delete column
-- ALTER to change the structure of the table while update to change the data in the table
-- select*from ----->>> * means all columns and you can also specify which columns to select by using column names (seperated by commas) instesd of *

insert into MyfirstDB.products (productName,category,price) values
("pixel 4a","Mobile phone",30000),
("pixel 4","Mobile phone",23000),
("Dell","laptop",50000),
("Lenovo","laptop",39000),
("samsung s6","Mobile phone",49999),
("videocon vr","T.V.", 45000);

insert into MyfirstDB.orders(usersId,productId,quantity) values
(1, 1, 2),
(3, 1, 3),
(4, 3, 2),
(5, 2, 1),
(2, 4, 2);


select count(id) as Total_Count,
       sum(price) as Total_price,
       category from products
 group by category
 order by count(id) -- desc(if want in decresing)      
----------------

-- costliest product
select max(price) from products;

-- costliest product for each category
 select max(price),category from products
 group by category;

--  costliest particular product
 select max(price)as costliest,category from  products where category= "Mobile phone"

-------- better version of above queries

select*from  products
where price in
(select max(price) from products where category='Mobile phone')


--------

select p.productName,p.category , p.price, u.Email from 
products p inner join users u 
on p.id=u.id
;
-------

select o.quantity*p.price as Total_price, u.Email, p.productName
from orders o inner join products p 
on o.productId=p.id 
inner join users u 
on u.id=o.usersId
where o.quantity*p.price in (select max(o.quantity*p.price) from orders o inner join products p on o.productId=p.id)
;

--------

set Sql_safe_updates = 0; ----( always use 1 unless very much necessary)
update orders             --- ( Alter table to change the structure of table while we use update  to change the  values of table)
set quantity = quantity + 1 ;

-------
select count(id),category from products
group by category ;

-------

select
case
       when Email='rakesh@gmail.com' and Password='123'
       then 'Logged in successfully'
  end as message
  from users ;


  select category,
  case  
        when category='Mobile phone' 
        then 'Buying a mobile' 
        when category =' Laptop'
        then 'Buying a laptop'
        else
            'Buying a TV'  
    end as message
    from products ;       