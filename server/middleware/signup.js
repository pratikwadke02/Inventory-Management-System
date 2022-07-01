import joi from "joi";
import passwordComplexity from "joi-password-complexity";
import User from "../models/user.js";



export const signUpValidate = (data) => {
    const schema = joi.object({
        username: joi.string().required().label("Username"),
        email: joi.string().required().label("Email"),
        password: passwordComplexity().required().label("Password"),
        confirmPassword: joi.ref("password")
    });
    return schema.validate(data);
}