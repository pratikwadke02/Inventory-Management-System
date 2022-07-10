import express from 'express';
import {addProduct, getProducts, deleteProduct} from '../controllers/product.js';

const router = express.Router();

router.post("/add_product", addProduct);
router.get("/get_products", getProducts);
router.delete("/delete_product/:id", deleteProduct);


export default router;