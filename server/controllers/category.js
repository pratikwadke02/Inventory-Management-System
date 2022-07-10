import Product from "../models/product.js";
import Category from '../models/category.js';

export const addCategory = async(req, res) => {
    try{
        const category = await Category.findOne({name: req.body.name});
        if(category){
            return res.status(409).send({message: "Category with given name already exists"});
        }
        await new Category ({ ...req.body }).save();
        res.status(201).send({ message: "Category created successfully" });
    }catch(error){
        console.log(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
}

export const getCategories = async(req, res) => {
    try{
        const data = await Category.find({});
        // console.log(categories);
        res.status(200).send({categories: data});
    }catch(error){
        console.log(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
}

export const deleteCategory = async(req, res) => {
    try{
        const {id} = req.params;
        const category = await Category.findById(id);
        if(!category){
            return res.status(404).send({message: "Category not found"});
        }
        const listOfProducts = category.products;
        console.log(listOfProducts);
        for(let i = 0; i < listOfProducts.length; i++){
            await Product.findByIdAndRemove(listOfProducts[i]);
        }
        await Category.findByIdAndRemove(id);
        res.status(200).send({ message: "Category deleted successfully" });
    }catch(error){
        console.log(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
}
