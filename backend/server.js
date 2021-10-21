const app = require('./app');
const dotenv = require('dotenv');
const databaseConnected = require('./config/database');

//config path
dotenv.config({path:"backend/config/config.env"});

//database connection
databaseConnected();
//handle uncaught error
process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`shuting down the server due to uncaught exception`);
})


