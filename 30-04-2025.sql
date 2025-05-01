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

--create table visitor
--(vid bigint not null primary key,
--vname nvarchar(20) not null,
--hostname nvarchar(20) not null,
--vdate datetime,
--hostid bigint not null,
--vlocation bigint not null)



--alter table visitor add constraint
--user_visitor_fkey foreign key(hostid) 
--references UserI(userid)

--INSERT INTO LOCATION VALUES
--(101, 'Chennai'),
--(102, 'Hyderabad'),
--(103, 'Bangalore');


--INSERT INTO UserI VALUES
--(201, 'Alice', 'host', 'alice@example.com', 'pass123', 101),
--(202, 'Bob', 'manager', 'bob@example.com', 'pass456', 102),
--(203, 'Charlie', 'host', 'charlie@example.com', 'pass789', 101),
--(204, 'David', 'host', 'david@example.com', 'pass321', 103),
--(205, 'Eve', 'manager', 'eve@example.com', 'pass654', 102);

--INSERT INTO visitor (vid, vname, hostname, vdate, hostid, vlocation) VALUES
--(1, 'Arun', 'Alice', '2025-05-01 09:00:00', 201, 101),
--(2, 'Neha', 'Bob', '2025-05-05 10:30:00', 202, 102),
--(3, 'Kiran', 'Charlie', '2025-05-01 11:15:00', 203, 101),
--(4, 'Divya', 'David', '2025-05-01 12:45:00', 204, 103),
--(5, 'Raj', 'Eve', '2025-05-07 14:00:00', 205, 102),
--(6, 'Anika', 'Alice', '2025-05-01 15:30:00', 201, 101),
--(7, 'Prakash', 'Bob', '2025-05-11 17:00:00', 202, 102),
--(8, 'Megha', 'Charlie', '2025-05-01 18:15:00', 203, 101),
--(9, 'Surya', 'David', '2025-05-01 19:45:00', 204, 103),
--(10, 'Sneha', 'Eve', '2025-05-09 21:00:00', 205, 102);

--1.List all locations in the system
--SELECT * FROM Location;

--2.	List locations with visitors
--SELECT V.vid, L.LocationName
--FROM Location L
--inner JOIN visitor V ON L.LocationId = V.vlocation;

--3.	List the location names that starts with given string
-- SELECT LocationName
--FROM Location
--WHERE LocationName LIKE 'hyd%';

--4.	Get number of Hosts in the system
--SELECT COUNT(*) AS HostCount
--FROM UserI
--WHERE Userrole = 'host';

--5.	Get number of hosts in a given location id
--SELECT COUNT(*) AS HostCount
--FROM UserI
--WHERE Userrole = 'host' AND userlocation = 103;

--6.	List all visitor names for a given host
--SELECT vname FROM visitor WHERE hostid = 201;

--7.	List all visitor information on a given date
--SELECT * FROM visitor WHERE vdate ='2025-05-01 10:30:00';

--8.	List the visitors sorted based on visiting date, latest date first.
--SELECT * FROM visitor ORDER BY vdate DESC;

--9.	List of visitors with no host assigned.
--SELECT * FROM visitor WHERE hostid IS NULL;

--10.	List of visitors for a given host name
--SELECT * FROM visitor WHERE hostname='Alice'

--12.	Get average number of visitors for a given host id
--SELECT AVG(visitorcount) AS avgvisitors FROM (
--    SELECT COUNT(vid) AS visitorcount
--    FROM visitor
--    WHERE hostid = 201 
--) AS visitor_data;

--13.	Get average visitors for a location on a given date
--SELECT AVG(vid) AS VisitorCount
--FROM visitor
--WHERE vlocation = 101 AND vdate = '2025-05-01';

--14.	List of visitors information who has visited a host with maximum number of visitors
--SELECT * FROM visitor WHERE hostid = (
--SELECT TOP 1 hostid FROM visitor
--WHERE HostId IS NOT NULL GROUP BY hostid
--  ORDER BY COUNT(*) DESC
--);

--15.	List the hosts with minimum number of visitors
--SELECT TOP 1 U.userid, U.username, COUNT(V.vid) AS VisitCount
--FROM UserI U
--LEFT JOIN visitor V ON U.userid = V.hostid
--WHERE U.userrole = 'host'
--GROUP BY U.UserId, U.UserName
--ORDER BY VisitCount ASC;

--16.	List the hosts with no visitors
--SELECT u.userid, u.username, u.userrole 
--FROM UserI u
--LEFT JOIN visitor v ON u.userid = v.hostid
--WHERE v.hostid IS NULL;

--17.	Get the count of visitors and visiting date for all available dates.
--SELECT vdate, COUNT(vid) AS visitor_count
--FROM visitor
--GROUP BY vdate
--ORDER BY vdate ASC;

--18.	Get Visitor details for a given host those are visited between given dates
--SELECT *
--FROM visitor
--WHERE hostid = 201
--AND vdate BETWEEN '2025-05-01' AND '2025-05-10' 
--ORDER BY vdate ASC;

--19.	Get the list of users who are not managers
--SELECT * FROM UserI
--WHERE userrole != 'manager';

--20.	Get list of visitors with out Phone number
--SELECT *
--FROM visitor
--WHERE PhoneNumber IS NULL;