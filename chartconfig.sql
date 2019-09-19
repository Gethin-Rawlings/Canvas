USE [Sunrise]
GO

/****** Object:  Table [dbo].[chartConfig]    Script Date: 19/09/2019 11:43:50 ******/
DROP TABLE [dbo].[chartConfig]
GO

/****** Object:  Table [dbo].[chartConfig]    Script Date: 19/09/2019 11:43:50 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[chartConfig](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[chartName] [nvarchar](250) NULL,
	[width] [nvarchar](50) NULL,
	[height] [nvarchar](50) NULL,
	[x] [int] NULL,
	[y] [int] NULL,
	[lastModified] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]
GO
USE [Sunrise]
GO

/****** Object:  StoredProcedure [dbo].[getChartConfig]    Script Date: 19/09/2019 11:44:00 ******/
DROP PROCEDURE [dbo].[getChartConfig]
GO

/****** Object:  StoredProcedure [dbo].[getChartConfig]    Script Date: 19/09/2019 11:44:00 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE procedure [dbo].[getChartConfig] 
@chart nvarchar(250)
as
begin
insert into logging (request,requestTime) values(@chart,getdate())
select cast(width as int) as width,cast(height as int) as height,x,y  from chartConfig where chartName = @chart

end
GO
USE [Sunrise]
GO

/****** Object:  StoredProcedure [dbo].[postChartConfig]    Script Date: 19/09/2019 11:44:16 ******/
DROP PROCEDURE [dbo].[postChartConfig]
GO

/****** Object:  StoredProcedure [dbo].[postChartConfig]    Script Date: 19/09/2019 11:44:16 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE procedure [dbo].[postChartConfig] 
@chart nvarchar(250),
@width nvarchar(50),
@height nvarchar(50),
@x int,
@y int

as
begin

if @chart is not null
begin
if not exists (select chartname from chartConfig where chartName = @chart) 
begin
	insert into chartConfig (chartName, width,height,x,y,lastModified) values (@chart, @width, @height,@x, @y, getdate())
end
if exists (select chartname from chartConfig where chartName = @chart) 
begin
	update chartConfig set width = @width,height= @height,x=@x,y=@y,lastModified=getdate() where chartName = @chart
end
end
end
GO




