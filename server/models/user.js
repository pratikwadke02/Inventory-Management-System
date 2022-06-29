import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import joi from "joi";
import passwordComplexity from "joi-password-complexity";

const userSchema = new mongoose.Schema({
    user_id: {type: String},
    username: {type: String, required:true},
    password: {type: String, required:true},
    email: {type: String, required:true},
});

const JWTPRIVATEKEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"

userSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, JWTPRIVATEKEY, {expiresIn: "7d"})
    return token
};

const User = mongoose.model("user", userSchema);

export const validate = (data) => {
    const schema = joi.object({
        username: joi.string().required().label("Username"),
        email: joi.string().required().label("Email"),
        password: passwordComplexity().required().label("Password"),

    });
    return schema.validate(data);
}

export default User;
