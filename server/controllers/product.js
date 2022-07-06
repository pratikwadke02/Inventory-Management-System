import Products from '../models/product.js';

export const addProduct = async(req, res) => {
    try{
        const product = await Products.findOne({name: req.body.name});
        if(product){
            return res.status(409).send({message: "Product with given name already exists"});
        }
        await new Products({ ...req.body }).save();
        res.status(201).send({ message: "Product created successfully" });
    }catch(error){
        console.log(error);
        res.status(500).send({ message: "Internal Server Error" });
    }
}