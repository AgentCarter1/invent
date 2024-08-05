# Library Management System
This project is a library management system developed using Node.js with Express.js. The project follows the MVC (Model-View-Controller) design and utilizes PostgreSQL as the database. Sequelize is used for database operations, and Postman is used for API testing.

## Features
•⁠  ⁠Book Management: Add, Get Book and list books
•⁠  ⁠User Management: Add, Get User and list members
•⁠  ⁠Borrowing Transactions: Borrow and return books

## Technologies
•⁠  ⁠Server: Node.js, Express.js
•⁠  ⁠Database: PostgreSQL
•⁠  ⁠ORM: Sequelize
•⁠  ⁠Testing: Postman

## Installation
### env File
Create .env file like .env.sample

### Start Database 
⁠ bash
docker run --name postgres-db -e POSTGRES_PASSWORD=db_password -e POSTGRES_USER=db_user -e POSTGRES_DB=db_name -p 5432:5432 -d postgres
 ⁠

### Install packages
⁠ bash
npm install
npm run build

### Start Project
⁠ bash
npm start
 ⁠

## License

[MIT](https://choosealicense.com/licenses/mit/)
