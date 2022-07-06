import express from 'express';
import {addProduct, getProducts} from '../controllers/product.js';

const router = express.Router();

router.post("/add_product", addProduct);
router.get("/get_products", getProducts);


export default router;