USE Ton;

CREATE TABLE Users(
	IdUser INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	UserName NVARCHAR(255) UNIQUE  NOT NULL,
	Password NVARCHAR(255) NOT NULL,
	Email NVARCHAR(100) UNIQUE NOT NULL,
	Cpf NVARCHAR(14) UNIQUE NOT NULL
);
