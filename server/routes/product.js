import express from 'express';
import {addProduct} from '../controllers/product.js';

const router = express.Router();

router.post("/add_product", addProduct);


export default router;