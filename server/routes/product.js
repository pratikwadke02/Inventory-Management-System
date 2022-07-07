import express from 'express';
import {addProduct, getProducts, deleteProduct} from '../controllers/product.js';

const router = express.Router();

router.post("/add_product", addProduct);
router.get("/get_products", getProducts);
router.post("/delete_product", deleteProduct);


export default router;