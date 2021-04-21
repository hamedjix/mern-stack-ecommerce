// Express
import express from 'express';
import dotenv from 'dotenv';
import productsRoute from './Routes/Products.js';
dotenv.config();
const app = express();

//Routes
//Home Page
app.get('/', (req, res) => {
  res.send('This is HomePage');
});
//Products Page
app.use('/api/products', productsRoute);

//Listening
const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
