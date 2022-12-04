CREATE TABLE [dbo].[User] (
    [id]            INT           NOT NULL,
    [firebaseId]    VARCHAR (28)  NOT NULL,
    [userName]      VARCHAR (50)  NOT NULL,
    [profilePicURL] VARCHAR (MAX) NOT NULL,
    CONSTRAINT [UQ_FirebaseId] UNIQUE NONCLUSTERED ([firebaseId] ASC)
);

