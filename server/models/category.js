import mongoose from "mongoose";

const categorySchema = mongoose.Schema({
    category_id:{type: String},
    name: {type:String},
    products:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product',
    }
});

export default mongoose.model("Category", categorySchema); 