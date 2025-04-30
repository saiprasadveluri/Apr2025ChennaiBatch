Create DATABASE VISITORDB2;
USE VISITORDB2;
CREATE TABLE VISITOR(
VID  BIGINT PRIMARY KEY ,
VNAME NVARCHAR(20)  NOT NULL,
LId   BIGINT NOT NULL FOREIGN KEY REFERENCES LOCATION(LId),
PCOMPANY NVARCHAR(29) NOT NULL,
PURPOSE  NVARCHAR(22) NOT NULL,
VDATE  NVARCHAR NOT NULL,
HId BIGINT NOT NULL FOREIGN KEY REFERENCES HOST(HID)
)
 
 CREATE TABLE HOST(
HID  BIGINT PRIMARY KEY ,
HNAME NVARCHAR(20)  NOT NULL,
EMPNO NVARCHAR(20) NOT NULL,
DEPT NVARCHAR(20) NOT NULL,
LId BIGINT NOT NULL FOREIGN KEY REFERENCES LOCATION(LId),
)
 
 CREATE TABLE LOCATION(
 LId BIGINT PRIMARY KEY ,
 LOCNAME NVARCHAR(20)  NOT NULL
 )
 CREATE TABLE MOBILENUMBER(
 MId BIGINT PRIMARY KEY ,
 MNO NVARCHAR(20)  NOT NULL,
 VID BIGINT NOT NULL FOREIGN KEY REFERENCES VISITOR(VID)
 )
 --1.
 INSERT INTO VISITOR
 VALUES (204,'Mark',4,'C2C','BUSINESS',3,104),(205,'Wood',5,'C2C','BUSINESS',4,105),(206,'Johnson',6,'C2C','BUSINESS',4,106),(207,'HazelWood',7,'C2C','BUSINESS',5,107),(208,'Starc',8,'C2C','BUSINESS',6,108),(209,'Boult',9,'C2C','BUSINESS',7,109)

 INSERT INTO VISITOR
 VALUES (210,'Head',9,'C2C','BUSINESS',7,110), (211,'Pat',9,'C2C','BUSINESS',7,110), (212,'Cummins',9,'C2C','BUSINESS',7,110)
 SELECT VNAME,PCOMPANY FROM VISITOR

 INSERT INTO HOST 
 VALUES (106,'PRANAY',123458,'Management',11),(107,'TRINAY',123459,'Management',11),(108,'RAJ',123460,'Management',10),(109,'RAJA',123461,'Management',9),(110,'HARI',123462,'Security',8),(111,'X',123463,'Management',7),(112,'ATHI',123464,'Security',6),(113,'REDDY',123465,'Management',5),(114,'PRABHAV',123466,'Security',4),(115,'JOHN',123467,'Management',3)

 INSERT INTO LOCATION
 VALUES(3,'HYDERABAD'),(4,'MUMBAI'),(5,'PUNE'),(6,'NOIDA'),(7,'NELLORE'),(8,'GUDUR'),(9,'GUNTUR'),(10,'VIJAYAWADA'),(11,'ONGOLE') 

 INSERT INTO MOBILENUMBER
 VALUES(305,9876543212,205),(306,9876543213,206),(307,9876543214,207),(308,9876543215,208),(309,9876543216,209),(310,9876543217,210),(311,9876543218,211),(312,9876543219,212),(313,9876543220,212)                  


 --2.

 SELECT LId,LOCNAME
 from LOCATION
 order by LOCNAME;

 --3.
 SELECT DISTINCT l.LId, l.LOCNAME
 FROM location l
 JOIN visitor v ON l.LId = v.LId
 ORDER BY l.LId, l.LOCNAME;

 --4
 SELECT LId, LOCNAME
 FROM location
 WHERE LOCNAME LIKE 'CH%'
 ORDER BY LOCNAME;

 --5
 SELECT COUNT(*) AS TOTALHOSTS FROM HOST

 --6
 SELECT COUNT(*) AS HL
 FROM HOST
 WHERE LId = 1;

 --7
 SELECT V.*
 FROM visitor V
 WHERE V.HId = 103
 ORDER BY V.vdate DESC;

 --8
 SELECT *
 FROM visitor
 WHERE vdate = '3'

 --9
 SELECT V.*
 FROM visitor V
 ORDER BY V.vdate DESC, V.vname

 --10
 SELECT V.*
 FROM VISITOR V
 WHERE V.HId IS NULL;

 --11
 SELECT V.*
 FROM visitor V
 JOIN HOST H ON V.HId = H.HID
 WHERE H.HNAME = 'PRANAV'
 ORDER BY V.vdate DESC;

 --12
 SELECT V.*
 FROM visitor V
 JOIN HOST H ON V.HId = H.HID
 WHERE H.DEPT = 'Security'
 ORDER BY V.vdate DESC;

 --13
 SELECT COUNT(*) AS VISITORCOUNT
 FROM visitor
 WHERE HId = 105 AND vdate = '4';

 --14
 SELECT COUNT(*) AS VISITORCOUNT
 FROM visitor
 WHERE LId = 9 AND vdate = '7';

 --15
 SELECT v.*
 FROM visitor v
 JOIN (
     SELECT HID, COUNT(*) AS visitor_count
     FROM visitor
     GROUP BY HID
 ) hvc ON v.HID = hvc.HID
 WHERE hvc.visitor_count = (
     SELECT MAX(visitor_count)
     FROM (
         SELECT HID, COUNT(*) AS visitor_count
         FROM visitor
         GROUP BY HID
     ) AS subquery
 )
 ORDER BY v.vdate DESC;

 --16
 SELECT h.*
 FROM HOST h
 JOIN (
     SELECT HID, COUNT(*) AS visitor_count
     FROM visitor
     GROUP BY HID
 ) hvc ON h.HID = hvc.HID
 WHERE hvc.visitor_count = (
     SELECT MIN(visitor_count)
     FROM (
         SELECT HID, COUNT(*) AS visitor_count
         FROM visitor
         GROUP BY HID
     ) AS subquery
 )
 ORDER BY h.HID;

 --17
 SELECT h.*
 FROM host h
 LEFT JOIN visitor v ON h.HID = v.HID
 WHERE v.HID IS NULL
 ORDER BY h.hname;

 --18
 select vdate,count(*) as visitor_Count
 from visitor group by vdate order by vdate

 --19
 select * from visitor where HID=106 and vdate between '2' and '6' order by vdate

 --20
 select *
 from host 
 where dept!= 'Security' 
 order by hname

 --21
 SELECT v.*
 FROM visitor v
 LEFT JOIN mobilenumber m ON v.vid = m.vid
 WHERE m.MId IS NULL
 ORDER BY v.vname;

 



 





