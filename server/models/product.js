import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    product_id: {type: String},
    name: {type: String, required: true},
    price: {type: Number, default: 0},
    stock: {type: Number, default: 0},
});

export default mongoose.model("Product", productSchema);