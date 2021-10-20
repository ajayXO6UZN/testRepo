const express = require('express');
const app = express();
const errorMiddleware = require('./middleware/error');

app.use(express.json());
console.log('omgggggmid')

//different routes
const userRoutes = require('./routes/userRoute');

app.use('/api',userRoutes);
console.log('errormiddleware')

// Middleware for Errors 
app.use(errorMiddleware);

module.exports = app