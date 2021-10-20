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

const server = app.listen(process.env.PORT,()=>{
    console.log(`server is running on http://localhost:${process.env.PORT}`);
})

process.on("unhandledRejection",(err)=>{
    console.log(`Error: ${err.message}`);
    console.log(`server is shuting down due to unhandled promise rejection`);
    server.close(()=>{
        process.exit(1);
    })
})

