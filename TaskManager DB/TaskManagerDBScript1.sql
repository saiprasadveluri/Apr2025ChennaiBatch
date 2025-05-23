USE [master]
GO
/****** Object:  Database [MphTaskManagerDB]    Script Date: 03-05-2025 13:05:45 ******/
CREATE DATABASE [MphTaskManagerDB]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'MphTaskManagerDB', FILENAME = N'D:\Program Files\Microsoft SQL Server\MSSQL13.MSSQLSERVER\MSSQL\DATA\MphTaskManagerDB.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'MphTaskManagerDB_log', FILENAME = N'D:\Program Files\Microsoft SQL Server\MSSQL13.MSSQLSERVER\MSSQL\DATA\MphTaskManagerDB_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
GO
ALTER DATABASE [MphTaskManagerDB] SET COMPATIBILITY_LEVEL = 130
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [MphTaskManagerDB].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [MphTaskManagerDB] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [MphTaskManagerDB] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [MphTaskManagerDB] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [MphTaskManagerDB] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [MphTaskManagerDB] SET ARITHABORT OFF 
GO
ALTER DATABASE [MphTaskManagerDB] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [MphTaskManagerDB] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [MphTaskManagerDB] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [MphTaskManagerDB] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [MphTaskManagerDB] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [MphTaskManagerDB] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [MphTaskManagerDB] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [MphTaskManagerDB] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [MphTaskManagerDB] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [MphTaskManagerDB] SET  DISABLE_BROKER 
GO
ALTER DATABASE [MphTaskManagerDB] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [MphTaskManagerDB] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [MphTaskManagerDB] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [MphTaskManagerDB] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [MphTaskManagerDB] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [MphTaskManagerDB] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [MphTaskManagerDB] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [MphTaskManagerDB] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [MphTaskManagerDB] SET  MULTI_USER 
GO
ALTER DATABASE [MphTaskManagerDB] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [MphTaskManagerDB] SET DB_CHAINING OFF 
GO
ALTER DATABASE [MphTaskManagerDB] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [MphTaskManagerDB] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [MphTaskManagerDB] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [MphTaskManagerDB] SET QUERY_STORE = OFF
GO
USE [MphTaskManagerDB]
GO
ALTER DATABASE SCOPED CONFIGURATION SET LEGACY_CARDINALITY_ESTIMATION = OFF;
GO
ALTER DATABASE SCOPED CONFIGURATION SET MAXDOP = 0;
GO
ALTER DATABASE SCOPED CONFIGURATION SET PARAMETER_SNIFFING = ON;
GO
ALTER DATABASE SCOPED CONFIGURATION SET QUERY_OPTIMIZER_HOTFIXES = OFF;
GO
USE [MphTaskManagerDB]
GO
/****** Object:  Table [dbo].[Comments]    Script Date: 03-05-2025 13:05:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Comments](
	[CommentId] [bigint] IDENTITY(1,1) NOT NULL,
	[ParentTaskId] [bigint] NOT NULL,
	[Title] [nvarchar](200) NOT NULL,
	[TaskDescription] [nvarchar](max) NOT NULL,
	[CommentBy] [bigint] NOT NULL,
	[CommentDate] [date] NOT NULL,
 CONSTRAINT [PK_Comments] PRIMARY KEY CLUSTERED 
(
	[CommentId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[ProjectMember]    Script Date: 03-05-2025 13:05:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[ProjectMember](
	[MemberId] [bigint] IDENTITY(1,1) NOT NULL,
	[ProjId] [bigint] NOT NULL,
	[UserId] [bigint] NOT NULL,
 CONSTRAINT [PK_ProjectMember] PRIMARY KEY CLUSTERED 
(
	[MemberId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
 CONSTRAINT [IX_ProjectMember] UNIQUE NONCLUSTERED 
(
	[ProjId] ASC,
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Projects]    Script Date: 03-05-2025 13:05:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Projects](
	[ProjectId] [bigint] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](50) NOT NULL,
	[Description] [nvarchar](500) NULL,
	[StartDate] [date] NOT NULL,
	[EndDate] [date] NULL,
 CONSTRAINT [PK_Projects] PRIMARY KEY CLUSTERED 
(
	[ProjectId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
 CONSTRAINT [IX_Projects] UNIQUE NONCLUSTERED 
(
	[Title] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Tasks]    Script Date: 03-05-2025 13:05:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Tasks](
	[TaskId] [bigint] IDENTITY(1,1) NOT NULL,
	[TaskTitle] [nvarchar](50) NOT NULL,
	[Description] [nvarchar](500) NOT NULL,
	[AssignedTo] [bigint] NOT NULL,
	[TaskType] [nvarchar](30) NOT NULL,
	[StatDate] [date] NULL,
	[EndDate] [date] NULL,
	[TaskStatus] [bigint] NOT NULL,
	[ProjectId] [bigint] NOT NULL,
 CONSTRAINT [PK_Tasks] PRIMARY KEY CLUSTERED 
(
	[TaskId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[TaskTypeMaster]    Script Date: 03-05-2025 13:05:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[TaskTypeMaster](
	[TaskTypeId] [bigint] NOT NULL,
	[TaskTypeName] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_TaskTypeMaster] PRIMARY KEY CLUSTERED 
(
	[TaskTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
 CONSTRAINT [IX_TaskTypeMaster] UNIQUE NONCLUSTERED 
(
	[TaskTypeName] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserInfos]    Script Date: 03-05-2025 13:05:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserInfos](
	[UserId] [bigint] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
	[Email] [nvarchar](50) NOT NULL,
	[Password] [nvarchar](30) NOT NULL,
	[Role] [bigint] NOT NULL,
	[Phone] [nvarchar](20) NOT NULL,
 CONSTRAINT [PK_UserInfos] PRIMARY KEY CLUSTERED 
(
	[UserId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY],
 CONSTRAINT [IX_UserInfos] UNIQUE NONCLUSTERED 
(
	[Email] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UserRoles]    Script Date: 03-05-2025 13:05:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UserRoles](
	[RoleId] [bigint] NOT NULL,
	[RoleName] [nvarchar](20) NOT NULL,
 CONSTRAINT [PK_UserRoles] PRIMARY KEY CLUSTERED 
(
	[RoleId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
ALTER TABLE [dbo].[Comments]  WITH CHECK ADD  CONSTRAINT [FK_Comments_ProjectMember] FOREIGN KEY([CommentId])
REFERENCES [dbo].[ProjectMember] ([MemberId])
GO
ALTER TABLE [dbo].[Comments] CHECK CONSTRAINT [FK_Comments_ProjectMember]
GO
ALTER TABLE [dbo].[Comments]  WITH CHECK ADD  CONSTRAINT [FK_Comments_Tasks] FOREIGN KEY([CommentId])
REFERENCES [dbo].[Tasks] ([TaskId])
GO
ALTER TABLE [dbo].[Comments] CHECK CONSTRAINT [FK_Comments_Tasks]
GO
ALTER TABLE [dbo].[ProjectMember]  WITH CHECK ADD  CONSTRAINT [FK_ProjectMember_Projects] FOREIGN KEY([ProjId])
REFERENCES [dbo].[Projects] ([ProjectId])
GO
ALTER TABLE [dbo].[ProjectMember] CHECK CONSTRAINT [FK_ProjectMember_Projects]
GO
ALTER TABLE [dbo].[ProjectMember]  WITH CHECK ADD  CONSTRAINT [FK_ProjectMember_UserInfos] FOREIGN KEY([MemberId])
REFERENCES [dbo].[UserInfos] ([UserId])
GO
ALTER TABLE [dbo].[ProjectMember] CHECK CONSTRAINT [FK_ProjectMember_UserInfos]
GO
ALTER TABLE [dbo].[Tasks]  WITH CHECK ADD  CONSTRAINT [FK_Tasks_ProjectMember] FOREIGN KEY([TaskId])
REFERENCES [dbo].[ProjectMember] ([MemberId])
GO
ALTER TABLE [dbo].[Tasks] CHECK CONSTRAINT [FK_Tasks_ProjectMember]
GO
ALTER TABLE [dbo].[Tasks]  WITH CHECK ADD  CONSTRAINT [FK_Tasks_Projects] FOREIGN KEY([ProjectId])
REFERENCES [dbo].[Projects] ([ProjectId])
GO
ALTER TABLE [dbo].[Tasks] CHECK CONSTRAINT [FK_Tasks_Projects]
GO
ALTER TABLE [dbo].[Tasks]  WITH CHECK ADD  CONSTRAINT [FK_Tasks_TaskTypeMaster] FOREIGN KEY([TaskStatus])
REFERENCES [dbo].[TaskTypeMaster] ([TaskTypeId])
GO
ALTER TABLE [dbo].[Tasks] CHECK CONSTRAINT [FK_Tasks_TaskTypeMaster]
GO
ALTER TABLE [dbo].[UserInfos]  WITH CHECK ADD  CONSTRAINT [FK_UserInfos_UserRoles] FOREIGN KEY([Role])
REFERENCES [dbo].[UserRoles] ([RoleId])
GO
ALTER TABLE [dbo].[UserInfos] CHECK CONSTRAINT [FK_UserInfos_UserRoles]
GO
ALTER TABLE [dbo].[Tasks]  WITH CHECK ADD  CONSTRAINT [CK_Tasks] CHECK  (([TaskType]='NEW-FEATURE' OR [TaskType]='BUG'))
GO
ALTER TABLE [dbo].[Tasks] CHECK CONSTRAINT [CK_Tasks]
GO
ALTER TABLE [dbo].[TaskTypeMaster]  WITH CHECK ADD  CONSTRAINT [CK_TaskTypeMaster] CHECK  (([TaskTypeName]='CLOSED' OR [TaskTypeName]='RESOLVED' OR [TaskTypeName]='IN-PROGRESS' OR [TaskTypeName]='OPEN'))
GO
ALTER TABLE [dbo].[TaskTypeMaster] CHECK CONSTRAINT [CK_TaskTypeMaster]
GO
/****** Object:  StoredProcedure [dbo].[AddNewUser]    Script Date: 03-05-2025 13:05:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[AddNewUser]
@Name nvarchar(50),
@Email nvarchar(50),
@Password nvarchar(30),
@Role bigint,
@Phone nvarchar(20)
As
INSERT INTO UserInfos([Name],Email,[Password],[Role],Phone)
VALUES(@Name,@Email,@Password,@Role,@Phone)
GO
/****** Object:  StoredProcedure [dbo].[AddProject]    Script Date: 03-05-2025 13:05:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[AddProject]
@Title	nvarchar(50),
@Description nvarchar(500),
@StartDate Date,
@EndDate Date,
@PM bigint
As
BEGIN
DECLARE @NEW_PROJID BIGINT=0
BEGIN TRANSACTION
	BEGIN TRY
	IF NOT EXISTS(SELECT * FROM UserInfos WHERE UserId=@PM AND Role=4)
		THROW 5001,'USER IS NOT IN PM ROLE',1

		INSERT INTO Projects(Title,[Description],StartDate,EndDate)
		VALUES(@Title,@Description,@StartDate,@EndDate)
			SET @NEW_PROJID=SCOPE_IDENTITY()
			PRINT @NEW_PROJID
		INSERT INTO PROJECTMEMBER(ProjId,UserId)
		VALUES(@NEW_PROJID,@PM)

		COMMIT TRANSACTION
	END TRY
	BEGIN CATCH
		ROLLBACK TRANSACTION
	END CATCH
END
GO
/****** Object:  StoredProcedure [dbo].[ADDPROJECTMEMBER]    Script Date: 03-05-2025 13:05:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO

CREATE PROC [dbo].[ADDPROJECTMEMBER]
@PROJID BIGINT,
@USERID BIGINT
AS
BEGIN
IF NOT EXISTS(SELECT * FROM USERINFOS WHERE UserId=@USERID AND [ROLE]=4)
INSERT INTO PROJECTMEMBER(PROJID,USERID)
VALUES(@PROJID,@USERID)
END
GO
/****** Object:  StoredProcedure [dbo].[ADDTASK]    Script Date: 03-05-2025 13:05:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[ADDTASK]
@TITLE NVARCHAR(50),
@DESCRIPTION NVARCHAR(500),
@ASSIGNEDTO BIGINT,
@TASKTYPE NVARCHAR(20),
@STARTDATE DATE,
@ENDDATE DATE,
@TASKSTATUS BIGINT,
@PROJID BIGINT
AS
BEGIN
INSERT INTO TASKS([TaskTitle],
[Description],
[AssignedTo],
[TaskType],
[StatDate],
[EndDate],
[TaskStatus],
[ProjectId]
) VALUES(@TITLE,@DESCRIPTION,@ASSIGNEDTO,@TASKTYPE,
@STARTDATE,@ENDDATE,@TASKSTATUS,@PROJID)

END
GO
/****** Object:  StoredProcedure [dbo].[DeleteUser]    Script Date: 03-05-2025 13:05:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[DeleteUser]
@UserId bigint
AS
DELETE [dbo].[UserInfos]
WHERE UserId = @UserId
GO
/****** Object:  StoredProcedure [dbo].[GetAllRoles]    Script Date: 03-05-2025 13:05:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[GetAllRoles]
AS
BEGIN
SELECT * FROM UserRoles
END
GO
/****** Object:  StoredProcedure [dbo].[GetAllUsers]    Script Date: 03-05-2025 13:05:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[GetAllUsers]
AS
SELECT  U.*, R.RoleName UseRoleName FROM UserInfos U
JOIN UserRoles R ON U.[Role]=R.RoleId
GO
/****** Object:  StoredProcedure [dbo].[GETPMPROJECTS]    Script Date: 03-05-2025 13:05:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[GETPMPROJECTS]
@USERID BIGINT
AS
BEGIN
SELECT * FROM Projects P
JOIN ProjectMember PMEM ON P.ProjectId=PMEM.ProjId
WHERE PMEM.UserId=@USERID
END

GO
/****** Object:  StoredProcedure [dbo].[GetPMs]    Script Date: 03-05-2025 13:05:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[GetPMs]
As
SELECT * FROM UserInfos
WHERE [Role]=4
GO
/****** Object:  StoredProcedure [dbo].[GETPROJECTMEMBERS]    Script Date: 03-05-2025 13:05:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[GETPROJECTMEMBERS]
@PROJID BIGINT
AS
BEGIN
SELECT UI.*,UR.* FROM ProjectMember PMEM
JOIN Projects PR ON PMEM.ProjId=PR.ProjectId
JOIN UserInfos UI ON PMEM.UserId=UI.UserId
JOIN USERROLES UR ON UI.Role=UR.RoleId
WHERE PMEM.PROJID=@PROJID
END
GO
/****** Object:  StoredProcedure [dbo].[GetUserByEmail]    Script Date: 03-05-2025 13:05:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[GetUserByEmail]
@Email nvarchar(50)
AS
SELECT * from UserInfos
WHERE Email=@Email
GO
/****** Object:  StoredProcedure [dbo].[GETUSERSBYROLE]    Script Date: 03-05-2025 13:05:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROCEDURE [dbo].[GETUSERSBYROLE]
@ROLENAME NVARCHAR(20)
AS
BEGIN
SELECT * FROM UserInfos U
JOIN UserRoles UR ON U.[Role]=UR.RoleId
WHERE UR.RoleName=@ROLENAME
END
GO
/****** Object:  StoredProcedure [dbo].[REMOVEPROJECTMEMBER]    Script Date: 03-05-2025 13:05:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[REMOVEPROJECTMEMBER]
@MEMBERID BIGINT
AS
BEGIN 
IF NOT EXISTS(
SELECT * FROM ProjectMember PMEM 
JOIN USERINFOS UI ON PMEM.USERID =UI.UserId
WHERE UI.ROLE=4 AND PMEM.MemberId=@MEMBERID

) -- MEMBER IS A PM
	DELETE ProjectMember WHERE MemberId=@MEMBERID
ELSE
	THROW 50002,'MEMBER IS IN PM ROLE',1
END
GO
/****** Object:  StoredProcedure [dbo].[ValidateUser]    Script Date: 03-05-2025 13:05:46 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE PROC [dbo].[ValidateUser]
@Email nvarchar(50),
@Password nvarchar(30)
AS
SELECT * from UserInfos
WHERE Email=@Email AND [Password]=@Password
GO
USE [master]
GO
ALTER DATABASE [MphTaskManagerDB] SET  READ_WRITE 
GO
