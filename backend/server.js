// Express
import express from 'express';
import dotenv from 'dotenv';
import productsRoute from './Routes/Products.js';
import colors from 'colors';
//MongoDB Database Config
import connectDB from './config/db.js';
dotenv.config();
connectDB();
const app = express();

//Routes
//Home Page
app.get('/', (req, res) => {
  res.send('Server Is Running');
});
//Products Page
app.use('/api/products', productsRoute);

//Listening
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port ${PORT}`.cyan.bold
  )
);
