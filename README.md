
# you can use the mysql-phpmyadmin.yml to create with docker-compose a container with the database

docker-compose -f mysql-phpmyadmin.yml up

# Steps to create this project from scratch

```javascript
touch index.js
npm init -y
npm i -S sequelize sequelize-cli mysql2
npx sequelize init

// SEQUELIZE CLI

//create database
npx sequelize db:create

//create model
npx sequelize model:generate --name User --attributes firstName:string,lastName:string

//run migration
npx sequelize db:migrate

//undo run migration
npx sequelize db:migrate:undo:all

//create Seed
npx sequelize seed:generate --name users

// run Seeds 
npx sequelize db:seed:all