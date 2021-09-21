# TON Counter API - Luiz Rosalba 

A react-node-express SPA to count the accesses to TON site also allowing for a user to create an account. 

Project was planned and develop using github Projects Tools: 

https://github.com/luizrosalba/ton-counter-api/projects/1

Documentations concerning ton-count-api: 

https://documenter.getpostman.com/view/11935242/UUxui9yW#dbd30e3b-e53c-4fae-8fcb-91da8aa5936f

## Requirements: 

1) Node
2) Mysql server 
3) Create user tables using mysql query at: 
- Db/queries/create-user-table.sql

## Install : 

Installing the project: 

Move to {root_folder}/src and run 

- npm install 

Move to {root_folder}/api and run 

- npm install 

Create your environment variables to run mysql server 

Move to {root_folder}/api/.env (sugestion)

```
REACT_APP_host=
REACT_APP_user=
REACT_APP_password=
REACT_APP_database= Ton
REACT_APP_waitForConnections= true
REACT_APP_port= 3306
REACT_APP_connectionLimit= 5
REACT_APP_debug= true
```

## Usage

Dev usage: 

- npm run dev 

Prod usage: 
- npm run build 

## Aditional Database Install Informations: 

- Using Mysql 

- Installation will be done in ubuntu by now planned to move for Docker 

```
sudo apt update
sudo apt install mysql-server
sudo mysql_secure_installation

- set rootpwd <yourpasswd>
- remove anonimous user
- remove remote login
- remove test DB
- reload privileges
As root
- mysql -h localhost -u root
Create a user 
CREATE USER 'user'@'localhost' IDENTIFIED BY '<yourpasswd>';
CREATE DATABASE Ton;
GRANT ALL ON Ton.* TO 'user'@'localhost';
``` 

## More Info about the project Packages: 

### Concurrently 
Run back and front end with a single command

```
(Optional) install globally 
- npm install -g concurrently

Install dev Dependency: 
- concurrently --save-dev
```
### Countapi-js 
The api counter
(https://www.npmjs.com/package/countapi-js)





