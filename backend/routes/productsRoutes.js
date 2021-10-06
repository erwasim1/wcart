const express=require('express');
const {getProducts,getProduct}=require('../controller/productsController');
const router =express.Router();




//Get route for all products:-
router.route('/products').get(getProducts)

//Get route for single product:-
router.route('/products/:id').get(getProduct)

module.exports =router;