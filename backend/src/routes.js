const express = require('express');
const ProductController = require('./controllers/ProductController')


const routes = express.Router();

//Gets
routes.get('/products', ProductController.productGet); //Show All data from Product
routes.get('/products/:id', ProductController.productShow); //Show data from an specific Product 

//Posts
routes.post('/products',ProductController.productCreate); //Create a new Product in database

//Put
routes.put('/products/:id', ProductController.productUpdate); //Update an specific Product data

//Delete
routes.delete('/products/:id', ProductController.productDelete); //Delete all data of an specific Product

module.exports = routes;