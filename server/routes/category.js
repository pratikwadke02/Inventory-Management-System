import express from 'express';
import {addCategory, getCategories, deleteCategory} from '../controllers/category.js';

const router = express.Router();

router.post('/add_category', addCategory); 
router.get('/get_categories', getCategories);
router.delete('/delete_category/:id', deleteCategory);

export default router;