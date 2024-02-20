const { Sequelize } = require('sequelize');


const sequelize = new Sequelize({
    dialect: 'mysql', // Specify your database dialect here: 'mysql', 'postgres', 'sqlite', 'mssql'
    host: 'localhost',
    username: 'root',
    password: 'admin',
    database: 'connectiba',
});

// Test the connection
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection ot the database has been established successfully.');
    })
    .catch((error) => {
        console.error('Unable to connect to the database:', error);
    });


module.exports = sequelize;