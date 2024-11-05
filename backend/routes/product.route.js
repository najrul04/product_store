import express from "express";
import { createProducts, deleteProducts, getProducts, updateProducts } from "../controller/product.controller.js";

const router = express.Router();


// To get a product

router.get('/', getProducts);

// To create a product

router.post('/', createProducts);

// To update a product

router.put('/:id', updateProducts);

// To delete a product

router.delete('/:id', deleteProducts);


export default router;
