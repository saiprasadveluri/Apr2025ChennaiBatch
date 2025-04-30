--create table Visitorlocation(
-- locId bigint not null primary key,
-- locName nvarchar(20)
--)

--alter table Visitorlocation add constraint
--loc_name_unique unique(locId)

--create table userdata(
--userid bigint not null primary key,
--username nvarchar(30) not null,
--userrole nvarchar(10) not null,
--email nvarchar(100) not null,
--upass nvarchar(10) not null,
--uloc bigint not null
--)

--alter table userdata add constraint
--userdata_Visitorlocation_fk foreign key(uloc)
--references Visitorlocation(locId)

--alter table userdata add constraint
--userdata_checks check(userrole in ('host','manager'))

--insert into Visitorlocation
--values(1,'bangalore'),(2,'chennai')

--insert into userdata
--values(10,'hname','host','host@host.com','host13',1)

--create table visitordata(
-- vid bigint not null primary key,
-- vname nvarchar(30) not null,
-- vlocation bigint not null,
-- hostid bigint not null,
-- vdate date not null,
-- hostname varchar not null
--)

--alter table visitordata add constraint
--userdata_visitordata1_fk foreign key(hostid)
--references userdata(userid)

--alter table visitordata
--alter column hostname varchar(50) not null

--insert into visitordata
--values(123,'visit1',2,10,'2025-04-30','hname')


