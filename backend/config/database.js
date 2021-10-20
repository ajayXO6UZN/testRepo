const mongoose = require('mongoose');

const databaseConnected = () => {
    mongoose.connect(process.env.DB_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        //useCreateIndex:true
    }).then((data)=> {
        console.log(`MongoDB connected with server: ${data.connection.host}`);
    })
}
module.exports = databaseConnected