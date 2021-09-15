# TON Counter API
A react-node-express SPA to count the accesses to TON site also allowing for a user to create an account

## Install : 

Move to {root_folder}/src and run 
- npm install 
Move to {root_folder}/api and run 
- npm install 

## Usage
Dev usage: 
- npm run dev 
Prod usage: 
- npm run build 

### Database Informations: 

- Using Mysql 
- Installation will be done in ubuntu by now planned to move for a Docker automated install soon 
```
sudo apt update
sudo apt install mysql-server
sudo mysql_secure_installation

- set rootpwd 33..Lu@@
- remove anonimous user
- remove remote login
- remove test DB
- reload privileges
As root
- mysql -h localhost -u root
Create a user 
CREATE USER 'luiz'@'localhost' IDENTIFIED BY '33..aaLu@@';
CREATE DATABASE Ton;
GRANT ALL ON Ton.* TO 'luiz'@'localhost';
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
Creating the key : 
https://api.countapi.xyz/create?namespace=ton.com&value=42


- env configs for dev and prod 
- Helmet for security 
- Mysql2 Driver
- cors
- debug
- http-errors
- morgan 
- multer
- nodemon 






