IF OBJECT_ID(N'[__EFMigrationsHistory]') IS NULL
BEGIN
    CREATE TABLE [__EFMigrationsHistory] (
        [MigrationId] nvarchar(150) NOT NULL,
        [ProductVersion] nvarchar(32) NOT NULL,
        CONSTRAINT [PK___EFMigrationsHistory] PRIMARY KEY ([MigrationId])
    );
END;
GO

BEGIN TRANSACTION;
GO

CREATE TABLE [CLIENTE] (
    [ID] uniqueidentifier NOT NULL,
    [NOME] nvarchar(150) NOT NULL,
    [CPF] nvarchar(11) NOT NULL,
    [TELEFONE] nvarchar(max) NOT NULL,
    [EMAIL] nvarchar(max) NOT NULL,
    [DATANASCIMENTO] datetime2 NOT NULL,
    CONSTRAINT [PK_CLIENTE] PRIMARY KEY ([ID])
);
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20230731233923_Initial', N'7.0.9');
GO

COMMIT;
GO

