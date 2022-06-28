import mongoose, { mongo } from "mongoose";

const categorySchema = mongoose.Schema({
    category_id:{type: String},
    name: {type:String},
    product_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
        required: true,
    }

});

export default mongoose.model("Category", categorySchema); 