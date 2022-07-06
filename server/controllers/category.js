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
