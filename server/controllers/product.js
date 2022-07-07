import Products from '../models/product.js';
import Category from '../models/category.js';

export const addProduct = async(req, res) => {
    try{
        const product = await Products.findOne({name: req.body.name});
        if(product){
            return res.status(409).send({message: "Product with given name already exists"});
        }
        await new Products({ ...req.body }).save().then(async(product) =>  {
            await Category.findOneAndUpdate({name: req.body.category}, {$push: {products: product.id}});
            const category = await Category.findOne({name: req.body.category}).populate('products');
            console.log(category);
            }
        )
        res.status(201).send({ message: "Product created successfully" });
    }catch(error){
        console.log(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
}

export const getProducts = async(req, res) => {
    try{
        const products = await Products.find({});
        res.status(200).send(products);
    }catch(error){
        console.log(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
}