CREATE TABLE [dbo].[Recipe] (
    [id]          INT           NOT NULL,
    [userId]      INT           NOT NULL,
    [mealName]    VARCHAR (50)  NOT NULL,
    [description] VARCHAR (255) NOT NULL,
    [ingredients] VARCHAR (MAX) NOT NULL,
    [directions]  VARCHAR (MAX) NOT NULL,
    [imageURL]    VARCHAR (MAX) NOT NULL
);

