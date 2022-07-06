import express from 'express';
import {addCategory, getCategories} from '../controllers/category.js';

const router = express.Router();

router.post('/add_category', addCategory); 
router.get('/get_categories', getCategories);

export default router;