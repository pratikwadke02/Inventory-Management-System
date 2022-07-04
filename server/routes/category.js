import express from 'express';
import {addCategory} from '../controllers/category.js';

const router = express.Router();

router.post('/add_category', addCategory); 

export default router;