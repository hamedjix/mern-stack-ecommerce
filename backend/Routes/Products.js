//Express
import express from 'express';
//Data
import products from '../data/products.js';
//Router
const router = express.Router();

//Routes
//Get the Products
router.get('/', (req, res) => res.send(products));
//Get Single Product
router.get('/:id', (req, res) =>
  res.send(products.find((p) => p._id === req.params.id))
);

//Export
export default router;
