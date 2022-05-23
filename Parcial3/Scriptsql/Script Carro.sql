USE [19100166]
GO

/****** Object:  Table [dbo].[CARRO]    Script Date: 23/05/2022 12:38:58 p. m. ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[CARRO](
	[Marca] [nchar](10) NOT NULL,
	[Modelo] [nchar](10) NOT NULL,
	[Motor] [real] NOT NULL,
	[Fabricante] [nchar](10) NOT NULL,
	[Pais] [nchar](10) NOT NULL,
	[Color] [nchar](10) NOT NULL,
	[Placas] [nchar](10) NOT NULL
) ON [PRIMARY]
GO

