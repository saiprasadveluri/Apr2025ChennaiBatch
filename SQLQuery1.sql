--CREATE TABLE Host(
--HID BigINt Not Null PRIMARY KEY,
--HName NVARCHAR Not NULL,
--EMPNo BigINT Not NULL,
--DEPARTMENT NVARCHAR NOT NULL,
--LOCATIONID BIGINT NOT NULL,
--Contact BIGINT NOT NULL
--)
--alter table Host ADD CONStraint
--LHOST_LOCATION FOREIGN KEY(LOCATIONID)
--rEFERENCES LOCATION(LocationId)
ALTER TABLE VisitorManagement.dbo.Host
ALTER COLUMN DEPARTMENT VARCHAR(30);


--Create TABLE LOCATION(
--LocationId BigINT NOT NULL Primary Key,
--LocationName NVARCHAR NOT NULL)

--Create TABLE VISITOR(
--VisitorID BIGINT NOT NULL Primary Key,
--VNAME NVARCHAR NOT NULL,
--Company NVARCHAR NOT NULL,
--Purpose NVARCHAR NOT NULL,
--Date_ NVARCHAR NOT NULL,
--HostId BIGINT NOT NULL Foreign Key References Host(HID),
--LId Bigint not null Foreign Key References LOCATION(LocationId)
--)
ALTER TABLE VisitorManagement.dbo.VISITOR
ALTER COLUMN Date_ VARCHAR(30);

--Create Table Mobile(
--MobileID Bigint not null,
--MobileNumber Bigint not null,
--VisitorID Bigint Not Null Foreign Key References VISITOR(VisitorID)
--)

ALTER TABLE VisitorManagement.dbo.LOCATION
ALTER COLUMN LocationName VARCHAR(30);

INSERT INTO LOCATION
VAlUES
(1,'HYD'),
(2,'MAA'),
(3,'TUT')

--INSERT INTO Host
--VAlUES
--(