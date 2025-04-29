CREATE DATABASE VISITORDB
USE visitordb
CREATE TABLE Visitor(
VId bigint Not Null Primary Key,
VName nvarchar(30) Not Null,
Pcompany nvarchar(15) Not Null,
Purpose nvarchar(25) Not Null,
Vdate Date Not Null,
HId bigint Not Null,
LId bigint Not Null,)

Alter table Visitor Add Constraint
Visitor_LId_FK Foreign Key(LId)
References Location


CREATE TABLE Host(
HId bigint Not Null Primary Key,
HName bigint Not Null,
EmpNo nvarchar(15) Not Null,
Dept nvarchar(25) Not Null,
LId bigint Not Null,)

Alter table Visitor Add Constraint
Visitor_VDate_NVC 

Alter table Host Add Constraint
Host_HId_FK Foreign Key(HId)
References Location(LId)


CREATE TABLE Location(
LId bigint Not Null Primary Key,
LocName nvarchar(30) Not Null,)

CREATE TABLE MobileNo(
MId bigint Not Null Primary Key,
MobileNo bigint Not Null,
VId bigint Not Null Foreign Key References Visitor(VId))

Insert Into Location(LId,LocName)
Values(2,'Hyderabad')

Insert Into MobileNo(MId,MobileNo,VId)
Values(11,'9876543210',101)

Insert Into Visitor(VId,VName,Pcompany,Purpose,Vdate,HId,LId)
Values(101,'Raja','A2B','Business','03/05/2025',201,2)

Insert Into Host(HId,HName,EmpNo,Purpose,Dept,LId)
Values(201,'Raju','4567899567','Business',1)










