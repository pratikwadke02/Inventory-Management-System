import joi from "joi";


export const logInValidate = (data) => {
    const schema = joi.object(
        {
            email: joi.string().email().required().label("Email"),
            password: joi.string().min(6).max(255).required().label("Password")
        }
    );
    return schema.validate(data);
}