create table visitors(
visitorid bigint primary key,
visitorname varchar(40) not null,
parentcompany varchar(100) not null,
purpose varchar(100) not null,
visitingdate date not null,
hostid bigint not null,
locationsid bigint not null,
)
create table locations(
locationsid bigint primary key,
locationsname varchar(50) not null
)
create table Host(
hostid bigint primary key,
hostname varchar(50) not null,
employeenumber bigint not null,
department varchar(50) not null,
locationsid bigint not null,
contactnumber bigint not null
)
create table mobileno(
mid bigint,
number bigint not null,
visitorid bigint not null foreign key references visitors(visitorid)
)
alter table visitors add constraint 
LVisitor_Location Foreign Key (locationsid)
references locations(locationsid)
alter table visitors add constraint 
LHost_Id Foreign Key (hostid)
references Host(hostid)
alter table Host add constraint
LHost_Location Foreign key (locationsid)
references locations(locationsid)



