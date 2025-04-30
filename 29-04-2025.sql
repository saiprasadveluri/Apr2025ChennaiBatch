--create database VisitorManagement
--use VisitorManagement

--create table Location(
--LocationId bigint NOT NULL primary Key,
--LocationName nvarchar(20)
--)

--create table UserI(
-- userid bigint not null primary key,
--username nvarchar(30) not null,
--userrole nvarchar(10) not null,
--email nvarchar(100) not null,
--userpassword nvarchar(10) not null,
--userlocation bigint not null
--)

--alter table Location add constraint
--loc_name_unique unique(LocationId)

--alter table UserI add constraint
--UserI_check check(userrole in('host','manager'))

--alter table UserI add constraint
--User_location_fk foreign key(userlocation)
--references Location(LocationId)

--insert into Location 
--values(123,'chennai'),(345,'hyd')

--create table visitor
--(vid bigint not null primary key,
--vname nvarchar(20) not null,
--hostname nvarchar(20) not null,
--vdate datetime,
--vlocation bigint not null)

--alter table visitor
--add hostid bigint not null

--alter table visitor add constraint
--user_visitor_fkey foreign key(hostid) 
--references UserI(userid)

insert into visitor
values(234,'visitor1','host1','2025-04-24',123,234)

--insert into UserI
--values(234,'user1','host','abc@gmail.com','23456',123)